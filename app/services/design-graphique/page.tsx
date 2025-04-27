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
                <section className='overflow-hidden grid grid-cols-1 sm:container sm:mx-auto xl:grid-cols-2 px-4 md:px-[42px]'>
                    <div className='flex flex-col text-[#2D1F67] self-center py-8 md:py-0'>
                        <h2 className='text-2xl sm:text-3xl xl:text-4xl font-bold !text-left'>
                            Votre image parle avant vous.Assurons-nous qu’elle transmette le bon message.
                        </h2>
                        <span className='text-base sm:text-lg text-[#2D1F67] mb-4 sm:mb-6 font-normal'>
                            Le design graphique n’est pas une finition.C’est le fond et la forme, l’essence même de votre identité visuelle.De la direction artistique à l’exécution, tout est pensé pour sublimer votre univers.
                        </span>

                        <div className='flex gap-4 flex-wrap md:justify-start'>
                            <Link href="/" className="bg-[#673de6] hover:bg-[#5735bc] text-white rounded-lg px-[31px] py-[10px] self-start whitespace-nowrap flex items-center gap-2">
                                Imaginer mes visuels avec LIADTECH
                            </Link>
                            <Link href="/" className="bg-[#673de6] hover:bg-[#5735bc] text-white rounded-lg px-[31px] py-[10px] self-start whitespace-nowrap flex items-center gap-2">
                                Voir notre portfolio visuel
                            </Link>
                        </div>
                    </div>
                    <Image src="/images/Design Graphic 1.svg" width={0} height={0} className='w-auto h-auto mb-5' alt='pic' />
                </section>
            </div>
            <TrustedByClientsSection />
            {/* Pricing Table Section */}
            <PricingPacksSection />
            <div className='bg-[#2D1F67]'>
                <section className='grid grid-cols-1 sm:container sm:mx-auto xl:grid-cols-2 px-4 md:px-[42px] pb-20'>
                    <div className='flex flex-col gap-6 pt-8 md:pt-[151px] text-white'>
                        <span className='text-2xl sm:text-3xl xl:text-4xl font-bold'>
                            Ce qu’on crée pour vous
                        </span>
                        <span className='font-bold text-base sm:text-lg'>
                            Pas de visuels jetables.On conçoit des créations qui durent, qui vivent sur tous vos supports.
                        </span>
                        <div className='flex flex-col gap-4'>
                            <div className='flex items-center gap-2 md:gap-3'>
                                <div className='size-2 bg-white rounded-full'></div>
                                <div className='flex flex-col flex-1'>
                                    <span className='text-sm md:text-base'>
                                        Direction artistique & identité visuelle
                                    </span>
                                </div>
                            </div>
                            <div className='flex items-center gap-2 md:gap-3'>
                                <div className='size-2 bg-white rounded-full'></div>
                                <div className='flex flex-col flex-1'>
                                    <span className='text-sm md:text-base'>
                                        Visuels pour réseaux sociaux & campagnes
                                    </span>
                                </div>
                            </div>
                            <div className='flex items-center gap-2 md:gap-3'>
                                <div className='size-2 bg-white rounded-full'></div>
                                <div className='flex flex-col flex-1'>
                                    <span className='text-sm md:text-base'>
                                        Illustrations originales & pictos personnalisés
                                    </span>
                                </div>
                            </div>
                            <div className='flex items-center gap-2 md:gap-3'>
                                <div className='size-2 bg-white rounded-full'></div>
                                <div className='flex flex-col flex-1'>
                                    <span className='text-sm md:text-base'>
                                        Slides, présentations & pitch decks investisseurs
                                    </span>
                                </div>
                            </div>
                            <div className='flex items-center gap-2 md:gap-3'>
                                <div className='size-2 bg-white rounded-full'></div>
                                <div className='flex flex-col flex-1'>
                                    <span className='text-sm md:text-base'>
                                        Moodboards & kits créa pour vos équipes
                                    </span>
                                </div>
                            </div>
                            <div className='flex items-center gap-2 md:gap-3'>
                                <div className='size-2 bg-white rounded-full'></div>
                                <div className='flex flex-col flex-1'>
                                    <span className='text-sm md:text-base'>
                                        Supports print : plaquettes, flyers, affiches
                                    </span>
                                </div>
                            </div>
                            <div className='flex items-center gap-2 md:gap-3'>
                                <div className='size-2 bg-white rounded-full'></div>
                                <div className='flex flex-col flex-1'>
                                    <span className='text-sm md:text-base'>
                                        Templates Canva & Notion (en option)
                                    </span>
                                </div>
                            </div>

                        </div>
                        <div className='font-normal text-base sm:text-lg'>
                            Votre besoin est unique ? Notre design l’est aussi.
                        </div>
                    </div>
                    <Image src={"/images/Design Graphic 2.svg"} width={0} height={0} className='w-auto h-auto mb-5' alt='pic' />
                </section>
                <section className='grid grid-cols-1 sm:container sm:mx-auto xl:grid-cols-2 px-4 md:px-[42px] bg-[#2D1F67] py-8 md:py-[110px] gap-6 md:gap-8'>
                    <Image src={"/images/Design Graphc 3.svg"} width={0} height={0} className='w-auto h-auto mb-5 origin-left z-0' alt='pic' />
                    <div className='flex flex-col gap-6 pt-8 md:pt-[151px] text-white'>
                        <span className='text-2xl sm:text-3xl xl:text-4xl font-bold'>
                            Un studio, pas juste un designer
                        </span>
                        <span className='font-bold text-base sm:text-lg'>
                            Vous ne collaborez pas avec un freelance isolé.Vous travaillez avec un vrai studio créatif, comme en animation.
                        </span>
                        <div>
                            Notre team graphique:
                        </div>
                        <div className='flex flex-col gap-4'>
                            <div className='flex items-center gap-2 md:gap-3'>
                                <div className='size-2 bg-white rounded-full'></div>
                                <div className='flex flex-col flex-1'>
                                    <span className='text-sm md:text-base'>
                                        🧑‍🎨 Directeurs artistiques
                                    </span>
                                </div>
                            </div>
                            <div className='flex items-center gap-2 md:gap-3'>
                                <div className='size-2 bg-white rounded-full'></div>
                                <div className='flex flex-col flex-1'>
                                    <span className='text-sm md:text-base'>
                                        ✏️ Visual & character designers
                                    </span>
                                </div>
                            </div>
                            <div className='flex items-center gap-2 md:gap-3'>
                                <div className='size-2 bg-white rounded-full'></div>
                                <div className='flex flex-col flex-1'>
                                    <span className='text-sm md:text-base'>
                                        🎨 UI designers & maquettistes
                                    </span>
                                </div>
                            </div>
                            <div className='flex items-center gap-2 md:gap-3'>
                                <div className='size-2 bg-white rounded-full'></div>
                                <div className='flex flex-col flex-1'>
                                    <span className='text-sm md:text-base'>
                                        📐 Spécialistes réseaux / print / web
                                    </span>
                                </div>
                            </div>
                            <div className='flex items-center gap-2 md:gap-3'>
                                <div className='size-2 bg-white rounded-full'></div>
                                <div className='flex flex-col flex-1'>
                                    <span className='text-sm md:text-base'>
                                        💡 Chefs de projet créa pour structurer le flow
                                    </span>
                                </div>
                            </div>

                        </div>
                        <div className='font-normal text-base sm:text-lg'>
                            De l’idée brute à l’exécution soignée, on est là à chaque étape.
                        </div>
                    </div>
                </section>
            </div>
            <section className='grid grid-cols-1 sm:container sm:mx-auto xl:grid-cols-2 px-4 md:px-[42px] py-8 md:py-[110px]'>
                <div className='flex flex-col gap-6 pt-8 text-[#2D1F67] md:pt-[151px]'>
                    <span className='text-2xl sm:text-3xl xl:text-4xl font-bold'>
                        Nos visuels sont faits pour performer
                    </span>
                    <span className='font-normal text-base sm:text-lg '>
                        Un bon design ne doit pas juste être beau. Il doit marquer, mobiliser, servir vos objectifs.
                                            Ce qu’
                                        </span>
                    <div className='flex flex-col gap-4'>
                        <div className='flex items-center gap-2 md:gap-3'>
                            <div className='size-2 bg-[#2D1F67] rounded-full'></div>
                            <div className='flex flex-col flex-1'>
                                <span className='text-sm md:text-base'>
                                    📣 Captive dès la première seconde
                                </span>
                            </div>
                        </div>
                        <div className='flex items-center gap-2 md:gap-3'>
                            <div className='size-2 bg-[#2D1F67] rounded-full'></div>
                            <div className='flex flex-col flex-1'>
                                <span className='text-sm md:text-base'>
                                    📱 S’adapte à tous les formats
                                </span>
                            </div>
                        </div>
                        <div className='flex items-center gap-2 md:gap-3'>
                            <div className='size-2 bg-[#2D1F67] rounded-full'></div>
                            <div className='flex flex-col flex-1'>
                                <span className='text-sm md:text-base'>
                                    🤝 Reflète vos valeurs et votre ADN
                                </span>
                            </div>
                        </div>
                        <div className='flex items-center gap-2 md:gap-3'>
                            <div className='size-2 bg-[#2D1F67] rounded-full'></div>
                            <div className='flex flex-col flex-1'>
                                <span className='text-sm md:text-base'>
                                    🎯 Soutient vos objectifs : conversion, mémorisation, engagement
                                </span>
                            </div>
                        </div>
                    </div>
                    <div>
                        Ici, on ne fait pas du joli. On fait du percutant, du aligné, du remarquable.
                    </div>
                </div>
                <Image src={"/images/Design Graphic 4.svg"} width={0} height={0} className='w-auto h-auto mb-5' alt='pic' />
            </section>
            <section className='px-4 md:pl-10 grid grid-cols-1 sm:container sm:mx-auto xl:grid-cols-2'>
                <Image src="/images/Design Graphic 5.svg" width={0} height={0} className='w-auto h-auto mb-5' alt='pic' />
                <div className='flex flex-col gap-6 pt-8 md:pt-[151px] text-[#2D1F67]'>
                    <div className='text-2xl sm:text-3xl xl:text-4xl font-bold'>
                        Au-delà du design : ce que nos créations vous apportent
                    </div>
                    <div className='flex flex-col gap-4'>
                        <div className='flex items-center gap-2 md:gap-3'>
                            <div className='size-2 bg-[#2D1F67] rounded-full'></div>
                            <div className='flex flex-col flex-1'>
                                <span className='text-sm md:text-base'>
                                    🎨 Une identité visuelle cohérente et sur-mesure
                                </span>
                            </div>
                        </div>
                        <div className='flex items-center gap-2 md:gap-3'>
                            <div className='size-2 bg-[#2D1F67] rounded-full'></div>
                            <div className='flex flex-col flex-1'>
                                <span className='text-sm md:text-base'>
                                    ✏️ Des visuels pensés avec soin, pas piochés dans une banque
                                </span>
                            </div>
                        </div>
                        <div className='flex items-center gap-2 md:gap-3'>
                            <div className='size-2 bg-[#2D1F67] rounded-full'></div>
                            <div className='flex flex-col flex-1'>
                                <span className='text-sm md:text-base'>
                                    🧠 Un regard créatif aligné à vos enjeux business
                                </span>
                            </div>
                        </div>
                        <div className='flex items-center gap-2 md:gap-3'>
                            <div className='size-2 bg-[#2D1F67] rounded-full'></div>
                            <div className='flex flex-col flex-1'>
                                <span className='text-sm md:text-base'>
                                    🛠️ Une bibliothèque de contenus prêts à performer
                                </span>
                            </div>
                        </div>
                        <div className='flex items-center gap-2 md:gap-3'>
                            <div className='size-2 bg-[#2D1F67] rounded-full'></div>
                            <div className='flex flex-col flex-1'>
                                <span className='text-sm md:text-base'>
                                    🤝 Un studio à vos côtés, centralisé, réactif et créatif
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='grid grid-cols-1 sm:container sm:mx-auto xl:grid-cols-2 px-4 md:px-[42px] py-8 md:py-[110px]'>
                <div className='flex flex-col gap-4'>
                    <h2 className='text-2xl sm:text-3xl xl:text-4xl font-bold'>
                        Vous avez un message.Nous lui donnons une forme qui marque, et une esthétique qui reste.
                    </h2>
                    <Link href="/create-my-app-mobile" className="bg-[#673de6] hover:bg-[#5735bc] text-white rounded-lg px-[31px] py-[10px] self-start mb-4 whitespace-nowrap">
                        Travailler mon image de marque avec LIADTECH
                    </Link>
                </div>
                <Image src={"/images/Marketing digital (1).svg"} width={0} height={0} className='w-auto h-auto mb-5' alt='pic' />
            </section>
        </div>
    )
}

export default page