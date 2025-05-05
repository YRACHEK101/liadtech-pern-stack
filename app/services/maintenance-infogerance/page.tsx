import PricingPacksSection from '@/components/sections/PricingPacksSection'
import SocialMediaVerticalIcons from '@/components/common/SocialMediaVerticalIcons'
import TrustedByClientsSection from '@/components/sections/TrustedByClientsSection'
import TarifPricingPlan from '@/components/tarifs/TarifPricingPlan'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const features = [
    'Script + storyboard sur-mesure',
    'Animation fluide et professionnelle',
    'Voix-off (1 langue) incluse',
    'Design personnalisé à votre charte',
    '2 révisions comprises',
    'Musique & sound design inclus',
    'Livraison : 10 à 14 jours',
]

const features2 = [
    'Script + storyboard sur-mesure',
    'Animation fluide et professionnelle',
    'Voix-off (1 langue) incluse',
    'Design personnalisé à votre charte',
    'Musique & sound design inclus',
]

const page = () => {
    return (
        <div>
            <div className='bg-[#2D1F67]'>
                <section className='relative overflow-hidden grid grid-cols-1 container mx-auto lg:grid-cols-2 lg:items-center px-4 xl:pt-10 md:px-[42px] gap-10 lg:gap-20 pb-10 md:pb-20 pt-5 lg:pt-0'>
                    <div className='flex flex-col text-white z-10'>
                        <h3 className='text-xl sm:text-2xl font-bold !text-left !text-white'>
                            Votre infrastructure mérite mieux qu'un support basique.
                        </h3>
                        <h2 className='text-2xl sm:text-3xl xl:text-4xl font-bold !text-left !text-white'>
                            Elle mérite une vision proactive, une optimisation continue et une protection totale.
                        </h2>
                        <span className='text-base sm:text-lg mb-9'>
                            Nous allons au-delà du simple support technique.Nous prévenons, optimisons et accompagnons la croissance de votre entreprise avec une approche moderne de la maintenance et de l'infogérance Cloud & IT.
                        </span>

                        <div className='flex flex-col md:flex-row gap-4'>
                            <Link href="/" className="bg-[#673de6] hover:bg-[#5735bc] text-white rounded-lg px-5 lg:px-[31px] py-[10px] w-min whitespace-nowrap flex items-center gap-2">
                                Sécuriser mon infrastructure
                            </Link>
                            <Link href="/" className="bg-[#673de6] hover:bg-[#5735bc] text-white rounded-lg px-5 lg:px-[31px] py-[10px] w-min whitespace-nowrap flex items-center gap-2">
                                Découvrir nos offres d'infogérance
                            </Link>
                        </div>
                    </div>
                    {/* <Image src={"/images/Ux ui.svg"} width={0} height={0} className='w-auto h-auto mx-auto' alt='pic' /> */}
                    <SocialMediaVerticalIcons className='absolute bottom-5 right-0' />
                </section>
            </div>
            <TrustedByClientsSection />

            <PricingPacksSection />
            <div className='bg-[#2D1F67] py-10 md:py-20 mb-4 lg:mb-20'>
                <section className='grid grid-cols-1 sm:container sm:mx-auto lg:grid-cols-2 lg:items-center px-4 gap-10 lg:gap-20'>
                    <div className='flex flex-col gap-7 text-white'>
                        <span className='font-bold text-2xl sm:text-3xl xl:text-4xl'>
                            Pourquoi confier votre maintenance à LIADTECH ?
                        </span>
                        <div className='flex flex-col gap-4'>
                            <div className='flex gap-3'>
                                <svg width="14" height="15" viewBox="0 0 14 15" className='mt-2' fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2L5.63636 13L2 7.4127" stroke="#60BB6F" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <div className='flex flex-col'>
                                    <span className='text-sm md:text-base'>
                                        Pannes non anticipées et coûteuses
                                    </span>
                                </div>
                            </div>
                            <div className='flex gap-3'>
                                <svg width="14" height="15" viewBox="0 0 14 15" className='mt-2' fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2L5.63636 13L2 7.4127" stroke="#60BB6F" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <div className='flex flex-col'>
                                    <span className='text-sm md:text-base'>
                                        Infrastructures qui freinent votre développement
                                    </span>
                                </div>
                            </div>
                            <div className='flex gap-3'>
                                <svg width="14" height="15" viewBox="0 0 14 15" className='mt-2' fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2L5.63636 13L2 7.4127" stroke="#60BB6F" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <div className='flex flex-col'>
                                    <span className='text-sm md:text-base'>
                                        Surcharge des équipes internes IT
                                    </span>
                                </div>
                            </div>
                            <div className='flex gap-3'>
                                <svg width="14" height="15" viewBox="0 0 14 15" className='mt-2' fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2L5.63636 13L2 7.4127" stroke="#60BB6F" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <div className='flex flex-col'>
                                    <span className='text-sm md:text-base'>
                                        Risques de sécurité et de non-conformité RGPD
                                    </span>
                                </div>
                            </div>
                            <div className='flex gap-3'>
                                <svg width="14" height="15" viewBox="0 0 14 15" className='mt-2' fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2L5.63636 13L2 7.4127" stroke="#60BB6F" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <div className='flex flex-col'>
                                    <span className='text-sm md:text-base'>
                                        Pertes de revenus liées à des interruptions de service
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <Image src={"/images/UI UX 1.svg"} width={0} height={0} className='w-auto h-auto mx-auto' alt='pic' /> */}
                </section>
                <section className='grid grid-cols-1 sm:container sm:mx-auto lg:grid-cols-2 lg:items-center px-4 gap-10 lg:gap-20'>
                    <div></div>
                    <div className='flex flex-col gap-7 pr-0 md:pr-20 text-white'>
                        <span className='font-bold text-2xl sm:text-3xl xl:text-4xl'>
                            Avec LIADTECH :
                        </span>
                        <div className='flex flex-col gap-4'>
                            <div className='flex gap-3'>
                                <svg width="14" height="15" viewBox="0 0 14 15" className='mt-2' fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2L5.63636 13L2 7.4127" stroke="#60BB6F" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <div className='flex flex-col'>
                                    <span className='text-sm md:text-base'>
                                        Vous protégez vos applications et données 24/7
                                    </span>
                                </div>
                            </div>
                            <div className='flex gap-3'>
                                <svg width="14" height="15" viewBox="0 0 14 15" className='mt-2' fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2L5.63636 13L2 7.4127" stroke="#60BB6F" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <div className='flex flex-col'>
                                    <span className='text-sm md:text-base'>
                                        Vous optimisez vos coûts et vos performances cloud
                                    </span>
                                </div>
                            </div>
                            <div className='flex gap-3'>
                                <svg width="14" height="15" viewBox="0 0 14 15" className='mt-2' fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2L5.63636 13L2 7.4127" stroke="#60BB6F" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <div className='flex flex-col'>
                                    <span className='text-sm md:text-base'>
                                        Vous libérez vos équipes internes pour l'innovation
                                    </span>
                                </div>
                            </div>
                            <div className='flex gap-3'>
                                <svg width="14" height="15" viewBox="0 0 14 15" className='mt-2' fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2L5.63636 13L2 7.4127" stroke="#60BB6F" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <div className='flex flex-col'>
                                    <span className='text-sm md:text-base'>
                                        Vous garantissez une haute disponibilité de vos services
                                    </span>
                                </div>
                            </div>
                            <div className='flex gap-3'>
                                <svg width="14" height="15" viewBox="0 0 14 15" className='mt-2' fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2L5.63636 13L2 7.4127" stroke="#60BB6F" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <div className='flex flex-col'>
                                    <span className='text-sm md:text-base'>
                                        Vous anticipez les incidents avant qu'ils ne deviennent des problèmes coûteux
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <section className='px-4 grid grid-cols-1 sm:container sm:mx-auto lg:grid-cols-2 lg:items-center gap-10 lg:gap-20 mb-4 md:mb-20'>
                <div className='flex text-[#2D1F67] flex-col gap-4'>
                    <div className='text-2xl sm:text-3xl xl:text-4xl font-bold'>
                        Ce que nous assurons pour vous
                    </div>
                    <div className='flex flex-col gap-4'>
                        <div className='flex items-center gap-2 md:gap-3'>
                            <div className='flex flex-col flex-1'>
                                <span className='text-sm md:text-base'>
                                    🔧 Maintenance préventive : surveillance proactive, détection des failles, alerting intelligent
                                </span>
                            </div>
                        </div>
                        <div className='flex items-center gap-2 md:gap-3'>
                            <div className='flex flex-col flex-1'>
                                <span className='text-sm md:text-base'>
                                    🖥️ Supervision 24/7 : infrastructures cloud, SaaS, web apps
                                </span>
                            </div>
                        </div>
                        <div className='flex items-center gap-2 md:gap-3'>
                            <div className='flex flex-col flex-1'>
                                <span className='text-sm md:text-base'>
                                    🔒 Sécurité : patch management, audits réguliers, alertes en temps réel
                                </span>
                            </div>
                        </div>
                        <div className='flex items-center gap-2 md:gap-3'>
                            <div className='flex flex-col flex-1'>
                                <span className='text-sm md:text-base'>
                                    ☁️ Optimisation Cloud : réduction des coûts, amélioration des performances sur Azure / AWS / GCP
                                </span>
                            </div>
                        </div>
                        <div className='flex items-center gap-2 md:gap-3'>
                            <div className='flex flex-col flex-1'>
                                <span className='text-sm md:text-base'>
                                    📊 Reporting & suivi : tableaux de bord clairs, KPIs techniques exploitables
                                </span>
                            </div>
                        </div>
                        <div className='flex items-center gap-2 md:gap-3'>
                            <div className='flex flex-col flex-1'>
                                <span className='text-sm md:text-base'>
                                    🚨 Gestion des incidents : SLA personnalisés, équipes réactives
                                </span>
                            </div>
                        </div>
                        <div className='flex items-center gap-2 md:gap-3'>
                            <div className='flex flex-col flex-1'>
                                <span className='text-sm md:text-base'>
                                    🔗 Support technique : assistance niveau 1, 2 et 3 en fonction de vos besoins
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <Image src="/images/UI UX 2.svg" width={0} height={0} className='w-auto h-auto mx-auto' alt='hero' /> */}
            </section>
            <section className='px-4 grid grid-cols-1 sm:container sm:mx-auto lg:grid-cols-2 lg:items-center gap-10 lg:gap-20 mb-4 md:mb-20'>
                <div></div>
                <div className='flex text-[#2D1F67] flex-col gap-4 pt-4'>
                    <div className='text-2xl sm:text-3xl xl:text-4xl font-bold'>
                        Notre méthode d'accompagnement
                    </div>

                    <ol className='flex flex-col gap-4 list-decimal pl-4'>
                        <li className=''>
                            <div className='flex flex-col'>
                                <span className='font-bold'>
                                    Audit initial
                                </span>
                                <span className=''>
                                    analyse complète de votre application et infrastructure existante
                                </span>
                            </div>
                        </li>
                        <li className=''>
                            <div className='flex flex-col'>
                                <span className='font-bold'>
                                    Conception fonctionnelle & UX/UI
                                </span>
                                <span className=''>
                                    planification proactive de surveillance, mises à jour et sécurité
                                </span>
                            </div>
                        </li>
                        <li className=''>
                            <div className='flex flex-col'>
                                <span className='font-bold'>
                                    Monitoring & alerting
                                </span>
                                <span className=''>
                                    outils de suivi en temps réel adaptés à votre stack
                                </span>
                            </div>
                        </li>
                        <li className=''>
                            <div className='flex flex-col'>
                                <span className='font-bold'>
                                    Interventions proactives
                                </span>
                                <span className=''>
                                    mises à jour de sécurité et optimisations avant toute panne
                                </span>
                            </div>
                        </li>
                        <li className=''>
                            <div className='flex flex-col'>
                                <span className='font-bold'>
                                    Évolution continue
                                </span>
                                <span className=''>
                                    votre infrastructure grandit avec vos ambitions sans rupture
                                </span>
                            </div>
                        </li>
                    </ol>
                </div>
            </section>
            <div className='bg-[#2D1F67] py-10 md:py-20'>
                <section className='grid grid-cols-1 sm:container sm:mx-auto lg:grid-cols-2 px-4 md:px-16 gap-10 lg:gap-20 lg:items-center mb-10 lg:mb-20'>
                    <div className='flex text-white flex-col gap-4'>
                        <div className='text-2xl sm:text-3xl xl:text-4xl font-bold'>
                            Pourquoi choisir LIADTECH pour votre maintenance et infogérance ?
                        </div>
                        <div className='flex flex-col gap-4'>
                            <div className='flex items-center gap-2 md:gap-3'>
                                <div className='size-2 bg-white rounded-full'></div>
                                <div className='flex flex-col flex-1'>
                                    <span className='text-sm md:text-base'>
                                        🧠 Expertise Cloud & SaaS : nous exploitons nos propres plateformes, pas seulement celles de nos clients
                                    </span>
                                </div>
                            </div>
                            <div className='flex items-center gap-2 md:gap-3'>
                                <div className='size-2 bg-white rounded-full'></div>
                                <div className='flex flex-col flex-1'>
                                    <span className='text-sm md:text-base'>
                                        🛡️ Vision sécurité intégrée : patch management rigoureux, alertes intelligentes, conformité RGPD
                                    </span>
                                </div>
                            </div>
                            <div className='flex items-center gap-2 md:gap-3'>
                                <div className='size-2 bg-white rounded-full'></div>
                                <div className='flex flex-col flex-1'>
                                    <span className='text-sm md:text-base'>
                                        🚀 Optimisation continue : réduction de coûts, amélioration des performances cloud-native
                                    </span>
                                </div>
                            </div>
                            <div className='flex items-center gap-2 md:gap-3'>
                                <div className='size-2 bg-white rounded-full'></div>
                                <div className='flex flex-col flex-1'>
                                    <span className='text-sm md:text-base'>
                                        🧩 Services adaptables : du simple monitoring à une infogérance globale 24/7
                                    </span>
                                </div>
                            </div>
                            <div className='flex items-center gap-2 md:gap-3'>
                                <div className='size-2 bg-white rounded-full'></div>
                                <div className='flex flex-col flex-1'>
                                    <span className='text-sm md:text-base'>
                                        🤝 Approche partenaire : conseil stratégique, anticipation des risques, pilotage partagé de la croissance
                                    </span>
                                </div>
                            </div>
                            <div className='flex items-center gap-2 md:gap-3'>
                                <div className='size-2 bg-white rounded-full'></div>
                                <div className='flex flex-col flex-1'>
                                    <span className='text-sm md:text-base'>
                                        📊 Reporting transparent : vous gardez toujours la main sur vos indicateurs critiques
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <Image src={"/images/UI UX 1.svg"} width={0} height={0} className='w-auto h-auto mb-5 invisible' alt='pic' /> */}
                </section>
                <section className='grid grid-cols-1 sm:container sm:mx-auto lg:grid-cols-2 px-4 md:px-[42px] bg-[#2D1F67] pb-10 gap-10 lg:gap-20 lg:items-center'>
                    <div></div>
                    <div className='flex flex-col gap-6 md:gap-8 text-white'>
                        <h3 className='text-xl sm:text-2xl font-bold !text-left !text-white'>
                            Ne subissez plus vos infrastructures.
                        </h3>
                        <span className='text-2xl sm:text-3xl xl:text-4xl font-bold'>

                            Anticipez, optimisez, sécurisez avec LIADTECH.
                        </span>
                        <span className='font-bold text-base sm:text-lg'>
                            Passez d'une approche réactive à une véritable stratégie de performance continue
                        </span>
                        <Link href="/create-my-app-mobile" className="bg-[#673de6] hover:bg-[#5735bc] text-sm sm:text-base text-white rounded-lg p-2 sm:px-[31px] sm:py-[10px] w-min whitespace-nowrap">
                            Sécuriser mon infrastructure avec LIADTECH
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default page