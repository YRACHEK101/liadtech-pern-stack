import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import SocialMediaVerticalIcons from '@/components/common/SocialMediaVerticalIcons'
import TrustedByClientsSection from '@/components/sections/TrustedByClientsSection'
import PricingPacksSection from '@/components/sections/PricingPacksSection'

const features2 = [
    'Script + storyboard sur-mesure',
    'Animation fluide et professionnelle',
    'Voix-off (1 langue) incluse',
    'Design personnalisé à votre charte',
    'Musique & sound design inclus',
]

const sitesFeatures = [
    'UX/UI mobile-first & responsive',
    'Développement iOS & Android',
    'Connexion API, CRM, site existant',
    'Sécurité & RGPD',
    'Hébergement + suivi technique',
    '1 mois de maintenance offert'
]

const page = () => {
    
    return (
        <div>

            <div className='bg-[#DDBFFF]'>
                <section className='relative overflow-hidden grid  grid-cols-1 sm:container sm:mx-auto lg:grid-cols-2 px-4 pb-10 md:pb-20 py-5 lg:py-10 md:px-8 gap-10 lg:gap-20 lg:items-center'>
                    <div className='flex flex-col text-[#2D1F67]'>
                        <h2 className='text-2xl sm:text-3xl xl:text-4xl font-bold !text-left'>
                            Votre entreprise est unique.
                        </h2>
                        <h2 className='text-2xl sm:text-3xl xl:text-4xl font-bold !text-left'>
                            Votre application doit l'être aussi.
                        </h2>
                        <span className='text-base sm:text-lg text-[#2D1F67] font-normal mb-4'>
                            Nous transformons vos idées en solutions digitales sur mesure, conçues pour booster votre efficacité, votre rentabilité et votre expérience client. Nous ne développons pas des fonctionnalités : nous construisons des leviers de performance.
                        </span>

                        <div className='flex gap-4 flex-wrap md:justify-start'>
                            <Link href="/" className="bg-[#673de6] hover:bg-[#5735bc] text-white rounded-lg px-[31px] py-[10px] w-min whitespace-nowrap flex items-center gap-2">
                                Concevoir mon application sur mesure
                            </Link>
                            <Link href="/" className="bg-[#673de6] hover:bg-[#5735bc] text-white rounded-lg px-[31px] py-[10px] w-min whitespace-nowrap flex items-center gap-2">
                                Discuter de mon besoin métier
                            </Link>
                        </div>
                    </div>
                    {/* <Image src="/images/Video explainer.svg" width={0} height={0} className='w-auto h-auto mb-5' alt='pic' /> */}
                    <SocialMediaVerticalIcons className='absolute bottom-5 right-0' />
                </section>
            </div>

            <TrustedByClientsSection />
            {/* Pricing Table Section */}
            <PricingPacksSection />

            <section className='grid text-[#2D1F67] grid-cols-1 sm:container sm:mx-auto xl:grid-cols-2 px-4 md:px-8 pb-10'>
                <div className='flex flex-col gap-4 pt-4'>
                    <div className='text-2xl sm:text-3xl xl:text-4xl font-bold'>
                        Pourquoi une application sur mesure change tout ?
                    </div>
                    <span className='text-xs'>
                        Vos besoins ne rentrent pas dans un modèle standardisé ?Votre métier évolue plus vite que vos outils existants ?Vous perdez du temps et de l'argent sur des tâches manuelles ou des logiciels inadaptés ?
                    </span>
                    <span className='text-base sm:text-lg mb-4'>
                        Avec une application sur mesure LIADTECH :
                    </span>
                    <div className='flex flex-col gap-4'>
                        <div className='flex gap-2 md:gap-3'>
                            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="text-[#00b090] min-w-[24px]"><path fill="currentColor" d="M21.046 5.955c.439.439.439 1.151 0 1.59l-9.538 9.539a1.425 1.425 0 0 1-2.016 0l-4.288-4.288a1.125 1.125 0 0 1 1.591-1.591l3.705 3.704 8.954-8.954c.44-.44 1.152-.44 1.591 0Z"></path>
                            </svg>
                            <div className='flex flex-col flex-1'>
                                <span className='text-sm md:text-base'>
                                    Vous digitalisez vos processus internes pour gagner du temps
                                </span>
                            </div>
                        </div>
                        <div className='flex gap-2 md:gap-3'>
                            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="text-[#00b090] min-w-[24px]"><path fill="currentColor" d="M21.046 5.955c.439.439.439 1.151 0 1.59l-9.538 9.539a1.425 1.425 0 0 1-2.016 0l-4.288-4.288a1.125 1.125 0 0 1 1.591-1.591l3.705 3.704 8.954-8.954c.44-.44 1.152-.44 1.591 0Z"></path>
                            </svg>
                            <div className='flex flex-col flex-1'>
                                <span className='text-sm md:text-base'>
                                    Vous optimisez vos opérations et réduisez vos coûts cachés
                                </span>
                            </div>
                        </div>
                        <div className='flex gap-2 md:gap-3'>
                            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="text-[#00b090] min-w-[24px]"><path fill="currentColor" d="M21.046 5.955c.439.439.439 1.151 0 1.59l-9.538 9.539a1.425 1.425 0 0 1-2.016 0l-4.288-4.288a1.125 1.125 0 0 1 1.591-1.591l3.705 3.704 8.954-8.954c.44-.44 1.152-.44 1.591 0Z"></path>
                            </svg>
                            <div className='flex flex-col flex-1'>
                                <span className='text-sm md:text-base'>
                                    Vous offrez une meilleure expérience à vos équipes et vos clients
                                </span>
                            </div>
                        </div>
                        <div className='flex gap-2 md:gap-3'>
                            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="text-[#00b090] min-w-[24px]"><path fill="currentColor" d="M21.046 5.955c.439.439.439 1.151 0 1.59l-9.538 9.539a1.425 1.425 0 0 1-2.016 0l-4.288-4.288a1.125 1.125 0 0 1 1.591-1.591l3.705 3.704 8.954-8.954c.44-.44 1.152-.44 1.591 0Z"></path>
                            </svg>
                            <div className='flex flex-col flex-1'>
                                <span className='text-sm md:text-base'>
                                    Vous créez un avantage concurrentiel difficile à copier
                                </span>
                            </div>
                        </div>
                        <div className='flex gap-2 md:gap-3'>
                            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="text-[#00b090] min-w-[24px]"><path fill="currentColor" d="M21.046 5.955c.439.439.439 1.151 0 1.59l-9.538 9.539a1.425 1.425 0 0 1-2.016 0l-4.288-4.288a1.125 1.125 0 0 1 1.591-1.591l3.705 3.704 8.954-8.954c.44-.44 1.152-.44 1.591 0Z"></path>
                            </svg>
                            <div className='flex flex-col flex-1'>
                                <span className='text-sm md:text-base'>
                                    Vous pilotez votre business avec précision (tableaux de bord, KPIs)
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div></div>
            </section>

            <section className='grid text-[#2D1F67] grid-cols-1 sm:container sm:mx-auto xl:grid-cols-2 px-4 md:px-8 pb-10'>
                <div></div>
                <div className='flex flex-col gap-4 pt-4'>
                    <div className='text-2xl sm:text-3xl xl:text-4xl font-bold'>
                        Ce que nous concevons pour vous
                    </div>
                    <ul className='flex flex-col gap-4 list-disc'>
                        <li className='flex gap-2 md:gap-3'>
                            <div className='flex flex-col flex-1'>
                                <span className='text-sm md:text-base'>
                                    🛠️ Applications métiers sur mesure (ERP, CRM, gestion interne)
                                </span>
                            </div>
                        </li>
                        <li className='flex gap-2 md:gap-3'>
                            <div className='flex flex-col flex-1'>
                                <span className='text-sm md:text-base'>
                                    📊 Dashboards personnalisés (reporting avancé, pilotage temps réel)
                                </span>
                            </div>
                        </li>
                        <li className='flex gap-2 md:gap-3'>
                            <div className='flex flex-col flex-1'>
                                <span className='text-sm md:text-base'>
                                    🛒 Portails clients / fournisseurs (extranet, commandes, suivis)
                                </span>
                            </div>
                        </li>
                        <li className='flex gap-2 md:gap-3'>
                            <div className='flex flex-col flex-1'>
                                <span className='text-sm md:text-base'>
                                    🤖 Automatisation de processus (workflows, validation, notification intelligente)
                                </span>
                            </div>
                        </li>
                        <li className='flex gap-2 md:gap-3'>
                            <div className='flex flex-col flex-1'>
                                <span className='text-sm md:text-base'>
                                    🔒 Applications sécurisées (RGPD, authentification forte, accès multi-rôles)
                                </span>
                            </div>
                        </li>
                        <li className='flex gap-2 md:gap-3'>
                            <div className='flex flex-col flex-1'>
                                <span className='text-sm md:text-base'>
                                    ☁️ Applications Cloud-native (accessibles depuis mobile, tablette, desktop)
                                </span>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>

            <section className="bg-[#2D1F67] -mb-0.5 text-white flex flex-col py-12 lg:py-14 pb-10 md:pb-0">
                <div className="px-4  sm:container sm:mx-auto flex flex-col items-center ">
                    <div className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold text-center">
                        Nos prestations de développement sur mesure
                    </div>
                    <div className="grid grid-cols-1 sm:w-2/3 md:grid-cols-3 gap-4 justify-center py-5">
                        <div className='flex flex-col gap-2 items-center'>
                            <div className='size-10 bg-gray-300 rounded-full'></div>
                            <div className='text-center'>
                                UX/UI adaptée à vos utilisateurs
                            </div>
                        </div>
                        <div className='flex flex-col gap-2 items-center'>
                            <div className='size-10 bg-gray-300 rounded-full'></div>
                            <div className='text-center'>
                                Interconnexion API possible avec vos outils existants
                            </div>
                        </div>
                        <div className='flex flex-col gap-2 items-center'>
                            <div className='size-10 bg-gray-300 rounded-full'></div>
                            <div className='text-center'>
                                Architecture scalable
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <div className="bg-[#41308F] flex flex-col gap-2 shadow-lg rounded-xl p-8 w-full max-w-[450px]">
                            <div className="bg-[#9C51F1] rounded-lg p-2 mb-2 self-start size-10">
                                {/* <Image src={"/Liadtech/Accueil/icones/sync_svgrepo.com.svg"} width={24} height={24} alt="Rectangle 97" /> */}
                            </div>
                            <span className="font-bold text-base sm:text-lg">
                                Application métier
                            </span>
                            <p className="text-sm md:text-base font-normal">
                                ERP, CRM, gestion RH, gestion commerciale sur mesure
                            </p>
                        </div>
                        <div className="bg-[#41308F] flex flex-col gap-2 shadow-lg rounded-xl p-8 w-full max-w-[450px]">
                            <div className="bg-[#9C51F1] rounded-lg p-2 mb-2 self-start size-10">
                                {/* <Image src={"/Liadtech/Accueil/icones/ruler-pencil_svgrepo.com.svg"} width={24} height={24} alt="Rectangle 97" /> */}

                            </div>
                            <span className="font-bold text-base sm:text-lg">
                                Portail web ou extranet
                            </span>
                            <p className="text-sm md:text-base font-normal">
                                Plateformes collaboratives, outils clients ou fournisseurs
                            </p>
                        </div>
                        <div className="bg-[#41308F] flex flex-col gap-2 shadow-lg rounded-xl p-8 w-full max-w-[450px]">
                            <div className="bg-[#9C51F1] rounded-lg p-2 mb-2 self-start size-10">

                                {/* <Image src={"/Liadtech/Accueil/icones/face-smile_svgrepo.com.svg"} width={24} height={24} alt="Rectangle 97" /> */}
                            </div>
                            <span className="font-bold text-base sm:text-lg">
                                Automatisation interne
                            </span>
                            <p className="text-sm md:text-base font-normal">
                                Digitalisation de processus métiers (facturation, planification, suivi)
                            </p>
                        </div>
                        <div className="bg-[#41308F] flex flex-col gap-2 shadow-lg rounded-xl p-8 w-full max-w-[450px]">
                            <div className="bg-[#9C51F1] rounded-lg p-2 mb-2 self-start size-10">

                                {/* <Image src={"/Liadtech/Accueil/icones/face-smile_svgrepo.com.svg"} width={24} height={24} alt="Rectangle 97" /> */}
                            </div>
                            <span className="font-bold text-base sm:text-lg">
                                Dashboards & Reporting
                            </span>
                            <p className="text-sm md:text-base font-normal">
                                Visualisation avancée de KPIs métiers, analytics personnalisés
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='bg-[#2D1F67]'>
                <div className='pb-16 px-4 sm:container sm:mx-auto grid grid-cols-1 lg:grid-cols-2 justify-between gap-10 lg:gap-20 py-12 lg:py-10 lg:items-center'>
                    <div className='flex flex-col text-white self-center '>
                        <div className='text-2xl sm:text-3xl lg:text-4xl font-bold'>
                            Notre méthode d'accompagnement
                        </div>
                        <ul className='flex flex-col gap-4 list-disc pl-4'>
                            <li>
                                <div className='flex flex-col'>
                                    <span className='font-bold'>
                                        Cadrage besoin métier
                                    </span>
                                    <span className='text-sm md:text-base'>
                                        ateliers avec vos équipes pour comprendre vos processus clés
                                    </span>
                                </div>
                            </li>
                            <li>
                                <div className='flex flex-col'>
                                    <span className='font-bold'>
                                        Conception fonctionnelle & UX/UI
                                    </span>
                                    <span className='text-sm md:text-base'>
                                        parcours utilisateurs optimisés
                                    </span>
                                </div>
                            </li>
                            <li>
                                <div className='flex flex-col'>
                                    <span className='font-bold'>
                                        Architecture & développement
                                    </span>
                                    <span className='text-sm md:text-base'>
                                        cloud-native, modulaire, sécurisée
                                    </span>
                                </div>
                            </li>
                            <li>
                                <div className='flex flex-col'>
                                    <span className='font-bold'>
                                        Tests métier & validation
                                    </span>
                                    <span className='text-sm md:text-base'>
                                        validation fonctionnelle et technique à chaque sprint
                                    </span>
                                </div>
                            </li>
                            <li>
                                <div className='flex flex-col'>
                                    <span className='font-bold'>
                                        Déploiement & accompagnement
                                    </span>
                                    <span className='text-sm md:text-base'>
                                        documentation, formation, support évolutif
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    {/* <Image src="/images/digital Web Section 2.svg" width={0} height={0} className='w-auto h-auto mx-auto' alt='hero' /> */}
                </div>
            </section>

            <section className='grid text-[#2D1F67] grid-cols-1 sm:container sm:mx-auto lg:grid-cols-2 px-4 md:px-8 pb-10 gap-10 lg:gap-20 lg:items-center mb-4 md:mb-20'>
                <div></div>
                <div className='flex flex-col gap-4'>
                    <div className='text-2xl sm:text-3xl xl:text-4xl font-bold'>
                        Pourquoi LIADTECH pour votre application sur mesure ?
                    </div>
                    <div className='flex flex-col gap-4'>
                        <div className='flex gap-2 md:gap-3'>
                            <div className='size-2 bg-[#2D1F67] rounded-full mt-2'></div>
                            <div className='flex flex-col flex-1'>
                                <span className='text-sm md:text-base'>
                                    🛠️ Applications pensées métier avant technique : nous analysons votre besoin avant de coder
                                </span>
                            </div>
                        </div>
                        <div className='flex gap-2 md:gap-3'>
                            <div className='size-2 bg-[#2D1F67] rounded-full mt-2'></div>
                            <div className='flex flex-col flex-1'>
                                <span className='text-sm md:text-base'>
                                    📈 Optimisation opérationnelle : vos processus internes deviennent vos leviers de croissance
                                </span>
                            </div>
                        </div>
                        <div className='flex gap-2 md:gap-3'>
                            <div className='size-2 bg-[#2D1F67] rounded-full mt-2'></div>
                            <div className='flex flex-col flex-1'>
                                <span className='text-sm md:text-base'>
                                    🧠 Vision stratégique : nous alignons vos outils sur vos ambitions business
                                </span>
                            </div>
                        </div>
                        <div className='flex gap-2 md:gap-3'>
                            <div className='size-2 bg-[#2D1F67] rounded-full mt-2'></div>
                            <div className='flex flex-col flex-1'>
                                <span className='text-sm md:text-base'>
                                    🔒 Sécurité native et RGPD-ready
                                </span>
                            </div>
                        </div>
                        <div className='flex gap-2 md:gap-3'>
                            <div className='size-2 bg-[#2D1F67] rounded-full mt-2'></div>
                            <div className='flex flex-col flex-1'>
                                <span className='text-sm md:text-base'>
                                    ☁️ Applications scalables et cloud-first
                                </span>
                            </div>
                        </div>
                        <div className='flex gap-2 md:gap-3'>
                            <div className='size-2 bg-[#2D1F67] rounded-full mt-2'></div>
                            <div className='flex flex-col flex-1'>
                                <span className='text-sm md:text-base'>
                                    🤝 Accompagnement humain : conseils d'évolution continue, pas de livraison "jetée"
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='grid text-[#2D1F67] grid-cols-1 sm:container sm:mx-auto lg:grid-cols-2 px-4 md:px-8 pb-10 gap-10 lg:gap-20 lg:items-center mb-4 md:mb-20'>
                <div className='flex flex-col text-[#2D1F67]'>
                    <div className='text-2xl sm:text-3xl lg:text-4xl font-bold'>
                        Créons ensemble l'application qui boostera votre performance.
                    </div>
                    <div className='text-base md:text-lg font-normal'>
                        Votre outil métier doit être à la hauteur de vos ambitions.
                    </div>
                    <Link href="/" className="bg-[#673de6] hover:bg-[#5735bc] text-sm sm:text-base text-white rounded-lg p-2 sm:px-[31px] sm:py-[10px] w-min whitespace-nowrap ">
                        Concevoir mon application sur mesure avec LIADTECH
                    </Link>
                </div>
            </section>

        </div>
    )
}

export default page