import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import scss from ",/page.module.scss";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SED',
  description: 'Sistema de Eleição de Diretores',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>    
        {children}        
        </body>
    </html>
  )
}
