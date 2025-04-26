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
            <div className='bg-[#2D1F67]'>
            <section className='grid grid-cols-1 sm:container sm:mx-auto xl:grid-cols-2 px-4 md:px-[42px] py-8 md:py-[110px] text-white'>
                <div className='flex flex-col gap-6 pt-8 md:pt-[151px] z-10'>
                    <span className='text-2xl sm:text-3xl xl:text-4xl font-bold'>
                        Expliquez votre concept en 30 secondes chrono.
                    </span>
                    <span className='font-bold text-base sm:text-lg'>
                        Attirez l'attention, simplifiez votre message et boostez vos conversions avec une animation 2D claire, moderne et percutante.
                    </span>
                    <div className='flex flex-col gap-4'>
                        {features2.map((site, index) => (
                            <div key={index} className='flex gap-3'>
                                <Image src={"/Liadtech/Accueil/icones/Vector 10.png"} width={0} height={0} className='!size-5 self-center' alt='pic' />
                                <div className='flex flex-col'>
                                    <span className='text-sm md:text-base'>{site}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='flex items-center gap-4 flex-col md:flex-row'>
                        <div className="text-2xl sm:text-3xl xl:text-4xl font-bold">750€</div>
                        <Link href="/create-my-app-mobile" className="bg-[#673de6] hover:bg-[#5735bc] text-white rounded-lg px-[31px] py-[10px] mb-4 whitespace-nowrap flex items-center gap-2">
                            <span>
                                Profiter de l'offre
                            </span>
                            <Image src={"/images/Group 96.svg"} width={0} height={0} className='w-auto h-auto' alt='pic' />
                        </Link>
                    </div>
                </div>
                <Image src={"/images/Sourcing.svg"} width={0} height={0} className='w-auto h-auto mb-5 origin-left z-0' alt='pic' />
            </section>
            </div>
            <PricingPacksSection />

            <div className='bg-[#DCBDFFAA]'>
            <section className='grid grid-cols-1 sm:container sm:mx-auto xl:grid-cols-2 px-4 md:px-[42px] py-8 md:py-[110px] gap-6 md:gap-8'>
                <div className='flex flex-col gap-6 pt-8 md:pt-[151px]'>
                    <span className='text-2xl sm:text-3xl xl:text-4xl font-bold text-[#2D1F67]'>
                        Lancez votre marque avec impact, développez sans limites.
                    </span>
                    <span className='font-bold text-base sm:text-lg text-[#2D1F67]'>
                        Ne perdez plus de temps avec les démarches techniques. Créez, animez et propulsez votre image grâce à nos packs 100% clé-en-main.
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
                    <div className='text-base sm:text-lg font-normal text-[#2D1F67]'>
                        Idéal pour les marques ambitieuses qui veulent se démarquer sur les réseaux et au-delà.
                    </div>
                </div>
                <Image src={"/images/liadteche site image-11 1.svg"} width={0} height={0} className='w-auto h-auto mb-5' alt='pic' />
            </section>
            </div>
            <section className='grid grid-cols-1 sm:container sm:mx-auto xl:grid-cols-2 px-4 md:px-[42px] py-8 md:py-[110px]'>
                <div></div>
                <div className='flex flex-col gap-6 pt-8 md:pt-[151px]'>
                    <span className='text-2xl sm:text-3xl xl:text-4xl font-bold text-[#2D1F67]'>
                        Donnez vie à votre message avec des animations percutantes
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
    )
}

export default page