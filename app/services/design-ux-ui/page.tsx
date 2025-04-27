import PricingPacksSection from '@/components/sections/PricingPacksSection'
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
                <section className='overflow-hidden grid grid-cols-1 container mx-auto xl:grid-cols-2 px-4 xl:pt-10 md:px-[42px]'>
                    <div className='flex flex-col text-white z-10 self-center pt-8 xl:pt-0'>
                        <h2 className='text-2xl sm:text-3xl xl:text-4xl font-bold !text-left !text-white'>
                            Ce n'est pas à l'utilisateur de s'adapter au design.C'est au design de s'adapter à l'utilisateur.                    </h2>
                        <span className='text-base sm:text-lg mb-9'>
                            Chaque parcours, chaque interaction, chaque détail est pensé pour être fluide… Et donc performant.
                        </span>

                        <div className='flex flex-col md:flex-row gap-4'>
                            <Link href="/" className="bg-[#673de6] hover:bg-[#5735bc] text-white rounded-lg px-5 lg:px-[31px] py-[10px] self-start mb-4 whitespace-nowrap flex items-center gap-2">
                                Améliorer mon interface
                            </Link>
                            <Link href="/" className="bg-[#673de6] hover:bg-[#5735bc] text-white rounded-lg px-5 lg:px-[31px] py-[10px] self-start mb-4 whitespace-nowrap flex items-center gap-2">
                                Voir un avant/après UX
                            </Link>
                        </div>
                    </div>
                    <Image src={"/images/Ux ui.svg"} width={0} height={0} className='w-auto h-auto' alt='pic' />

                </section>
            </div>
            <TrustedByClientsSection />

            <PricingPacksSection />
            <div className='bg-[#2D1F67]'>
                <section className='grid grid-cols-1 container mx-auto xl:grid-cols-2 px-4 md:px-16 pb-20 pt-8 md:pt-16 '>
                    <div className='flex flex-col gap-7 text-white'>
                        <span className='font-bold text-2xl sm:text-3xl xl:text-4xl'>
                            Un bon design ne s'impose pas. Il se ressent
                            sans même y penser.
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
                    <Image src={"/images/UI UX 1.svg"} width={0} height={0} className='w-auto h-auto' alt='pic' />
                </section>
                <section className='grid grid-cols-1 container mx-auto xl:grid-cols-2 px-4 md:px-16 bg-[#2D1F67] pb-20 md:pb-36 gap-10'>
                    <Image src={"/images/UXUI section une.svg"} width={0} height={0} className='w-auto h-auto' alt='pic' />
                    <div className='flex flex-col gap-7 pr-0 md:pr-20 text-white pt-8'>
                        <span className='font-bold text-2xl sm:text-3xl xl:text-4xl'>
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
            <section className='px-4 md:pl-10 grid grid-cols-1 container mx-auto xl:grid-cols-2'>
                <div className='flex flex-col gap-6 pt-8 md:pt-[151px] text-[#2D1F67]'>
                    <div className='text-2xl sm:text-3xl xl:text-4xl font-bold'>
                        On ne reste pas sur un site bien codé.
                    </div>
                    <div className='font-bold text-base sm:text-lg'>
                        On reste sur un site bien pensé.
                    </div>
                    <div className='text-sm md:text-base'>
                        Analyse de votre marché, positionnement, objectifs… Pas de posts inutiles, pas de pubs jetées au hasard. Une stratégie sur-mesure, testée, mesurée, ajustée chaque semaine.
                    </div>
                </div>
                <Image src="/images/UI UX 2.svg" width={0} height={0} className='w-auto h-auto mb-5' alt='hero' />
            </section>
            <section className='px-4 md:pl-10 grid grid-cols-1 container mx-auto xl:grid-cols-2 mb-16'>
                <Image src="/images/UI UX 4.svg" width={0} height={0} className='w-auto h-auto mb-5' alt='hero' />

                <div className='flex flex-col gap-6 pt-8 md:!pt-[151px] text-[#2D1F67]'>
                    <div className='text-2xl sm:text-3xl xl:text-4xl font-bold'>
                        Nos services inclus
                    </div>
                    <div className='flex flex-col gap-4 '>
                        {features.map((site, index) => (
                            <div key={index} className='flex  gap-3'>
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
            <section className='bg-[#DDBFFF]'>
                <div className='grid grid-cols-1 container mx-auto xl:grid-cols-2'>
                    <div className='flex flex-col pt-8 md:pt-28 z-10 px-4 md:px-0'>
                        <h2 className='text-2xl sm:text-3xl xl:text-4xl font-bold !text-left mb-9'>
                            Ce que vous gagnez avec nos Bénéfice
                        </h2>

                        <div className='flex flex-col gap-8'>
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

                                <div className='flex-1 flex flex-col    '>
                                    <span className='font-medium text-base sm:text-lg text-[#2D1F67] '>
                                        Expertise avancée en acquisition & croissance digitale
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Image src="/images/UI UX 3.svg" width={0} height={0} className='w-auto h-auto mb-5 scale-100 md:scale-125 origin-left z-0' alt='hero' />
                </div>

                <div className='grid grid-cols-1 container mx-auto xl:grid-cols-2 px-4 md:px-16 py-8 md:py-[110px]'>
                    <Image src="/images/UI UX 6.svg" width={0} height={0} className='w-auto h-auto mb-5 z-0' alt='hero' />
                    <div className='flex flex-col gap-4'>
                        <h2 className='text-2xl sm:text-3xl xl:text-4xl font-bold !text-left'>
                            Passez à l'action dès maintenant.
                        </h2>
                        <h3 className='text-base sm:text-lg font-medium text-[#2D1F67]'>
                            Confiez-nous votre stratégie digitale, et observez les résultats.
                        </h3>
                        <Link href="/create-my-app-mobile" className="bg-[#673de6] self-start hover:bg-[#5735bc] text-white rounded-lg px-[31px] py-[10px]">
                            Créer ma stratégie digitale sur mesure
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default page