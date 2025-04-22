import { PricingTable } from '@/app/page'
import TrustedByClientsSection from '@/components/sections/TrustedByClientsSection'
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
            <section className='bg-[#DDBFFF] overflow-hidden grid grid-cols-2 px-[48px]'>
                <div className='flex flex-col text-[#2D1F67] self-center '>
                    <h2 className='!leading-[56px] !text-[52px] font-bold !text-left '>
                        Des contenus pensés pour Google, mais écrits pour vos clients.
                    </h2>
                    <span className=' text-[22px] mb-9  '>
                        Nous créons une stratégie éditoriale complète — articles, pages, contenus SEO-friendly — qui attire, convainc et améliore durablement votre visibilité.
                    </span>

                    <div className='flex gap-4 flex-nowrap'>
                        <Link href="/">
                            <button className="bg-[#673de6] hover:bg-[#5735bc] text-white rounded-lg px-[31px] py-[10px]">
                                Créer ma stratégie de contenus
                            </button>
                        </Link>
                        <Link href="/">
                            <button className="bg-[#673de6] hover:bg-[#5735bc] text-white rounded-lg px-[31px] py-[10px]">
                                Voir des exemples d’articles performants
                            </button>
                        </Link>
                    </div>
                </div>
                <Image src="/images/Bloggin et contenu.svg" width={0} height={0} className='w-auto h-auto mb-5' alt='hero' />
            </section>
            <TrustedByClientsSection />
            {/* Pricing Table Section */}
            <section className="py-16 container mx-auto mb-[150px] ">
                <PricingTable />
            </section>
            <section className='pl-10 grid grid-cols-2 mb-36'>
                <div className='flex flex-col gap-6 text-[20px] text-[#2D1F67] '>
                    <div className='text-6xl font-bold'>
                        Le contenu n’est pas un luxe. C’est un moteur de croissance.
                    </div>
                    <div className='font-bold text-xl '>
                        Chez LIADTECH, on ne se contente pas d’écrire des articles.On produit des contenus qui
                    </div>
                    <div className='flex flex-col gap-5'>
                        <div className='flex items-center gap-3'>
                            <div className='bg-gray-300 size-11 rounded-full'></div>
                            <div>
                                Améliorent votre référencement sur Google
                            </div>
                        </div>
                        <div className='flex items-center gap-3'>
                            <div className='bg-gray-300 size-11 rounded-full'></div>
                            <div>
                                Inspirent confiance à vos visiteurs
                            </div>
                        </div>
                        <div className='flex items-center gap-3'>
                            <div className='bg-gray-300 size-11 rounded-full'></div>
                            <div>
                                Génèrent un trafic qualifié et durable
                            </div>
                        </div>
                        <div className='flex items-center gap-3'>
                            <div className='bg-gray-300 size-11 rounded-full'></div>
                            <div>
                                Nourrissent tous vos canaux : SEO, Ads, Réseaux sociaux, Email
                            </div>
                        </div>
                        <div className='flex items-center gap-3'>
                            <div className='bg-gray-300 size-11 rounded-full'></div>
                            <div>
                                Transforment vos visiteurs en prospects
                            </div>
                        </div>
                        <div className='flex items-center gap-3'>
                            <div className='bg-gray-300 size-11 rounded-full'></div>
                            <div>
                                Maintenance & support offerts pendant 1 mois
                            </div>
                        </div>
                    </div>
                </div>
                <Image src="/images/Blogging et contenu 5.svg" width={0} height={0} className='w-auto h-auto mb-5' alt='hero' />
            </section>
            <section className='px-10 grid grid-cols-2 mb-32'>
                <Image src="/images/Blogging et contenu 4.svg" width={0} height={0} className='w-auto h-auto mb-5 origin-left z-0' alt='hero' />
                <div className='flex flex-col gap-6  text-[#2D1F67] pt-11 '>
                    <div className='text-6xl font-bold'>
                        Ce que vous obtenez avec nous
                    </div>
                    <div className='flex flex-col gap-5 text-[20px]'>
                        <div className='flex items-center gap-3'>
                            <div className='bg-gray-300 size-11 rounded-full'></div>
                            <div className=''>
                                Une stratégie de contenu alignée à votre marché et vos objectifs
                            </div>
                        </div>
                        <div className='flex items-center gap-3'>
                            <div className='bg-gray-300 size-11 rounded-full'></div>
                            <div>
                                Des contenus rédigés par des experts SEO (humains & IA)
                            </div>
                        </div>
                        <div className='flex items-center gap-3'>
                            <div className='bg-gray-300 size-11 rounded-full'></div>
                            <div>
                                Création de votre blog si vous n’en avez pas encore
                            </div>
                        </div>
                        <div className='flex items-center gap-3'>
                            <div className='bg-gray-300 size-11 rounded-full'></div>
                            <div>
                                Optimisation SEO : titres, mots-clés, balises, maillage…
                            </div>
                        </div>
                        <div className='flex items-center gap-3'>
                            <div className='bg-gray-300 size-11 rounded-full'></div>
                            <div>
                                Un plan éditorial structuré et un suivi de performance
                            </div>
                        </div>
                        <div className='flex items-center gap-3'>
                            <div className='bg-gray-300 size-11 rounded-full'></div>
                            <div>
                                Du temps gagné, pour une visibilité longue durée
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section className='pl-10 grid grid-cols-2'>
                <div className='flex flex-col !pt-14 text-[#2D1F67] '>
                    <div className='text-6xl font-bold mb-[6px]'>
                        Ne laissez pas votre site vide ou invisible.
                    </div>
                    <div className='font-bold text-[32px] mb-[29px]'>
                        Une stratégie digitale qui transforme les clics… en clients.
                    </div>
                    <Link href="/" className="bg-[#673de6] hover:bg-[#5735bc] text-white rounded-lg px-[31px] py-[10px] self-start">
                        Créer ma stratégie de contenus
                    </Link>
                </div>
                <Image src="/images/Blogging et contenu 6.svg" width={0} height={0} className='w-auto h-auto mb-5 ' alt='hero' />
            </section>

        </div>
    )
}

export default page