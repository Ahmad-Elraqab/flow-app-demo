import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar'
import Image from 'next/image'
import Logos from '@/components/logos'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Flow App',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className={inter.className}>

        {/* <div
          className="pt-9 mx-auto z-10 flex flex-col items-center"
          style={{
            maxWidth: "1980px",
            // height: "1121px",
            // overflow: 'visible',
          }}
        > */}

          {/* <Navbar /> */}
          {children}
          {/* <Footer /> */}

        {/* </div> */}

      </body>
    </html>
  )
}
