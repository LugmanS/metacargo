import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Metacargo",
  description: "Tailored tools and insights transforming your shipping journey",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="max-w-5xl mx-auto h-full min-h-[calc(100vh-4rem)] pt-20">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
