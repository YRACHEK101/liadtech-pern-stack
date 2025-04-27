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
            <section className='overflow-hidden grid grid-cols-1 sm:container sm:mx-auto xl:grid-cols-2 px-4 md:px-[42px]'>
                <div className='flex flex-col text-[#2D1F67] self-center pt-8 md:pt-16'>
                    <h2 className='text-2xl sm:text-3xl xl:text-4xl font-bold !text-left'>
                        Vos clients attendent des réponses. Offrez-leur un échange instantané, fluide et intelligent.
                    </h2>
                    <span className='text-base sm:text-lg text-[#2D1F67] mb-4 sm:mb-6 font-normal'>
                        Nos chatbots automatisent vos conversations, soulagent votre support, génèrent des leads et fluidifient l'expérience utilisateur — sans jamais dormir.
                    </span>

                    <div className='flex gap-4 flex-wrap md:justify-start'>
                        <Link href="/" className="bg-[#673de6] hover:bg-[#5735bc] text-white rounded-lg px-[31px] py-[10px] self-start whitespace-nowrap flex items-center gap-2">
                            Créer mon chatbot intelligent
                        </Link>
                        <Link href="/" className="bg-[#673de6] hover:bg-[#5735bc] text-white rounded-lg px-[31px] py-[10px] self-start whitespace-nowrap flex items-center gap-2">
                            Voir des cas d'usage concrets
                        </Link>
                    </div>
                </div>
                <Image src="/images/AI (1).svg" width={0} height={0} className='w-auto h-auto mb-5 mx-auto' alt='pic' />
            </section>
            <TrustedByClientsSection />
            {/* Pricing Table Section */}
            <PricingPacksSection />

            <section className='bg-[#DDBFFF]'>
                <div className='grid text-[#2D1F67] grid-cols-1 sm:container sm:mx-auto px-4 md:px-16 xl:grid-cols-2'>
                    <div className='flex flex-col pt-8 md:pt-28 z-10  '>
                        <h2 className='text-2xl sm:text-3xl xl:text-4xl font-bold !text-left mb-9'>
                            Pourquoi adopter un chatbot ?
                        </h2>

                        <div className='flex flex-col gap-8'>
                            <div className='flex items-center gap-3'>
                                <span className='size-[42px] bg-gray-300 rounded-full'></span>
                                <div className='flex-1 flex flex-col'>
                                    <span className='font-normal md:text-lg text-[#2D1F67] '>
                                        Réponse immédiate, même à 3h du matin
                                    </span>
                                </div>

                            </div>
                            <div className='flex items-center gap-3'>
                                <span className='size-[42px] bg-gray-300 rounded-full'></span>


                                <div className='flex-1 flex flex-col'>
                                    <span className='font-normal md:text-lg text-[#2D1F67] '>
                                        Améliore l’expérience client sans alourdir votre équipe
                                    </span>
                                </div>

                            </div>
                            <div className='flex items-center gap-3'>
                                <span className='size-[42px] bg-gray-300 rounded-full'></span>

                                <div className='flex-1 flex flex-col'>
                                    <span className='font-normal md:text-lg text-[#2D1F67] '>
                                        Automatise les questions fréquentes et les processus simples
                                    </span>
                                </div>

                            </div>
                            <div className='flex items-center gap-3'>
                                <span className='size-[42px] bg-gray-300 rounded-full'></span>

                                <div className='flex-1 flex flex-col    '>
                                    <span className='font-normal md:text-lg text-[#2D1F67] '>
                                        Génère des leads, redirige, qualifie, collecte
                                    </span>
                                </div>

                            </div>
                            <div className='flex items-center gap-3'>
                                <span className='size-[42px] bg-gray-300 rounded-full'></span>

                                <div className='flex-1 flex flex-col    '>
                                    <span className='font-normal md:text-lg text-[#2D1F67] '>
                                        S’adapte à votre ton de marque et vos cas métiers
                                    </span>
                                </div>

                            </div>
                            <div className='flex items-center gap-3'>
                                <span className='size-[42px] bg-gray-300 rounded-full'></span>

                                <div className='flex-1 flex flex-col    '>
                                    <span className='font-normal md:text-lg text-[#2D1F67] '>
                                        Apprend et s’améliore avec le temps
                                    </span>
                                </div>

                            </div>

                        </div>
                    </div>
                    <Image src="/images/ChatBot.svg" width={0} height={0} className='w-auto h-auto mx-auto ' alt='hero' />

                </div>
                <div className='grid text-[#2D1F67] grid-cols-1 sm:container sm:mx-auto xl:grid-cols-2 px-4 md:px-16 pb-8 md:pb-[110px]'>
                    <Image src="/images/ChatBot 2.svg" width={0} height={0} className='w-auto h-auto mx-auto' alt='hero' />

                    <div className='flex flex-col gap-4'>
                        <div className='text-2xl sm:text-3xl xl:text-4xl font-bold'>
                            Ce que nous développons pour vous
                        </div>
                        <div className='flex flex-col gap-4'>
                            <div className='flex gap-2 md:gap-3'>
                                <div className='size-2 bg-[#2D1F67] rounded-full mt-2'></div>
                                <div className='flex flex-col flex-1'>
                                    <span className='text-sm md:text-base'>
                                        🤖 Chatbots sur-mesure, connectés à vos outils (CRM, FAQ, agenda…)
                                    </span>
                                </div>
                            </div>
                            <div className='flex gap-2 md:gap-3'>
                                <div className='size-2 bg-[#2D1F67] rounded-full mt-2'></div>
                                <div className='flex flex-col flex-1'>
                                    <span className='text-sm md:text-base'>
                                        🌐 Intégration web, app mobile, WhatsApp, Messenger ou autres
                                    </span>
                                </div>
                            </div>
                            <div className='flex gap-2 md:gap-3'>
                                <div className='size-2 bg-[#2D1F67] rounded-full mt-2'></div>
                                <div className='flex flex-col flex-1'>
                                    <span className='text-sm md:text-base'>
                                        🧩 Connexion à votre base de connaissances ou base client
                                    </span>
                                </div>
                            </div>
                            <div className='flex gap-2 md:gap-3'>
                                <div className='size-2 bg-[#2D1F67] rounded-full mt-2'></div>
                                <div className='flex flex-col flex-1'>
                                    <span className='text-sm md:text-base'>
                                        💡 Logique conversationnelle avancée (scénarios + IA)
                                    </span>
                                </div>
                            </div>
                            <div className='flex gap-2 md:gap-3'>
                                <div className='size-2 bg-[#2D1F67] rounded-full mt-2'></div>
                                <div className='flex flex-col flex-1'>
                                    <span className='text-sm md:text-base'>
                                        📊 Tableau de bord pour suivre les échanges, taux de conversion, questions clés
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='grid text-[#2D1F67] grid-cols-1 sm:container sm:mx-auto xl:grid-cols-2 px-4 md:px-16 pb-10'>
                <div className='flex flex-col gap-4'>
                    <div className='text-2xl sm:text-3xl xl:text-4xl font-bold'>
                        Exemples d’usage
                    </div>
                    <div className='flex flex-col gap-4'>
                        <div className='flex gap-2 md:gap-3'>
                            <div className='size-2 bg-[#2D1F67] rounded-full mt-2'></div>
                            <div className='flex flex-col flex-1'>
                                <span className='text-sm md:text-base'>
                                    🛍️ E-commerce : suivi de commande, recommandation produit, qualification de besoin
                                </span>
                            </div>
                        </div>
                        <div className='flex gap-2 md:gap-3'>
                            <div className='size-2 bg-[#2D1F67] rounded-full mt-2'></div>
                            <div className='flex flex-col flex-1'>
                                <span className='text-sm md:text-base'>
                                    📅 Services : prise de rendez-vous automatisée, relances
                                </span>
                            </div>
                        </div>
                        <div className='flex gap-2 md:gap-3'>
                            <div className='size-2 bg-[#2D1F67] rounded-full mt-2'></div>
                            <div className='flex flex-col flex-1'>
                                <span className='text-sm md:text-base'>
                                    📚 Formation : orientation vers les bons contenus, quizz interactifs
                                </span>
                            </div>
                        </div>
                        <div className='flex gap-2 md:gap-3'>
                            <div className='size-2 bg-[#2D1F67] rounded-full mt-2'></div>
                            <div className='flex flex-col flex-1'>
                                <span className='text-sm md:text-base'>
                                    📞 Support client : réponse immédiate aux demandes fréquentes
                                </span>
                            </div>
                        </div>
                        <div className='flex gap-2 md:gap-3'>
                            <div className='size-2 bg-[#2D1F67] rounded-full mt-2'></div>
                            <div className='flex flex-col flex-1'>
                                <span className='text-sm md:text-base'>
                                    📥 Lead generation : capture d’email, téléphone, besoin, etc.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <Image src={"/images/Création du l'app 3.svg"} width={0} height={0} className='w-auto h-auto invisible mx-auto' alt='pic' /> */}
            </section>
            <section className='grid grid-cols-1 sm:container sm:mx-auto xl:grid-cols-2 px-4 md:px-16 pb-8 md:pb-[110px]'>
                <div>

                {/* <Image src={"/images/Création du l'app 4.svg"} width={0} height={0} className='w-auto h-auto mb-5 invisible mx-auto' alt='pic' /> */}
                </div>
                <div className='flex flex-col gap-4'>
                    <div className='text-2xl sm:text-3xl xl:text-4xl font-bold'>
                        Méthode de création
                    </div>
                    <ul className='flex flex-col gap-4 list-decimal'>
                        <li className='flex gap-3'>
                            Brief : vos objectifs, vos utilisateurs, vos canaux
                        </li>
                        <li className='flex gap-3'>
                            Conception : arborescence, logique, ton
                        </li>
                        <li className='flex gap-3'>
                            Rédaction & IA : dialogues clairs, utiles, humains
                        </li>
                        <li className='flex gap-3'>
                            Intégration : sur vos outils, site, plateformes
                        </li>
                        <li className='flex gap-3'>
                            Tests & suivi : ajustements, stats, amélioration continue
                        </li>
                    </ul>
                </div>
            </section>

            <div className='bg-[#2D1F67]'>
                <section className='grid grid-cols-1 pt-8 xl:pt-16 sm:container sm:mx-auto xl:grid-cols-2 px-4 md:px-16 pb-20'>
                    <div className='flex text-white flex-col gap-4'>
                        <div className='text-2xl sm:text-3xl xl:text-4xl font-bold'>
                            Pourquoi LIADTECH ?
                        </div>
                        <div className='flex flex-col gap-4'>
                            <div className='flex items-center gap-2 md:gap-3'>
                                <div className='size-2 bg-white rounded-full'></div>
                                <div className='flex flex-col flex-1'>
                                    <span className='text-sm md:text-base'>
                                        🧠 Expertise IA, UX et automatisation combinées
                                    </span>
                                </div>
                            </div>
                            <div className='flex items-center gap-2 md:gap-3'>
                                <div className='size-2 bg-white rounded-full'></div>
                                <div className='flex flex-col flex-1'>
                                    <span className='text-sm md:text-base'>
                                        🤝 Approche centrée utilisateur : utile, humain, direct
                                    </span>
                                </div>
                            </div>
                            <div className='flex items-center gap-2 md:gap-3'>
                                <div className='size-2 bg-white rounded-full'></div>
                                <div className='flex flex-col flex-1'>
                                    <span className='text-sm md:text-base'>
                                        🎯 Des bots pensés pour convertir ou soulager vos équipes
                                    </span>
                                </div>
                            </div>
                            <div className='flex items-center gap-2 md:gap-3'>
                                <div className='size-2 bg-white rounded-full'></div>
                                <div className='flex flex-col flex-1'>
                                    <span className='text-sm md:text-base'>
                                        🧩 Intégration fluide à vos outils existants
                                    </span>
                                </div>
                            </div>
                            <div className='flex items-center gap-2 md:gap-3'>
                                <div className='size-2 bg-white rounded-full'></div>
                                <div className='flex flex-col flex-1'>
                                    <span className='text-sm md:text-base'>
                                        🚀 Studio agile, réactif, humain
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <Image src={"/images/UI UX 1.svg"} width={0} height={0} className='w-auto h-auto mb-5 invisible' alt='pic' /> */}
                </section>
                <section className='grid grid-cols-1 sm:container sm:mx-auto xl:grid-cols-2 px-4 md:px-[42px] bg-[#2D1F67] pb-8 md:pb-[110px] gap-6 md:gap-8'>
                    <Image src={"/images/AI Section deux (2).svg"} width={0} height={0} className='w-auto h-auto mb-5 mx-auto' alt='pic' />
                    <div className='flex flex-col gap-6 md:gap-8 self-center text-white'>
                        <span className='text-2xl sm:text-3xl xl:text-4xl font-bold'>
                            Votre prochain collaborateur ne dort jamais.
                        </span>
                        <span className='font-bold text-base sm:text-lg'>
                            Créez un chatbot intelligent, efficace et aligné à votre business.
                        </span>
                        <Link href="/create-my-app-mobile" className="bg-[#673de6] hover:bg-[#5735bc] text-white rounded-lg px-[31px] py-[10px] self-start mb-4 whitespace-nowrap">
                            Lancer mon projet chatbot
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default page