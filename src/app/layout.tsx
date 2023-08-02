import { Metadata } from 'next'

import '@unocss/reset/tailwind.css'
import '@/shared/styles/app.css'
import '@/shared/styles/main.css'

import { Space_Grotesk } from 'next/font/google'
import Navbar from '@/components/common/navbar'
import Footer from '@/components/common/footer'

const spaceGrotesk = Space_Grotesk({
  weight: '400',
  subsets: ['latin'],
  style: 'normal'
})

export const metadata: Metadata = {
  title: 'Positivus',
  description: 'Positivus'
}

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/static/icons/logo.svg" type="image/x-icon" />
      </head>
      <body className={spaceGrotesk.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
