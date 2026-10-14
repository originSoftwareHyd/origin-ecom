export async function POST(request) {
  try {
    const body = await request.json()
    const { name, email, message } = body || {}
    if (!name || !email || !message) return Response.json({ message: 'Name, email and message are required.' }, { status: 400 })
    return Response.json({ success: true, message: 'Thank you. Your enquiry has been received.' })
  } catch {
    return Response.json({ message: 'Invalid request.' }, { status: 400 })
  }
}
