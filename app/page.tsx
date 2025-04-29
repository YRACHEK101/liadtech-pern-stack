"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Shield, Zap, MessageCircle, ChevronDown, ChevronUp, Info, Minus } from "lucide-react"
import { useState, useRef } from 'react'
import { FAQItem } from "@/components/ui/faq-item";
import ContentSection from "@/components/sections/ContentSection"
import TestimonialsSection from "@/components/sections/TestimonialsSection"
import Modal, { ModalRef } from "@/components/ui/modal"
import TrustedByClientsSection from "@/components/sections/TrustedByClientsSection"
import TarifPricingPlan from "@/components/tarifs/TarifPricingPlan"
import PricingPacksSection from "@/components/sections/PricingPacksSection"
import HeroSection from "@/components/sections/HeroSection"


export default function Home() {
  // حالة لتتبع القسم النشط حاليًا
  const [activeSection, setActiveSection] = useState('web-mobile');

  const youtubeModalRef = useRef<ModalRef>(null);

  // // التبديل إلى القسم المحدد
  // const toggleSection = (section) => {
  //   setActiveSection(section);

  //   // التمرير السلس إلى القسم المحدد
  //   const element = document.getElementById(section);
  //   if (element) {
  //     element.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };

  return (
    <main className="min-h-screen overflow-x-hidden bg-white">
      {/* Hero Section */}
      <HeroSection />
      <div className="pt-8">
        {/* Trusted by clients section */}
        <TrustedByClientsSection />
      </div>





      {/* Pricing Table Section */}
      <PricingPacksSection />
      {/* <PricingTable /> */}

      <div className="mb-16 md:mb-28 lg:mb-44 pt-16">
        <ContentSection />
      </div>

      <section className="bg-[#2D1F67] pt-14 lg:pt-[64px] mb-16 md:mb-24 lg:mb-36 pb-12 md:pb-24 lg:pb-[159px] text-white flex flex-col gap-16 md:gap-32 lg:gap-48">
        <div className="px-4 md:px-10 xl:!max-w-[1208px] w-full lg:mx-auto flex flex-col ">
          <div className="text-white text-2xl mb-6 md:text-[28px] md:leading-[36px] lg:text-4xl self-center font-bold text-center">
            Migration & refonte en toute sérénité
          </div>
          <div className="text-center font-normal mb-8 md:mb-12">
            Ne repartez pas de zéro.<br />
            LIADTECH récupère vos bases, les modernise, et vous fait franchir un cap digital.
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-[688px] lg:max-w-full w-full mx-auto ">
            <div className="bg-[#41308F] flex flex-col gap-2 shadow-lg rounded-xl p-8">
              <div className="bg-[#9C51F1] rounded-lg p-2 mb-2 self-start">
                <Image src={"/Liadtech/Accueil/icones/sync_svgrepo.com.svg"} width={24} height={24} alt="Rectangle 97" />
              </div>
              <span className="font-bold  text-lg">
                Contenus existants récupérés
              </span>
              <p className=" font-normal ">
                On reprend vos textes, visu Du neuf avec vos bases.
              </p>
            </div>
            <div className="bg-[#41308F] flex flex-col gap-2 shadow-lg rounded-xl p-8">
              <div className="bg-[#9C51F1] rounded-lg p-2 mb-2 self-start">
                <Image src={"/Liadtech/Accueil/icones/ruler-pencil_svgrepo.com.svg"} width={24} height={24} alt="Rectangle 97" />

              </div>
              <span className="font-bold  text-lg">
                Design & structure optimisés
              </span>
              <p className=" font-normal text-base ">
                Nouveau look, SEO boosté, image professionnelle.Vous repartez plus fort.
              </p>
            </div>
            <div className="bg-[#41308F] flex flex-col gap-2 shadow-lg rounded-xl p-8">
              <div className="bg-[#9C51F1] rounded-lg p-2 mb-2 self-start">

                <Image src={"/Liadtech/Accueil/icones/face-smile_svgrepo.com.svg"} width={24} height={24} alt="Rectangle 97" />
              </div>
              <span className="font-bold  text-lg">
                Simplicité totale
              </span>
              <p className=" font-normal text-base ">
                Vous validez, on s'occupe de tout. Sans stress, sans perte de temps.
              </p>
            </div>
          </div>
        </div>
        <div className="grid w-full grid-cols-1 lg:grid-cols-2 px-4 sm:px-10 !max-w-[1208px] sm:mx-auto gap-8">
          <div className="flex flex-col gap-5 text-base md:text-lg lg:text-[24px]">
            <span className="text-white text-2xl md:text-[28px] leading-[36px] lg:text-4xl  font-bold">
              Une refonte qui change tout
            </span>
            <span className="text-white text-2xl md:text-[28px] leading-[36px] lg:text-4xl  font-semibold">
              On ne se contente pas de « relooker » un site.
            </span>
            <span className="text-white text-sm font-light">
              On repense votre présence digitale pour qu'elle attire, convertisse, et vous aide à grandir.
            </span>
            <div className="flex items-center gap-2 text-lg font-normal">
              <Image src={"/Liadtech/Accueil/icones/Vector 8.svg"} width={0} height={0} alt="check mark" className="self-start !size-3 mt-2" />
              <span>
                plus rapide, mieux référencé, plus clair pour vos clients.
              </span>
            </div>
            <div className="flex items-center gap-2 text-lg font-normal">
              <Image src={"/Liadtech/Accueil/icones/Vector 8.svg"} width={0} height={0} alt="check mark" className="self-start !size-3 mt-2" />
              <span>
                Une identité visuelle modernisée et cohérente.
              </span>
            </div>
            <div className="flex items-center gap-2 text-lg font-normal">
              <Image src={"/Liadtech/Accueil/icones/Vector 8.svg"} width={0} height={0} alt="check mark" className="self-start !size-3 mt-2" />
              <span>
                Aucune perte de contenu, aucun stress.
              </span>
            </div>
            <span className="mt-5 text-lg font-normal">
              Vous validez, on s'occupe du reste.
            </span>
          </div>
          <div className="relative self-start">
            <span className="absolute -bottom-2 left-0 text-white font-bold text-2xl sm:text-5xl lg:text-3xl xl:text-5xl">
              Avant
            </span>
            <span className="absolute -top-2 right-0 text-white font-bold text-2xl sm:text-5xl lg:text-3xl xl:text-5xl">
              Après
            </span>
            <Image src={"/Liadtech/Accueil/section 8 before after.svg"} width={0} height={622} alt="check mark" className="w-full" />
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="bg-gray-50 mb-16 md:mb-24 lg:mb-36 py-8 md:py-12">
        <div className="container mx-auto px-1 flex flex-col items-center">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">Pourquoi choisir LIADTECH ?</h2>
          <p className="text-center text-gray-600 mb-8 md:mb-12">Rapide. Fiable. Créatif.</p>

          <Image
            src="/images/Pourquoi-choisir.svg"
            alt="Pourquoi choisir LIADTECH"
            width={0}
            height={0}
            className="w-full h-full  max-w-[1263px] max-h-[897px] sm:ml-20"
          />
        </div>
      </section>

      <TestimonialsSection />

      <section className="bg-[#fafbff]">
        <div className="w-full container !px-4 pt-10 mx-auto lg:pr-7 grid grid-cols-1 lg:grid-cols-2 pb-8 mb-10 relative gap-8 xl:gap-0">

          <Image
            src="/Liadtech/Accueil/dashboard section 9.svg"
            width={0}
            height={0}
            alt="Dashboard Liadtech"
            className="w-full h-auto lg:-mt-5 order-2 lg:order-1"
          />

          <div className="flex flex-col gap-5 order-1 lg:order-2 lg:pl-5">
            <span className='py-1 px-3 self-start rounded-full text-[#2D1F67] font-bold bg-[#d5dfff]'>
              EASY TO USE DASHBOARD
            </span>
            <h3 className="text-2xl md:text-[28px] leading-[36px] lg:text-4xl font-bold text-[#2D1F67]">Un seul espace pour tout gérer</h3>
            <p className="text-[#2D1F67] font-normal">
              Suivez chaque projet de votre site en temps réel depuis un espace client fluide, intuitif et sécurisé.
            </p>

            <div className="flex flex-col gap-4 text-[#2D1F67] text-base font-normal ">
              <div className="flex items-center gap-2">
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="text-[#00b090]">
                  <path fill="currentColor" d="M21.046 5.955c.439.439.439 1.151 0 1.59l-9.538 9.539a1.425 1.425 0 0 1-2.016 0l-4.288-4.288a1.125 1.125 0 0 1 1.591-1.591l3.705 3.704 8.954-8.954c.44-.44 1.152-.44 1.591 0Z"></path>
                </svg>
                <span>Avancement, tâches et échéances</span>
              </div>

              <div className="flex items-center gap-2">
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="text-[#00b090]">
                  <path fill="currentColor" d="M21.046 5.955c.439.439.439 1.151 0 1.59l-9.538 9.539a1.425 1.425 0 0 1-2.016 0l-4.288-4.288a1.125 1.125 0 0 1 1.591-1.591l3.705 3.704 8.954-8.954c.44-.44 1.152-.44 1.591 0Z"></path>
                </svg>
                <span>Commentaires et retours simplifiés</span>
              </div>

              <div className="flex items-center gap-2">
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="text-[#00b090]">
                  <path fill="currentColor" d="M21.046 5.955c.439.439.439 1.151 0 1.59l-9.538 9.539a1.425 1.425 0 0 1-2.016 0l-4.288-4.288a1.125 1.125 0 0 1 1.591-1.591l3.705 3.704 8.954-8.954c.44-.44 1.152-.44 1.591 0Z"></path>
                </svg>
                <span>Validations centralisées</span>
              </div>

              <div className="flex items-center gap-2">
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="text-[#00b090]">
                  <path fill="currentColor" d="M21.046 5.955c.439.439.439 1.151 0 1.59l-9.538 9.539a1.425 1.425 0 0 1-2.016 0l-4.288-4.288a1.125 1.125 0 0 1 1.591-1.591l3.705 3.704 8.954-8.954c.44-.44 1.152-.44 1.591 0Z"></path>
                </svg>
                <span>Échanges directs avec notre équipe</span>
              </div>
            </div>

            <p className="text-[#2D1F67] text-base font-normal mt-4">
              Plus besoin d'e-mails éparpillés ou d'appels inutiles : tout est regroupé, clair et sous contrôle
            </p>
          </div>
        </div>
      </section>


      {/* Support Section */}
      <section className="pb-16 md:pb-24 lg:pb-36 w-full px-4 sm:container sm:px-28 xl:px-4  mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-8 lg:gap-0">
          <div className="flex flex-col gap-3 text-[#2D1F67] text-base font-normal lg:pl-20">
            <h3 className="text-2xl md:text-[28px] leading-[36px] lg:text-4xl  font-bold">
              Support & réactivité 24/7
            </h3>
            <span className=" text-[#673DE6] font-normal">
              Toujours là quand vous avez besoin
            </span>
            <div className="flex flex-col">
              <div className="flex items-center">
                <Image src={"/Liadtech/Accueil/icones/laptop-chat.svg"} width={40} height={40} className="m-2" alt="phone-call" />

                <span>
                  Chat ou mail en -2 min
                </span>

              </div>
              <div className="flex items-center">
                <Image src={"/Liadtech/Accueil/icones/global information.svg"} width={40} height={40} className="m-2" alt="clock" />

                <span>
                  Équipe francophone, multilingue
                </span>

              </div>
              <div className="flex items-center">
                <Image src={"/Liadtech/Accueil/icones/support assistant.svg"} width={40} height={40} className="m-2" alt="clock" />
                <span>
                  Suivi dédié inclus
                </span>

              </div>
            </div>

          </div>
          <Image src={"/Liadtech/Accueil/Support section 10.svg"} width={0} height={0} className="w-auto h-auto" alt="Support" />
        </div>
      </section>

      <section className="text-white py-16 md:py-20 w-full min-h-0 md:min-h-[80vh] lg:min-h-[100vh] bg-no-repeat bg-cover" style={{
        backgroundImage: "url('/Liadtech/Accueil/questions_bg.svg')",
        backgroundPosition: 'center',
      }}>
        <div className="container mx-auto px-4">
          <h2 className=" text-2xl md:text-[28px] leading-[36px] lg:text-4xl  font-bold text-center mb-4 md:mb-8 !text-white">Questions fréquentes</h2>
          <p className=" text-center mb-8 md:mb-12 font-normal">
            Avant de vous lancer, voici les réponses aux questions qu'on nous pose souvent
          </p>

          <div className="grid grid-cols-1 gap-4 max-w-full md:max-w-[1263px] w-full mx-auto">
            <FAQItem
              question="Est-ce que je peux vraiment tout faire avec un seul prestataire ?"
              answer="Oui. Chez LIADTECH, on centralise tout : site web, logo, vidéo explicative, marketing digital, réseaux sociaux... Vous avez un seul interlocuteur, un seul espace de suivi, et une vision claire de votre projet."
            />

            <FAQItem
              question="J'ai déjà un site ou une identité visuelle. Que faire ?"
              answer="On peut partir de l'existant et l'améliorer, ou créer quelque chose de nouveau tout en gardant votre ADN. Notre équipe s'adapte à vos besoins et votre budget."
            />

            <FAQItem
              question="En combien de temps le projet est-il livré ?"
              answer="Les délais varient selon la complexité : 2-3 semaines pour un site vitrine, 4-8 semaines pour un e-commerce ou une solution personnalisée. On définit ensemble un planning précis dès le début."
            />

            <FAQItem
              question="Dois-je m'y connaître en technique ou en design ?"
              answer="Non, notre équipe s'occupe de tout. On vous guide à chaque étape et on traduit vos besoins en solutions concrètes. Vous gardez le contrôle sans avoir besoin de compétences techniques."
            />

            <FAQItem
              question="Que se passe-t-il après la livraison ?"
              answer="On reste à vos côtés ! Support technique, maintenance, évolutions... Nos forfaits incluent un suivi post-livraison et vous pouvez toujours compter sur nous pour faire évoluer votre projet."
            />

            <FAQItem
              question="Puis-je commencer petit et évoluer ensuite ?"
              answer="Absolument ! Nos solutions sont modulables et évolutives. Commencez avec l'essentiel et ajoutez des fonctionnalités au fil du temps, selon vos besoins et votre croissance."
            />
          </div>
        </div>
      </section>

      {/* Mission Section */}
      {/* <section className="py-16 bg-gray-50">
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
      </section> */}


    </main>
  )
}

// Pricing Table Component
export function PricingTable({ hideTitle = false }) {
  const [expandedCards, setExpandedCards] = useState({
    booster: false,
    premium: false,
    ultimate: false
  });

  const toggleCard = (card: keyof typeof expandedCards) => {
    setExpandedCards(prev => ({
      ...prev,
      [card]: !prev[card]
    }));
  };


  return (
    <div className="w-full max-w-6xl mx-auto py-8 sm:py-12 lg:py-16 px-4">
      {!hideTitle && (
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2D1F67] mb-4">
            Des solutions clés en main, pour chaque ambition
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Choisissez le plan qui correspond le mieux à vos besoins
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {/* Booster Card */}
        <div className="relative bg-white rounded-2xl border border-gray-200 overflow-hidden transform hover:shadow-lg transition-all duration-300">
          <div className="p-6 sm:p-8">
            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-[#2D1F67] mb-2">Booster</h3>
              <p className="text-gray-600">Idéal pour se lancer proprement</p>
            </div>

            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-gray-400 line-through text-lg">1750€</span>
                <span className="bg-[#e6f2ff] text-[#673de6] text-xs px-2 py-1 rounded-full font-medium">ÉCONOMISEZ 44%</span>
              </div>
              <div className="flex items-baseline">
                <span className="text-4xl sm:text-5xl font-bold text-[#2D1F67]">990€</span>
                <span className="text-gray-600 ml-2">/mois</span>
              </div>
            </div>

            <a href="/Checkout?productId=1"
              className="block w-full py-3 px-4 bg-white border-2 border-[#673de6] text-[#673de6] rounded-lg font-medium text-center mb-8 hover:bg-[#673de6] hover:text-white transition-colors duration-300">
              Sélectionner
            </a>

            <div className="space-y-4">
              <h4 className="font-semibold text-[#2D1F67]">Ce qui est inclus :</h4>
              <ul className="space-y-3">
                <ServiceItem active={true} text="Audit basique" />
                <ServiceItem active={true} text="Refonte améliorée (1 à 5 pages)" />
                <ServiceItem active={true} text="Design responsive (mobile/tablette)" />
                <ServiceItem active={true} text="Sécurité HTTPS + performance basique" />
                <ServiceItem active={true} text="1 formulaire de contact intégré" />
                <ServiceItem active={false} text="Blog ou page actualités" />
                <ServiceItem active={false} text="Design personnalisé" />
                <ServiceItem active={false} text="Optimisation de la vitesse" />
                <ServiceItem active={false} text="Tracking avancé" />
              </ul>
            </div>

            {expandedCards.booster && (
              <div className="mt-6">
                <ExpandedCardContent />
              </div>
            )}

            <button
              onClick={() => toggleCard('booster')}
              className="flex items-center justify-center w-full mt-6 text-[#673de6] font-medium"
            >
              {expandedCards.booster ? 'Voir moins' : 'Voir plus'}
              {expandedCards.booster ? <ChevronUp className="ml-2 h-5 w-5" /> : <ChevronDown className="ml-2 h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Premium Card */}
        <div className="relative bg-white rounded-2xl border-2 border-[#673de6] overflow-hidden transform hover:shadow-lg transition-all duration-300 md:scale-105 z-10">
          <div className="bg-[#673de6] text-white text-center py-2 font-medium">
            Le plus populaire
          </div>
          <div className="p-6 sm:p-8">
            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-[#2D1F67] mb-2">Premium</h3>
              <p className="text-gray-600">Pour une présence professionnelle forte</p>
            </div>

            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-gray-400 line-through text-lg">3000€</span>
                <span className="bg-[#e6f2ff] text-[#673de6] text-xs px-2 py-1 rounded-full font-medium">ÉCONOMISEZ 34%</span>
              </div>
              <div className="flex items-baseline">
                <span className="text-4xl sm:text-5xl font-bold text-[#2D1F67]">1990€</span>
                <span className="text-gray-600 ml-2">/mois</span>
              </div>
            </div>

            <a href="/Checkout?productId=2"
              className="block w-full py-3 px-4 bg-[#673de6] text-white rounded-lg font-medium text-center mb-8 hover:bg-[#5028d9] transition-colors duration-300">
              Sélectionner
            </a>

            <div className="space-y-4">
              <h4 className="font-semibold text-[#2D1F67]">Ce qui est inclus :</h4>
              <ul className="space-y-3">
                <ServiceItem active={true} text="Audit complet" />
                <ServiceItem active={true} text="Refonte améliorée (6 à 10 pages)" />
                <ServiceItem active={true} text="Design responsive (mobile/tablette)" />
                <ServiceItem active={true} text="Sécurité renforcée + SEO technique" />
                <ServiceItem active={true} text="2 formulaires (contact, devis)" />
                <ServiceItem active={true} text="Blog ou page actualités" />
                <ServiceItem active={true} text="Design personnalisé" />
                <ServiceItem active={false} text="Optimisation de la vitesse" />
                <ServiceItem active={false} text="Tracking avancé" />
              </ul>
            </div>

            {expandedCards.premium && (
              <div className="mt-6">
                <ExpandedCardContent />
              </div>
            )}

            <button
              onClick={() => toggleCard('premium')}
              className="flex items-center justify-center w-full mt-6 text-[#673de6] font-medium"
            >
              {expandedCards.premium ? 'Voir moins' : 'Voir plus'}
              {expandedCards.premium ? <ChevronUp className="ml-2 h-5 w-5" /> : <ChevronDown className="ml-2 h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Ultimate Card */}
        <div className="relative bg-white rounded-2xl border border-gray-200 overflow-hidden transform hover:shadow-lg transition-all duration-300">
          <div className="p-6 sm:p-8">
            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-[#2D1F67] mb-2">Ultimate</h3>
              <p className="text-gray-600">Pour scaler avec une vraie stratégie</p>
            </div>

            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-gray-400 line-through text-lg">5500€</span>
                <span className="bg-[#e6f2ff] text-[#673de6] text-xs px-2 py-1 rounded-full font-medium">ÉCONOMISEZ 39%</span>
              </div>
              <div className="flex items-baseline">
                <span className="text-4xl sm:text-5xl font-bold text-[#2D1F67]">3390€</span>
                <span className="text-gray-600 ml-2">/mois</span>
              </div>
            </div>

            <a href="/Checkout?productId=3"
              className="block w-full py-3 px-4 bg-white border-2 border-[#673de6] text-[#673de6] rounded-lg font-medium text-center mb-8 hover:bg-[#673de6] hover:text-white transition-colors duration-300">
              Sélectionner
            </a>

            <div className="space-y-4">
              <h4 className="font-semibold text-[#2D1F67]">Ce qui est inclus :</h4>
              <ul className="space-y-3">
                <ServiceItem active={true} text="Audit complet" />
                <ServiceItem active={true} text="Refonte améliorée (10+ pages)" />
                <ServiceItem active={true} text="Design responsive (mobile/tablette)" />
                <ServiceItem active={true} text="Sécurité renforcée + SEO avancé" />
                <ServiceItem active={true} text="Formulaires illimités" />
                <ServiceItem active={true} text="Blog ou page actualités" />
                <ServiceItem active={true} text="Design personnalisé premium" />
                <ServiceItem active={true} text="Optimisation de la vitesse" />
                <ServiceItem active={true} text="Tracking avancé" />
              </ul>
            </div>

            {expandedCards.ultimate && (
              <div className="mt-6">
                <ExpandedCardContent />
              </div>
            )}

            <button
              onClick={() => toggleCard('ultimate')}
              className="flex items-center justify-center w-full mt-6 text-[#673de6] font-medium"
            >
              {expandedCards.ultimate ? 'Voir moins' : 'Voir plus'}
              {expandedCards.ultimate ? <ChevronUp className="ml-2 h-5 w-5" /> : <ChevronDown className="ml-2 h-5 w-5" />}
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
const ServiceItem = ({ active = false, text = '', hasInfo = false }) => {
  return (
    <li className="flex items-start gap-3">
      {active ? (
        <svg width="20" height="20" viewBox="0 0 20 20" className="flex-shrink-0 mt-1">
          <circle cx="10" cy="10" r="10" fill="#E6F2FF" />
          <path d="M14 7L8.5 12.5L6 10" stroke="#673de6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ) : (
        <svg width="20" height="20" viewBox="0 0 20 20" className="flex-shrink-0 mt-1">
          <circle cx="10" cy="10" r="10" fill="#F5F5F5" />
          <path d="M7 10H13" stroke="#999999" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )}
      <span className={`text-sm ${active ? 'text-[#2D1F67]' : 'text-gray-500'}`}>
        {text}
        {hasInfo && <Info className="inline-block ml-1 w-4 h-4 text-gray-400" />}
      </span>
    </li>
  );
};

// Pour la rétrocompatibilité, gardons ces composants également
const ListItem = ({ active = false, text = '', tooltip = '' }) => {
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