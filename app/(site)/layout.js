import './globals.css'
import { Alegreya_Sans } from 'next/font/google'
import Sidebar from './pages/content'

const Alegreya = Alegreya_Sans({
  subsets: ['latin'],
  weight: ['500']
})

export const metadata = {
  title: 'HBO Max',
  description: 'Central Hub for More Than Production Content',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={Alegreya.className}>
        <div className="grid place-items-center bg-black/40 p">
          <Sidebar />
        </div>
        {children}
      </body>
    </html>
  )
}
