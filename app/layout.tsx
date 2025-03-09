import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MetaMorph | Hackathon",
  description: "Join the ultimate hackathon experience to transform ideas into reality",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
      <Navigation/>
        {children}
        </body>
    </html>
  )
}




