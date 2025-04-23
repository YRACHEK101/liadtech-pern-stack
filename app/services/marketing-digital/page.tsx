import { PricingTable } from '@/app/page'
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
    'A/B Testing & Reporting – Analyses régulières, réunions et recommandations d’optimisation',
]

const page = () => {
    return (
        <div>
            <section className='bg-[#2D1F67] overflow-hidden grid grid-cols-2 px-[42px]'>
                <div className='flex flex-col text-white self-center '>
                    <h2 className='!leading-[56px] !text-[52px] font-bold !text-left !text-white'>
                        Plus qu’une présence en ligne : une machine à générer des clients.
                    </h2>
                    <span className=' text-[22px] mb-9  '>
                        Nous transformons votre visibilité digitale en résultats concrets, grâce à une stratégie complète de contenus, campagnes publicitaires, SEO… et gestion de vos réseaux sociaux
                    </span>
                </div>
                <Image src="/images/digital marketing.svg" width={0} height={0} className='w-auto h-auto mb-5' alt='hero' />
            </section>
            <TrustedByClientsSection />
            {/* Pricing Table Section */}
            <section className=' py-12 px-6 flex flex-col items-center'>
                <span className='font-bold text-[59px] text-[#2D1F67] mb-2'>
                    Choisissez votre pack Studio Créatif avec Liadtech
                </span>
                <span className='text-[32px] font-light text-[#2D1F67] mb-8'>
                    Des animations pensées pour captiver, valoriser et faire rayonner votre message.
                </span>
                <TarifPricingPlan plans={[
                    'Digital Marketing',
                    'Studio Créatif',
                    'Cloud, SaaS & Support'
                ]} />

                <span className='text-[26px] font-light text-[#673DE6] my-4'>
                    Conditions de paiement
                </span>

            </section>

            <section className='pl-10 grid grid-cols-2'>
                <div className='flex flex-col gap-6 pt-[151px] text-[#2D1F67] '>
                    <div className='text-6xl font-bold'>
                        Notre approche stratégique
                    </div>
                    <div className='font-bold text-2xl '>
                        Une stratégie digitale qui transforme les clics… en clients.
                    </div>
                    <div >
                        Analyse de votre marché, positionnement, objectifs… Pas de posts inutiles, pas de pubs jetées au hasard. Une stratégie sur-mesure, testée, mesurée, ajustée chaque semaine.
                    </div>
                </div>
                <Image src="/images/digital marketing Section 1.svg" width={0} height={0} className='w-auto h-auto mb-5' alt='hero' />
            </section>
            <section className='px-10 grid grid-cols-2'>
                <Image src="/images/Blogging et contenu 3.svg" width={0} height={0} className='w-auto h-auto mb-5  origin-left z-0' alt='hero' />
                <div className='flex flex-col   z-10'>
                    <h2 className='!leading-[56px] !text-[52px] font-bold !text-left mb-9'>
                        Ce que vous gagnez avec nos Bénéfice
                    </h2>

                    <div className='flex flex-col gap-8'>
                        <div className='flex items-center gap-3'>
                            <span className='w-20' ></span>
                            <div className='flex-1 flex flex-col'>
                                <span className='font-bold text-[24px] text-[#2D1F67] '>
                                    Visibilité accrue
                                </span>
                                <span>
                                    Vous êtes vu par les bonnes personnes, au bon moment
                                </span>
                            </div>

                        </div>
                        <div className='flex items-center gap-3'>
                            <span className='w-20' ></span>


                            <div className='flex-1 flex flex-col'>
                                <span className='font-bold text-[24px] text-[#2D1F67] '>
                                    Leads qualifiés
                                </span>
                                <span>
                                    Pas juste du trafic : des vrais prospects
                                </span>
                            </div>

                        </div>
                        <div className='flex items-center gap-3'>
                            <span className='w-20' ></span>

                            <div className='flex-1 flex flex-col'>
                                <span className='font-bold text-[24px] text-[#2D1F67] '>
                                    Gain de temps
                                </span>
                                <span>
                                    On gère tout, vous vous concentrez sur votre activité
                                </span>
                            </div>

                        </div>
                        <div className='flex items-center gap-3'>
                            <span className='w-20' ></span>

                            <div className='flex-1 flex flex-col    '>
                                <span className='font-bold text-[24px] text-[#2D1F67] '>
                                    Expertise + IA
                                </span>
                                <span>
                                    Analyse, IA, automatisations intelligentes
                                </span>
                            </div>

                        </div>
                        <div className='flex items-center gap-3'>
                            <span className='w-20' ></span>

                            <div className='flex-1 flex flex-col    '>
                                <span className='font-bold text-[24px] text-[#2D1F67] '>
                                    Suivi & ajustement
                                </span>
                                <span>
                                    Reporting clair et optimisations régulières
                                </span>
                            </div>

                        </div>

                    </div>
                </div>

            </section>

            <section className='pl-10 grid grid-cols-2 pb-10'>
                <div className='flex flex-col gap-6 !pt-[151px] text-[#2D1F67] '>
                    <div className='text-6xl font-bold'>
                        Nos services inclus
                    </div>
                    <div className='flex flex-col gap-4 '>
                        {sitesFeatures.map((site, index) => (
                            <div key={index} className='flex  gap-3'>
                                <svg width="14" height="15" viewBox="0 0 14 15" className='mt-2' fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2L5.63636 13L2 7.4127" stroke="#60BB6F" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <div className='flex flex-col'>
                                    <span className=''>{site}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <Image src="/images/Bloggin et contenu 2.svg" width={0} height={0} className='w-auto h-auto mb-5  origin-left z-0' alt='hero' />
            </section>
            <section className='bg-[#DDBFFF] '>
                <div className='grid grid-cols-2 '>
                    <Image src="/images/digital marketing Section 2.svg" width={0} height={0} className='w-auto h-auto mb-5  origin-left z-0' alt='hero' />
                    <div className='flex flex-col pt-28  z-10'>
                        <h2 className='!leading-[56px] !text-[52px] font-bold !text-left mb-9'>
                            Pourquoi choisir LIADTECH
                        </h2>

                        <div className='flex flex-col gap-8'>
                            <div className='flex items-center gap-3'>
                                <span className='w-20' ></span>
                                <div className='flex-1 flex flex-col'>
                                    <span className='font-medium text-[24px] text-[#2D1F67] '>
                                        Stratégie 360° centrée conversion
                                    </span>
                                </div>

                            </div>
                            <div className='flex items-center gap-3'>
                                <span className='w-20' ></span>


                                <div className='flex-1 flex flex-col'>
                                    <span className='font-medium text-[24px] text-[#2D1F67] '>
                                        Équipe multidisciplinaire (dev, pub, contenu, graphisme, SEO)
                                    </span>
                                </div>

                            </div>
                            <div className='flex items-center gap-3'>
                                <span className='w-20' ></span>

                                <div className='flex-1 flex flex-col'>
                                    <span className='font-medium text-[24px] text-[#2D1F67] '>
                                        Suivi régulier, résultats mesurés
                                    </span>
                                </div>

                            </div>
                            <div className='flex items-center gap-3'>
                                <span className='w-20' ></span>

                                <div className='flex-1 flex flex-col    '>
                                    <span className='font-medium text-[24px] text-[#2D1F67] '>
                                        Expertise avancée en acquisition & croissance digitale
                                    </span>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-2 px-16 py-[110px]'>
                    <div className='flex flex-col gap-4 '>
                        <h2 className='!leading-[56px] !text-[52px] font-bold !text-left'>
                            Passez à l’action dès maintenant.
                        </h2>
                        <h3 className='text-[32px] font-medium text-[#2D1F67] '>
                            Confiez-nous votre stratégie digitale, et observez les résultats.
                        </h3>
                        <Link href="/create-my-app-mobile" className="bg-[#673de6] self-start hover:bg-[#5735bc] text-white rounded-lg px-[31px] py-[10px]">
                            Créer ma stratégie digitale sur mesure
                        </Link>
                    </div>
                    <Image src="/images/Marketing digital.svg" width={0} height={0} className='w-auto h-auto mb-5  origin-left z-0' alt='hero' />
                </div>
            </section>


        </div>
    )
}

export default page