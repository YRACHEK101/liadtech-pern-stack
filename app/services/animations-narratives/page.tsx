import PricingPacksSection from '@/components/sections/PricingPacksSection'
import TarifPricingPlan from '@/components/tarifs/TarifPricingPlan'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SocialMediaVerticalIcons from '@/components/common/SocialMediaVerticalIcons'

const sitesFeatures = [
    'Scénaristes & script doctors',
    'Character designers & illustrateurs',
    'Animateurs 2D, FX, frame-by-frame',
    'Sound designers & compositeurs',
    'Directeurs artistiques & producers',
]


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
    'Dessin à la main ou vectoriel',
    'Frame by frame ou animation hybride',
    'Univers cohérents, illustrés, color-scriptés',
    'Narration scénarisée ou poétique',
    'Rythme cinématographique ou dynamique social',
]

const page = () => {
    return (
        <div>
            <section className='relative overflow-hidden grid grid-cols-1 lg:grid-cols-2 px-4 sm:container sm:mx-auto pb-12 pt-5 lg:py-10 gap-10 lg:gap-20 lg:items-center'>
                <div className='flex flex-col text-[#2D1F67]'>
                    <h2 className='font-bold text-2xl sm:text-3xl xl:text-4xl'>
                        Nous ne faisons pas des vidéos. Nous produisons des mondes animés.
                    </h2>
                    <span className='text-base sm:text-lg mb-9'>
                        Chaque projet est une création originale : univers, personnages, narration, son. Notre studio vous accompagne de l'idée au rendu final, avec une approche artisanale, collaborative et exigeante.  Des mini-séries, des formats courts ou des pilotes… pensés comme un anime, pas comme une publicité.
                    </span>

                    <div className='flex gap-4 flex-wrap md:justify-start'>
                        <Link href="/" className="bg-[#673de6] hover:bg-[#5735bc] text-white rounded-lg px-[31px] py-[10px] w-min whitespace-nowrap flex items-center gap-2">
                            Lancer mon projet d'animation
                        </Link>
                        <Link href="/" className="bg-[#673de6] hover:bg-[#5735bc] text-white rounded-lg px-[31px] py-[10px] w-min whitespace-nowrap flex items-center gap-2">
                            Voir nos univers animés
                        </Link>
                    </div>
                </div>
                <Image src="/Liadtech/Accueil/image 3  section 4.svg" width={0} height={0} className='w-auto h-auto' alt='hero' />
                <SocialMediaVerticalIcons className='absolute bottom-5 right-0' />
            </section>
            <PricingPacksSection />
            <section className='grid grid-cols-1 sm:container sm:mx-auto lg:grid-cols-2 px-4 py-6 md:py-10 gap-10 lg:gap-20 lg:items-center mb-4'>
                <div className='flex flex-col gap-4 md:gap-7'>
                    <span className='font-bold text-2xl sm:text-3xl xl:text-4xl text-[#2D1F67]'>
                        Une production animée n'est pas un format.
                    </span>
                    <span className='font-normal text-[#2D1F67] text-base sm:text-lg'>
                        C'est une vision, un style unique, un souffle narratif.
                    </span>
                    <span className='font-normal text-[#2D1F67] text-base sm:text-lg'>
                        On ne cherche pas à faire du "joli". On crée une œuvre animée, où chaque scène raconte, chaque geste exprime, chaque silence parle.
                    </span>
                    <div className='flex flex-col gap-3 md:gap-4'>
                        {features2.map((site, index) => (
                            <div key={index} className='flex items-center gap-2 md:gap-3'>
                                <div className='size-2 bg-[#2D1F67] rounded-full'></div>
                                <div className='flex flex-col flex-1'>
                                    <span className='text-sm md:text-base'>{site}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <Image src={"/images/animation et motion section 1.svg"} width={0} height={0} className='w-auto h-auto' alt='pic' />
            </section>

            <section className='grid grid-cols-1 sm:container sm:mx-auto lg:grid-cols-2 px-4 py-6 md:py-10 gap-10 lg:gap-20 lg:items-center mb-4 md:mb-20'>
                <Image src={"/images/animation et motion section 2.svg"} width={0} height={0} className='w-auto h-auto' alt='pic' />

                <div className='flex flex-col gap-4 md:gap-7'>
                    <span className='font-bold text-2xl sm:text-3xl xl:text-4xl text-[#2D1F67]'>
                        Un studio complet derrière chaque projet
                    </span>
                    <span className='font-normal text-[#2D1F67] text-base sm:text-lg'>
                        Vous ne travaillez pas avec un simple motion designer.Vous collaborez avec un studio complet, orchestré comme une production animée.
                    </span>

                    <div className='flex flex-col gap-3 md:gap-4'>
                        {sitesFeatures.map((site, index) => (
                            <div key={index} className='flex  items-center gap-2 md:gap-3'>
                                <div className='size-2 bg-[#2D1F67] rounded-full'></div>
                                <div className='flex flex-col flex-1'>
                                    <span className='text-sm md:text-base'>{site}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <div className='bg-[#2D1F67]'>
                <section className='grid grid-cols-1 sm:container sm:mx-auto lg:grid-cols-2 pt-16 px-4 pb-20 gap-10 lg:gap-20 lg:items-center mb-4'>
                    <div className='flex flex-col gap-7 text-white'>
                        <span className='font-bold text-2xl sm:text-3xl xl:text-4xl'>
                            Ce que nous réalisons:
                        </span>
                        <div className='flex flex-col gap-4'>
                            <div className='flex gap-3 items-center'>
                                <div className='size-[42px] bg-gray-300 rounded-full'></div>
                                <div className='flex flex-col flex-1'>
                                    <span className='text-sm md:text-base'>
                                        Mini-séries scénarisées (3 à 6 épisodes)
                                    </span>
                                </div>
                            </div>
                            <div className='flex gap-3 items-center'>
                                <div className='size-[42px] bg-gray-300 rounded-full'></div>
                                <div className='flex flex-col flex-1'>
                                    <span className='text-sm md:text-base'>
                                        Pilotes ou teasers d'univers
                                    </span>
                                </div>
                            </div>
                            <div className='flex gap-3 items-center'>
                                <div className='size-[42px] bg-gray-300 rounded-full'></div>
                                <div className='flex flex-col flex-1'>
                                    <span className='text-sm md:text-base'>
                                        Animations pédagogiques stylisées
                                    </span>
                                </div>
                            </div>
                            <div className='flex gap-3 items-center'>
                                <div className='size-[42px] bg-gray-300 rounded-full'></div>
                                <div className='flex flex-col flex-1'>
                                    <span className='text-sm md:text-base'>
                                        Séries brand content à fort impact
                                    </span>
                                </div>
                            </div>
                            <div className='flex gap-3 items-center'>
                                <div className='size-[42px] bg-gray-300 rounded-full'></div>
                                <div className='flex flex-col flex-1'>
                                    <span className='text-sm md:text-base'>
                                        Contenus narratifs pour la cause, la culture, ou la communication interne
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className=''>
                            <span className='font-bold'>
                                Livrables :
                            </span>
                            <span className='font-normal'>
                                HD / 4K · sous-titres · voix-off FR / EN · formats réseaux sociaux ou ciné
                            </span>
                        </div>
                    </div>
                    <Image src={"/images/Frame 15721.svg"} width={0} height={0} className='w-auto h-auto' alt='pic' />
                </section>
                <section className='grid grid-cols-1 sm:container sm:mx-auto lg:grid-cols-2 px-4  bg-[#2D1F67] pb-20 md:pb-36 gap-10 lg:gap-20 lg:items-center mb-4 md:mb-20'>
                    <Image src={"/images/Frame 15722.svg"} width={0} height={0} className='w-auto h-auto -mt-28' alt='pic' />
                    <div className='flex flex-col gap-7 pr-0 md:pr-20 text-white'>
                        <span className='font-bold text-2xl sm:text-3xl xl:text-4xl'>
                            Étapes clés de création :
                        </span>
                        <div className='flex flex-col gap-4'>
                            <div className='flex gap-3'>
                                <div className='size-[42px] bg-gray-300 rounded-full'></div>
                                <div className='flex flex-col flex-1 pt-2'>
                                    <span className='text-sm md:text-base'>
                                        Brief & ADN narratif (émotion, cible, style)
                                    </span>
                                </div>
                            </div>
                            <div className='flex gap-3'>
                                <div className='size-[42px] bg-gray-300 rounded-full'></div>
                                <div className='flex flex-col flex-1 pt-2'>
                                    <span className='text-sm md:text-base'>
                                        Pitch & scénario (structure 3 actes ou séquencée)
                                    </span>
                                </div>
                            </div>
                            <div className='flex gap-3'>
                                <div className='size-[42px] bg-gray-300 rounded-full'></div>
                                <div className='flex flex-col flex-1 pt-2'>
                                    <span className='text-sm md:text-base'>
                                        Moodboard, color script, character design
                                    </span>
                                </div>
                            </div>
                            <div className='flex gap-3'>
                                <div className='size-[42px] bg-gray-300 rounded-full'></div>
                                <div className='flex flex-col flex-1 pt-2'>
                                    <span className='text-sm md:text-base'>
                                        Storyboard & animatique
                                    </span>
                                </div>
                            </div>
                            <div className='flex gap-3'>
                                <div className='size-[42px] bg-gray-300 rounded-full'></div>
                                <div className='flex flex-col flex-1 pt-2'>
                                    <span className='text-sm md:text-base'>
                                        Animation : rough → clean → FX & compositing
                                    </span>
                                </div>
                            </div>
                            <div className='flex gap-3'>
                                <div className='size-[42px] bg-gray-300 rounded-full'></div>
                                <div className='flex flex-col flex-1 pt-2'>
                                    <span className='text-sm md:text-base'>
                                        Montage, sound design, voix-off, livraison
                                    </span>
                                </div>
                            </div>
                            <div className=''>
                                <span className='font-bold'>
                                    Bonus:
                                </span>
                                <span className='font-normal'>
                                    pilotes narratifs, loops animés, fragments scénarisés pour réseaux sociaux.
                                </span>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <section className='grid grid-cols-1 sm:container sm:mx-auto lg:grid-cols-2 px-4 py-10 gap-10 lg:gap-20 lg:items-center mb-4 md:mb-20'>
                <div className='flex text-[#2D1F67] flex-col gap-7'>
                    <span className='font-bold text-2xl sm:text-3xl xl:text-4xl'>
                        Pourquoi LIADTECH ?
                    </span>
                    <span className='font-bold text-base sm:text-lg'>
                        Vous ne travaillez pas avec un designer isolé. Vous travaillez avec une équipe produit complète, alignée sur vos objectifs.                    </span>
                    <div className='flex flex-col gap-4'>
                        <div className='flex gap-3'>
                            <div className='size-[42px] bg-gray-300 rounded-full'></div>
                            <div className='flex flex-col flex-1 pt-2'>
                                <span className='text-sm md:text-base'>
                                    Un studio hybride, entre motion design, anime et storytelling graphique
                                </span>
                            </div>
                        </div>
                        <div className='flex gap-3'>
                            <div className='size-[42px] bg-gray-300 rounded-full'></div>
                            <div className='flex flex-col flex-1 pt-2'>
                                <span className='text-sm md:text-base'>
                                    Une exigence artistique assumée, loin des modèles recyclés
                                </span>
                            </div>
                        </div>
                        <div className='flex gap-3'>
                            <div className='size-[42px] bg-gray-300 rounded-full'></div>
                            <div className='flex flex-col flex-1 pt-2'>
                                <span className='text-sm md:text-base'>
                                    Des narrations profondes, humaines, parfois drôles
                                </span>
                            </div>
                        </div>
                        <div className='flex gap-3'>
                            <div className='size-[42px] bg-gray-300 rounded-full'></div>
                            <div className='flex flex-col flex-1 pt-2'>
                                <span className='text-sm md:text-base'>
                                    Un process clair et structuré, au rythme studio
                                </span>
                            </div>
                        </div>
                        <div className='flex gap-3'>
                            <div className='size-[42px] bg-gray-300 rounded-full'></div>
                            <div className='flex flex-col flex-1 pt-2'>
                                <span className='text-sm md:text-base'>
                                    Un accompagnement créatif, stratégique et humain
                                </span>
                            </div>
                        </div>
                    </div>

                </div>
                <Image src={"/images/digital marketing Section 3.svg"} width={0} height={0} className='w-auto h-auto' alt='pic' />
            </section>
            <section className='grid grid-cols-1 sm:container sm:mx-auto lg:grid-cols-2 px-4 gap-10 lg:gap-20 lg:items-center mb-4 md:mb-20 pb-10'>
                <Image src={"/images/Support.svg"} width={0} height={0} className='w-auto h-auto' alt='pic' />
                <div className='flex flex-col gap-4'>
                    <h2 className='text-2xl sm:text-3xl xl:text-4xl font-bold'>
                        Vous ne cherchez pas une vidéo.Vous cherchez une création animée, un projet qui a du souffle.
                    </h2>
                    <Link href="/create-my-app-mobile" className="bg-[#673de6] hover:bg-[#5735bc] text-white rounded-lg px-[31px] py-[10px] w-min whitespace-nowrap">
                        Discuter avec notre studio
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default page