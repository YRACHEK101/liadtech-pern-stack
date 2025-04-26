import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
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
                <section className='overflow-hidden grid grid-cols-1 md:grid-cols-2 px-4 sm:px-0 sm:container sm:mx-auto'>
                    <div className='flex flex-col text-[#2D1F67] self-center text-center md:text-left'>
                        <h2 className='!leading-[40px] md:!leading-[56px] !text-[32px] md:!text-[52px] font-bold'>
                            Vos process sont intelligents.Ils méritent d’être automatisés avec IA.
                        </h2>
                        <span className='text-[18px] md:text-[22px] mb-9'>
                            Gagnez du temps, réduisez les erreurs, et créez des expériences fluides pour vos clients comme pour vos équipes. Nos agents intelligents automatisent vos tâches répétitives, vos flux de travail et vos interactions métiers.
                        </span>

                        <div className='flex gap-4 flex-wrap justify-center md:justify-start'>
                            <Link href="/" className="bg-[#673de6] hover:bg-[#5735bc] text-white rounded-lg px-[31px] py-[10px] self-start mb-4 whitespace-nowrap flex items-center gap-2">
                                Automatiser mes process avec l’IA
                            </Link>
                            <Link href="/" className="bg-[#673de6] hover:bg-[#5735bc] text-white rounded-lg px-[31px] py-[10px] self-start mb-4 whitespace-nowrap flex items-center gap-2">
                                Voir un cas d’automatisation
                            </Link>
                        </div>
                    </div>
                    <Image src="/images/Video explainer.svg" width={0} height={0} className='w-auto h-auto mb-5 invisible' alt='hero' />
                </section>
            </div>
            <TrustedByClientsSection />
            {/* Pricing Table Section */}
            <PricingPacksSection />
            <div className='bg-[#2D1F67]'>
                <section className='grid grid-cols-1 container mx-auto xl:grid-cols-2 px-4 md:px-16 pb-20 '>
                    <div className='flex flex-col gap-7 pt-16 md:pt-32 pr-0 md:pr-20 text-white'>
                        <span className='font-bold text-3xl md:text-4xl lg:text-6xl'>
                            Un bon design ne s’impose pas. Il se ressent
                            sans même y penser.
                        </span>
                        <span className='font-bold text-base md:text-xl lg:text-2xl'>
                            Une bonne interface se fait oublier. Elle rassure, stimule l’action, et rend chaque clic évident.
                        </span>
                        <div className='flex flex-col gap-4'>
                            {features2.map((site, index) => (
                                <div key={index} className='flex gap-3'>
                                    <svg width="14" height="15" viewBox="0 0 14 15" className='mt-2' fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2L5.63636 13L2 7.4127" stroke="#60BB6F" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <div className='flex flex-col'>
                                        <span className='text-base md:!text-[20px]'>{site}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <Image src={"/images/UI UX 1.svg"} width={0} height={0} className='w-auto h-auto invisible' alt='pic' />
                </section>
                <section className='grid grid-cols-1 container mx-auto xl:grid-cols-2 px-4 md:px-16 bg-[#2D1F67] py-20 md:py-36 gap-10'>
                    <Image src={"/images/UXUI section une.svg"} width={0} height={0} className='w-auto origin-top-right scale-100 md:scale-y-125 md:scale-x-110 invisible h-auto' alt='pic' />
                    <div className='flex flex-col gap-7 pr-0 md:pr-20 text-white'>
                        <span className='font-bold text-3xl md:text-4xl lg:text-6xl'>
                            Pas de modèles tout faits. Pas de design au hasard.
                        </span>
                        <span className='font-bold text-base md:text-xl lg:text-2xl'>
                            Un process structuré, centré sur vos objectifs.
                        </span>
                        <div className='flex flex-col gap-4'>
                            {features2.map((site, index) => (
                                <div key={index} className='flex gap-3'>
                                    <svg width="14" height="15" viewBox="0 0 14 15" className='mt-2' fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2L5.63636 13L2 7.4127" stroke="#60BB6F" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <div className='flex flex-col'>
                                        <span className='text-base md:!text-[20px]'>{site}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
            <section className='grid grid-cols-1 container mx-auto xl:grid-cols-2 px-4 md:px-16 py-10'>
                <div className='flex flex-col gap-7 pt-10 md:pt-20 pr-0 md:pr-20'>
                    <span className='font-bold text-3xl md:text-4xl lg:text-6xl text-center md:text-left'>
                        Votre app inclut toujours…
                    </span>
                    <span className='font-bold text-[#673DE6] text-base md:text-xl lg:text-2xl text-center md:text-left'>
                        Parlez à un expert LIADTECH ou démarrez votre projet en quelques clics.
                    </span>
                    <div className='flex flex-col gap-4'>
                        {sitesFeatures.map((site, index) => (
                            <div key={index} className='flex gap-3'>
                                <svg width="14" height="15" viewBox="0 0 14 15" className='mt-2' fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2L5.63636 13L2 7.4127" stroke="#60BB6F" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <div className='flex flex-col'>
                                    <span className='!text-[16px] md:!text-[20px]'>{site}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <Image src={"/images/Création du l'app 3.svg"} width={0} height={0} className='w-auto h-auto invisible' alt='pic' />
            </section>
            <section className='px-4 md:pl-10 grid grid-cols-1 container mx-auto xl:grid-cols-2'>
                <Image src="/images/UI UX 2.svg" width={0} height={0} className='w-auto h-auto mb-5 invisible' alt='hero' />

                <div className='flex flex-col gap-6 pt-8 md:pt-[151px] text-[#2D1F67]'>
                    <div className='text-3xl md:text-4xl lg:text-6xl font-bold'>
                        On ne reste pas sur un site bien codé.
                    </div>
                    <div className='font-bold text-xl md:text-2xl lg:text-3xl'>
                        On reste sur un site bien pensé.
                    </div>
                    <div>
                        Analyse de votre marché, positionnement, objectifs… Pas de posts inutiles, pas de pubs jetées au hasard. Une stratégie sur-mesure, testée, mesurée, ajustée chaque semaine.
                    </div>
                </div>
            </section>
            <section className='grid grid-cols-1 container mx-auto xl:grid-cols-2 px-4 md:px-16 py-[50px] md:py-[110px]'>
                <div className='flex flex-col gap-4 mt-8 md:mt-0 text-center md:text-left'>
                    <h2 className='text-3xl md:text-4xl lg:text-6xl font-bold'>
                        Discutons de votre projet. Une app performante peut tout changer.
                    </h2>
                    <Link href="/create-my-app-mobile" className="bg-[#673de6] hover:bg-[#5735bc] text-white rounded-lg px-[31px] py-[10px] self-start mb-4 whitespace-nowrap">
                        Parlez à un expert
                    </Link>
                </div>
                <Image src={"/images/Création du l'app 4.svg"} width={0} height={0} className='w-auto h-auto invisible' alt='pic' />

            </section>
        </div>
    )
}

export default page