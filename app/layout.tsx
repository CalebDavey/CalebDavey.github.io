import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Caleb Davey',
  description: 'Created by me',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
