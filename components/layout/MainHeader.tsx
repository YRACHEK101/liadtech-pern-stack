"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown, MessageCircle, FileText, HelpCircle, User, Dna, Users, Briefcase, Network, Menu, X } from 'lucide-react'

const MainHeader = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const [openDropdown, setOpenDropdown] = useState<string | null>(null)

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen)
        setOpenDropdown(null)
    }

    const toggleDropdown = (dropdown: string) => {
        setOpenDropdown(openDropdown === dropdown ? null : dropdown)
    }

    return (
        <header className="border-b bg-white h-[80px] lg:h-[113px] text-black shadow-md shadow-black/25 z-50 sticky top-0">
            <div className="w-full mx-auto flex justify-between h-full items-center px-4">
                <Link href="/" className="flex items-center">
                    <Image
                        src="/images/Logo Liadtech V2 3.svg"
                        alt="LIADTECH Logo"
                        width={215.11}
                        height={121}
                        className="mr-2"
                    />
                </Link>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden p-2"
                    onClick={toggleDrawer}
                    aria-label="Toggle menu"
                >
                    {isDrawerOpen ? (
                        <X className="h-6 w-6" />
                    ) : (
                        <Menu className="h-6 w-6" />
                    )}
                </button>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-9">
                    <Link href="/" className="text-[#1f1d2c] hover:text-[#673de6]">
                        Accueil
                    </Link>
                    <div className=" group">
                        <button className="flex items-center text-[#1f1d2c] hover:text-[#673de6]">
                            Services <ChevronDown className="h-4 w-4 ml-1" />
                        </button>
                        <div className="absolute hidden group-hover:block inset-x-4 pt-16 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                            <div className=" bg-white pl-[88px] shadow-md shadow-black/25 rounded-md pb-12 pt-6 pr-10  ">
                                <h3 className="text-lg text-gray-700 mb-6 italic pl-11">De l'idée à l'automatisation, tout est imaginé pour vous</h3>

                                <div className="grid grid-cols-3 gap-10">
                                    <div className="flex flex-col gap-6">
                                        <span className="text-[#696868] font-bold">
                                            Web & Mobile
                                        </span>
                                        <div className="flex flex-col gap-8">
                                            <Link href="/services/creation-sites-web" className="flex gap-3" onClick={toggleDrawer}>
                                                <Image src={"/images/coding.svg"} alt="icon" width={46} height={46} className="self-start mt-1.5" />
                                                <div className="flex flex-col flex-1  ">
                                                    <span className="font-bold">
                                                        Création de sites web
                                                    </span>
                                                    <span className="text-[#3C3C3C]">
                                                        Sites vitrine ou e-commerce conçus pour booster vos ventes et valoriser votre image
                                                    </span>
                                                </div>
                                            </Link>
                                            <Link href="/services/applications-mobiles" className="flex gap-3" onClick={toggleDrawer}>
                                                <Image src={"/images/Group 141.svg"} alt="icon" width={46} height={46} className="self-start mt-1.5" />
                                                <div className="flex flex-col flex-1  ">
                                                    <span className="font-bold">
                                                        Applications mobiles
                                                    </span>
                                                    <span className="text-[#3C3C3C]">
                                                        Apps iOS & Android intuitives pour toucher vos clients où qu'ils soient
                                                    </span>
                                                </div>
                                            </Link>
                                        </div>
                                        <span className="text-[#696868] font-bold">
                                            Digital Merketing
                                        </span>
                                        <div className="flex flex-col gap-8">
                                            <Link href={"/services/marketing-digital"} className="flex gap-3" onClick={toggleDrawer}>
                                                <Image src={"/images/speakerphone.svg"} alt="icon" width={46} height={46} className="self-start mt-1.5" />
                                                <div className="flex flex-col flex-1  ">
                                                    <span className="font-bold">
                                                        Marketing digital & publicité
                                                    </span>
                                                    <span className="text-[#3C3C3C]">
                                                        Générez plus de leads avec nos stratégies SEO, SEA & pub ciblée
                                                    </span>
                                                </div>
                                            </Link>
                                            <Link href="/services/referencement-seo" className="flex gap-3" onClick={toggleDrawer}>
                                                <Image src={"/images/seo-tag-search-engine-optimization_svgrepo.com.svg"} alt="icon" width={46} height={46} className="self-start mt-1.5" />
                                                <div className="flex flex-col flex-1  ">
                                                    <span className="font-bold">
                                                        Référencement  Web /SEO
                                                    </span>
                                                    <span className="text-[#3C3C3C]">
                                                        Optimisez votre visibilité sur Google et attirez un trafic qualifié
                                                    </span>
                                                </div>
                                            </Link>
                                            <Link href={"/services/blogging-contenus"} className="flex gap-3" onClick={toggleDrawer}>
                                                <Image src={"/images/edit.svg"} alt="icon" width={46} height={46} className="self-start mt-1.5" />
                                                <div className="flex flex-col flex-1  ">
                                                    <span className="font-bold">
                                                        Blogging & contenus
                                                    </span>
                                                    <span className="text-[#3C3C3C]">
                                                        Attirez votre audience avec des articles stratégiques
                                                    </span>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-6">
                                        <span className="text-[#696868] font-bold">
                                            Studio Créatif
                                        </span>
                                        <div className="flex flex-col gap-8">
                                            <Link href={"/services/videos-explicatives"} className="flex gap-3" onClick={toggleDrawer}>
                                                <Image src={"/Liadtech/Accueil/icones/Screenshot from 2025-04-22 00-45-10.png"} alt="icon" width={46} height={46} className="self-start mt-1.5" />
                                                <div className="flex flex-col flex-1  ">
                                                    <span className="font-bold">
                                                        Vidéos explicatives 2D/3D
                                                    </span>
                                                    <span className="text-[#3C3C3C]">
                                                        Expliquez vos services avec clarté et impact
                                                    </span>
                                                </div>
                                            </Link>
                                            <div className="flex gap-3">
                                                <Image src={"/Liadtech/Accueil/icones/Screenshot from 2025-04-22 00-50-44.png"} alt="icon" width={46} height={46} className="self-start mt-1.5" />
                                                <div className="flex flex-col flex-1  ">
                                                    <span className="font-bold">
                                                        création de logo
                                                    </span>
                                                    <span className="text-[#3C3C3C]">
                                                        Apportez du rythme à votre identité visuelle
                                                    </span>
                                                </div>
                                            </div>
                                            <Link href="/services/animations-narratives" className="flex gap-3" onClick={toggleDrawer}>
                                                <Image src={"/Liadtech/Accueil/icones/Screenshot from 2025-04-22 00-44-29.png"} alt="icon" width={46} height={46} className="self-start mt-1.5" />
                                                <div className="flex flex-col flex-1  ">
                                                    <span className="font-bold">
                                                        Animations narratives & mini-séries
                                                    </span>
                                                    <span className="text-[#3C3C3C]">
                                                        Des histoires engageantes pour réseaux ou communication interne
                                                    </span>
                                                </div>
                                            </Link>
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
                                            <Link href={"/services/design-ux-ui"} className="flex gap-3" onClick={toggleDrawer}>
                                                <Image src={"/images/Group 170 (1).svg"} alt="icon" width={46} height={46} className="self-start mt-1.5" />
                                                <div className="flex flex-col flex-1  ">
                                                    <span className="font-bold">
                                                        Design UX/UI
                                                    </span>
                                                    <span className="text-[#3C3C3C]">
                                                        Interfaces modernes, intuitives et responsive
                                                    </span>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-6">
                                        <span className="text-[#696868] font-bold">
                                            Cloud, SaaS & Support
                                        </span>
                                        <div className="flex flex-col gap-8">
                                            <Link href={"/services/infrastructure-cloud"} className="flex gap-3" onClick={toggleDrawer}>
                                                <Image src={"/images/cloud-computing-servers-blades.svg"} alt="icon" width={46} height={46} className="self-start mt-1.5" />
                                                <div className="flex flex-col flex-1  ">
                                                    <span className="font-bold">
                                                        Infrastructure Cloud et migration
                                                    </span>
                                                    <span className="text-[#3C3C3C]">
                                                        Hébergement sécurisé, scalable, performant
                                                    </span>
                                                </div>
                                            </Link>
                                            <Link href={"/services/developpement-saas"} className="flex gap-3" onClick={toggleDrawer}>
                                                <Image src={"/images/12-ui-code.svg"} alt="icon" width={46} height={46} className="self-start mt-1.5" />
                                                <div className="flex flex-col flex-1  ">
                                                    <span className="font-bold">
                                                        Développement SaaS
                                                    </span>
                                                    <span className="text-[#3C3C3C]">
                                                        Applications modulaires et connectées à vos outils
                                                    </span>
                                                </div>
                                            </Link>
                                            <Link href={"/services/maintenance-infogerance"} className="flex gap-3" onClick={toggleDrawer}>
                                                <Image src={"/images/hammer-and-wrench_svgrepo.com.svg"} alt="icon" width={46} height={46} className="self-start mt-1.5" />
                                                <div className="flex flex-col flex-1  ">
                                                    <span className="font-bold">
                                                        Maintenance & infogérance
                                                    </span>
                                                    <span className="text-[#3C3C3C]">
                                                        Support, mises à jour, supervision technique continue
                                                    </span>
                                                </div>
                                            </Link>
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
                                        <Link href={"/services/automatisation-ia"} className="flex gap-3" onClick={toggleDrawer}>
                                            <Image src={"/images/Group 140.svg"} alt="icon" width={46} height={46} className="self-start mt-1.5" />
                                            <div className="flex flex-col flex-1  ">
                                                <span className="font-bold">
                                                    Automatisation & agents IA
                                                </span>
                                                <span className="text-[#3C3C3C]">
                                                    Optimisez vos process internes et relation client
                                                </span>
                                            </div>
                                        </Link>
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
                                        <Link href={"/services/security-and-compliance"} className="flex gap-3" onClick={toggleDrawer}>
                                            <Image src={"/images/Group 147.svg"} alt="icon" width={46} height={46} className="self-start mt-1.5" />
                                            <div className="flex flex-col flex-1  ">
                                                <span className="font-bold">
                                                    Conformité RGPD
                                                </span>
                                                <span className="text-[#3C3C3C]">
                                                    Données, cookies, politiques légales & formations
                                                </span>
                                            </div>
                                        </Link>
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
                        <div className="absolute hidden group-hover:block left-0 pt-16 opacity-0 w-screen max-w-[1044px] transform -translate-x-1/2 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50  ">
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
                        <div className="absolute hidden group-hover:block left-0 pt-16 opacity-0 w-screen max-w-[1044px] transform -translate-x-1/2 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50  ">
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
                        <div className="absolute hidden group-hover:block left-0 pt-16 opacity-0 w-screen max-w-[1044px] transform -translate-x-1/2 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50  ">
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

                <div className="hidden lg:flex  flex-col xl:flex-row items-center space-x-4">
                    <div className="hidden lg:flex items-center rounded-md px-2 py-1">
                        <img src="/images/fr.svg" alt="Français" className="w-12 h-10 mr-1" />
                        <span className="text-[20px">Français</span>
                    </div>
                    <a target="_blank" href="https://espace-client.liadtech.com/login">
                        <button className="bg-[#673de6] hover:bg-[#5735bc] text-white rounded-lg px-[31px] py-[10px]">Connexion</button>
                    </a>
                </div>
            </div>

            {/* Mobile Drawer */}
            <div
                className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 lg:hidden ${isDrawerOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={toggleDrawer}
            >
                <div
                    className={`fixed right-0 top-0 h-full w-[280px] bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
                        }`}
                    onClick={e => e.stopPropagation()}
                >
                    <div className="p-4 flex flex-col h-full ">
                        <div className="flex justify-end mb-4">
                            <button
                                onClick={toggleDrawer}
                                className="p-2"
                                aria-label="Close menu"
                            >
                                <X className="h-6 w-6" />
                            </button>
                        </div>

                        <div className='flex flex-col flex-1 h-full overflow-auto'>
                        <nav className="flex flex-col space-y-4 flex-1  ">
                            <Link href="/" className="text-[#1f1d2c] hover:text-[#673de6] py-2" onClick={toggleDrawer}>
                                Accueil
                            </Link>
                            <div>
                                <button 
                                    onClick={() => toggleDropdown('services')}
                                    className="flex items-center justify-between w-full text-[#1f1d2c] hover:text-[#673de6] py-2"
                                >
                                    Services
                                    <ChevronDown className={`h-4 w-4 transition-transform ${openDropdown === 'services' ? 'rotate-180' : ''}`} />
                                </button>
                                {openDropdown === 'services' && (
                                    <div className="pl-4 space-y-4 mt-2">
                                        <div className="space-y-2">
                                            <span className="text-[#696868] font-bold block">Web & Mobile</span>
                                            <Link href="/services/creation-sites-web" className="flex items-center gap-3 text-[#1f1d2c] hover:text-[#673de6] py-1" onClick={toggleDrawer}>
                                                <Image src="/images/coding.svg" alt="icon" width={24} height={24} />
                                                Création de sites web
                                            </Link>
                                            <Link href="/services/applications-mobiles" className="flex items-center gap-3 text-[#1f1d2c] hover:text-[#673de6] py-1" onClick={toggleDrawer}>
                                                <Image src="/images/Group 141.svg" alt="icon" width={24} height={24} />
                                                Applications mobiles
                                            </Link>
                                        </div>

                                        <div className="space-y-2">
                                            <span className="text-[#696868] font-bold block">Digital Marketing</span>
                                            <Link href="/services/marketing-digital" className="flex items-center gap-3 text-[#1f1d2c] hover:text-[#673de6] py-1" onClick={toggleDrawer}>
                                                <Image src="/images/speakerphone.svg" alt="icon" width={24} height={24} />
                                                Marketing digital & publicité
                                            </Link>
                                            <Link href="/services/referencement-seo" className="flex items-center gap-3 text-[#1f1d2c] hover:text-[#673de6] py-1" onClick={toggleDrawer}>
                                                <Image src="/images/seo-tag-search-engine-optimization_svgrepo.com.svg" alt="icon" width={24} height={24} />
                                                Référencement Web /SEO
                                            </Link>
                                            <Link href="/services/blogging-contenus" className="flex items-center gap-3 text-[#1f1d2c] hover:text-[#673de6] py-1" onClick={toggleDrawer}>
                                                <Image src="/images/edit.svg" alt="icon" width={24} height={24} />
                                                Blogging & contenus
                                            </Link>
                                        </div>

                                        <div className="space-y-2">
                                            <span className="text-[#696868] font-bold block">Studio Créatif</span>
                                            <Link href="/services/videos-explicatives" className="flex items-center gap-3 text-[#1f1d2c] hover:text-[#673de6] py-1" onClick={toggleDrawer}>
                                                <Image src="/Liadtech/Accueil/icones/Screenshot from 2025-04-22 00-45-10.png" alt="icon" width={24} height={24} />
                                                Vidéos explicatives 2D/3D
                                            </Link>
                                            <Link href="/services/creation-logo" className="flex items-center gap-3 text-[#1f1d2c] hover:text-[#673de6] py-1" onClick={toggleDrawer}>
                                                <Image src="/Liadtech/Accueil/icones/Screenshot from 2025-04-22 00-50-44.png" alt="icon" width={24} height={24} />
                                                Création de logo
                                            </Link>
                                            <Link href="/services/animations-narratives" className="flex items-center gap-3 text-[#1f1d2c] hover:text-[#673de6] py-1" onClick={toggleDrawer}>
                                                <Image src="/Liadtech/Accueil/icones/Screenshot from 2025-04-22 00-44-29.png" alt="icon" width={24} height={24} />
                                                Animations narratives & mini-séries
                                            </Link>
                                            <Link href="/services/design-graphique" className="flex items-center gap-3 text-[#1f1d2c] hover:text-[#673de6] py-1" onClick={toggleDrawer}>
                                                <Image src="/images/brush.svg" alt="icon" width={24} height={24} />
                                                Design Graphique & Visuels
                                            </Link>
                                            <Link href="/services/design-ux-ui" className="flex items-center gap-3 text-[#1f1d2c] hover:text-[#673de6] py-1" onClick={toggleDrawer}>
                                                <Image src="/images/Group 170 (1).svg" alt="icon" width={24} height={24} />
                                                Design UX/UI
                                            </Link>
                                        </div>

                                        <div className="space-y-2">
                                            <span className="text-[#696868] font-bold block">Cloud, SaaS & Support</span>
                                            <Link href="/services/infrastructure-cloud" className="flex items-center gap-3 text-[#1f1d2c] hover:text-[#673de6] py-1" onClick={toggleDrawer}>
                                                <Image src="/images/cloud-computing-servers-blades.svg" alt="icon" width={24} height={24} />
                                                Infrastructure Cloud et migration
                                            </Link>
                                            <Link href="/services/developpement-saas" className="flex items-center gap-3 text-[#1f1d2c] hover:text-[#673de6] py-1" onClick={toggleDrawer}>
                                                <Image src="/images/12-ui-code.svg" alt="icon" width={24} height={24} />
                                                Développement SaaS
                                            </Link>
                                            <Link href="/services/maintenance-infogerance" className="flex items-center gap-3 text-[#1f1d2c] hover:text-[#673de6] py-1" onClick={toggleDrawer}>
                                                <Image src="/images/hammer-and-wrench_svgrepo.com.svg" alt="icon" width={24} height={24} />
                                                Maintenance & infogérance
                                            </Link>
                                            <Link href="/services/applications-sur-mesure" className="flex items-center gap-3 text-[#1f1d2c] hover:text-[#673de6] py-1" onClick={toggleDrawer}>
                                                <Image src="/images/Group 170.svg" alt="icon" width={24} height={24} />
                                                Applications sur mesure
                                            </Link>
                                        </div>

                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2">
                                                <span className="text-[#696868] font-bold">IA automatisation & Cybersécurité</span>
                                                {/* <span className="bg-[#E2C8FF] text-[#673DE6] font-normal text-xs px-2 py-0.5 rounded-full">
                                                    AVEC AI
                                                </span> */}
                                            </div>
                                            <Link href="/services/chatbots" className="flex items-center gap-3 text-[#1f1d2c] hover:text-[#673de6] py-1" onClick={toggleDrawer}>
                                                <Image src="/images/cloud-computing-security-robot.svg" alt="icon" width={24} height={24} />
                                                Chatbots
                                            </Link>
                                            <Link href="/services/automatisation-ia" className="flex items-center gap-3 text-[#1f1d2c] hover:text-[#673de6] py-1" onClick={toggleDrawer}>
                                                <Image src="/images/Group 140.svg" alt="icon" width={24} height={24} />
                                                Automatisation & agents IA
                                            </Link>
                                            <Link href="/services/audit-securite" className="flex items-center gap-3 text-[#1f1d2c] hover:text-[#673de6] py-1" onClick={toggleDrawer}>
                                                <Image src="/images/Group 146.svg" alt="icon" width={24} height={24} />
                                                Audit de sécurité & Pentest
                                            </Link>
                                            <Link href="/services/security-and-compliance" className="flex items-center gap-3 text-[#1f1d2c] hover:text-[#673de6] py-1" onClick={toggleDrawer}>
                                                <Image src="/images/Group 147.svg" alt="icon" width={24} height={24} />
                                                Conformité RGPD
                                            </Link>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <Link href="/tarifs" className="text-[#1f1d2c] hover:text-[#673de6] py-2">
                                Tarifs
                            </Link>
                            <div>
                                <button 
                                    onClick={() => toggleDropdown('explorer')}
                                    className="flex items-center justify-between w-full text-[#1f1d2c] hover:text-[#673de6] py-2"
                                >
                                    Explorer
                                    <ChevronDown className={`h-4 w-4 transition-transform ${openDropdown === 'explorer' ? 'rotate-180' : ''}`} />
                                </button>
                                {openDropdown === 'explorer' && (
                                    <div className="pl-4 space-y-4 mt-2">
                                        <div className="space-y-2">
                                            <Link href="/realisations" className="flex items-center gap-3 text-[#1f1d2c] hover:text-[#673de6] py-1" onClick={toggleDrawer}>
                                                <div className="flex-shrink-0 h-6 w-6 bg-[#673de6] rounded-full flex items-center justify-center">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="h-4 w-4 text-white"
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
                                                Réalisations
                                            </Link>
                                            <Link href="/clients" className="flex items-center gap-3 text-[#1f1d2c] hover:text-[#673de6] py-1" onClick={toggleDrawer}>
                                                <div className="flex-shrink-0 h-6 w-6 bg-[#673de6] rounded-full flex items-center justify-center">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="h-4 w-4 text-white"
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
                                                Nos clients
                                            </Link>
                                            <Link href="/ressources" className="flex items-center gap-3 text-[#1f1d2c] hover:text-[#673de6] py-1" onClick={toggleDrawer}>
                                                <div className="flex-shrink-0 h-6 w-6 bg-[#673de6] rounded-full flex items-center justify-center">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="h-4 w-4 text-white"
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
                                                Ressources & Articles
                                            </Link>
                                            <Link href="/projets-internes" className="flex items-center gap-3 text-[#1f1d2c] hover:text-[#673de6] py-1" onClick={toggleDrawer}>
                                                <div className="flex-shrink-0 h-6 w-6 bg-[#673de6] rounded-full flex items-center justify-center">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="h-4 w-4 text-white"
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
                                                Projets internes
                                            </Link>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div>
                                <button 
                                    onClick={() => toggleDropdown('support')}
                                    className="flex items-center justify-between w-full text-[#1f1d2c] hover:text-[#673de6] py-2"
                                >
                                    Support
                                    <ChevronDown className={`h-4 w-4 transition-transform ${openDropdown === 'support' ? 'rotate-180' : ''}`} />
                                </button>
                                {openDropdown === 'support' && (
                                    <div className="pl-4 space-y-4 mt-2">
                                        <div className="space-y-2">
                                            <Link href="/ressources" className="flex items-center gap-3 text-[#1f1d2c] hover:text-[#673de6] py-1" onClick={toggleDrawer}>
                                                <div className="flex-shrink-0 h-6 w-6 bg-[#673de6] rounded-full flex items-center justify-center">
                                                    <FileText className="h-4 w-4 text-white" />
                                                </div>
                                                Centre de ressources
                                            </Link>
                                            <Link href="/contact" className="flex items-center gap-3 text-[#1f1d2c] hover:text-[#673de6] py-1" onClick={toggleDrawer}>
                                                <div className="flex-shrink-0 h-6 w-6 bg-[#673de6] rounded-full flex items-center justify-center">
                                                    <MessageCircle className="h-4 w-4 text-white" />
                                                </div>
                                                Contact direct
                                            </Link>
                                            <Link href="/faq" className="flex items-center gap-3 text-[#1f1d2c] hover:text-[#673de6] py-1" onClick={toggleDrawer}>
                                                <div className="flex-shrink-0 h-6 w-6 bg-[#673de6] rounded-full flex items-center justify-center">
                                                    <HelpCircle className="h-4 w-4 text-white" />
                                                </div>
                                                FAQ & Aide
                                            </Link>
                                            <Link href="/espace-client" className="flex items-center gap-3 text-[#1f1d2c] hover:text-[#673de6] py-1" onClick={toggleDrawer}>
                                                <div className="flex-shrink-0 h-6 w-6 bg-[#673de6] rounded-full flex items-center justify-center">
                                                    <User className="h-4 w-4 text-white" />
                                                </div>
                                                Espace client / suivi
                                            </Link>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div>
                                <button 
                                    onClick={() => toggleDropdown('univers')}
                                    className="flex items-center justify-between w-full text-[#1f1d2c] hover:text-[#673de6] py-2"
                                >
                                    L'univers LIADTECH
                                    <ChevronDown className={`h-4 w-4 transition-transform ${openDropdown === 'univers' ? 'rotate-180' : ''}`} />
                                </button>
                                {openDropdown === 'univers' && (
                                    <div className="pl-4 space-y-4 mt-2">
                                        <div className="space-y-2">
                                            <Link href="/adn" className="flex items-center gap-3 text-[#1f1d2c] hover:text-[#673de6] py-1" onClick={toggleDrawer}>
                                                <div className="flex-shrink-0 h-6 w-6 bg-[#673de6] rounded-full flex items-center justify-center">
                                                    <Dna className="h-4 w-4 text-white" />
                                                </div>
                                                Notre ADN
                                            </Link>
                                            <Link href="/equipe" className="flex items-center gap-3 text-[#1f1d2c] hover:text-[#673de6] py-1" onClick={toggleDrawer}>
                                                <div className="flex-shrink-0 h-6 w-6 bg-[#673de6] rounded-full flex items-center justify-center">
                                                    <Users className="h-4 w-4 text-white" />
                                                </div>
                                                L'équipe
                                            </Link>
                                            <Link href="/recrutement" className="flex items-center gap-3 text-[#1f1d2c] hover:text-[#673de6] py-1" onClick={toggleDrawer}>
                                                <div className="flex-shrink-0 h-6 w-6 bg-[#673de6] rounded-full flex items-center justify-center">
                                                    <Briefcase className="h-4 w-4 text-white" />
                                                </div>
                                                On recrute
                                            </Link>
                                            <Link href="/partenaires" className="flex items-center gap-3 text-[#1f1d2c] hover:text-[#673de6] py-1" onClick={toggleDrawer}>
                                                <div className="flex-shrink-0 h-6 w-6 bg-[#673de6] rounded-full flex items-center justify-center">
                                                    <Network className="h-4 w-4 text-white" />
                                                </div>
                                                Partenaires & Réseau
                                            </Link>
                                            <Link href="/academy" className="flex items-center gap-3 text-[#1f1d2c] hover:text-[#673de6] py-1" onClick={toggleDrawer}>
                                                <div className="flex-shrink-0 h-6 w-6 bg-[#673de6] rounded-full flex items-center justify-center">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="h-4 w-4 text-white"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                                                        />
                                                    </svg>
                                                </div>
                                                LIADTECH Academy
                                            </Link>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </nav>

                        <div className="mt-8">

                            <a
                                target="_blank"
                                href="https://espace-client.liadtech.com/login"
                                className="block w-full text-center bg-[#673de6] hover:bg-[#5735bc] text-white rounded-lg px-4 py-2"
                            >
                                Connexion
                            </a>
                            
                        </div>

                        <div className='flex-1'></div>
                        <div className="flex items-center self-center rounded-md px-2 py-1">
                                <img src="/images/fr.svg" alt="Français" className="w-12 h-10 mr-1" />
                                <span className="text-[20px">Français</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default MainHeader