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
            <section className='overflow-hidden grid grid-cols-1 sm:container sm:mx-auto xl:grid-cols-2 px-4 md:px-[42px]'>
                <div className='flex flex-col text-[#2D1F67] self-center py-8 md:py-0'>
                    <h2 className='text-2xl sm:text-3xl xl:text-4xl font-bold !text-left'>
                        Vos clients attendent des réponses. Offrez-leur un échange instantané, fluide et intelligent.
                    </h2>
                    <span className='text-base sm:text-lg text-[#2D1F67] mb-4 sm:mb-6 font-normal'>
                        Nos chatbots automatisent vos conversations, soulagent votre support, génèrent des leads et fluidifient l'expérience utilisateur — sans jamais dormir.
                    </span>

                    <div className='flex gap-4 flex-wrap md:justify-start'>
                        <Link href="/" className="bg-[#673de6] hover:bg-[#5735bc] text-white rounded-lg px-[31px] py-[10px] self-start whitespace-nowrap flex items-center gap-2">
                            Créer mon chatbot intelligent
                        </Link>
                        <Link href="/" className="bg-[#673de6] hover:bg-[#5735bc] text-white rounded-lg px-[31px] py-[10px] self-start whitespace-nowrap flex items-center gap-2">
                            Voir des cas d'usage concrets
                        </Link>
                    </div>
                </div>
                <Image src="/images/AI (1).svg" width={0} height={0} className='w-auto h-auto mb-5' alt='pic' />
            </section>
            <TrustedByClientsSection />
            {/* Pricing Table Section */}
            <PricingPacksSection />

            <section className='bg-[#DDBFFF]'>
                <div className='grid grid-cols-1 container mx-auto xl:grid-cols-2'>
                    <div className='flex flex-col pt-8 md:pt-28 z-10 px-4 md:px-0'>
                        <h2 className='text-2xl sm:text-3xl xl:text-4xl font-bold !text-left mb-9'>
                            Ce que vous gagnez avec nos Bénéfice
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
                    <Image src="/images/ChatBot.svg" width={0} height={0} className='w-auto h-auto ' alt='hero' />

                </div>
                <div className='grid grid-cols-1 container mx-auto xl:grid-cols-2 px-4 md:px-16 py-8 md:py-[110px]'>
                    <Image src="/images/ChatBot 2.svg" width={0} height={0} className='w-auto h-auto' alt='hero' />

                    <div className='flex flex-col gap-4'>
                        <h2 className='text-2xl sm:text-3xl xl:text-4xl font-bold !text-left'>
                            Passez à l'action dès maintenant.
                        </h2>
                        <h3 className='text-xl md:text-2xl lg:text-3xl font-medium text-[#2D1F67]'>
                            Confiez-nous votre stratégie digitale, et observez les résultats.
                        </h3>
                        <Link href="/create-my-app-mobile" className="bg-[#673de6] self-start hover:bg-[#5735bc] text-white rounded-lg px-[31px] py-[10px]">
                            Créer ma stratégie digitale sur mesure
                        </Link>
                    </div>
                </div>
            </section>

            <section className='grid grid-cols-1 container mx-auto xl:grid-cols-2 px-4 md:px-16 py-10'>
                <div className='flex flex-col gap-7 pt-10 md:pt-20 pr-0 md:pr-20'>
                    <span className='font-bold text-2xl sm:text-3xl xl:text-4xl'>
                        Votre app inclut toujours…
                    </span>
                    <span className='font-bold text-[#673DE6] text-base md:text-xl lg:text-2xl'>
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
            <section className='grid grid-cols-1 sm:container sm:mx-auto xl:grid-cols-2 px-4 md:px-[42px] py-8 md:py-[110px]'>
                <Image src={"/images/Création du l'app 4.svg"} width={0} height={0} className='w-auto h-auto mb-5' alt='pic' />
                <div className='flex flex-col gap-4'>
                    <h2 className='text-2xl sm:text-3xl xl:text-4xl font-bold'>
                        Discutons de votre projet. Une app performante peut tout changer.
                    </h2>
                    <Link href="/create-my-app-mobile" className="bg-[#673de6] hover:bg-[#5735bc] text-white rounded-lg px-[31px] py-[10px] self-start mb-4 whitespace-nowrap">
                        Parlez à un expert
                    </Link>
                </div>
            </section>
            <div className='bg-[#2D1F67]'>
                <section className='grid grid-cols-1 sm:container sm:mx-auto xl:grid-cols-2 px-4 md:px-[42px] pb-20'>
                    <div className='flex flex-col gap-6 pt-8 md:pt-[151px] text-white'>
                        <span className='text-2xl sm:text-3xl xl:text-4xl font-bold'>
                            Un bon design ne s'impose pas. Il se ressent sans même y penser.
                        </span>
                        <span className='font-bold text-base sm:text-lg'>
                            Une bonne interface se fait oublier. Elle rassure, stimule l'action, et rend chaque clic évident.
                        </span>
                        <div className='flex flex-col gap-4'>
                            {features2.map((site, index) => (
                                <div key={index} className='flex gap-3'>
                                    <svg width="14" height="15" viewBox="0 0 14 15" className='mt-2' fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2L5.63636 13L2 7.4127" stroke="#60BB6F" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <div className='flex flex-col'>
                                        <span className='text-sm md:text-base'>{site}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <Image src={"/images/UI UX 1.svg"} width={0} height={0} className='w-auto h-auto mb-5' alt='pic' />
                </section>
                <section className='grid grid-cols-1 sm:container sm:mx-auto xl:grid-cols-2 px-4 md:px-[42px] bg-[#2D1F67] py-8 md:py-[110px] gap-6 md:gap-8'>
                    <Image src={"/images/AI Section deux (1).svg"} width={0} height={0} className='w-auto h-auto mb-5' alt='pic' />
                    <div className='flex flex-col gap-6 md:gap-8 text-white'>
                        <span className='text-2xl sm:text-3xl xl:text-4xl font-bold'>
                            Pas de modèles tout faits. Pas de design au hasard.
                        </span>
                        <span className='font-bold text-base sm:text-lg'>
                            Un process structuré, centré sur vos objectifs.
                        </span>
                        <div className='flex flex-col gap-4'>
                            {features2.map((site, index) => (
                                <div key={index} className='flex gap-3'>
                                    <svg width="14" height="15" viewBox="0 0 14 15" className='mt-2' fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2L5.63636 13L2 7.4127" stroke="#60BB6F" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <div className='flex flex-col'>
                                        <span className='text-sm md:text-base'>{site}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default page