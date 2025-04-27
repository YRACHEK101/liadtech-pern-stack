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
                <section className='overflow-hidden grid grid-cols-1 md:grid-cols-2 px-4  sm:container sm:mx-auto'>
                    <div className='flex flex-col text-[#2D1F67] py-8 xl:py-0 self-center'>
                        <h2 className='font-bold text-2xl sm:text-3xl xl:text-4xl'>
                            Vos process sont intelligents.Ils méritent d'être automatisés avec IA.
                        </h2>
                        <span className='text-base sm:text-lg mb-9'>
                            Gagnez du temps, réduisez les erreurs, et créez des expériences fluides pour vos clients comme pour vos équipes. Nos agents intelligents automatisent vos tâches répétitives, vos flux de travail et vos interactions métiers.
                        </span>

                        <div className='flex gap-4 flex-wrap md:justify-start'>
                            <Link href="/" className="bg-[#673de6] hover:bg-[#5735bc] text-white rounded-lg px-[31px] py-[10px] self-start whitespace-nowrap flex items-center gap-2">
                                Automatiser mes process avec l'IA
                            </Link>
                            <Link href="/" className="bg-[#673de6] hover:bg-[#5735bc] text-white rounded-lg px-[31px] py-[10px] self-start whitespace-nowrap flex items-center gap-2">
                                Voir un cas d'automatisation
                            </Link>
                        </div>
                    </div>
                    <Image src="/images/Video explainer.svg" width={0} height={0} className='w-auto h-auto mb-5 invisible' alt='hero' />
                </section>
            </div>
            <TrustedByClientsSection />
            {/* Pricing Table Section */}
            <PricingPacksSection />
            <div className='bg-[#2D1F67]'>
                <section className='grid grid-cols-1 container mx-auto xl:grid-cols-2 px-4 md:px-16 pb-20 '>
                    <div className='flex flex-col gap-7 pt-16 md:pt-32 pr-0 md:pr-20 text-white'>
                        <span className='font-bold text-2xl sm:text-3xl xl:text-4xl'>
                            Qu’est-ce qu’un agent IA ?
                        </span>
                        <span className='font-bold text-base sm:text-lg'>
                            Un agent IA, c’est plus qu’un script ou un chatbot.C’est un assistant numérique autonome, capable d’observer, analyser, décider et agir.
                        </span>
                        <ul className='flex flex-col gap-4 list-decimal'>
                            <li className='flex gap-3'>
                                💡 Il se connecte à vos outils.
                            </li>
                            <li className='flex gap-3'>
                                🔁 Il suit vos règles métiers.
                            </li>
                            <li className='flex gap-3'>
                                ⚙️ Il agit selon un objectif clair : fluidifier, accélérer, simplifier.
                            </li>
                        </ul>
                    </div>
                    <Image src={"/images/UI UX 1.svg"} width={0} height={0} className='w-auto h-auto invisible' alt='pic' />
                </section>
                <section className='grid grid-cols-1 container mx-auto xl:grid-cols-2 px-4 md:px-16 bg-[#2D1F67] py-8 md:py-16 gap-10'>
                    <div>
                        {/* <Image src={"/images/UXUI section une.svg"} width={0} height={0} className='w-auto invisible h-auto' alt='pic' /> */}

                    </div>
                    <div className='flex flex-col gap-7 text-white'>
                        <span className='font-bold text-2xl sm:text-3xl xl:text-4xl'>
                            Exemples concrets d’automatisation intelligente
                        </span>
                        <div className='flex flex-col gap-4'>
                            <div className='flex gap-2 md:gap-3'>
                                <div className='size-2 bg-white rounded-full mt-2'></div>
                                <div className='flex flex-col flex-1'>
                                    <span className='text-sm md:text-base'>
                                        ⚙️ Agents intelligents sur-mesure (basés sur OpenAI ou vos données internes)
                                    </span>
                                </div>
                            </div>
                            <div className='flex gap-2 md:gap-3'>
                                <div className='size-2 bg-white rounded-full mt-2'></div>
                                <div className='flex flex-col flex-1'>
                                    <span className='text-sm md:text-base'>
                                        🔗 Intégration à vos outils : CRM, ERP, CMS, outils internes…
                                    </span>
                                </div>
                            </div>
                            <div className='flex gap-2 md:gap-3'>
                                <div className='size-2 bg-white rounded-full mt-2'></div>
                                <div className='flex flex-col flex-1'>
                                    <span className='text-sm md:text-base'>
                                        🧠 Logique métier personnalisée (avec ou sans IA générative)
                                    </span>
                                </div>
                            </div>
                            <div className='flex gap-2 md:gap-3'>
                                <div className='size-2 bg-white rounded-full mt-2'></div>
                                <div className='flex flex-col flex-1'>
                                    <span className='text-sm md:text-base'>
                                        💡 Suggestions IA embarquées dans vos workflows (emails, dashboards…)
                                    </span>
                                </div>
                            </div>
                            <div className='flex gap-2 md:gap-3'>
                                <div className='size-2 bg-white rounded-full mt-2'></div>
                                <div className='flex flex-col flex-1'>
                                    <span className='text-sm md:text-base'>
                                        📊 Suivi des actions & logs des décisions IA
                                    </span>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </div>
            <section className='grid text-[#2D1F67] grid-cols-1 sm:container sm:mx-auto xl:grid-cols-2 px-4 md:px-16 pb-10'>
                <div className='flex flex-col gap-4 pt-4'>
                    <div className='text-2xl sm:text-3xl xl:text-4xl font-bold'>
                        Notre méthode de mise en place
                    </div>
                    <div className='flex flex-col gap-4'>
                        <div className='flex gap-2 md:gap-3'>
                            <div className='size-2 bg-[#2D1F67] rounded-full mt-2'></div>
                            <div className='flex flex-col flex-1'>
                                <span className='text-sm md:text-base'>
                                    Atelier de cadrage — objectifs, process, outils actuels
                                </span>
                            </div>
                        </div>
                        <div className='flex gap-2 md:gap-3'>
                            <div className='size-2 bg-[#2D1F67] rounded-full mt-2'></div>
                            <div className='flex flex-col flex-1'>
                                <span className='text-sm md:text-base'>
                                    Mapping des automatisations possibles
                                </span>
                            </div>
                        </div>
                        <div className='flex gap-2 md:gap-3'>
                            <div className='size-2 bg-[#2D1F67] rounded-full mt-2'></div>
                            <div className='flex flex-col flex-1'>
                                <span className='text-sm md:text-base'>
                                    Conception des scénarios IA / logiques métiers
                                </span>
                            </div>
                        </div>
                        <div className='flex gap-2 md:gap-3'>
                            <div className='size-2 bg-[#2D1F67] rounded-full mt-2'></div>
                            <div className='flex flex-col flex-1'>
                                <span className='text-sm md:text-base'>
                                    Développement & test en bac à sable
                                </span>
                            </div>
                        </div>
                        <div className='flex gap-2 md:gap-3'>
                            <div className='size-2 bg-[#2D1F67] rounded-full mt-2'></div>
                            <div className='flex flex-col flex-1'>
                                <span className='text-sm md:text-base'>
                                    Déploiement sécurisé + suivi de performance
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <Image src={"/images/Création du l'app 3.svg"} width={0} height={0} className='w-auto h-auto invisible mx-auto' alt='pic' /> */}
            </section>
            <section className='grid text-[#2D1F67] grid-cols-1 sm:container sm:mx-auto xl:grid-cols-2 px-4 md:px-16 pb-10'>
                <div></div>
                <div className='flex flex-col gap-4 pt-4'>
                    <div className='text-2xl sm:text-3xl xl:text-4xl font-bold'>
                        Pourquoi LIADTECH ?
                    </div>
                    <div className='flex flex-col gap-4'>
                        <div className='flex gap-2 md:gap-3'>
                            <div className='flex flex-col flex-1'>
                                <span className='text-sm md:text-base'>
                                    🤝 Une équipe hybride IA + développement + business
                                </span>
                            </div>
                        </div>
                        <div className='flex gap-2 md:gap-3'>
                            <div className='flex flex-col flex-1'>
                                <span className='text-sm md:text-base'>
                                    🧠 Des solutions pensées pour l’utilisateur, pas juste pour la techno
                                </span>
                            </div>
                        </div>
                        <div className='flex gap-2 md:gap-3'>
                            <div className='flex flex-col flex-1'>
                                <span className='text-sm md:text-base'>
                                    ⚡ Une approche agile et itérative, avec résultats rapides
                                </span>
                            </div>
                        </div>
                        <div className='flex gap-2 md:gap-3'>
                            <div className='flex flex-col flex-1'>
                                <span className='text-sm md:text-base'>
                                    🔐 Des intégrations sécurisées & respectueuses de vos données
                                </span>
                            </div>
                        </div>
                        <div className='flex gap-2 md:gap-3'>
                            <div className='flex flex-col flex-1'>
                                <span className='text-sm md:text-base'>
                                    🧩 Expertise OpenAI / GPT / API / automatisation Cloud
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='grid text-[#2D1F67] grid-cols-1 container mx-auto xl:grid-cols-2 px-4 md:px-16 py-[50px] md:py-[110px]'>
                <div className='flex flex-col gap-4 mt-8 md:mt-0'>
                    <h2 className='text-2xl sm:text-3xl xl:text-4xl font-bold'>
                        Ce que vous faites déjà… peut être fait plus vite.
                    </h2>
                    <span className='font-normal md:text-lg'>
                        Automatisez avec intelligence, clarté et impact.
                    </span>
                    <Link href="/create-my-app-mobile" className="bg-[#673de6] hover:bg-[#5735bc] text-white rounded-lg px-[31px] py-[10px] self-start mb-4 whitespace-nowrap">
                        Automatiser mes process avec LIADTECH
                    </Link>
                </div>
                {/* <Image src={"/images/Création du l'app 4.svg"} width={0} height={0} className='w-auto h-auto invisible' alt='pic' /> */}

            </section>
        </div>
    )
}

export default page