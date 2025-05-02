import { PricingTable } from '@/app/page'
import SocialMediaVerticalIcons from '@/components/common/SocialMediaVerticalIcons'
import PricingPacksSection from '@/components/sections/PricingPacksSection'
import TrustedByClientsSection from '@/components/sections/TrustedByClientsSection'
import TarifPricingPlan from '@/components/tarifs/TarifPricingPlan'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const sitesTypes = [
    {
        title: 'Site vitrine professionnel',
        description: 'Idéal pour présenter votre activité, vos services, vos contacts. Simple, clair et efficace.',
    },
    {
        title: 'Site e-commerce',
        description: 'Vendez en ligne avec un panier sécurisé, gestion de produits, paiements intégrés.'
    },
    {
        title: 'Landing page / page de campagne',
        description: 'Parfait pour une pub ciblée ou un lancement produit. Rapide à mettre en place, optimisée pour la conversion.'
    },
    {
        title: 'Blog professionnel ou site de contenu',
        description: 'SEO-friendly, idéal pour attirer du trafic qualifié régulièrement.'
    },
    {
        title: 'Application web légère ou mini plateforme',
        description: 'Outil interne, dashboard client, extranet ou service sur mesure.'
    },
    {
        title: 'Site WordPress administrable',
        description: 'Facile à gérer, évolutif, idéal pour les clients autonomes.'
    },
    {
        title: 'Site full custom en MERN Stack',
        description: 'Pour les projets avancés, complexes ou à forte logique métier '
    }
]

const sitesFeatures = [
    'SEO & Blogging – Contenus optimisés, netlinking, stratégie sémantique',
    'Gestion réseaux sociaux – Calendrier éditorial, création visuels & textes, cohérence de marque',
    'Campagnes publicitaires – Meta, Google, TikTok',
    'Branding digital – Une image claire, forte, reconnaissable',
    "A/B Testing & Reporting – Analyses régulières, réunions et recommandations d'optimisation",
]

const page = () => {
    return (
        <div>
            <div className='bg-[#2D1F67]'>
                <section className='relative bg-[#2D1F67] overflow-hidden gap-10 sm:gap-0 lg:gap-20 grid grid-cols-1 container mx-auto lg:grid-cols-2 px-4 md:px-[42px] pb-12 lg:py-10'>
                    <div className='flex flex-col text-white self-center pt-8 lg:pt-0'>
                        <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold !text-left !text-white'>
                            Plus qu'une présence en ligne: une machine à générer des clients.
                        </h2>
                        <span className='text-base sm:text-lg text-white mb-4 sm:mb-6 font-bold'>
                            Nous transformons votre visibilité digitale en résultats concrets
                        </span>
                        <span className='text-base sm:text-lg text-white mb-4 sm:mb-16 font-normal'>
                            grâce à une stratégie complète de contenus, campagnes publicitaires, SEO… et gestion de vos réseaux sociaux
                        </span>
                    </div>
                    <Image src="/images/digital marketing.svg" width={0} height={0} className='w-auto h-auto mb-5 mx-auto' alt='hero' />
                    <SocialMediaVerticalIcons className='absolute bottom-5 right-0' />
                </section>
            </div>
            <TrustedByClientsSection />
            {/* Pricing Table Section */}
            <PricingPacksSection />

            <section className='px-4 md:pl-10 grid grid-cols-1 gap-7  sm:gap-20 mb-16 container mx-auto lg:grid-cols-2 py-12 lg:py-10'>
                <div className='flex flex-col gap-6 pt-8 self-center text-[#2D1F67]'>
                    <div className='text-2xl sm:text-3xl lg:text-4xl font-bold'>
                        Notre approche stratégique
                    </div>
                    <div className='font-bold text-base sm:text-lg'>
                        Une stratégie digitale qui transforme les clics… en clients.
                    </div>
                    <div className='text-base sm:text-lg font-normal'>
                        Analyse de votre marché, positionnement, objectifs… Pas de posts inutiles, pas de pubs jetées au hasard. Une stratégie sur-mesure, testée, mesurée, ajustée chaque semaine.
                    </div>
                </div>
                <Image src="/images/digital marketing Section 1.svg" width={0} height={0} className='w-auto h-auto mb-5 mx-auto' alt='hero' />
            </section>
            <section className='px-4 md:px-10 grid grid-cols-1 gap-10 sm:gap-20 container mx-auto lg:grid-cols-2'>
                <Image src="/images/Blogging et contenu 3.svg" width={0} height={0} className='w-auto h-auto mb-5 origin-left z-0 order-2 md:order-1' alt='hero' />
                <div className='flex flex-col z-10 order-1 md:order-2'>
                    <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold !text-left mb-9'>
                        Ce que vous gagnez avec nos Bénéfice
                    </h2>
                    <div className='flex flex-col gap-6 md:gap-8'>
                        <div className='flex items-center gap-3'>
                            <span className='size-[42px] bg-gray-300 rounded-full' ></span>
                            <div className='flex-1 flex flex-col'>
                                <span className='font-bold text-base sm:text-lg text-[#2D1F67] '>
                                    Visibilité accrue
                                </span>
                                <span className='text-sm md:text-base'>
                                    Vous êtes vu par les bonnes personnes, au bon moment
                                </span>
                            </div>
                        </div>
                        <div className='flex items-center gap-3'>
                            <span className='size-[42px] bg-gray-300 rounded-full' ></span>
                            <div className='flex-1 flex flex-col'>
                                <span className='font-bold text-base sm:text-lg text-[#2D1F67] '>
                                    Leads qualifiés
                                </span>
                                <span className='text-sm md:text-base'>
                                    Pas juste du trafic : des vrais prospects
                                </span>
                            </div>
                        </div>
                        <div className='flex items-center gap-3'>
                            <span className='size-[42px] bg-gray-300 rounded-full' ></span>
                            <div className='flex-1 flex flex-col'>
                                <span className='font-bold text-base sm:text-lg text-[#2D1F67] '>
                                    Gain de temps
                                </span>
                                <span className='text-sm md:text-base'>
                                    On gère tout, vous vous concentrez sur votre activité
                                </span>
                            </div>
                        </div>
                        <div className='flex items-center gap-3'>
                            <span className='size-[42px] bg-gray-300 rounded-full' ></span>
                            <div className='flex-1 flex flex-col'>
                                <span className='font-bold text-base sm:text-lg text-[#2D1F67] '>
                                    Expertise + IA
                                </span>
                                <span className='text-sm md:text-base'>
                                    Analyse, IA, automatisations intelligentes
                                </span>
                            </div>
                        </div>
                        <div className='flex items-center gap-3'>
                            <span className='size-[42px] bg-gray-300 rounded-full' ></span>
                            <div className='flex-1 flex flex-col'>
                                <span className='font-bold text-base sm:text-lg text-[#2D1F67] '>
                                    Suivi & ajustement
                                </span>
                                <span className='text-sm md:text-base'>
                                    Reporting clair et optimisations régulières
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='px-4 md:px-10 grid grid-cols-1 gap-10 sm:gap-20 container mx-auto lg:grid-cols-2 py-12 lg:py-10'>
                <div className='flex flex-col gap-6 self-center text-[#2D1F67]'>
                    <div className='text-2xl sm:text-3xl lg:text-4xl font-bold'>
                        Nos services inclus
                    </div>
                    <div className='flex flex-col gap-4 '>
                        {sitesFeatures.map((site, index) => (
                            <div key={index} className='flex  gap-3'>
                                <svg width="14" height="15" viewBox="0 0 14 15" className='mt-2' fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2L5.63636 13L2 7.4127" stroke="#60BB6F" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <div className='flex flex-col text-base sm:text-lg'>
                                    <span className=''>{site}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <Image src="/images/Bloggin et contenu 2.svg" width={0} height={0} className='w-auto h-auto mx-auto' alt='hero' />
            </section>
            <section className='bg-[#DDBFFF]'>
                <div className='grid grid-cols-1 sm:container sm:mx-auto lg:grid-cols-2 py-12 lg:py-10 gap-5 lg:gap-20'>
                    <Image src="/images/digital marketing Section 2.svg" width={0} height={0} className='w-auto h-auto mx-auto  z-0 order-2 md:order-1' alt='hero' />
                    <div className='flex flex-col pt-8 lg:pt-28 z-10 order-1 md:order-2 px-4 md:px-0'>
                        <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold !text-left mb-9'>
                            Pourquoi choisir LIADTECH
                        </h2>

                        <div className='flex flex-col gap-6 md:gap-8 lg:pl-2'>
                            <div className='flex items-center gap-3'>
                                <span className='size-[42px] bg-gray-300 rounded-full' ></span>
                                <div className='flex-1 flex flex-col'>
                                    <span className='font-medium text-base sm:text-lg text-[#2D1F67] '>
                                        Stratégie 360° centrée conversion
                                    </span>
                                </div>
                            </div>
                            <div className='flex items-center gap-3'>
                                <span className='size-[42px] bg-gray-300 rounded-full' ></span>
                                <div className='flex-1 flex flex-col'>
                                    <span className='font-medium text-base sm:text-lg text-[#2D1F67] '>
                                        Équipe multidisciplinaire (dev, pub, contenu, graphisme, SEO)
                                    </span>
                                </div>
                            </div>
                            <div className='flex items-center gap-3'>
                                <span className='size-[42px] bg-gray-300 rounded-full' ></span>
                                <div className='flex-1 flex flex-col'>
                                    <span className='font-medium text-base sm:text-lg text-[#2D1F67] '>
                                        Suivi régulier, résultats mesurés
                                    </span>
                                </div>
                            </div>
                            <div className='flex items-center gap-3'>
                                <span className='size-[42px] bg-gray-300 rounded-full' ></span>
                                <div className='flex-1 flex flex-col'>
                                    <span className='font-medium text-base sm:text-lg text-[#2D1F67] '>
                                        Expertise avancée en acquisition & croissance digitale
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-1 sm:container sm:mx-auto lg:grid-cols-2 px-4 lg:px-16 py-8 lg:pb-20 gap-10 sm:gap-20'>
                    <div className='flex flex-col gap-4 self-center'>
                        <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold !text-left'>
                            Passez à l'action dès maintenant.
                        </h2>
                        <h3 className='text-base sm:text-lg font-medium text-[#2D1F67]'>
                            Confiez-nous votre stratégie digitale, et observez les résultats.
                        </h3>
                        <Link href="/create-my-app-mobile" className="bg-[#673de6] self-start hover:bg-[#5735bc] text-white rounded-lg px-[31px] py-[10px]">
                            Créer ma stratégie digitale sur mesure
                        </Link>
                    </div>
                    <Image src="/images/Marketing digital.svg" width={0} height={0} className='w-auto h-auto z-0 mx-auto py-10 lg:py-0' alt='hero' />
                </div>
            </section>


        </div>
    )
}

export default page