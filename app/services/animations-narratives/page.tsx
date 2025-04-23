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
            <section className='grid grid-cols-2 px-16 py-10'>
                <div className='flex flex-col gap-7 pt-20 pr-20 z-10 '>
                    <span className='font-bold text-5xl text-[#2D1F67] '>
                        Expliquez votre concept
                        en 30 secondes chrono.
                    </span>
                    <span className=' font-bold text-[#2D1F67] !text-[20px]'>
                        Attirez l’attention, simplifiez votre message et boostez vos conversions avec une animation 2D claire, moderne et percutante.
                    </span>
                    <div className='flex flex-col '>
                        {features.map((site, index) => (
                            <div key={index} className='flex  gap-[25px]'>
                                <Image src={"/Liadtech/Accueil/icones/Vector 10.png"} width={0} height={0} className='w-auto h-auto' alt='pic' />
                                <div className='flex flex-col'>
                                    <span className='!text-[20px] '>{site}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='flex items-center gap-4'>
                        <div className="text-[85px] font-bold text-[#2D1F67]">750€</div>
                        <Link href="/create-my-app-mobile" className="bg-[#673de6] hover:bg-[#5735bc] flex gap-3.5 items-center text-white rounded-lg px-[31px] py-[10px]">
                            <span>
                                Profiter de l’offre
                            </span>
                            <Image src={"/images/Group 96.svg"} width={0} height={0} className='w-auto h-auto' alt='pic' />
                        </Link>
                    </div>
                </div>
                <Image src={"/Liadtech/Accueil/image 3  section 4.svg"} width={0} height={0} className='w-auto origin-top-right scale-[120%] pt-10 z-0  h-auto' alt='pic' />
            </section>
            <section className='bg-[#DCBDFFAA] py-12 px-5 flex flex-col items-center'>
                <span className='font-bold text-[59px] text-[#2D1F67] mb-2'>
                    Choisissez votre pack Studio Créatif avec Liadtech
                </span>
                <span className='text-[32px] font-light text-[#2D1F67] mb-8'>
                    Des animations pensées pour captiver, valoriser et faire rayonner votre message.
                </span>
                <TarifPricingPlan plans={[
                    'Digital Marketing',
                    'Studio Créatif',
                    'Cloud, SaaS & Support'
                ]} />

                <span className='text-[26px] font-light text-[#2D1F67] my-4'>
                    Conditions de paiement
                </span>

            </section>
            <section className='grid grid-cols-2 px-16 py-10'>
                <Image src={"/images/animation et motion section 1.svg"} width={0} height={0} className='w-auto   h-auto' alt='pic' />
                <div className='flex flex-col gap-7 pt-20 pr-20 '>
                    <span className='font-bold text-5xl text-[#2D1F67] '>
                        Lancez votre marque avec impact, développez sans limites.
                    </span>
                    <span className=' font-bold text-[#2D1F67] !text-[20px]'>
                        Ne perdez plus de temps avec les démarches techniques. Créez, animez et propulsez votre image grâce à nos packs 100% clé-en-main.
                    </span>
                    <div className='flex flex-col gap-4 '>
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
                </div>
            </section>
            <section className='grid grid-cols-2 px-16 py-10'>
                <div className='flex flex-col gap-7 pt-20 pr-20 '>
                    <span className='font-bold leading-[59px] text-[47px] text-[#2D1F67] '>
                        Donnez vie à votre message avec des animations percutantes
                    </span>
                </div>
                <Image src={"/images/animation et motion section 2.svg"} width={0} height={0} className='w-auto   h-auto' alt='pic' />
            </section>
        </div>
    )
}

export default page