"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Shield, Zap, MessageCircle, ChevronDown, ChevronUp, Info, Minus } from "lucide-react"
import { useState } from 'react'

export default function Home() {
  // حالة لتتبع القسم النشط حاليًا
  const [activeSection, setActiveSection] = useState('web-mobile');

  // التبديل إلى القسم المحدد
  const toggleSection = (section) => {
    setActiveSection(section);
    
    // التمرير السلس إلى القسم المحدد
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="container mx-auto pt-16 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1f1d2c] mb-4">
              Plus de visibilité. Plus de clients. Moins de stress.
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Tout est pensé pour faire décoller votre business.<br />
              Site web optimisé, image professionnelle, marketing digital et automatisation
            </p>
            <div className="space-y-3 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 2L7.81818 20L2 10.8571" stroke="#673DE6" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="ml-3 text-gray-700">Un site web qui convertit les visiteurs en clients</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 2L7.81818 20L2 10.8571" stroke="#673DE6" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>

                </div>
                <p className="ml-3 text-gray-700">Un branding pro qui inspire confiance</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 2L7.81818 20L2 10.8571" stroke="#673DE6" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>

                </div>
                <p className="ml-3 text-gray-700">Des vidéos qui expliquent, vendent et captent l'attention</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 2L7.81818 20L2 10.8571" stroke="#673DE6" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>

                </div>
                <p className="ml-3 text-gray-700">Des campagnes marketing qui boostent vos ventes</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 2L7.81818 20L2 10.8571" stroke="#673DE6" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>

                </div>
                <p className="ml-3 text-gray-700">Un accompagnement de A à Z (créa, technique & support)</p>
              </div>
            </div>
            <div className="btn-group">
              <button className="bg-[#673de6] hover:bg-[#5628c5] text-white px-6 py-3 rounded-lg font-medium">
                Découvrir nos Solutions tout-en-un
              </button>
              <div className="P-group">
                <p className="Co text-sm text-gray-600 mt-4">
                  Commencer avec un expert LIADTECH</p>
                <p className="text-sm text-gray-600 mt-4">
                  100 % sur-mesure - Livraison rapide - Support 24/7
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <img
                src="/images/robot-liadtech.png"
                alt="Robot LIADTECH"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by clients section */}
      <section className="container mx-auto text-center my-16">
        <h2 className="font-bold ">
          +100 entreprises nous font déjà confiance
        </h2>

        <div className="flex justify-center items-center gap-16 mt-16">
          <div className="text-center">
            <img
              className="w-[95px] h-[83px] mx-auto"
              alt="Vector"
              src="/images/Vector.svg"
            />
            <p className="font-bold text-[#2d1f67] text-[23px] leading-[29px] font-['Raleway',Helvetica] mt-6 max-w-[326px]">
              Recommandé par + de 100 clients satisfaits
            </p>
          </div>

          <div className="text-center">
            <img
              className="w-[220px] h-[172px] mx-auto"
              alt="review icon logo"
              src="/images/image.png"
            />
          </div>

          <div className="text-center">
            <img
              className="w-[95px] h-[95px] mx-auto"
              alt="Seo expert svgrepo"
              src="/images/seo-expert-svgrepo-com.svg"
            />
            <p className="font-bold text-[#2d1f67] text-[23px] leading-[29px] font-['Raleway',Helvetica] mt-4 max-w-[270px]">
              +60 experts tech, créa &amp; marketing
            </p>
          </div>

          <div className="text-center">
            <img
              className="w-[95px] h-[95px] mx-auto"
              alt="Seo expert svgrepo"
              src="/images/web.svg"
            />
            <p className="font-bold text-[#2d1f67] text-[23px] leading-[29px] font-['Raleway',Helvetica] mt-4 max-w-[286px]">
              3 pays, 2 studios, 1 équipe unie
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Table Section */}
      <section className="py-16 container mx-auto">
        <PricingTable />
      </section>
      
      {/* Success Section */}
      <section className="py-16 container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#673de6] mb-4">Ce que vous pouvez créer avec LIADTECH</h2>
        <p className="text-xl text-[#1f1d2c] mb-12">Sites. Apps. Branding. Visibilité. Résultats.</p>

        {/* Category Buttons*/}
        <div className="flex flex-wrap justify-center gap-4 mb-8" style={{    marginBottom: 0}}>
          <button 
            onClick={() => toggleSection('web-mobile')}
            className={`rounded-full px-6 py-2 font-medium shadow-sm transition-all duration-300 transform ${
              activeSection === 'web-mobile' 
                ? 'bg-[#5d3ee6] text-white scale-105' 
                : 'bg-[#d59fff] text-[#1f1d2c] hover:bg-[#c58fee] hover:scale-102'
            }`}
            style={{width: 196}}
          >
            Web & Mobile
          </button>

          <button 
            onClick={() => toggleSection('digital-marketing')}
            className={`rounded-full px-6 py-2 font-medium shadow-sm transition-all duration-300 transform ${
              activeSection === 'digital-marketing' 
                ? 'bg-[#5d3ee6] text-white scale-105' 
                : 'bg-[#d59fff] text-[#1f1d2c] hover:bg-[#c58fee] hover:scale-102'
            }`}
            style={{width: 196}}
          >
            Digital Marketing
          </button>

          <button 
            onClick={() => toggleSection('studio-creatif')}
            className={`rounded-full px-6 py-2 font-medium shadow-sm transition-all duration-300 transform ${
              activeSection === 'studio-creatif' 
                ? 'bg-[#5d3ee6] text-white scale-105' 
                : 'bg-[#d59fff] text-[#1f1d2c] hover:bg-[#c58fee] hover:scale-102'
            }`}
          >
            Studio Créatif
          </button>

          <button 
            onClick={() => toggleSection('cloud-saas-support')}
            className={`rounded-full px-6 py-2 font-medium shadow-sm transition-all duration-300 transform ${
              activeSection === 'cloud-saas-support' 
                ? 'bg-[#5d3ee6] text-white scale-105' 
                : 'bg-[#d59fff] text-[#1f1d2c] hover:bg-[#c58fee] hover:scale-102'
            }`}
          >
            Cloud, SaaS & Support
          </button>

          <button 
            onClick={() => toggleSection('ia-cybersecurite')}
            className={`rounded-full px-6 py-2 font-medium shadow-sm transition-all duration-300 transform ${
              activeSection === 'ia-cybersecurite' 
                ? 'bg-[#5d3ee6] text-white scale-105' 
                : 'bg-[#d59fff] text-[#1f1d2c] hover:bg-[#c58fee] hover:scale-102'
            }`}
          >
            IA, Automatisation & Cybersécurité
          </button>
        </div>
      </section>

      {/* Content Sections - تظهر فقط القسم النشط */}
      <div className="transition-all duration-500">
        {/* web-mobile */}
        <section 
          className={`container mx-auto mt-8 mb-16 transition-opacity duration-300 ${activeSection === 'web-mobile' ? 'opacity-100' : 'hidden opacity-0'}`} 
          id="web-mobile"
        >
          <div className="rounded-3xl bg-[#1f1d2c] p-8 md:p-12 flex flex-col lg:flex-row gap-8 overflow-hidden relative">
            {/* Left Column */}
            <div className="lg:w-1/2 z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Sites performants & mobiles inclus
              </h2>
              <p className="text-gray-300 mb-8 max-w-md">
              Que ce soit un site vitrine, une boutique e-commerce ou une app mobile, nous créons des expériences digitales pensées pour convertir et engager vos clients, partout.
              </p>
              <Link href="#commencer">
                <Button className="bg-[#5f65f4] hover:bg-[#673de6] text-white px-8 py-3 rounded-lg">Lancer mon projet web</Button>
              </Link>
            </div>

            {/* Grid Background */}
            <div className="absolute inset-0 opacity-10 relative overflow-visible">
              <div className="w-full h-full border-[1px] border-white/20 grid grid-cols-12 grid-rows-6">
                {Array(12 * 6)
                  .fill(0)
                  .map((_, i) => (
                    <div key={i} className="border-[0.5px] border-white/10"></div>
                  ))}
              </div>
            </div>
            
          </div>
          {/* Right Column - Image */}
            <div className="relative">
              <Image
                src="/liadtech/digital web/digital web.svg"
                alt="digital web"
                width={500}
                height={350}
                className="img-web"
              />
            </div>
        </section>
        
        {/* digital-marketing */}
        <section 
          className={`container mx-auto mt-8 mb-16 transition-opacity duration-300 ${activeSection === 'digital-marketing' ? 'opacity-100' : 'hidden opacity-0'}`} 
          id="digital-marketing"
        >
          <div className="rounded-3xl bg-[#1f1d2c] p-8 md:p-12 flex flex-col lg:flex-row gap-8 overflow-hidden relative">
            {/* Left Column */}
            <div className="lg:w-1/2 z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Générez plus de clients 
              </h2>
              <p className="text-gray-300 mb-8 max-w-md">
              SEO, campagnes Ads et création de contenu : notre équipe vous aide à attirer, convertir et fidéliser grâce à une stratégie sur-mesure orientée résultats.
              </p>
              <Link href="#commencer">
                <Button className="bg-[#5f65f4] hover:bg-[#673de6] text-white px-8 py-3 rounded-lg">Générez plus de clients</Button>
              </Link>
            </div>

            {/* Grid Background */}
            <div className="absolute inset-0 opacity-10 relative overflow-visible">
              <div className="w-full h-full border-[1px] border-white/20 grid grid-cols-12 grid-rows-6">
                {Array(12 * 6)
                  .fill(0)
                  .map((_, i) => (
                    <div key={i} className="border-[0.5px] border-white/10"></div>
                  ))}
              </div>
            </div>
            
          </div>
          {/* Right Column - Image */}
            <div className="relative">
              <Image
                src="/liadtech/digital marketing/digital marketing.svg"
                alt="digital marketing"
                width={500}
                height={350}
                className="img-marketing"
              />
            </div>
        </section>
        
        {/* studio-creatif */}
        <section 
          className={`container mx-auto mt-8 mb-16 transition-opacity duration-300 ${activeSection === 'studio-creatif' ? 'opacity-100' : 'hidden opacity-0'}`} 
          id="studio-creatif"
        >
          <div className="rounded-3xl bg-[#1f1d2c] p-8 md:p-12 flex flex-col lg:flex-row gap-8 overflow-hidden relative">
            {/* Left Column */}
            <div className="lg:w-1/2 z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Marquez les esprits avec votre image
              </h2>
              <p className="text-gray-300 mb-8 max-w-md">
              Du logo animé à la vidéo explicative, on crée une identité forte et mémorable pour votre marque. Des contenus percutants pour vos présentations, votre site ou les réseaux sociaux.
              </p>
              <Link href="#commencer">
                <Button className="bg-[#5f65f4] hover:bg-[#673de6] text-white px-8 py-3 rounded-lg">Améliorer mon image de marque</Button>
              </Link>
            </div>

            {/* Grid Background */}
            <div className="absolute inset-0 opacity-10 relative overflow-visible">
              <div className="w-full h-full border-[1px] border-white/20 grid grid-cols-12 grid-rows-6">
                {Array(12 * 6)
                  .fill(0)
                  .map((_, i) => (
                    <div key={i} className="border-[0.5px] border-white/10"></div>
                  ))}
              </div>
            </div>
            
          </div>
          {/* Right Column - Image */}
            <div className="relative">
              <Image
                src="/liadtech/animation et motion/animation et motion.svg"
                alt="animation et motion"
                width={500}
                height={350}
                className="img-animation"
              />
            </div>
        </section>
        
        {/* cloud-saas-support*/}
        <section 
          className={`container mx-auto mt-8 mb-16 transition-opacity duration-300 ${activeSection === 'cloud-saas-support' ? 'opacity-100' : 'hidden opacity-0'}`} 
          id="cloud-saas-support"
        >
          <div className="rounded-3xl bg-[#1f1d2c] p-8 md:p-12 flex flex-col lg:flex-row gap-8 overflow-hidden relative">
            {/* Left Column */}
            <div className="lg:w-1/2 z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Votre projet.Scalable, Sécurisé, Performant.
              </h2>
              <p className="text-gray-300 mb-8 max-w-md">
              On vous accompagne de A à Z sur vos solutions SaaS ou web-apps sur-mesure : cloud scalable, sécurité, disponibilité maximale et support continu.
              </p>
              <Link href="#commencer">
                <Button className="bg-[#5f65f4] hover:bg-[#673de6] text-white px-8 py-3 rounded-lg">Construire mon SaaS</Button>
              </Link>
            </div>

            {/* Grid Background */}
            <div className="absolute inset-0 opacity-10 relative overflow-visible">
              <div className="w-full h-full border-[1px] border-white/20 grid grid-cols-12 grid-rows-6">
                {Array(12 * 6)
                  .fill(0)
                  .map((_, i) => (
                    <div key={i} className="border-[0.5px] border-white/10"></div>
                  ))}
              </div>
            </div>
            
          </div>
          {/* Right Column - Image */}
            <div className="relative">
              <Image
                src="/liadtech/SAAS/SAAS 2.svg"
                alt="SAAS"
                width={500}
                height={350}
                className="img-SAAS"
              />
            </div>
        </section>
        
        {/* ia-cybersecurite */}
        <section 
          className={`container mx-auto mt-8 mb-16 transition-opacity duration-300 ${activeSection === 'ia-cybersecurite' ? 'opacity-100' : 'hidden opacity-0'}`} 
          id="ia-cybersecurite"
        >
          <div className="rounded-3xl bg-[#1f1d2c] p-8 md:p-12 flex flex-col lg:flex-row gap-8 overflow-hidden relative">
            {/* Left Column */}
            <div className="lg:w-1/2 z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Gagnez du temps. Protégez vos données.
              </h2>
              <p className="text-gray-300 mb-8 max-w-md">
              Grâce à nos outils IA & sécurité, vous gagnez en efficacité tout en restant conforme au RGPD. Automatisez vos tâches, sécurisez vos services et restez maître de vos données.
              </p>
              <Link href="#commencer">
                <Button className="bg-[#5f65f4] hover:bg-[#673de6] text-white px-8 py-3 rounded-lg">Optimiser & sécuriser mes outils</Button>
              </Link>
            </div>

            {/* Grid Background */}
            <div className="absolute inset-0 opacity-10 relative overflow-visible">
              <div className="w-full h-full border-[1px] border-white/20 grid grid-cols-12 grid-rows-6">
                {Array(12 * 6)
                  .fill(0)
                  .map((_, i) => (
                    <div key={i} className="border-[0.5px] border-white/10"></div>
                  ))}
              </div>
            </div>
            
          </div>
          {/* Right Column - Image */}
            <div className="relative">
              <Image
                src="/liadtech/AI/AI.svg"
                alt="AI"
                width={500}
                height={350}
                className="img-AI"
              />
            </div>
        </section>
      </div>

      {/* Why Choose Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2">Pourquoi choisir LIADTECH ?</h2>
          <p className="text-center text-gray-600 mb-12">Rapide. Fiable. Créatif.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Image
                src="/images/Pourquoi-choisir.svg"
                alt="Pourquoi choisir LIADTECH"
                width={500}
                height={350}
                className="img-LIADTECH"
              />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2">Processus rapide et efficace</h2>
        <p className="text-center text-gray-600 mb-12">Une méthode simplifiée</p>

        <div className="bg-[#1f1d2c] rounded-xl p-8 text-white">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col items-center mb-6 md:mb-0">
              <div className="w-12 h-12 rounded-full bg-[#673de6] flex items-center justify-center text-xl font-bold mb-2">
                1
              </div>
              <p className="text-center text-sm">
                Prise de Contact
                <br />
                Signature du Contrat
              </p>
            </div>
            <div className="hidden md:block w-12 h-1 bg-[#673de6]"></div>
            <div className="flex flex-col items-center mb-6 md:mb-0">
              <div className="w-12 h-12 rounded-full bg-[#673de6] flex items-center justify-center text-xl font-bold mb-2">
                2
              </div>
              <p className="text-center text-sm">
                Analyse
                <br />
                des Besoins
              </p>
            </div>
            <div className="hidden md:block w-12 h-1 bg-[#673de6]"></div>
            <div className="flex flex-col items-center mb-6 md:mb-0">
              <div className="w-12 h-12 rounded-full bg-[#673de6] flex items-center justify-center text-xl font-bold mb-2">
                3
              </div>
              <p className="text-center text-sm">
                Suivi du Processus
                <br />
                avec API
              </p>
            </div>
            <div className="hidden md:block w-12 h-1 bg-[#673de6]"></div>
            <div className="flex flex-col items-center mb-6 md:mb-0">
              <div className="w-12 h-12 rounded-full bg-[#673de6] flex items-center justify-center text-xl font-bold mb-2">
                4
              </div>
              <p className="text-center text-sm">
                Validation
                <br />
                et Audit
              </p>
            </div>
            <div className="hidden md:block w-12 h-1 bg-[#673de6]"></div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-[#673de6] flex items-center justify-center text-xl font-bold mb-2">
                5
              </div>
              <p className="text-center text-sm">
                Livraison du Projet &<br />
                Documentation Complète
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-[#ffa4f6]/20 p-8 rounded-xl flex justify-center">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="LIADTECH Robot"
                width={300}
                height={300}
                className="object-contain"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#1f1d2c] mb-6">Votre vision est notre mission.</h2>
              <p className="text-gray-700 mb-8">
                Nous allons ensemble et structurons pour vous proposer des solutions digitales vraiment innovantes.
              </p>
              <div className="space-y-4">
              <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 bg-[#673de6] rounded-full flex items-center justify-center mt-1">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <p className="ml-3 text-gray-700">
                    Notre équipe expérimentée maîtrise parfaitement les dernières technologies et s'adapte rapidement
                    aux besoins de votre entreprise
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 bg-[#673de6] rounded-full flex items-center justify-center mt-1">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <p className="ml-3 text-gray-700">
                    Travail d'équipe essentiel : notre équipe de support réactif vous accompagne à chaque étape du
                    processus
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16 container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Support Disponible 24h/24, 7/7</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 h-5 w-5 bg-[#673de6] rounded-full flex items-center justify-center mt-1">
                <Check className="h-3 w-3 text-white" />
              </div>
              <p className="ml-3 text-gray-700">
                Discutez par chat avec un agent ou par email avec notre équipe d'experts qui vous guide en toute
                sérénité
              </p>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 h-5 w-5 bg-[#673de6] rounded-full flex items-center justify-center mt-1">
                <Check className="h-3 w-3 text-white" />
              </div>
              <p className="ml-3 text-gray-700">
                Support téléphonique disponible en français, anglais, allemand et espagnol, afin d'assurer une
                communication fluide
              </p>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 h-5 w-5 bg-[#673de6] rounded-full flex items-center justify-center mt-1">
                <Check className="h-3 w-3 text-white" />
              </div>
              <p className="ml-3 text-gray-700">
                Temps d'attente minimal : tous les appels au support reçoivent une réponse généralement en moins de 2
                minutes
              </p>
            </div>

            <div className="mt-8">
              <Button className="bg-[#673de6] hover:bg-[#5f65f4] text-white px-6">Contacter le support</Button>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Support Robot"
                width={300}
                height={300}
                className="object-contain"
              />
              <div className="absolute top-0 right-0 bg-white p-3 rounded-full shadow-lg">
                <MessageCircle className="h-6 w-6 text-[#673de6]" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

// Pricing Table Component
function PricingTable() {
  const [expandedCards, setExpandedCards] = useState({
    booster: false,
    premium: false,
    ultimate: false
  });

  const toggleCard = (card) => {
    setExpandedCards(prev => ({
      ...prev,
      [card]: !prev[card]
    }));
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-purple-900 mb-12">
        Des solutions clés en main, pour<br />chaque ambition
      </h2>

      <div className="flex flex-col md:flex-row justify-center gap-4">
        {/* Booster Card */}
        <div className="flex-1 relative rounded-2xl border border-gray-200 overflow-hidden" style={{ marginTop: 46 }}
        >
          <div className="p-6">
            <h3 className="text-xl font-bold text-purple-900">Booster</h3>
            <p className="text-sm text-gray-600 mb-2">Idéal pour se lancer proprement</p>

            <div className="flex items-center gap-2">
              <span className="text-gray-400 line-through">1750€</span>
              <span className="bg-purple-200 text-purple-700 text-xs px-3 py-1 rounded-full">ÉCONOMISEZ 44 %</span>
            </div>

            <div className="text-5xl font-bold text-purple-900 my-3" style={{ marginLeft: 80 }}>990€</div>

            <a href="/Checkout?productId=1" className="block w-full py-2 border border-purple-600 text-purple-600 rounded-lg font-medium hover:bg-purple-50 mb-8 text-center">
              Sélectionner
            </a>

            <h4 className="font-semibold mb-2">Audit basique</h4>

            <ul className="space-y-3">
              <ServiceItem active={true} text="Audit basique" />
              <ServiceItem active={true} text="Refonte améliorée (1 à 5 pages)" />
              <ServiceItem active={true} text="Design responsive (mobile/tablette)" />
              <ServiceItem active={true} text="Sécurité HTTPS + performance basique" />
              <ServiceItem active={true} text="1 formulaire de contact intégré" />
              <ServiceItem active={false} text="Blog ou page actualités" />
              <ServiceItem active={false} text="Design personnalisé" />
              <ServiceItem active={false} text="Optimisation de la vitesse" />
              <ServiceItem active={false} text="Tracking avancé (GA4, Pixel Meta, GTM...)" />
            </ul>

            {expandedCards.booster && (
              <div className="mt-6">
                <ExpandedCardContent />
              </div>
            )}

            <button
              onClick={() => toggleCard('booster')}
              className="flex items-center justify-center mt-6 text-purple-600 font-medium"
            >
              {expandedCards.booster ? 'Masquer' : 'Voir tous'}
              {expandedCards.booster ? <ChevronUp className="h-5 w-5 ml-1" /> : <ChevronDown className="h-5 w-5 ml-1" />}
            </button>
          </div>
        </div>

        {/* Premium Card - Highlighted */}
        <div className="flex-1 relative rounded-2xl border-2 border-purple-600 overflow-hidden bg-white transform md:scale-105 z-10">
          <div className="title bg-purple-600 text-white text-center py-2 font-medium">
            Le plus populaire
          </div>

          <div className="p-6">
            <h3 className="text-xl font-bold text-purple-900">Premium</h3>
            <p className="text-sm text-gray-600 mb-2">Pour une présence professionnelle forte</p>

            <div className="flex items-center gap-2">
              <span className="text-gray-400 line-through">3000€</span>
              <span className="bg-purple-200 text-purple-700 text-xs px-3 py-1 rounded-full">ÉCONOMISEZ 34 %</span>
            </div>

            <div className="text-5xl font-bold text-purple-900 my-3">1990€</div>

            <a
              href="/Checkout?productId=2"
              className="block w-full py-2 text-white rounded-lg font-medium mb-8 text-center"
              style={{
                backgroundColor: '#673de6',
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#4118de'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#673de6'}
            >
              Sélectionner
            </a>

            <h4 className="font-semibold mb-2">Site Web et Audit</h4>

            <ul className="space-y-3">
              <ServiceItem active={true} text="Audit complet" />
              <ServiceItem active={true} text="Refonte améliorée (6 à 10 pages)" />
              <ServiceItem active={true} text="Design responsive (mobile/tablette)" />
              <ServiceItem active={true} text="Sécurité renforcée + SEO technique de base" />
              <ServiceItem active={true} text="+ 2 formulaires (contact, devis ou RDV)" />
              <ServiceItem active={true} text="Blog ou page actualités" />
              <ServiceItem active={true} text="Design personnalisé + responsive" />
              <ServiceItem active={false} text="Optimisation de la vitesse" />
              <ServiceItem active={false} text="Tracking avancé (GA4, Pixel Meta, GTM...)" />
            </ul>

            {expandedCards.premium && (
              <div className="mt-6">
                <ExpandedCardContent />
              </div>
            )}

            <button
              onClick={() => toggleCard('premium')}
              className="flex items-center justify-center mt-6 text-purple-600 font-medium"
            >
              {expandedCards.premium ? 'Masquer' : 'Voir tous'}
              {expandedCards.premium ? <ChevronUp className="h-5 w-5 ml-1" /> : <ChevronDown className="h-5 w-5 ml-1" />}
            </button>
          </div>
        </div>

        {/* Ultimate Card */}
        <div className="flex-1 relative rounded-2xl border border-gray-200 overflow-hidden" style={{ marginTop: 46 }}>
          <div className="p-6">
            <h3 className="text-xl font-bold text-purple-900">Ultimate</h3>
            <p className="text-sm text-gray-600 mb-2">Pour scaler avec une vraie stratégie</p>

            <div className="flex items-center gap-2">
              <span className="text-gray-400 line-through">5500€</span>
              <span className="bg-purple-200 text-purple-700 text-xs px-3 py-1 rounded-full">ÉCONOMISEZ 39 %</span>
            </div>

            <div className="text-5xl font-bold text-purple-900 my-3">3390€</div>

            <a href="/Checkout?productId=3" className="block w-full py-2 border border-purple-600 text-purple-600 rounded-lg font-medium hover:bg-purple-50 mb-8 text-center">
              Sélectionner
            </a>

            <h4 className="font-semibold mb-2">Site Web et Audit</h4>

            <ul className="space-y-3">
              <ServiceItem active={true} text="Audit complet" />
              <ServiceItem active={true} text="Refonte améliorée (6 à 10 pages)" />
              <ServiceItem active={true} text="Design responsive (mobile/tablette)" />
              <ServiceItem active={true} text="Sécurité renforcée + SEO technique de base" />
              <ServiceItem active={true} text="+ 2 formulaires (contact, devis ou RDV)" />
              <ServiceItem active={true} text="Blog ou page actualités" />
              <ServiceItem active={true} text="Design personnalisé + responsive" />
              <ServiceItem active={true} text="Optimisation de la vitesse" />
              <ServiceItem active={true} text="Tracking avancé (GA4, Pixel Meta, GTM...)" />
            </ul>

            {expandedCards.ultimate && (
              <div className="mt-6">
                <ExpandedCardContent />
              </div>
            )}

            <button
              onClick={() => toggleCard('ultimate')}
              className="flex items-center justify-center mt-6 text-purple-600 font-medium"
            >
              {expandedCards.ultimate ? 'Masquer' : 'Voir tous'}
              {expandedCards.ultimate ? <ChevronUp className="h-5 w-5 ml-1" /> : <ChevronDown className="h-5 w-5 ml-1" />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Component to display expanded content
const ExpandedCardContent = () => {
  return (
    <>
      <div className="mt-4">
        <h4 className="font-semibold mb-2">Digital Marketing</h4>
        <ul className="space-y-3">
          <ServiceItem active={true} text="3 campagnes publicitaires multicanaux" />
          <ServiceItem active={true} text="Générer des leads et conversions" hasInfo={true} />
          <ServiceItem active={true} text="Création (landing pages)" hasInfo={true} />
          <ServiceItem active={true} text="A/B testing + rapport détaillé mensuel" />
        </ul>
      </div>

      <div className="mt-4">
        <h4 className="font-semibold mb-2">Réseaux sociaux</h4>
        <ul className="space-y-3">
          <ServiceItem active={true} text="20 posts complets pour 3 réseaux" />
          <ServiceItem active={true} text="Planification automatisée" />
          <ServiceItem active={true} text="Calendrier éditorial (1 mois)" />
        </ul>
      </div>

      <div className="mt-4">
        <h4 className="font-semibold mb-2">Vidéos</h4>
        <ul className="space-y-3">
          <ServiceItem active={true} text="1 vidéo institutionnelle de présentation" />
          <ServiceItem active={true} text="1 vidéo présentant un produit ou service" />
          <ServiceItem active={true} text="Script personnalisé, voix off professionnelle" />
          <ServiceItem active={true} text="1 vidéo événementielle" />
        </ul>
      </div>

      <div className="mt-4">
        <h4 className="font-semibold mb-2">Chatbot</h4>
        <ul className="space-y-3">
          <ServiceItem active={true} text="Chatbot avancé" hasInfo={true} />
          <ServiceItem active={true} text="Système de réponses intelligentes" />
          <ServiceItem active={true} text="Support multilingue" hasInfo={true} />
          <ServiceItem active={true} text="Scénarios personnalisés" hasInfo={true} />
        </ul>
      </div>

      <div className="mt-4">
        <h4 className="font-semibold mb-2">Maintenance & Suivi</h4>
        <ul className="space-y-3">
          <ServiceItem active={true} text="3 mois de maintenance applicative incluse" />
          <ServiceItem active={true} text="Réponses aux Questions fréquentes" />
          <ServiceItem active={true} text="Rapport mensuel" hasInfo={true} />
          <ServiceItem active={true} text="Conseil en IA" hasInfo={true} />
        </ul>
      </div>
    </>
  );
};

// Service Item Component
const ServiceItem = ({ active, text, hasInfo = false }) => {
  return (
    <li className="flex items-start gap-2">
      <div className="flex-shrink-0 mt-1">
        {active ? (
          <div className="w-5 h-5 items-center justify-center">
            <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L5.63636 13L2 7.4127" stroke="#60BB6F" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        ) : (
          <div className="w-5 h-5 flex items-center justify-center">
            <svg width="14" height="4" viewBox="0 0 14 4" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.8636 2.00022L2 2.00012L7 1.99991" stroke="#949695" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        )}
      </div>
      <span className="text-sm text-gray-700">
        {text}
        {hasInfo && <Info size={12} className="inline ml-1 text-gray-400" />}
      </span>
      {hasInfo && (
        <div className="ml-auto flex-shrink-0">
          <Info size={16} className="text-gray-400" />
        </div>
      )}
    </li>
  );
};

// Pour la rétrocompatibilité, gardons ces composants également
const ListItem = ({ active, text, tooltip }) => {
  return (
    <li className="flex items-start text-sm">
      {active ? (
        <Check size={16} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
      ) : (
        <Minus size={16} className="text-gray-400 mt-1 mr-2 flex-shrink-0" />
      )}
      <span className={active ? "text-gray-800" : "text-gray-400"}>
        {text}
        {tooltip && (
          <Info size={14} className="inline ml-1 text-gray-400" />
        )}
      </span>
    </li>
  );
};

const AdditionalSections = () => {
  return (
    <>
      <div className="mt-6">
        <h4 className="font-bold text-gray-800">Digital Marketing</h4>
        <ul className="mt-2 space-y-1">
          <ListItem active={true} text="3 campagnes publicitaires multicanaux" />
          <ListItem active={true} text="Générer des leads et conversions" tooltip="Objectif : générer des leads et conversions pour 3 produits ou services" />
          <ListItem active={true} text="Création (landing pages)" tooltip="Création de pages de destination optimisées (landing pages)" />
          <ListItem active={true} text="A/B testing + rapport détaillé mensuel" />
        </ul>
      </div>

      <div className="mt-4">
        <h4 className="font-bold text-gray-800">Réseaux sociaux</h4>
        <ul className="mt-2 space-y-1">
          <ListItem active={true} text="20 posts complets pour 3 réseaux" />
          <ListItem active={true} text="Planification automatisée" />
          <ListItem active={true} text="Calendrier éditorial (1 mois)" />
        </ul>
      </div>

      <div className="mt-4">
        <h4 className="font-bold text-gray-800">Vidéos</h4>
        <ul className="mt-2 space-y-1">
          <ListItem active={true} text="1 vidéo institutionnelle de présentation" />
          <ListItem active={true} text="1 vidéo présentant un produit ou service" />
          <ListItem active={true} text="Script personnalisé, voix off professionnelle" />
          <ListItem active={true} text="1 vidéo événementielle" />
        </ul>
      </div>

      <div className="mt-4">
        <h4 className="font-bold text-gray-800">Chatbot</h4>
        <ul className="mt-2 space-y-1">
          <ListItem active={true} text="Chatbot avancé" tooltip="Chatbot avancé basé sur le contenu du site et sa documentation" />
          <ListItem active={true} text="Système de réponses intelligentes" />
          <ListItem active={true} text="Support multilingue" tooltip="Support multilingue (2 langues, ex. FR + EN)" />
          <ListItem active={true} text="Scénarios personnalisés" tooltip="Scénarios personnalisés avec intégration CRM possible" />
        </ul>
      </div>

      <div className="mt-4">
        <h4 className="font-bold text-gray-800">Maintenance & Suivi</h4>
        <ul className="mt-2 space-y-1">
          <ListItem active={true} text="3 mois de maintenance applicative incluse" />
          <ListItem active={true} text="Réponses aux Questions fréquentes" />
          <ListItem active={true} text="Rapport mensuel" tooltip="Rapport mensuel de suivi des réseaux sociaux" />
          <ListItem active={true} text="Conseil en IA" tooltip="Conseil en IA : automatisation, support, marketing" />
        </ul>
      </div>
    </>
  );
};