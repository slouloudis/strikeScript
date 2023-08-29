import './globals.css'
import type { Metadata } from 'next'
import { ClerkProvider } from '@clerk/nextjs'

import { Iceland, Lexend_Deca, Six_Caps, Condiment } from 'next/font/google';

const iceland = Iceland({
    weight: ['400'], 
    variable: '--font-iceland',
    subsets: ['latin'],
  });

const lexendDeca = Lexend_Deca({ 
  subsets: ['latin'],
  variable: '--font-lexendDeca'
});

const six_caps = Six_Caps({
  weight: ['400'],
  variable: '--font-six_caps', 
  subsets: ['latin'],
});

const condiment = Condiment({
    weight: ['400'],
    variable: '--font-condiment',
    subsets: ['latin'] 
  });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // <ClerkProvider>
      <html lang="en" className={`${iceland.variable} ${lexendDeca.variable} ${six_caps.variable} ${condiment.variable}`}>
        <body className='h-screen'>{children}</body>
      </html>
    // </ClerkProvider>
  )
}

//overscroll-y-none next to h-screen