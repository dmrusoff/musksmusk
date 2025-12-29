import { Cinzel, Lato } from 'next/font/google'
import './globals.css'

const cinzel = Cinzel({ subsets: ['latin'], variable: '--font-heading' })
const lato = Lato({ subsets: ['latin'], weight: ['300', '400', '700'], variable: '--font-body' })

export const metadata = {
  title: 'MusksMusk | Essence of Exploration',
  description: 'Fragrances for the architects of tomorrow.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${cinzel.variable} ${lato.variable}`}>{children}</body>
    </html>
  )
}
