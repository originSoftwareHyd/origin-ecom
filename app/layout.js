import './globals.css'
import './ui-polish.css'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
export const metadata={title:'StandardTouch | AI-First. Enterprise-Grade. Results-Driven.',description:'AI-first strategy, intelligent automation, websites, apps, ERP, and digital growth solutions for ambitious organizations in Saudi Arabia and beyond.'}
export default function RootLayout({children}){return <html lang="en"><body><Header/>{children}<Footer/></body></html>}
