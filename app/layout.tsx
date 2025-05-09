import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Link from "next/link"
import {
  ChevronDown,
  Globe,
  FileText,
  MessageCircle,
  HelpCircle,
  User,
  Heart,
  Users,
  Briefcase,
  Dna,
  Network,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Footer from "@/components/layout/Footer"
import Image from "next/image"
import { Suspense } from "react"
import MainHeader from "@/components/layout/MainHeader"
import AIChatBotFloatingButton from "@/components/layout/AIChatBotFloatingButton"
import FloatingCookiesCard from "@/components/layout/FloatingCookiesCard"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "LIADTECH - Votre succès en ligne commence ici",
  description: "Transformez vos idées en succès digital avec LIADTECH",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.className} overflow-x-hidden`}>
        <MainHeader />

        <Suspense>
          {children}
        </Suspense>

        <Footer />
        <AIChatBotFloatingButton />
        <FloatingCookiesCard />
      </body>
    </html>
  )
}