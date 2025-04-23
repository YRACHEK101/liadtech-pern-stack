import PricingPacksSection from '@/components/sections/PricingPacksSection'
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
            <section className='grid grid-cols-1 md:grid-cols-2 px-4 md:px-16 py-6 md:py-10'>
                <div className='flex flex-col gap-4 md:gap-7 pt-10 md:pt-20 pr-0 md:pr-20 z-10'>
                    <span className='font-bold text-3xl md:text-5xl text-[#2D1F67]'>
                        Expliquez votre concept
                        en 30 secondes chrono.
                    </span>
                    <span className='font-bold text-[#2D1F67] text-base md:!text-[20px]'>
                        Attirez l'attention, simplifiez votre message et boostez vos conversions avec une animation 2D claire, moderne et percutante.
                    </span>
                    <div className='flex flex-col'>
                        {features.map((site, index) => (
                            <div key={index} className='flex gap-3 md:gap-[25px]'>
                                <Image src={"/Liadtech/Accueil/icones/Vector 10.png"} width={0} height={0} className='w-auto h-auto' alt='pic' />
                                <div className='flex flex-col'>
                                    <span className='text-base md:!text-[20px]'>{site}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='flex flex-col md:flex-row items-start md:items-center gap-4'>
                        <div className="text-5xl md:text-[85px] font-bold text-[#2D1F67]">750€</div>
                        <Link href="/create-my-app-mobile" className="bg-[#673de6] hover:bg-[#5735bc] text-white rounded-lg px-[31px] py-[10px] self-start mb-4 whitespace-nowrap flex items-center gap-2">
                            <span>
                                Profiter de l'offre
                            </span>
                            <Image src={"/images/Group 96.svg"} width={0} height={0} className='w-auto h-auto' alt='pic' />
                        </Link>
                    </div>
                </div>
                <Image src={"/images/Maintenance, TMA & MCO.svg"} width={0} height={0} className='w-auto origin-top-right invisible scale-[120%] pt-10 md:pt-20 z-0 h-auto' alt='pic' />
            </section>
            <PricingPacksSection />
            <section className='grid grid-cols-1 md:grid-cols-2 px-4 md:px-16 py-6 md:py-10'>
                <div className='flex flex-col gap-4 md:gap-7 pr-0 md:pr-20'>
                    <span className='font-bold text-3xl md:text-5xl text-[#2D1F67]'>
                        Lancez votre marque avec impact, développez sans limites.
                    </span>
                    <span className='font-bold text-[#2D1F67] text-base md:!text-[20px]'>
                        Ne perdez plus de temps avec les démarches techniques. Créez, animez et propulsez votre image grâce à nos packs 100% clé-en-main.
                    </span>
                    <div className='flex flex-col gap-3 md:gap-4'>
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
                    <div className='text-base md:text-lg'>
                        Idéal pour les marques ambitieuses qui veulent se démarquer sur les réseaux et au-delà.
                    </div>
                </div>
                <Image src={"/images/Maintenance, TMA & MCO section1.svg"} width={0} height={0} className='w-auto invisible -mt-10 h-full' alt='pic' />
            </section>
            <section className='grid grid-cols-1 md:grid-cols-2 px-4 md:px-16 gap-10 md:gap-20 py-6 md:py-10'>
                <Image src={"/images/cloud 1.svg"} width={0} height={0} className='w-auto origin-top !h-full' alt='pic' />
                <div className='flex flex-col gap-4 md:gap-7 pr-0 md:pr-20'>
                    <span className='font-bold leading-tight md:leading-[59px] text-3xl md:text-[47px] text-[#2D1F67]'>
                        Donnez vie à votre message avec des animations percutantes
                    </span>
                    <div className='flex flex-col gap-3 md:gap-4'>
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
    )
}

export default page