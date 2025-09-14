import type { Metadata } from 'next'
import './globals.css'
import { Inter, Space_Grotesk } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const grotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-grotesk' })

export const metadata: Metadata = {
  title: 'ClipMagi — AI Autoclips • On-chain Rewards',
  description: 'Turn streams into viral shorts. Tips & rewards on-chain with $MAGI.',
  openGraph: { title:'ClipMagi', description:'AI Autoclips • On-chain Rewards', images:['/clipmagi_banner_v3.png'] },
  icons: { icon: '/clipmagi_icon.png' }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${grotesk.variable}`}>
      <body>{children}</body>
    </html>
  )
}
