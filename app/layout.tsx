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
  Network,
} from "lucide-react"
import { Button } from "@/components/ui/button"

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
      <body className={inter.className}>
        <header className="border-b py-4">
          <div className="container mx-auto flex justify-between items-center px-4">
          <Link href="/" className="flex items-center">
  <img 
    src="/images/Logo Liadtech V2 3.svg" 
    alt="LIADTECH Logo" 
    style={{
      height: "88px",
      width: "206px"
    }}
    className="h-10 mr-2" 
  />
</Link>

            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-[#1f1d2c] hover:text-[#673de6] font-medium">
                Accueil
              </Link>
              <div className="relative group">
                <button className="flex items-center text-[#1f1d2c] hover:text-[#673de6] font-medium">
                  Services <ChevronDown className="h-4 w-4 ml-1" />
                </button>
                {/* <div className="absolute left-0 mt-2 w-screen bg-white shadow-xl rounded-md p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 transform -translate-x-1/4">
                  <div className="text-[#1f1d2c] text-center mb-6 text-lg font-medium">
                    De l'idée à l'automatisation, tout est imaginé pour vous
                  </div>
                  <div className="grid grid-cols-3 gap-8">
                    // Web & App Section
                    <div>
                      <h3 className="text-lg font-bold text-gray-600 mb-4">Web & App</h3>
                      <div className="space-y-6">
                        <div className="flex items-start">
                          <div className="flex-shrink-0 h-10 w-10 bg-[#673de6] rounded-full flex items-center justify-center mr-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-white"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                              />
                            </svg>
                          </div>
                          <div>
                            <Link href="/creation-sites-web" className="group">
                              <h4 className="font-medium group-hover:text-[#673de6] transition-colors">
                                Création de sites web
                              </h4>
                              <p className="text-sm text-gray-600">
                                Sites vitrine ou e-commerce conçus pour booster vos ventes et valoriser votre image
                              </p>
                            </Link>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="flex-shrink-0 h-10 w-10 bg-[#673de6] rounded-full flex items-center justify-center mr-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-white"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                              />
                            </svg>
                          </div>
                          <div>
                            <Link href="/applications-mobiles" className="group">
                              <h4 className="font-medium group-hover:text-[#673de6] transition-colors">
                                Applications mobiles
                              </h4>
                              <p className="text-sm text-gray-600">
                                Apps iOS & Android intuitives pour toucher vos clients où qu'ils soient
                              </p>
                            </Link>
                          </div>
                        </div>
                      </div>

                      <h3 className="text-lg font-bold text-gray-600 mt-8 mb-4">Web & Marketing</h3>
                      <div className="space-y-6">
                        <div className="flex items-start">
                          <div className="flex-shrink-0 h-10 w-10 bg-[#673de6] rounded-full flex items-center justify-center mr-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-white"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                              />
                            </svg>
                          </div>
                          <div>
                            <Link href="/marketing-digital-publicite" className="group">
                              <h4 className="font-medium group-hover:text-[#673de6] transition-colors">
                                Marketing digital & publicité
                              </h4>
                              <p className="text-sm text-gray-600">
                                Générez plus de leads avec nos stratégies SEO, SEA & pub ciblée
                              </p>
                            </Link>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="flex-shrink-0 h-10 w-10 bg-[#673de6] rounded-full flex items-center justify-center mr-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-white"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                              />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-medium">Référencement Web /SEO</h4>
                            <p className="text-sm text-gray-600">
                              Optimisez votre visibilité sur Google et attirez un trafic qualifié
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="flex-shrink-0 h-10 w-10 bg-[#673de6] rounded-full flex items-center justify-center mr-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-white"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                              />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-medium">Blogging & contenus</h4>
                            <p className="text-sm text-gray-600">
                              Attirez votre audience avec des articles stratégiques
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    // Studio Créatif
                    <div>
                      <h3 className="text-lg font-bold text-gray-600 mb-4">Studio Créatif</h3>
                      <div className="space-y-6">
                        <div className="flex items-start">
                          <div className="flex-shrink-0 h-10 w-10 bg-[#673de6] rounded-full flex items-center justify-center mr-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-white"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                              />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-medium">Vidéos explicatives 2D/3D</h4>
                            <p className="text-sm text-gray-600">Expliquez vos services avec clarté et impact</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="flex-shrink-0 h-10 w-10 bg-[#673de6] rounded-full flex items-center justify-center mr-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-white"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                              />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-medium">Création de logo</h4>
                            <p className="text-sm text-gray-600">Apportez du rythme à votre identité visuelle</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="flex-shrink-0 h-10 w-10 bg-[#673de6] rounded-full flex items-center justify-center mr-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-white"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
                              />
                            </svg>
                          </div>
                          <div>
                            <Link href="/animations-narratives" className="group">
                              <h4 className="font-medium group-hover:text-[#673de6] transition-colors">
                                Animations narratives & mini-séries
                              </h4>
                              <p className="text-sm text-gray-600">
                                Des histoires engageantes pour réseaux ou communication interne
                              </p>
                            </Link>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="flex-shrink-0 h-10 w-10 bg-[#673de6] rounded-full flex items-center justify-center mr-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-white"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-medium">Design Graphique & Visuels</h4>
                            <p className="text-sm text-gray-600">
                              Créations pour vos réseaux, sites web ou présentations
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="flex-shrink-0 h-10 w-10 bg-[#673de6] rounded-full flex items-center justify-center mr-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-white"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                              />
                            </svg>
                          </div>
                          <div>
                            <Link href="/design-ux-ui" className="group">
                              <h4 className="font-medium group-hover:text-[#673de6] transition-colors">Design UX/UI</h4>
                              <p className="text-sm text-gray-600">Interfaces modernes, intuitives et responsive</p>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>

                    // Cloud, SaaS & Support
                    <div>
                      <h3 className="text-lg font-bold text-gray-600 mb-4">Cloud, SaaS & Support</h3>
                      <div className="space-y-6">
                        <div className="flex items-start">
                          <div className="flex-shrink-0 h-10 w-10 bg-[#673de6] rounded-full flex items-center justify-center mr-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-white"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                              />
                            </svg>
                          </div>
                          <div>
                            <Link href="/infrastructure-cloud-migration" className="group">
                              <h4 className="font-medium group-hover:text-[#673de6] transition-colors">
                                Infrastructure Cloud et migration
                              </h4>
                              <p className="text-sm text-gray-600">Hébergement sécurisé, scalable, performant</p>
                            </Link>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="flex-shrink-0 h-10 w-10 bg-[#673de6] rounded-full flex items-center justify-center mr-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-white"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                          </div>
                          <div>
                            <Link href="/developpement-saas" className="group">
                              <h4 className="font-medium group-hover:text-[#673de6] transition-colors">
                                Développement SaaS
                              </h4>
                              <p className="text-sm text-gray-600">
                                Applications modulaires et connectées à vos outils
                              </p>
                            </Link>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="flex-shrink-0 h-10 w-10 bg-[#673de6] rounded-full flex items-center justify-center mr-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-white"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                            </svg>
                          </div>
                          <div>
                            <Link href="/maintenance-infogerance" className="group">
                              <h4 className="font-medium group-hover:text-[#673de6] transition-colors">
                                Maintenance & infogérance
                              </h4>
                              <p className="text-sm text-gray-600">
                                Support, mises à jour, supervision technique continue
                              </p>
                            </Link>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="flex-shrink-0 h-10 w-10 bg-[#673de6] rounded-full flex items-center justify-center mr-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-white"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                              />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-medium">Applications sur mesure</h4>
                            <p className="text-sm text-gray-600">MVP, dashboard, app métier full stack</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  // IA automatisation & Cybersécurité 
                  <div className="mt-8 pt-8 border-t">
                    <h3 className="text-lg font-bold text-gray-600 mb-4">IA automatisation & Cybersécurité</h3>
                    <div className="grid grid-cols-4 gap-6">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 h-10 w-10 bg-[#673de6] rounded-full flex items-center justify-center mr-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-medium">Chatbots</h4>
                          <p className="text-sm text-gray-600">Automatisez vos échanges avec des bots intelligents</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex-shrink-0 h-10 w-10 bg-[#673de6] rounded-full flex items-center justify-center mr-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                            />
                          </svg>
                        </div>
                        <div>
                          <Link href="/automatisation-agents-ia" className="group">
                            <h4 className="font-medium group-hover:text-[#673de6] transition-colors">
                              Automatisation & agents IA
                            </h4>
                            <p className="text-sm text-gray-600">Optimisez vos process internes et relation client</p>
                          </Link>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex-shrink-0 h-10 w-10 bg-[#673de6] rounded-full flex items-center justify-center mr-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.039-11.622 0-1.042-.133-2.052-.382-3.016z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-medium">Audit de sécurité & Pentest</h4>
                          <p className="text-sm text-gray-600">Analyse complète de vos failles web, API, infra</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex-shrink-0 h-10 w-10 bg-[#673de6] rounded-full flex items-center justify-center mr-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-medium">Conformité RGPD</h4>
                          <p className="text-sm text-gray-600">Données, cookies, politiques légales & formations</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
              <Link href="/tarifs" className="text-[#1f1d2c] hover:text-[#673de6] font-medium">
                Tarifs
              </Link>
              <div className="relative group">
                <button className="flex items-center text-[#1f1d2c] hover:text-[#673de6] font-medium">
                  Explorer <ChevronDown className="h-4 w-4 ml-1" />
                </button>
                <div className="absolute left-0 mt-2 w-[600px] bg-white shadow-xl rounded-md p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 transform -translate-x-1/2">
                  <h3 className="text-lg font-medium text-gray-700 mb-6">
                    Ce qu'on crée, ce qu'on partage, ce qui nous anime
                  </h3>

                  <div className="grid grid-cols-2 gap-8">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-12 w-12 bg-[#673de6] rounded-full flex items-center justify-center mr-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-lg mb-1">Réalisations</h4>
                        <p className="text-gray-600">Nos plus beaux projets client</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-12 w-12 bg-[#673de6] rounded-full flex items-center justify-center mr-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-lg mb-1">Nos clients</h4>
                        <p className="text-gray-600">Avis, retours et expériences vécues</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-12 w-12 bg-[#673de6] rounded-full flex items-center justify-center mr-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-lg mb-1">Ressources & Articles</h4>
                        <p className="text-gray-600">Blog, veille, conseils stratégiques</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-12 w-12 bg-[#673de6] rounded-full flex items-center justify-center mr-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-lg mb-1">Projets internes</h4>
                        <p className="text-gray-600">Nos apps SaaS, outils IA, solutions développées en interne</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative group">
                <button className="flex items-center text-[#1f1d2c] hover:text-[#673de6] font-medium">
                  Support <ChevronDown className="h-4 w-4 ml-1" />
                </button>
                <div className="absolute left-0 mt-2 w-[600px] bg-white shadow-xl rounded-md p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 transform -translate-x-1/2">
                  <h3 className="text-lg font-medium text-gray-700 mb-6">
                    Tout ce qu'il vous faut pour suivre ou gérer vos projets
                  </h3>

                  <div className="grid grid-cols-2 gap-8">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-12 w-12 bg-[#673de6] rounded-full flex items-center justify-center mr-4">
                        <FileText className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-medium text-lg mb-1">Centre de ressources</h4>
                        <p className="text-gray-600">Fiches pratiques, guides d'utilisation</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-12 w-12 bg-[#673de6] rounded-full flex items-center justify-center mr-4">
                        <MessageCircle className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-medium text-lg mb-1">Contact direct</h4>
                        <p className="text-gray-600">Écrivez-nous pour tout besoin</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-12 w-12 bg-[#673de6] rounded-full flex items-center justify-center mr-4">
                        <HelpCircle className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-medium text-lg mb-1">FAQ & Aide</h4>
                        <p className="text-gray-600">Questions fréquentes et tips</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-12 w-12 bg-[#673de6] rounded-full flex items-center justify-center mr-4">
                        <User className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-medium text-lg mb-1">Espace client / suivi</h4>
                        <p className="text-gray-600">Connexion à votre tableau de bord projet</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative group">
                <button className="flex items-center text-[#1f1d2c] hover:text-[#673de6] font-medium">
                  L'univers LIADTECH <ChevronDown className="h-4 w-4 ml-1" />
                </button>
                <div className="absolute left-0 mt-2 w-[600px] bg-white shadow-xl rounded-md p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 transform -translate-x-1/2">
                  <h3 className="text-lg font-medium text-gray-700 mb-6">Derrière les écrans, il y a une équipe</h3>

                  <div className="grid grid-cols-2 gap-8">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-12 w-12 bg-[#673de6] rounded-full flex items-center justify-center mr-4">
                        <Heart className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-medium text-lg mb-1">Notre ADN</h4>
                        <p className="text-gray-600">Vision, valeurs, ambitions</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-12 w-12 bg-[#673de6] rounded-full flex items-center justify-center mr-4">
                        <Briefcase className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-medium text-lg mb-1">On recrute</h4>
                        <p className="text-gray-600">Freelances, CDI, alternances</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-12 w-12 bg-[#673de6] rounded-full flex items-center justify-center mr-4">
                        <Users className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-medium text-lg mb-1">L'équipe</h4>
                        <p className="text-gray-600">Humains, techs, créatifs, ensemble</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-12 w-12 bg-[#673de6] rounded-full flex items-center justify-center mr-4">
                        <Network className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-medium text-lg mb-1">Partenaires & Réseau</h4>
                        <p className="text-gray-600">Nos collaborations et écosystème tech</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </nav>

            <div className="flex items-center space-x-4">
              <div className="flex items-center border rounded-md px-2 py-1">
                <img src="/images/fr.svg" alt="Français" className="w-4 h-4 mr-1" />
                <span className="text-sm">Français</span>
              </div>
              <Link href="/login">
                <Button className="bg-[#673de6] hover:bg-[#5735bc] text-white">Connexion</Button>
              </Link>
            </div>
          </div>
        </header>

        {children}

        {/* Footer Section */}
        <footer className="bg-[#1f1d2c] text-white py-16 bg-no-repeat bg-cover bg-center" style={{ backgroundImage: "url('/images/demo-hosting-footer-bg.jpg')" }}>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-10">
              {/* Footer Column 1 */}
              <div className="lg:col-span-3 md:col-span-1">
                <Link href="/" className="inline-block mb-6">
                <img 
    src="/images/Logo Liadtech V2 Blanc 3.svg" 
    alt="LIADTECH Logo" 
    style={{
      height: "88px",
      width: "206px"
    }}
    className="h-10 mr-2" 
  />
                </Link>
                <p className="text-gray-300 mb-6">
                  Experts en solutions digitales, nous accompagnons les entreprises dans leur croissance numérique avec des solutions sur mesure et une approche centrée sur l&apos;innovation
                </p>
                <div className="flex space-x-4 mt-6">
                  <a href="#" className="text-white hover:text-[#673de6] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  </a>
                  <a href="#" className="text-white hover:text-[#673de6] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Footer Column 2 */}
              <div className="lg:col-span-2 md:col-span-1">
                <h4 className="text-lg font-medium mb-6">A propos</h4>
                <ul className="space-y-3">
                  <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
                  <li><Link href="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
                  <li><Link href="/qui-sommes-nous" className="text-gray-300 hover:text-white transition-colors">Qui sommes-nous</Link></li>
                  <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
                </ul>
              </div>

              {/* Footer Column 3 */}
              <div className="lg:col-span-2 md:col-span-1">
                <h4 className="text-lg font-medium mb-6">Solutions</h4>
                <ul className="space-y-3">
                  <li><Link href="/developpement-web-app" className="text-gray-300 hover:text-white transition-colors">Développement Web/App</Link></li>
                  <li><Link href="/digital-marketing" className="text-gray-300 hover:text-white transition-colors">Digital Marketing</Link></li>
                  <li><Link href="/ui-ux-design" className="text-gray-300 hover:text-white transition-colors">UI/UX Design</Link></li>
                  <li><Link href="/saas" className="text-gray-300 hover:text-white transition-colors">SaaS</Link></li>
                  <li><Link href="/cloud" className="text-gray-300 hover:text-white transition-colors">Cloud</Link></li>
                  <li><Link href="/ia" className="text-gray-300 hover:text-white transition-colors">IA</Link></li>
                </ul>
              </div>

              {/* Footer Column 4 */}
              <div className="lg:col-span-2 md:col-span-1">
                <h4 className="text-lg font-medium mb-6">Contactez nous</h4>
                <div className="mb-4">
                  <p className="text-gray-300 mb-1">Besoin de soutien?</p>
                  <a href="mailto:contact@liadtech.com" className="text-white hover:text-[#673de6] transition-colors">contact@liadtech.com</a>
                </div>
                <div>
                  <p className="text-gray-300 mb-1">Espace Client</p>
                  <a href="/espace-client" className="text-white hover:text-[#673de6] transition-colors">Connexion</a>
                </div>
              </div>

              {/* Footer Column 5 */}
              <div className="lg:col-span-3 md:col-span-1">
                <h4 className="text-lg font-medium mb-6">Abonnez-vous à notre newsletter</h4>
                <p className="text-gray-300 mb-6">Abonnez-vous à notre newsletter pour obtenir les dernières nouvelles et mises à jour!</p>
                <div className="relative">
                  <input 
                    type="email" 
                    className="w-full bg-white bg-opacity-10 border border-gray-600 rounded-md py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#673de6]" 
                    placeholder="Entrez votre e-mail"
                  />
                  <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Footer Bottom */}
            <div className="border-t border-gray-700 pt-6 text-center">
              <p className="text-sm text-gray-400 max-w-3xl mx-auto">
                Ce site est protégé par recaptcha et le google 
                <Link href="/politique-de-confidentialite" className="text-white hover:text-[#673de6] transition-colors border-b border-white mx-1">
                  politique de confidentialité
                </Link>
                et 
                <Link href="/conditions-de-service" className="text-white hover:text-[#673de6] transition-colors border-b border-white mx-1">
                  conditions de service
                </Link>
                appliquées.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}