<?php
// Contact endpoint for the static Hostinger build (npm run build:static copies this to dist/api/contact.php and
// .htaccess maps /api/contact to it). Mirrors app/api/contact/route.js. Each enquiry is
//   1. emailed to info@originsoftwares.com (visitor's address as Reply-To), and
//   2. saved as a lead in the originsoftwares.com dashboard (/admin/leads) via its /api/leads/inbound endpoint.
// The dashboard URL and token come from contact-config.php, which the build writes from DASHBOARD_LEADS_URL and
// DASHBOARD_LEADS_TOKEN in .env.local. Either step succeeding counts as delivered, so no enquiry is lost.

const RECIPIENT = 'info@originsoftwares.com';

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');

function respond($status, $body) {
  http_response_code($status);
  echo json_encode($body);
  exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') respond(405, ['message' => 'Method not allowed.']);

$body = json_decode(file_get_contents('php://input'), true);
if (!is_array($body)) respond(400, ['message' => 'Invalid request.']);

$limits = ['name' => 120, 'company' => 160, 'email' => 200, 'phone' => 40, 'service' => 120, 'message' => 5000, 'page' => 300, 'heard' => 120];
// First-touch attribution captured client-side (lib/analytics.js), so each lead shows where it came from.
$attributionKeys = ['landing_page', 'referrer', 'ai_referrer', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid'];

$data = [];
foreach ($limits as $key => $max) $data[$key] = mb_substr(trim((string)($body[$key] ?? '')), 0, $max);
$attribution = [];
foreach ($attributionKeys as $key) $attribution[$key] = mb_substr(trim((string)($body[$key] ?? '')), 0, 200);

if (!empty($body['website'])) respond(200, ['success' => true]); // honeypot: bots fill the hidden field
if ($data['name'] === '' || $data['email'] === '' || $data['message'] === '') respond(400, ['message' => 'Name, email and project details are required.']);
if (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) respond(400, ['message' => 'Please enter a valid email address.']);

function sendEmail($data, $attribution) {
  // Header values must be single-line, or a visitor could inject extra headers.
  $oneLine = fn($value) => trim(preg_replace('/[\r\n]+/', ' ', $value));
  $lines = [
    'Name: ' . $data['name'],
    'Company: ' . ($data['company'] ?: '-'),
    'Email: ' . $data['email'],
    'Phone / WhatsApp: ' . ($data['phone'] ?: '-'),
    'Service: ' . ($data['service'] ?: '-'),
    'Heard about us: ' . ($data['heard'] ?: '-'),
    'Page: ' . ($data['page'] ?: '-'),
    '',
    $data['message'],
    '',
    '-- Attribution --',
  ];
  foreach ($attribution as $key => $value) if ($value !== '') $lines[] = "$key: $value";
  $lines[] = 'Received: ' . gmdate('Y-m-d H:i') . ' UTC';

  $subject = $oneLine('Website enquiry: ' . ($data['service'] ?: 'General') . ($data['company'] ? " ({$data['company']})" : '') . " from {$data['name']}");
  // Send from an address on this site's own domain so SPF/DKIM pass; Hostinger rejects or spam-folders other senders.
  $domain = preg_replace('/^www\./i', '', preg_replace('/:\d+$/', '', $_SERVER['HTTP_HOST'] ?? 'localhost'));
  $headers = implode("\r\n", [
    'From: Origin Ecommerce Website <no-reply@' . $domain . '>',
    'Reply-To: ' . $oneLine($data['name']) . ' <' . $data['email'] . '>',
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: 8bit',
  ]);
  return mail(RECIPIENT, '=?UTF-8?B?' . base64_encode($subject) . '?=', implode("\n", $lines), $headers, '-f no-reply@' . $domain);
}

function saveToDashboard($data, $attribution) {
  $config = is_file(__DIR__ . '/contact-config.php') ? require __DIR__ . '/contact-config.php' : [];
  if (empty($config['dashboard_url']) || empty($config['dashboard_token']) || !function_exists('curl_init')) return false;

  $orNull = fn($value) => $value === '' ? null : $value;
  $metadata = array_filter([
    'Heard about us' => $data['heard'],
    'AI assistant referrer' => $attribution['ai_referrer'],
    'Google Ads click (gclid)' => $attribution['gclid'],
  ], fn($value) => $value !== '');

  $payload = [
    'source' => 'originecommerce',
    'notify' => false, // this script already emails the enquiry
    'name' => $data['name'],
    'email' => $data['email'],
    'company' => $orNull($data['company']),
    'service' => $orNull($data['service']),
    'message' => $data['message'],
    'phone' => $orNull($data['phone']),
    'formType' => 'contact',
    'pageUrl' => $orNull($data['page']),
    'landingPage' => $orNull($attribution['landing_page']),
    'referrer' => $orNull($attribution['referrer']),
    'utmSource' => $orNull($attribution['utm_source']),
    'utmMedium' => $orNull($attribution['utm_medium']),
    'utmCampaign' => $orNull($attribution['utm_campaign']),
    'utmTerm' => $orNull($attribution['utm_term']),
    'utmContent' => $orNull($attribution['utm_content']),
  ];
  if ($metadata) $payload['metadata'] = $metadata;

  $curl = curl_init($config['dashboard_url']);
  curl_setopt_array($curl, [
    CURLOPT_POST => true,
    CURLOPT_POSTFIELDS => json_encode($payload),
    CURLOPT_HTTPHEADER => ['Content-Type: application/json', 'Authorization: Bearer ' . $config['dashboard_token']],
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_CONNECTTIMEOUT => 5,
    CURLOPT_TIMEOUT => 10,
  ]);
  $response = curl_exec($curl);
  $status = curl_getinfo($curl, CURLINFO_RESPONSE_CODE);
  curl_close($curl);
  if ($status !== 200) error_log("[contact] dashboard lead save failed: HTTP $status " . substr((string)$response, 0, 300));
  return $status === 200;
}

$emailed = sendEmail($data, $attribution);
$saved = saveToDashboard($data, $attribution);
if (!$emailed && !$saved) respond(502, ['message' => 'We could not send your enquiry. Please email or WhatsApp us directly.']);
respond(200, ['success' => true, 'message' => 'Thank you. Your enquiry has been received.']);
