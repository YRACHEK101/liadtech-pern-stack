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
            <section className='grid grid-cols-1 md:grid-cols-2 px-4 md:px-16 py-10 bg-[#2D1F67] text-white'>
                <div className='flex flex-col gap-7 pt-10 md:pt-20 pr-0 md:pr-20 z-10'>
                    <span className='font-bold text-3xl md:text-5xl'>
                        Expliquez votre concept
                        en 30 secondes chrono.
                    </span>
                    <span className='font-bold text-lg md:!text-[20px]'>
                        Attirez l'attention, simplifiez votre message et boostez vos conversions avec une animation 2D claire, moderne et percutante.
                    </span>
                    <div className='flex flex-col'>
                        {features.map((site, index) => (
                            <div key={index} className='flex gap-[15px] md:gap-[25px]'>
                                <Image src={"/Liadtech/Accueil/icones/Vector 10.png"} width={0} height={0} className='w-auto h-auto' alt='pic' />
                                <div className='flex flex-col'>
                                    <span className='text-lg md:!text-[20px]'>{site}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='flex flex-col md:flex-row items-start md:items-center gap-4'>
                        <div className="text-5xl md:text-[85px] font-bold">750€</div>
                        <Link href="/create-my-app-mobile" className="bg-[#673de6] hover:bg-[#5735bc] text-white rounded-lg px-[31px] py-[10px] self-start mb-4 whitespace-nowrap flex items-center gap-2">
                            <span>
                                Profiter de l'offre
                            </span>
                            <Image src={"/images/Group 96.svg"} width={0} height={0} className='w-auto h-auto' alt='pic' />
                        </Link>
                    </div>
                </div>
                <Image src={"/images/liadteche site image_saas 1.svg"} width={0} height={0} className='w-auto origin-top-right scale-100 md:scale-[120%] z-0 pl-3 h-auto' alt='pic' />
            </section>
            <PricingPacksSection />
            <section className='grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-[78px] px-4 md:px-16 pb-20'>
                <Image src={"/images/SAAS.svg"} width={0} height={0} className='w-auto -mt-10 h-full' alt='pic' />
                <div className='flex flex-col gap-7 pt-10 md:pt-32 pr-0 md:pr-20'>
                    <span className='font-bold text-3xl md:text-5xl text-[#2D1F67]'>
                        Lancez votre marque avec impact, développez sans limites.
                    </span>
                    <span className='font-bold text-lg md:!text-[20px] text-[#2D1F67]'>
                        Ne perdez plus de temps avec les démarches techniques. Créez, animez et propulsez votre image grâce à nos packs 100% clé-en-main.
                    </span>
                    <div className='flex flex-col gap-4'>
                        {features2.map((site, index) => (
                            <div key={index} className='flex gap-3'>
                                <svg width="14" height="15" viewBox="0 0 14 15" className='mt-2' fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2L5.63636 13L2 7.4127" stroke="#60BB6F" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <div className='flex flex-col'>
                                    <span className='text-lg md:!text-[20px]'>{site}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div>
                        Idéal pour les marques ambitieuses qui veulent se démarquer sur les réseaux et au-delà.
                    </div>
                </div>
            </section>
            <section className='grid grid-cols-1 md:grid-cols-2 px-4 md:px-16 bg-[#DCBDFFAA] pb-20 md:pb-36'>
                <div className='flex flex-col gap-7 pr-0 md:pr-20 pt-10 md:pt-36'>
                    <span className='font-bold text-3xl md:text-5xl text-[#2D1F67]'>
                        Donnez vie à votre message avec des animations percutantes
                    </span>
                    <div className='flex flex-col gap-4'>
                        {features2.map((site, index) => (
                            <div key={index} className='flex gap-3'>
                                <svg width="14" height="15" viewBox="0 0 14 15" className='mt-2' fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2L5.63636 13L2 7.4127" stroke="#60BB6F" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <div className='flex flex-col'>
                                    <span className='text-lg md:!text-[20px]'>{site}</span>
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