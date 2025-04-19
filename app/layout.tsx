import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PasswordProtection from "@/components/password-protection"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Esther & Noel - Wedding Website",
  description: "Join us in celebrating our special day"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
          storageKey="wedding-theme"
        >
          <PasswordProtection>
            <div className="min-h-screen flex flex-col">
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </PasswordProtection>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'