import PricingPacksSection from '@/components/sections/PricingPacksSection'
import SocialMediaVerticalIcons from '@/components/common/SocialMediaVerticalIcons'
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
            <section className='relative grid grid-cols-1 container mx-auto xl:grid-cols-2 px-4 md:px-16 py-10'>
                <div className='flex flex-col gap-7 pt-10 md:pt-20 pr-0 md:pr-20 z-10'>
                    <span className='font-bold text-2xl sm:text-3xl xl:text-4xl text-[#2D1F67]'>
                        Expliquez votre concept
                        en 30 secondes chrono.
                    </span>
                    <span className='font-bold text-[#2D1F67] text-base md:text-xl lg:text-2xl'>
                        Attirez l'attention, simplifiez votre message et boostez vos conversions avec une animation 2D claire, moderne et percutante.
                    </span>
                    <div className='flex flex-col'>
                        {features2.map((site, index) => (
                            <div key={index} className='flex  gap-[25px]'>
                                <Image src={"/Liadtech/Accueil/icones/Vector 10.png"} width={0} height={0} className='!size-5 self-center' alt='pic' />
                                <div className='flex flex-col flex-1'>
                                    <span className='!text-[20px] '>{site}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='flex items-center gap-4 flex-col md:flex-row'>
                        <div className="text-[85px] font-bold text-[#2D1F67]">750€</div>
                        <Link href="/create-my-app-mobile" className="bg-[#673de6] hover:bg-[#5735bc] text-white rounded-lg px-[31px] py-[10px] mb-4 whitespace-nowrap flex items-center gap-2">
                            <span>
                                Profiter de l'offre
                            </span>
                            <Image src={"/images/Group 96.svg"} width={0} height={0} className='w-auto h-auto' alt='pic' />
                        </Link>
                    </div>
                </div>
                <Image src={"/images/Développement Web-App.svg"} width={0} height={0} className='w-auto origin-top-right  pt-32 z-0  h-auto' alt='pic' />
                <SocialMediaVerticalIcons className='absolute bottom-5 right-0' />
            </section>
            <PricingPacksSection />
            <section className='grid grid-cols-1 container mx-auto xl:grid-cols-2 px-4 md:px-16 py-10'>
                <div className='flex flex-col gap-7 pr-0 md:pr-20'>
                    <span className='font-bold text-2xl sm:text-3xl xl:text-4xl text-[#2D1F67]'>
                        Lancez votre marque avec impact, développez sans limites.
                    </span>
                    <span className='font-bold text-[#2D1F67] text-base md:text-xl lg:text-2xl'>
                        Ne perdez plus de temps avec les démarches techniques. Créez, animez et propulsez votre image grâce à nos packs 100% clé-en-main.
                    </span>
                    <div className='flex flex-col gap-4'>
                        {features2.map((site, index) => (
                            <div key={index} className='flex  gap-3'>
                                <svg width="14" height="15" viewBox="0 0 14 15" className='mt-2' fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2L5.63636 13L2 7.4127" stroke="#60BB6F" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <div className='flex flex-col'>
                                    <span className='!text-[20px] '>{site}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div>
                        Idéal pour les marques ambitieuses qui veulent se démarquer sur les réseaux et au-delà.
                    </div>
                </div>
                <Image src={"/images/Maintenance, TMA & MCO section1.svg"} width={0} height={0} className='w-auto  invisible -mt-10 h-full' alt='pic' />
            </section>
            <section className='grid grid-cols-1 container mx-auto xl:grid-cols-2 px-4 md:px-16 gap-8 md:gap-20 py-10'>
                <Image src={"/images/cloud 1.svg"} width={0} height={0} className='w-auto origin-top invisible !h-full' alt='pic' />
                <div className='flex flex-col gap-7 pr-0 md:pr-20'>
                    <span className='font-bold text-2xl sm:text-3xl xl:text-4xl text-[#2D1F67]'>
                        Donnez vie à votre message avec des animations percutantes
                    </span>
                </div>
            </section>
        </div>
    )
}

export default page