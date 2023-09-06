import './globals.css'
import type { Metadata } from 'next'
import {Providers} from './providers';
import { Inter } from 'next/font/google'
import Navbar from './_components/Navbar';
import Footer from './_components/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Blog ACME',
  description: 'Creating the content of the future',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='dark'>
      <body className={inter.className}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
