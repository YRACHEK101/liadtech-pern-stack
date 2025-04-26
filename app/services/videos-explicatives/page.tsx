import { PricingTable } from '@/app/page'
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
    'A/B Testing & Reporting – Analyses régulières, réunions et recommandations d\’optimisation',
]

const page = () => {
    return (
        <div>
            <section className='overflow-hidden grid grid-cols-1 md:grid-cols-2 px-4 sm:px-0 sm:container sm:mx-auto'>
                <div className='flex flex-col text-[#2D1F67] self-center text-center md:text-left'>
                    <h2 className='!leading-[40px] md:!leading-[56px] !text-[32px] md:!text-[52px] font-bold'>
                        Une vidéo bien faite, c'est simple : elle explique, elle convainc, elle vend.
                    </h2>
                    <span className='text-[18px] md:text-[22px] mb-9'>
                        En 60 secondes, votre message devient clair… et inoubliable.
                    </span>

                    <div className='flex gap-4 flex-wrap justify-center md:justify-start'>
                        <Link href="/" className="bg-[#673de6] hover:bg-[#5735bc] text-white rounded-lg px-[31px] py-[10px] self-start mb-4 whitespace-nowrap flex items-center gap-2">
                            Créer ma vidéo explicative
                        </Link>
                        <Link href="/" className="bg-[#673de6] hover:bg-[#5735bc] text-white rounded-lg px-[31px] py-[10px] self-start mb-4 whitespace-nowrap flex items-center gap-2">
                            Voir des exemples
                        </Link>
                    </div>
                </div>
                <Image src="/images/Video explainer.svg" width={0} height={0} className='w-auto h-auto mb-5' alt='hero' />
            </section>
            <TrustedByClientsSection />
            {/* Pricing Table Section */}
            <PricingPacksSection />

            <section className='px-4 sm:px-0 sm:container sm:mx-auto grid grid-cols-1 md:grid-cols-2 mb-20 md:mb-36'>
                <div className='flex flex-col gap-6 text-[18px] md:text-[20px] text-[#2D1F67] text-center md:text-left'>
                    <div className='text-4xl md:text-6xl font-bold'>
                        Une vidéo, c'est plus qu'un format. C'est un outil de conversion.
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
                                Jusqu'à 70 % de conversions en plus
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
                                S'intègre partout : site, pub, réseaux, email
                            </div>
                        </div>
                        <div className='flex items-center gap-3'>
                            <div className='bg-gray-300 size-11 rounded-full'></div>
                            <div>
                                Crée un souvenir plus fort qu'un paragraphe
                            </div>
                        </div>
                    </div>
                </div>
                <Image src="/images/Frame 15708.svg" width={0} height={0} className='w-auto h-auto mb-5' alt='hero' />
            </section>
            <section className='px-4 sm:px-0 sm:container sm:mx-auto grid grid-cols-1 md:grid-cols-2 mb-20 md:mb-32'>
                <Image src="/images/explainer.svg" width={0} height={0} className='w-auto h-auto mb-5 order-2 md:order-1' alt='hero' />
                <div className='flex flex-col gap-6 text-[#2D1F67] pt-6 md:pt-11 text-center md:text-left order-1 md:order-2'>
                    <div className='text-4xl md:text-6xl font-bold'>
                        Notre méthode de création
                    </div>
                    <div className='flex flex-col gap-5 text-[18px] md:text-[20px] text-left'>
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
                                    Création de votre blog si vous n'en avez pas encore

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

            <section className='px-4 sm:px-0 sm:container sm:mx-auto grid grid-cols-1 md:grid-cols-2 mb-20 md:mb-36'>
                <div className='flex flex-col gap-6 text-[18px] md:text-[20px] text-[#2D1F67] text-center md:text-left'>
                    <div className='text-4xl md:text-6xl font-bold'>
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
                                Voix-off pro (FR, EN ou autre langue)
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
                                2 à 3 allers-retours inclus inclus pour ajuster au plus juste
                            </div>
                        </div>
                    </div>
                </div>
                <Image src="/images/Frame 15719.svg" width={0} height={0} className='w-auto h-auto mb-5' alt='hero' />
            </section>
            <section className="bg-[#2D1F67] pt-14 lg:pt-[64px] pb-12 md:pb-24 lg:pb-[159px] text-white flex flex-col gap-16 md:gap-32 lg:gap-48">
                <div className="px-4 sm:px-0 sm:container sm:mx-auto flex flex-col items-center ">
                    <div className="text-white text-2xl mb-6 md:text-[28px] md:leading-[36px] lg:text-4xl  font-bold text-center">
                        Une équipe créative complète. Et ça fait toute la différence.
                    </div>
                    <div className="text-center font-normal mb-8 md:mb-12">
                        Une vidéo n’est jamais faite à moitié.Elle est conçue par une équipe composée de :
                    </div>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <div className="bg-[#41308F] flex flex-col gap-2 shadow-lg rounded-xl p-8 w-[450px]">
                            <div className="bg-[#9C51F1] rounded-lg p-2 mb-2 self-start size-10">
                                {/* <Image src={"/Liadtech/Accueil/icones/sync_svgrepo.com.svg"} width={24} height={24} alt="Rectangle 97" /> */}
                            </div>
                            <span className="font-bold  text-lg">
                                Brief créatif
                            </span>
                            <p className=" font-normal ">
                                pour structurer votre message
                            </p>
                        </div>
                        <div className="bg-[#41308F] flex flex-col gap-2 shadow-lg rounded-xl p-8 w-[450px]">
                            <div className="bg-[#9C51F1] rounded-lg p-2 mb-2 self-start size-10">
                                {/* <Image src={"/Liadtech/Accueil/icones/ruler-pencil_svgrepo.com.svg"} width={24} height={24} alt="Rectangle 97" /> */}

                            </div>
                            <span className="font-bold  text-lg">
                                Illustrateurs & character designers
                            </span>
                            <p className=" font-normal text-base ">
                                Pour des visuels uniques
                            </p>
                        </div>
                        <div className="bg-[#41308F] flex flex-col gap-2 shadow-lg rounded-xl p-8 w-[450px]">
                            <div className="bg-[#9C51F1] rounded-lg p-2 mb-2 self-start size-10">

                                {/* <Image src={"/Liadtech/Accueil/icones/face-smile_svgrepo.com.svg"} width={24} height={24} alt="Rectangle 97" /> */}
                            </div>
                            <span className="font-bold  text-lg">
                                Animateurs spécialisés (motion & frame-by-frame)
                            </span>
                            <p className=" font-normal text-base ">
                                Pour un rendu fluide, vivant, marquant
                            </p>
                        </div>
                        <div className="bg-[#41308F] flex flex-col gap-2 shadow-lg rounded-xl p-8 w-[450px]">
                            <div className="bg-[#9C51F1] rounded-lg p-2 mb-2 self-start size-10">

                                {/* <Image src={"/Liadtech/Accueil/icones/face-smile_svgrepo.com.svg"} width={24} height={24} alt="Rectangle 97" /> */}
                            </div>
                            <span className="font-bold  text-lg">
                                Sound designers & voix-off pros
                            </span>
                            <p className=" font-normal text-base ">
                                Pour l’ambiance et la narration
                            </p>
                        </div>
                        <div className="bg-[#41308F] flex flex-col gap-2 shadow-lg rounded-xl p-8 w-[450px]">
                            <div className="bg-[#9C51F1] rounded-lg p-2 mb-2 self-start size-10">

                                {/* <Image src={"/Liadtech/Accueil/icones/face-smile_svgrepo.com.svg"} width={24} height={24} alt="Rectangle 97" /> */}
                            </div>
                            <span className="font-bold  text-lg">
                                Stratèges marketing
                            </span>
                            <p className=" font-normal text-base ">
                                Pour garantir l’efficacité du message
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='bg-[#2D1F67] '>
                <div className='px-4 sm:px-0 sm:container sm:mx-auto flex flex-col md:flex-row gap-8 md:gap-2 justify-between'>
                    <div className='flex flex-col !pt-8 md:!pt-14 text-white text-center md:text-left'>
                        <div className='text-4xl md:text-6xl font-bold mb-[6px]'>
                            Votre message mérite d'être vu, compris… et retenu.
                        </div>
                        <div className='font-bold text-[24px] md:text-[32px] mb-[29px]'>
                            Confiez-nous votre stratégie digitale, et observez les résulFaites passer vos idées à l'image avec une vidéo qui marque les esprits — et déclenche l'action
                        </div>
                        <Link href="/" className="bg-[#673de6] hover:bg-[#5735bc] text-white rounded-lg px-[31px] py-[10px] self-start mb-4 whitespace-nowrap">
                            Créer ma vidéo explicative
                        </Link>
                    </div>
                    <Image src="/images/digital Web Section 2.svg" width={0} height={0} className='w-auto h-auto mb-5' alt='hero' />
                </div>
            </section>

        </div>
    )
}

export default page