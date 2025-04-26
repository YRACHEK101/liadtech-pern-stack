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
                <section className='overflow-hidden grid grid-cols-1 container mx-auto xl:grid-cols-2 px-4 pt-10 md:px-[42px]'>
                    <div className='flex flex-col text-white z-10 self-center py-8 md:py-0'>
                        <h2 className='text-3xl md:text-4xl lg:text-6xl font-bold !text-left !text-white'>
                            Ce n'est pas à l'utilisateur de s'adapter au design.C'est au design de s'adapter à l'utilisateur.                    </h2>
                        <span className='text-base md:text-xl lg:text-2xl mb-9'>
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
                    <Image src={"/images/Ux ui.svg"} width={0} height={0} className='w-auto mx-auto origin-top-right scale-100 xl:scale-[120%] pt-10 z-0 h-auto invisible' alt='pic' />

                </section>
            </div>
            <TrustedByClientsSection />

            <PricingPacksSection />

            <section className='px-4 md:pl-10 grid grid-cols-1 container mx-auto xl:grid-cols-2'>
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
                <Image src="/images/UI UX 2.svg" width={0} height={0} className='w-auto h-auto mb-5 invisible' alt='hero' />
            </section>
            <section className='px-4 md:pl-10 grid grid-cols-1 container mx-auto xl:grid-cols-2'>
                <Image src="/images/UI UX 4.svg" width={0} height={0} className='w-auto h-auto mb-5 invisible' alt='hero' />

                <div className='flex flex-col gap-6 pt-8 md:!pt-[151px] text-[#2D1F67]'>
                    <div className='text-3xl md:text-4xl lg:text-6xl font-bold'>
                        Nos services inclus
                    </div>
                    <div className='flex flex-col gap-4 '>
                        {features.map((site, index) => (
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
            </section>

            <section className='px-4 md:pl-10 grid grid-cols-1 container mx-auto xl:grid-cols-2'>
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
                <Image src="/images/UI UX 2.svg" width={0} height={0} className='w-auto h-auto mb-5 invisible' alt='hero' />
            </section>
            <section className='px-4 md:pl-10 grid grid-cols-1 container mx-auto xl:grid-cols-2'>
                <Image src="/images/UI UX 4.svg" width={0} height={0} className='w-auto h-auto mb-5 invisible' alt='hero' />

                <div className='flex flex-col gap-6 pt-8 md:!pt-[151px] text-[#2D1F67]'>
                    <div className='text-3xl md:text-4xl lg:text-6xl font-bold'>
                        Nos services inclus
                    </div>
                    <div className='flex flex-col gap-4 '>
                        {features.map((site, index) => (
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
            </section>
            
        </div>
    )
}

export default page