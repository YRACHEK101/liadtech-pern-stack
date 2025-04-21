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
import Footer from "./components/Footer"
import Image from "next/image"
import { Suspense } from "react"

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
        <header className="border-b">
          <div className="w-full mx-auto flex justify-between items-center px-4">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/Logo Liadtech V2 3.svg"
                alt="LIADTECH Logo"
                width={215.11}
                height={121}
                className=" mr-2"
              />
            </Link>

            <nav className="hidden md:flex items-center gap-9 ">
              <Link href="/" className="text-[#1f1d2c] hover:text-[#673de6]">
                Accueil
              </Link>
              <div className=" group">
                <button className="flex items-center text-[#1f1d2c] hover:text-[#673de6]">
                  Services <ChevronDown className="h-4 w-4 ml-1" />
                </button>
                <div className="absolute inset-x-4 pt-16 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className=" bg-white pl-[88px] shadow-md shadow-black/25 rounded-md pb-12 pt-6 pr-10  ">
                    <h3 className="text-lg text-gray-700 mb-6 italic pl-11">De l’idée à l’automatisation, tout est imaginé pour vous</h3>

                    <div className="grid grid-cols-3 gap-10">
                      <div className="flex flex-col gap-6">
                        <span className="text-[#696868] font-bold">
                          Web & Mobile
                        </span>
                        <div className="flex flex-col gap-8">
                          <div className="flex gap-3">
                            <Image src={"/images/coding.svg"} alt="icon" width={46} height={46} className="self-start mt-1.5" />
                            <div className="flex flex-col flex-1  ">
                              <span className="font-bold">
                                Création de sites web
                              </span>
                              <span className="text-[#3C3C3C]">
                                Sites vitrine ou e-commerce conçus pour booster vos ventes et valoriser votre image
                              </span>
                            </div>
                          </div>
                          <div className="flex gap-3">
                            <Image src={"/images/Group 141.svg"} alt="icon" width={46} height={46} className="self-start mt-1.5" />
                            <div className="flex flex-col flex-1  ">
                              <span className="font-bold">
                                Applications mobiles
                              </span>
                              <span className="text-[#3C3C3C]">
                                Apps iOS & Android intuitives pour toucher vos clients où qu’ils soient
                              </span>
                            </div>
                          </div>
                        </div>
                        <span className="text-[#696868] font-bold">
                          Digital Merketing
                        </span>
                        <div className="flex flex-col gap-8">
                          <div className="flex gap-3">
                            <Image src={"/images/speakerphone.svg"} alt="icon" width={46} height={46} className="self-start mt-1.5" />
                            <div className="flex flex-col flex-1  ">
                              <span className="font-bold">
                                Marketing digital & publicité
                              </span>
                              <span className="text-[#3C3C3C]">
                                Générez plus de leads avec nos stratégies SEO, SEA & pub ciblée
                              </span>
                            </div>
                          </div>
                          <div className="flex gap-3">
                            <Image src={"/images/seo-tag-search-engine-optimization_svgrepo.com.svg"} alt="icon" width={46} height={46} className="self-start mt-1.5" />
                            <div className="flex flex-col flex-1  ">
                              <span className="font-bold">
                                Référencement  Web /SEO
                              </span>
                              <span className="text-[#3C3C3C]">
                                Optimisez votre visibilité sur Google et attirez un trafic qualifié
                              </span>
                            </div>
                          </div>
                          <div className="flex gap-3">
                            <Image src={"/images/edit.svg"} alt="icon" width={46} height={46} className="self-start mt-1.5" />
                            <div className="flex flex-col flex-1  ">
                              <span className="font-bold">
                                Blogging & contenus
                              </span>
                              <span className="text-[#3C3C3C]">
                                Attirez votre audience avec des articles stratégiques
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-6">
                        <span className="text-[#696868] font-bold">
                          Studio Créatif
                        </span>
                        <div className="flex flex-col gap-8">
                          <div className="flex gap-3">
                            <div className="w-11 h-11 self-start bg-purple-600"></div>
                            <div className="flex flex-col flex-1  ">
                              <span className="font-bold">
                                Vidéos explicatives 2D/3D
                              </span>
                              <span className="text-[#3C3C3C]">
                                Expliquez vos services avec clarté et impact
                              </span>
                            </div>
                          </div>
                          <div className="flex gap-3">
                            <div className="w-11 h-11 self-start bg-purple-600"></div>
                            <div className="flex flex-col flex-1  ">
                              <span className="font-bold">
                                création de logo
                              </span>
                              <span className="text-[#3C3C3C]">
                                Apportez du rythme à votre identité visuelle
                              </span>
                            </div>
                          </div>
                          <div className="flex gap-3">
                            <div className="w-11 h-11 self-start bg-purple-600"></div>
                            <div className="flex flex-col flex-1  ">
                              <span className="font-bold">
                                Animations narratives & mini-séries
                              </span>
                              <span className="text-[#3C3C3C]">
                                Des histoires engageantes pour réseaux ou communication interne
                              </span>
                            </div>
                          </div>
                          <div className="flex gap-3">
                            <Image src={"/images/brush.svg"} alt="icon" width={46} height={46} className="self-start mt-1.5" />
                            <div className="flex flex-col flex-1  ">
                              <span className="font-bold">
                                Design Graphique & Visuels
                              </span>
                              <span className="text-[#3C3C3C]">
                                Créations pour vos réseaux, sites web ou présentations
                              </span>
                            </div>
                          </div>
                          <div className="flex gap-3">
                            <Image src={"/images/Group 170 (1).svg"} alt="icon" width={46} height={46} className="self-start mt-1.5" />
                            <div className="flex flex-col flex-1  ">
                              <span className="font-bold">
                                Design UX/UI
                              </span>
                              <span className="text-[#3C3C3C]">
                                Interfaces modernes, intuitives et responsive
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-6">
                        <span className="text-[#696868] font-bold">
                          Cloud, SaaS & Support
                        </span>
                        <div className="flex flex-col gap-8">
                          <div className="flex gap-3">
                            <Image src={"/images/cloud-computing-servers-blades.svg"} alt="icon" width={46} height={46} className="self-start mt-1.5" />
                            <div className="flex flex-col flex-1  ">
                              <span className="font-bold">
                                Infrastructure Cloud et migration
                              </span>
                              <span className="text-[#3C3C3C]">
                                Hébergement sécurisé, scalable, performant
                              </span>
                            </div>
                          </div>
                          <div className="flex gap-3">
                            <Image src={"/images/12-ui-code.svg"} alt="icon" width={46} height={46} className="self-start mt-1.5" />
                            <div className="flex flex-col flex-1  ">
                              <span className="font-bold">
                                Développement SaaS
                              </span>
                              <span className="text-[#3C3C3C]">
                                Applications modulaires et connectées à vos outils
                              </span>
                            </div>
                          </div>
                          <div className="flex gap-3">
                            <Image src={"/images/hammer-and-wrench_svgrepo.com.svg"} alt="icon" width={46} height={46} className="self-start mt-1.5" />
                            <div className="flex flex-col flex-1  ">
                              <span className="font-bold">
                                Maintenance & infogérance
                              </span>
                              <span className="text-[#3C3C3C]">
                                Support, mises à jour, supervision technique continue
                              </span>
                            </div>
                          </div>
                          <div className="flex gap-3">
                            <Image src={"/images/Group 170.svg"} alt="icon" width={46} height={46} className="self-start mt-1.5" />
                            <div className="flex flex-col flex-1  ">
                              <span className="font-bold">
                                Applications sur mesure
                              </span>
                              <span className="text-[#3C3C3C]">
                                MVP, dashboard, app métier full stack
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <hr className="border-[#673DE6] border-2 rounded-full mt-8 mb-4 w-1/2" />
                    </div>
                    <div className="flex flex-col gap-6">
                      <div className="flex items-center gap-2">
                        <span className="text-[#696868] font-bold ">
                          IA automatisation & Cybersécurité
                        </span>
                        <a href="http://" className="bg-[#E2C8FF] text-[#673DE6] font-normal text-base px-2 py-1 rounded-full">
                          AVEC AI
                        </a>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        <div className="flex gap-3">
                          <Image src={"/images/cloud-computing-security-robot.svg"} alt="icon" width={46} height={46} className="self-start mt-1.5" />
                          <div className="flex flex-col flex-1  ">
                            <span className="font-bold">
                              Chatbots
                            </span>
                            <span className="text-[#3C3C3C]">
                              Automatisez vos échanges avec des bots intelligents
                            </span>
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <Image src={"/images/Group 140.svg"} alt="icon" width={46} height={46} className="self-start mt-1.5" />
                          <div className="flex flex-col flex-1  ">
                            <span className="font-bold">
                              Automatisation & agents IA
                            </span>
                            <span className="text-[#3C3C3C]">
                              Optimisez vos process internes et relation client
                            </span>
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <Image src={"/images/Group 146.svg"} alt="icon" width={46} height={46} className="self-start mt-1.5" />
                          <div className="flex flex-col flex-1  ">
                            <span className="font-bold">
                              Audit de sécurité & Pentest
                            </span>
                            <span className="text-[#3C3C3C]">
                              Analyse complète de vos failles web, API, infra
                            </span>
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <Image src={"/images/Group 147.svg"} alt="icon" width={46} height={46} className="self-start mt-1.5" />
                          <div className="flex flex-col flex-1  ">
                            <span className="font-bold">
                              Conformité RGPD
                            </span>
                            <span className="text-[#3C3C3C]">
                              Données, cookies, politiques légales & formations
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Link href="/tarifs" className="text-[#1f1d2c] hover:text-[#673de6]">
                Tarifs
              </Link>
              <div className="relative group">
                <button className="flex items-center text-[#1f1d2c] hover:text-[#673de6]">
                  Explorer <ChevronDown className="h-4 w-4 ml-1" />
                </button>
                <div className="absolute left-0 pt-16 opacity-0 w-screen max-w-[1044px] transform -translate-x-1/2 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50  ">
                  <div className=" bg-white pl-[88px] shadow-md shadow-black/25 rounded-md pb-12 pt-6 pr-10 ">
                    <h3 className="text-lg text-gray-700 mb-6 italic pl-11">Ce qu'on crée, ce qu'on partage, ce qui nous anime</h3>
                    <div className="flex gap-16">
                      <div className="flex flex-col gap-8">
                        <div className="flex">
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

                        <div className="flex">
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

                        <div className="flex">
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

                        <div className="flex">
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
                      <div className="bg-[#D9D9D9] flex-1 rounded-xl px-8 py-[22px] flex flex-col justify-end">
                        <div className="font-bold">
                          Réalisations
                        </div>
                        <div className="text-[#3C3C3C] font-light">
                          Nos plus beaux projets client
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative group">
                <button className="flex items-center text-[#1f1d2c] hover:text-[#673de6] ">
                  Support <ChevronDown className="h-4 w-4 ml-1" />
                </button>
                <div className="absolute left-0 pt-16 opacity-0 w-screen max-w-[1044px] transform -translate-x-1/2 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50  ">
                  <div className=" bg-white pl-[88px] shadow-md shadow-black/25 rounded-md pb-12 pt-6 pr-10 ">                  <h3 className="text-lg text-gray-700 mb-6 italic pl-11">Tout ce qu'il vous faut pour suivre ou gérer vos projets</h3>

                    <div className="flex gap-16">
                      <div className="flex flex-col gap-8">
                        <div className="flex">
                          <div className="flex-shrink-0 h-12 w-12 bg-[#673de6] rounded-full flex items-center justify-center mr-4">
                            <FileText className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h4 className="font-medium text-lg mb-1">Centre de ressources</h4>
                            <p className="text-gray-600">Fiches pratiques, guides d'utilisation</p>
                          </div>
                        </div>

                        <div className="flex">
                          <div className="flex-shrink-0 h-12 w-12 bg-[#673de6] rounded-full flex items-center justify-center mr-4">
                            <MessageCircle className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h4 className="font-medium text-lg mb-1">Contact direct</h4>
                            <p className="text-gray-600">Écrivez-nous pour tout besoin</p>
                          </div>
                        </div>

                        <div className="flex">
                          <div className="flex-shrink-0 h-12 w-12 bg-[#673de6] rounded-full flex items-center justify-center mr-4">
                            <HelpCircle className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h4 className="font-medium text-lg mb-1">FAQ & Aide</h4>
                            <p className="text-gray-600">Questions fréquentes et tips</p>
                          </div>
                        </div>

                        <div className="flex">
                          <div className="flex-shrink-0 h-12 w-12 bg-[#673de6] rounded-full flex items-center justify-center mr-4">
                            <User className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h4 className="font-medium text-lg mb-1">Espace client / suivi</h4>
                            <p className="text-gray-600">Connexion à votre tableau de bord projet</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-[#D9D9D9] flex-1 rounded-xl px-8 py-[22px] flex flex-col justify-end">
                        <div className="font-bold">
                          Espace Clients
                        </div>
                        <div className="text-[#3C3C3C] font-light">
                          Connexion à votre tableau de bord projet
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative group">
                <button className="flex items-center text-[#1f1d2c] hover:text-[#673de6] ">
                  L'univers LIADTECH <ChevronDown className="h-4 w-4 ml-1" />
                </button>
                <div className="absolute left-0 pt-16 opacity-0 w-screen max-w-[1044px] transform -translate-x-1/2 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50  ">
                  <div className=" bg-white pl-[88px] shadow-md shadow-black/25 rounded-md pb-12 pt-6 pr-10 ">                  <h3 className="text-lg text-gray-700 mb-6 italic pl-11">Derrière les écrans, il y a une équipe</h3>

                    <div className="flex gap-16">
                      <div className="flex flex-col gap-8">
                        <div className="flex">
                          <div className="flex-shrink-0 h-12 w-12 bg-[#673de6] rounded-full flex items-center justify-center mr-4">
                            <Dna className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h4 className="font-medium text-lg mb-1">Notre ADN</h4>
                            <p className="text-gray-600">Vision, valeurs, ambitions</p>
                          </div>
                        </div>

                        <div className="flex">
                          <div className="flex-shrink-0 h-12 w-12 bg-[#673de6] rounded-full flex items-center justify-center mr-4">
                            <Users className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h4 className="font-medium text-lg mb-1">L'équipe</h4>
                            <p className="text-gray-600">Humains, techs, créatifs, ensemble</p>
                          </div>
                        </div>

                        <div className="flex">
                          <div className="flex-shrink-0 h-12 w-12 bg-[#673de6] rounded-full flex items-center justify-center mr-4">
                            <Briefcase className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h4 className="font-medium text-lg mb-1">On recrute</h4>
                            <p className="text-gray-600">Freelances, CDI, alternances</p>
                          </div>
                        </div>

                        <div className="flex">
                          <div className="flex-shrink-0 h-12 w-12 bg-[#673de6] rounded-full flex items-center justify-center mr-4">
                            <Network className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h4 className="font-medium text-lg mb-1">Partenaires & Réseau</h4>
                            <p className="text-gray-600">Nos collaborations et écosystème tech</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-[#D9D9D9] flex-1 rounded-xl px-8 py-[22px] flex flex-col justify-end">
                        <div className="font-bold">
                          LIADTECH Academy
                        </div>
                        <div className="text-[#3C3C3C] font-light">
                          Apprenez avec les experts derrière vos outils.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </nav>

            <div className="flex items-center space-x-4">
              <div className="flex items-center rounded-md px-2 py-1">
                <img src="/images/fr.svg" alt="Français" className="w-12 h-10 mr-1" />
                <span className="text-[20px">Français</span>
              </div>
              <Link href="/login">
                <button className="bg-[#673de6] hover:bg-[#5735bc] text-white rounded-lg px-[31px] py-[10px]">Connexion</button>
              </Link>
            </div>
          </div>
        </header>

        <Suspense>
          {children}
        </Suspense>

        <Footer />
      </body>
    </html>
  )
}