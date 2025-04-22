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
    <main className="min-h-screen overflow-x-hidden  bg-white">
      {/* Hero Section */}
      <section className="pl-[71px] w-full mx-auto pt-16 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-[53px] font-bold text-[#1f1d2c] mb-4">
              Plus de visibilité. Plus de clients. Moins de stress.
            </h1>
            <p className="text-[20px] text-gray-600 mb-6">
              Tout est pensé pour faire décoller votre business.<br />
              Site web optimisé, image professionnelle, marketing digital et automatisation
            </p>
            <div className="space-y-3 mb-8 text-[20px]">
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
            <div className="pl-4 flex flex-col gap-2.5">
              <div className="flex items-center gap-[26px]">
                <button className="bg-[#673de6] hover:bg-[#5628c5] text-white px-6 py-3 rounded-lg font-medium">
                  Découvrir nos Solutions tout-en-un
                </button>
                <div onClick={() => youtubeModalRef.current?.show()} className="flex items-center justify-center bg-[#A384FF] hover:bg-[#A384FF] size-12 !rounded-full">
                  <button className="bg-[#673de6] hover:bg-[#5628c5] size-10 !rounded-full flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={0} stroke="currentColor" className="size-10 absolute">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                    </svg>
                  </button>
                </div>
              </div>
              <p className="text-[20px] text-[#673DE6] font-bold">
                Commencer avec un expert LIADTECH
              </p>
              <p className="text-[23px] text-gray-600">
                100 % sur-mesure - Livraison rapide - Support 24/7
              </p>
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
      <TrustedByClientsSection />

      {/* Pricing Table Section */}
      <section className="py-16 px-10 mx-auto">
        <PricingTable />
      </section>

      <div className="mb-36">
        <ContentSection />
      </div>

      {/* Why Choose Section */}
      <section className="py-16 bg-gray-50 mb-36">
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

      <TestimonialsSection />

      <section className="bg-[#2D1F67] px-[62px] py-[64px] text-white flex flex-col gap-48">
        <div className="container mx-auto flex flex-col items-center gap-5">
          <div className="text-white text-5xl font-bold">
            Migration & refonte en toute sérénité
          </div>
          <div className="text-center font-light">
            Ne repartez pas de zéro.<br />
            LIADTECH récupère vos bases, les modernise, et vous fait franchir un cap digital.
          </div>
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-[#41308F] flex flex-col gap-2 items-center shadow-lg rounded-lg p-4">
              <div className="bg-[#9C51F1] rounded-md p-2 mb-2">
                <Image src={"/Liadtech/Accueil/icones/sync_svgrepo.com.svg"} width={60} height={60} alt="Rectangle 97" />
              </div>
              <span className="font-bold text-center text-[22px]">
                Contenus existants récupérés
              </span>
              <p className="text-center font-light text-[26px]">
                On reprend vos textes, visuels ou anciens sites. Aucune perte. Du neuf avec vos bases.
              </p>
            </div>
            <div className="bg-[#41308F] flex flex-col gap-2 items-center shadow-lg rounded-lg p-4">
              <div className="bg-[#9C51F1] rounded-md p-2 mb-2">
                <Image src={"/Liadtech/Accueil/icones/ruler-pencil_svgrepo.com.svg"} width={60} height={60} alt="Rectangle 97" />

              </div>
              <span className="font-bold text-center text-[22px]">
                Design & structure optimisés
              </span>
              <p className="text-center font-light text-[26px]">
                Nouveau look, SEO boosté, image professionnelle.Vous repartez plus fort.
              </p>
            </div>
            <div className="bg-[#41308F] flex flex-col gap-2 items-center shadow-lg rounded-lg p-4">
              <div className="bg-[#9C51F1] rounded-md p-2 mb-2">

                <Image src={"/Liadtech/Accueil/icones/face-smile_svgrepo.com.svg"} width={60} height={60} alt="Rectangle 97" />
              </div>
              <span className="font-bold text-center text-[22px]">
                Simplicité totale
              </span>
              <p className="text-center font-light text-[26px]">
                Vous validez, on s'occupe de tout. Sans stress, sans perte de temps.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 container mx-auto">
          <div className="flex flex-col gap-5 text-[24px] ">
            <span className="text-white text-6xl font-bold">
              Une refonte qui change tout
            </span>
            <span className="text-white text-2xl font-semibold">
              On ne se contente pas de « relooker » un site.
            </span>
            <span className="text-white text-xs font-light">
              On repense votre présence digitale pour qu'elle attire, convertisse, et vous aide à grandir.
            </span>
            <div className="flex items-center gap-2">
              <Image src={"/Liadtech/Accueil/icones/Vector 8.svg"} width={16} height={18} alt="check mark" />
              <span>
                plus rapide, mieux référencé, plus clair pour vos clients.
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Image src={"/Liadtech/Accueil/icones/Vector 8.svg"} width={16} height={18} alt="check mark" />
              <span>
                Une identité visuelle modernisée et cohérente.
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Image src={"/Liadtech/Accueil/icones/Vector 8.svg"} width={16} height={18} alt="check mark" />
              <span>
                Aucune perte de contenu, aucun stress.
              </span>
            </div>

            <span className="mt-5">
              Vous validez, on s'occupe du reste.
            </span>
          </div>
          <div className="relative">
            <span className="absolute -bottom-2 left-0 text-white font-bold text-5xl">
              Avant
            </span>
            <span className="absolute -top-2 right-0 text-white font-bold text-5xl">
              Après
            </span>
            <Image src={"/Liadtech/Accueil/section 8 before after.svg"} width={0} height={622} alt="check mark" className="w-full" />
          </div>
        </div>
      </section>


      <section>
        <div className="w-full pr-7 mx-auto grid grid-cols-2 pb-16 relative">
          <Image
            src="/Liadtech/Accueil/dashboard section 9.svg"
            width={0}
            height={0}
            alt="Dashboard Liadtech"
            className="w-full h-full relative -mt-5 z-10 scale-110 origin-top"
          />

          <div className="flex flex-col gap-5 pt-20">
            <h3 className="text-6xl font-bold text-[#2D1F67] ">Un seul espace pour tout gérer</h3>
            <p className="text-lg">
              Suivez chaque projet de votre site en temps réel depuis un espace client fluide, intuitif et sécurisé.
            </p>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <Image src={"/Liadtech/Accueil/icones/Vector 10.png"} width={16} height={18} alt="check mark" />
                <span>Avancement, tâches et échéances</span>
              </div>

              <div className="flex items-center gap-2">
                <Image src={"/Liadtech/Accueil/icones/Vector 10.png"} width={16} height={18} alt="check mark" />
                <span>Commentaires et retours simplifiés</span>
              </div>

              <div className="flex items-center gap-2">
                <Image src={"/Liadtech/Accueil/icones/Vector 10.png"} width={16} height={18} alt="check mark" />
                <span>Validations centralisées</span>
              </div>

              <div className="flex items-center gap-2">
                <Image src={"/Liadtech/Accueil/icones/Vector 10.png"} width={16} height={18} alt="check mark" />
                <span>Échanges directs avec notre équipe</span>
              </div>
            </div>

            <p className="text-sm mt-4">
              Plus besoin d'e-mails éparpillés ou d'appels inutiles : tout est regroupé, clair et sous contrôle
            </p>
          </div>
        </div>
      </section>


      {/* Support Section */}
      <section className="py-36 w-full px-14 mx-auto">
        <div className="grid grid-cols-2 gap-8 items-center">
          <div className="flex flex-col gap-3">
            <h3 className="text-5xl font-bold">
              Support & réactivité 24/7
            </h3>
            <span className="text-3xl text-[#673DE6] font-semibold">
              Toujours là quand vous avez besoin
            </span>
            <div className="flex flex-col">
              <div className="flex items-center">
                <Image src={"/Liadtech/Accueil/icones/laptop-chat.svg"} width={60} height={60} className="m-2" alt="phone-call" />

                <span>
                  Chat ou mail en -2 min
                </span>

              </div>
              <div className="flex items-center">
                <Image src={"/Liadtech/Accueil/icones/global information.svg"} width={60} height={60} className="m-2" alt="clock" />

                <span>
                  Équipe francophone, multilingue
                </span>

              </div>
              <div className="flex items-center">
                <Image src={"/Liadtech/Accueil/icones/support assistant.svg"} width={60} height={60} className="m-2" alt="clock" />
                <span>
                  Suivi dédié inclus
                </span>

              </div>
            </div>

          </div>
          <Image src={"/Liadtech/Accueil/Support section 10.svg"} width={0} height={410} className="w-full" alt="Support" />
        </div>
      </section>

      <section className="text-white py-20 w-full min-h-[130vh] bg-no-repeat bg-cover" style={{
        backgroundImage: "url('/Liadtech/Accueil/questions_bg.svg')",
        backgroundPosition: 'center',
      }}>
        <div className="container mx-auto ">
          <h2 className="!leading-[56px] !text-[52px] font-bold text-center mb-8 !text-white">Questions fréquentes</h2>
          <p className="text-[32px] text-center mb-12">
            Avant de vous lancer, voici les réponses aux questions qu'on nous pose souvent
          </p>

          <div className="grid grid-cols-1 gap-4 max-w-[1263px] w-full mx-auto">
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

      {/* Youtube video modal */}
      <Modal ref={youtubeModalRef} >
        <div className="w-full h-full">
          Youtube video
        </div>
      </Modal>
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
    <div className="w-full max-w-6xl mx-auto">
      {!hideTitle && (
        <h2 className="text-4xl font-bold text-center text-purple-900 mb-12">
          Des solutions clés en main, pour<br />chaque ambition
        </h2>
      )}

      <div className="flex flex-col md:flex-row justify-center gap-4">
        {/* Booster Card */}
        <div className="flex-1 self-start relative rounded-2xl border border-gray-200 overflow-hidden" style={{ marginTop: 46 }}
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
        <div className="flex-1 self-start relative rounded-2xl border-2 border-purple-600 overflow-hidden bg-white transform md:scale-105 z-10">
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
        <div className="flex-1 self-start relative rounded-2xl border border-gray-200 overflow-hidden" style={{ marginTop: 46 }}>
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
const ServiceItem = ({ active = false, text = '', hasInfo = false }) => {
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