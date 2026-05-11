import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'SentimentScopeAI - Extract Actionable Insights from Customer Reviews',
  description: 'Local NLP pipeline that processes thousands of reviews to extract and frequency-rank operational failures hurting your bottom line. No cloud APIs required.',
  generator: 'v0.app',
  icons: {
      icon: [
        {
          url: '/icon.png?v=2',
          type: 'image/png',
        },
      ],
    },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
