import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Lucca Paradeda',
  description: 'Site pessoal de Lucca Paradeda',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className='min-h-screen bg-background font-sans antialiased grainy __variable_0ec1f4 __variable_deb966'>{children}</body>
    </html>
  )
}
