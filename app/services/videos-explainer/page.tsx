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
            <section className=' overflow-hidden grid grid-cols-2 px-[48px]'>
                <div className='flex flex-col text-[#2D1F67] self-center '>
                    <h2 className='!leading-[56px] !text-[52px] font-bold !text-left '>
                        Une vidéo bien faite, c’est simple : elle explique, elle convainc, elle vend.
                    </h2>
                    <span className=' text-[22px] mb-9  '>
                        En 60 secondes, votre message devient clair… et inoubliable.
                    </span>

                    <div className='flex gap-4 flex-nowrap'>
                        <Link href="/">
                            <button className="bg-[#673de6] hover:bg-[#5735bc] text-white rounded-lg px-[31px] py-[10px]">
                                Créer ma vidéo explicative
                            </button>
                        </Link>
                        <Link href="/">
                            <button className="bg-[#673de6] hover:bg-[#5735bc] text-white rounded-lg px-[31px] py-[10px]">
                                Voir des exemples
                            </button>
                        </Link>
                    </div>
                </div>
                <Image src="/images/Video explainer.svg" width={0} height={0} className='w-auto h-auto mb-5' alt='hero' />
            </section>
            <TrustedByClientsSection />
            {/* Pricing Table Section */}
            <section className="py-16 container mx-auto mb-[150px] ">
                <PricingTable />
            </section>
            <section className='pl-10 grid grid-cols-2 mb-36'>
                <div className='flex flex-col gap-6 text-[20px] text-[#2D1F67] '>
                    <div className='text-6xl font-bold'>
                        Une vidéo, c’est plus qu’un format. C’est un outil de conversion.
                    </div>
                    <div className='flex flex-col gap-5'>
                        <div className='flex items-center gap-3'>
                            <div className='bg-gray-300 size-11 rounded-full'></div>
                            <div>
                                80 % des visiteurs préfèrent une vidéo à un texte
                            </div>
                        </div>
                        <div className='flex items-center gap-3'>
                            <div className='bg-gray-300 size-11 rounded-full'></div>
                            <div>
                                Jusqu’à 70 % de conversions en plus
                            </div>
                        </div>
                        <div className='flex items-center gap-3'>
                            <div className='bg-gray-300 size-11 rounded-full'></div>
                            <div>
                                Rend votre message plus clair, plus visuel
                            </div>
                        </div>
                        <div className='flex items-center gap-3'>
                            <div className='bg-gray-300 size-11 rounded-full'></div>
                            <div>
                                S’intègre partout : site, pub, réseaux, email
                            </div>
                        </div>
                        <div className='flex items-center gap-3'>
                            <div className='bg-gray-300 size-11 rounded-full'></div>
                            <div>
                                Crée un souvenir plus fort qu’un paragraphe
                            </div>
                        </div>
                    </div>
                </div>
                <Image src="/images/Blogging et contenu 5.svg" width={0} height={0} className='w-auto invisible h-auto mb-5' alt='hero' />
            </section>
            <section className='px-10 grid grid-cols-2 mb-32'>
                <Image src="/images/Blogging et contenu 4.svg" width={0} height={0} className='w-auto invisible h-auto mb-5 origin-left z-0' alt='hero' />
                <div className='flex flex-col gap-6  text-[#2D1F67] pt-11 '>
                    <div className='text-6xl font-bold'>
                        Notre méthode de création
                    </div>
                    <div className='flex flex-col gap-5 text-[20px]'>
                        <div className='flex items-center gap-3'>
                            <div className='bg-gray-300 size-11 rounded-full'></div>
                            <div className=''>
                                <div className='text-[24px] font-bold'>
                                    Brief créatif
                                </div>
                                <div>
                                    Une stratégie de contenu alignée à votre marché et vos objectifs
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center gap-3'>
                            <div className='bg-gray-300 size-11 rounded-full'></div>
                            <div>
                                <div className='text-[24px] font-bold'>
                                    Script & voix-off
                                </div>
                                <div>
                                    Des contenus rédigés par des experts SEO (humains & IA)

                                </div>
                            </div>
                        </div>
                        <div className='flex items-center gap-3'>
                            <div className='bg-gray-300 size-11 rounded-full'></div>
                            <div>
                                <div className='text-[24px] font-bold'>
                                    Storyboard
                                </div>
                                <div>
                                    Création de votre blog si vous n’en avez pas encore

                                </div>
                            </div>
                        </div>
                        <div className='flex items-center gap-3'>
                            <div className='bg-gray-300 size-11 rounded-full'></div>
                            <div>
                                <div className='text-[24px] font-bold'>
                                    Animation
                                </div>
                                <div>
                                    Optimisation SEO : titres, mots-clés, balises, maillage…

                                </div>
                            </div>
                        </div>
                        <div className='flex items-center gap-3'>
                            <div className='bg-gray-300 size-11 rounded-full'></div>
                            <div>
                                <div className='text-[24px] font-bold'>
                                    Livraison
                                </div>
                                <div>
                                    Un plan éditorial structuré et un suivi de performance

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section className='bg-[#2D1F67] pt-60 px-11 pb-14'>
                <section className='pl-10 grid grid-cols-2 mb-[88px]'>
                    <div className='flex flex-col gap-6 text-[20px] text-white '>
                        <div className='text-6xl font-bold'>
                            Nos services inclus
                        </div>
                        <div className='flex flex-col gap-5'>
                            <div className='flex items-center gap-3'>
                                <div className='bg-gray-300 size-11 rounded-full'></div>
                                <div>
                                    Une vidéo 100 % personnalisée
                                </div>
                            </div>
                            <div className='flex items-center gap-3'>
                                <div className='bg-gray-300 size-11 rounded-full'></div>
                                <div>
                                    Gestion résVoix-off pro (FR, EN ou autre langue)
                                </div>
                            </div>
                            <div className='flex items-center gap-3'>
                                <div className='bg-gray-300 size-11 rounded-full'></div>
                                <div>
                                    Illustrations sur-mesure, personnages, mascottes
                                </div>
                            </div>
                            <div className='flex items-center gap-3'>
                                <div className='bg-gray-300 size-11 rounded-full'></div>
                                <div>
                                    Un message pensé pour convaincre, pas juste pour faire beau
                                </div>
                            </div>
                            <div className='flex items-center gap-3'>
                                <div className='bg-gray-300 size-11 rounded-full'></div>
                                <div>
                                    Livraison multi-format (HD, vertical, story, carré, LinkedIn…)
                                </div>
                            </div>
                            <div className='flex items-center gap-3'>
                                <div className='bg-gray-300 size-11 rounded-full'></div>
                                <div>
                                    2 à 3 allers-retours inclus
                                </div>
                            </div>
                        </div>
                    </div>
                    <Image src="/images/Blogging et contenu 5.svg" width={0} height={0} className='w-auto invisible h-auto mb-5' alt='hero' />
                </section>
                <section className='pl-10 grid grid-cols-2 mb-36'>
                    <Image src="/images/explainer.svg" width={0} height={0} className='w-auto h-auto mb-5' alt='hero' />
                    <div className='flex flex-col gap-6 text-[20px] text-white '>
                        <div className='text-6xl font-bold'>
                            Une équipe créative complète. Et ça fait toute la différence.
                        </div>
                        <div className='font-bold text-xl '>
                            Une vidéo n’est jamais faite à moitié.Elle est conçue par une équipe composée de :
                        </div>
                        <div className='flex flex-col gap-5'>
                            <div className='flex items-center gap-3'>
                                <div className='bg-gray-300 size-11 rounded-full'></div>
                                <div className='flex-1'>
                                    <div className='text-[24px] font-bold'>
                                        Brief créatif
                                    </div>
                                    <div>
                                        pour structurer votre message

                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center gap-3'>
                                <div className='bg-gray-300 size-11 rounded-full'></div>
                                <div className='flex-1'>
                                    <div className='text-[24px] font-bold'>
                                        Illustrateurs & character designers
                                    </div>
                                    <div>
                                        pour des visuels uniques

                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center gap-3'>
                                <div className='bg-gray-300 size-11 rounded-full'></div>
                                <div className='flex-1'>
                                    <div className='text-[24px] font-bold'>
                                        Animateurs spécialisés (motion & frame-by-frame)
                                    </div>
                                    <div>
                                        pour un rendu fluide, vivant, marquant

                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center gap-3'>
                                <div className='bg-gray-300 size-11 rounded-full'></div>
                                <div className='flex-1'>
                                    <div className='text-[24px] font-bold'>
                                        Sound designers & voix-off pros
                                    </div>
                                    <div>
                                        pour l’ambiance et la narration

                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center gap-3'>
                                <div className='bg-gray-300 size-11 rounded-full'></div>
                                <div className='flex-1'>
                                    <div className='text-[24px] font-bold'>
                                        Stratèges marketing
                                    </div>
                                    <div>
                                        pour garantir l’efficacité du message

                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center gap-3'>
                                <div className='bg-gray-300 !size-11 rounded-full'></div>
                                <div className='flex-1'>
                                    Résultat : une vraie création de studio.Avec du fond, du style… et un objectif : convertir.
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
                <section className='pl-10 flex gap-2 justify-between'>
                    <div className='flex flex-col !pt-14 text-white col-span-3'>
                        <div className='text-6xl font-bold mb-[6px]'>
                            Votre message mérite d’être vu, compris… et retenu.
                        </div>
                        <div className='font-bold text-[32px] mb-[29px]'>
                            Confiez-nous votre stratégie digitale, et observez les résulFaites passer vos idées à l’image avec une vidéo qui marque les esprits — et déclenche l’action
                        </div>
                        <Link href="/" className="bg-[#673de6] hover:bg-[#5735bc] text-white rounded-lg px-[31px] py-[10px] self-start">
                            Créer ma vidéo explicative
                        </Link>
                    </div>
                    <Image src="/images/Frame 15708.svg" width={0} height={0} className='w-auto h-auto mb-5 ' alt='hero' />
                </section>
            </section>

        </div>
    )
}

export default page