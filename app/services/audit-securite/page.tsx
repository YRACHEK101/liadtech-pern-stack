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
            <section className='overflow-hidden grid grid-cols-1 md:grid-cols-2 px-4  sm:container sm:mx-auto'>
                <div className='flex flex-col text-[#2D1F67] pt-8 xl:pt-0 self-center'>
                    <h2 className='font-bold text-2xl sm:text-3xl xl:text-4xl'>
                        Votre système est peut-être exposé.Nous vous aidons à le sécuriser avant qu'il ne soit ciblé.
                    </h2>
                    <span className='text-base sm:text-lg mb-9'>
                        Nos audits de sécurité et tests d'intrusion identifient vos failles critiques, évaluent vos risques et vous livrent des solutions concrètes.Prévenez les attaques, renforcez vos défenses, inspirez confiance.
                    </span>

                    <div className='flex gap-4 flex-wrap md:justify-start'>
                        <Link href="/" className="bg-[#673de6] hover:bg-[#5735bc] text-white rounded-lg px-[31px] py-[10px] self-start whitespace-nowrap flex items-center gap-2">
                            Demander un audit de sécurité
                        </Link>
                        <Link href="/" className="bg-[#673de6] hover:bg-[#5735bc] text-white rounded-lg px-[31px] py-[10px] self-start whitespace-nowrap flex items-center gap-2">
                            Voir un exemple de rapport
                        </Link>
                    </div>
                </div>
                <Image src="/images/Video explainer.svg" width={0} height={0} className='w-auto h-auto mb-5 invisible' alt='hero' />
            </section>
            <TrustedByClientsSection />
            {/* Pricing Table Section */}
            <PricingPacksSection />

            <div className='bg-[#2D1F67]'>
                <section className='grid grid-cols-1 container mx-auto xl:grid-cols-2 px-4 md:px-16 pb-20 '>
                    <div className='flex flex-col text-white gap-4 pt-4 md:pt-16'>
                        <div className='text-2xl sm:text-3xl xl:text-4xl font-bold'>
                            Pourquoi faire un audit de sécurité ?
                        </div>
                        <div className='flex flex-col gap-4'>
                            <div className='flex gap-2 md:gap-3'>
                                <div className='flex flex-col flex-1'>
                                    <span className='text-sm md:text-base'>
                                        🔍 Identifier les vulnérabilités exploitées par les hackers

                                    </span>
                                </div>
                            </div>
                            <div className='flex gap-2 md:gap-3'>
                                <div className='flex flex-col flex-1'>
                                    <span className='text-sm md:text-base'>
                                        🧩 Respecter les normes de conformité (RGPD, ISO, CNIL...)

                                    </span>
                                </div>
                            </div>
                            <div className='flex gap-2 md:gap-3'>
                                <div className='flex flex-col flex-1'>
                                    <span className='text-sm md:text-base'>
                                        🔐 Protéger vos données clients et internes

                                    </span>
                                </div>
                            </div>
                            <div className='flex gap-2 md:gap-3'>
                                <div className='flex flex-col flex-1'>
                                    <span className='text-sm md:text-base'>
                                        ⚙️ Évaluer la résilience de votre architecture cloud / web

                                    </span>
                                </div>
                            </div>
                            <div className='flex gap-2 md:gap-3'>
                                <div className='flex flex-col flex-1'>
                                    <span className='text-sm md:text-base'>
                                        �� Obtenir un plan d'action clair et priorisé

                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <Image src={"/images/UI UX 1.svg"} width={0} height={0} className='w-auto h-auto invisible' alt='pic' /> */}
                </section>
                <section className='grid grid-cols-1 container mx-auto xl:grid-cols-2 px-4 md:px-16 bg-[#2D1F67] py-20 md:py-36 gap-10'>
                    <div>
                        {/* <Image src={"/images/UXUI section une.svg"} width={0} height={0} className='w-auto origin-top-right scale-100 md:scale-y-125 md:scale-x-110 h-auto invisible' alt='pic' /> */}

                    </div>
                    <div className='flex flex-col gap-7 pr-0 md:pr-20 text-white'>
                        <span className='font-bold text-2xl sm:text-3xl xl:text-4xl'>
                            Qu'est-ce qu'un Pentest (test d'intrusion) ?
                        </span>
                        <span className='font-bold text-base md:text-xl lg:text-2xl'>
                            Un pentest, c'est une simulation d'attaque menée dans un cadre sécurisé, avec des techniques réelles de cybercriminels.
                            L'objectif : vérifier jusqu'où un pirate peut aller dans vos systèmes, et surtout comment l'en empêcher.
                        </span>
                        <div className='flex flex-col gap-4'>
                            Test boîte noire, boîte grise, web app, API, infrastructure, cloud, Wi-Fi, etc.
                        </div>
                    </div>
                </section>
            </div>


            <section className='grid text-[#2D1F67] grid-cols-1 sm:container sm:mx-auto xl:grid-cols-2 px-4 md:px-16 pb-10'>
                <div className='flex flex-col gap-4 pt-8 md:pt-16'>
                    <div className='text-2xl sm:text-3xl xl:text-4xl font-bold'>
                        Ce que nous auditons pour vous
                    </div>
                    <div className='flex flex-col gap-4'>
                        <div className='flex gap-2 md:gap-3'>
                            <div className='size-2 bg-[#2D1F67] rounded-full mt-2'></div>
                            <div className='flex flex-col flex-1'>
                                <span className='text-sm md:text-base'>
                                    🌐 Applications web & APIs
                                </span>
                            </div>
                        </div>
                        <div className='flex gap-2 md:gap-3'>
                            <div className='size-2 bg-[#2D1F67] rounded-full mt-2'></div>
                            <div className='flex flex-col flex-1'>
                                <span className='text-sm md:text-base'>
                                    ☁️ Infrastructure Cloud (Azure, AWS, GCP, OVH…)
                                </span>
                            </div>
                        </div>
                        <div className='flex gap-2 md:gap-3'>
                            <div className='size-2 bg-[#2D1F67] rounded-full mt-2'></div>
                            <div className='flex flex-col flex-1'>
                                <span className='text-sm md:text-base'>
                                    🛠️ Code source & CI/CD
                                </span>
                            </div>
                        </div>
                        <div className='flex gap-2 md:gap-3'>
                            <div className='size-2 bg-[#2D1F67] rounded-full mt-2'></div>
                            <div className='flex flex-col flex-1'>
                                <span className='text-sm md:text-base'>
                                    🧱 Pare-feu, WAF, VPN, accès distants
                                </span>
                            </div>
                        </div>
                        <div className='flex gap-2 md:gap-3'>
                            <div className='size-2 bg-[#2D1F67] rounded-full mt-2'></div>
                            <div className='flex flex-col flex-1'>
                                <span className='text-sm md:text-base'>
                                    🧑‍💻 Règles IAM et droits utilisateurs
                                </span>
                            </div>
                        </div>
                        <div className='flex gap-2 md:gap-3'>
                            <div className='size-2 bg-[#2D1F67] rounded-full mt-2'></div>
                            <div className='flex flex-col flex-1'>
                                <span className='text-sm md:text-base'>
                                    📡 Protocole d'authentification, SSO, MFA
                                </span>
                            </div>
                        </div>
                        <div className='flex gap-2 md:gap-3'>
                            <div className='size-2 bg-[#2D1F67] rounded-full mt-2'></div>
                            <div className='flex flex-col flex-1'>
                                <span className='text-sm md:text-base'>
                                    ⚠️ Tests de phishing ou d'ingénierie sociale (optionnel)
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <Image src={"/images/Création du l'app 3.svg"} width={0} height={0} className='w-auto h-auto invisible mx-auto' alt='pic' /> */}
            </section>

            <section className='grid text-[#2D1F67] grid-cols-1 sm:container sm:mx-auto xl:grid-cols-2 px-4 md:px-16 pb-10'>
                <div>
                    {/* <Image src={"/images/Création du l'app 3.svg"} width={0} height={0} className='w-auto h-auto invisible mx-auto' alt='pic' /> */}

                </div>
                <div className='flex flex-col gap-4 pt-8 md:pt-16'>
                    <div className='text-2xl sm:text-3xl xl:text-4xl font-bold'>
                        Notre méthode
                    </div>
                    <div className='flex flex-col gap-4'>
                        <div className='flex gap-2 md:gap-3'>
                            <div className='size-2 bg-[#2D1F67] rounded-full mt-2'></div>
                            <div className='flex flex-col flex-1'>
                                <span className='md:text-lg font-normal'>
                                    Brief & cadrage technique
                                </span>
                                <span className='text-sm'>
                                    Ce qu'on teste, pourquoi, sur quoi
                                </span>
                            </div>
                        </div>
                        <div className='flex gap-2 md:gap-3'>
                            <div className='size-2 bg-[#2D1F67] rounded-full mt-2'></div>
                            <div className='flex flex-col flex-1'>
                                <span className='md:text-lg font-normal'>
                                    Phase d'analyse & scan
                                </span>
                                <span className='text-sm'>
                                    Outils, scripts, logs
                                </span>
                            </div>
                        </div>
                        <div className='flex gap-2 md:gap-3'>
                            <div className='size-2 bg-[#2D1F67] rounded-full mt-2'></div>
                            <div className='flex flex-col flex-1'>
                                <span className='md:text-lg font-normal'>
                                    Phase d'exploitation manuelle
                                </span>
                                <span className='text-sm'>
                                    Tests humains poussés
                                </span>
                            </div>
                        </div>
                        <div className='flex gap-2 md:gap-3'>
                            <div className='size-2 bg-[#2D1F67] rounded-full mt-2'></div>
                            <div className='flex flex-col flex-1'>
                                <span className='md:text-lg font-normal'>
                                    Rapport de vulnérabilités
                                </span>
                                <span className='text-sm'>
                                    Critique, élevée, modérée
                                </span>
                            </div>
                        </div>
                        <div className='flex gap-2 md:gap-3'>
                            <div className='size-2 bg-[#2D1F67] rounded-full mt-2'></div>
                            <div className='flex flex-col flex-1'>
                                <span className='md:text-lg font-normal'>
                                    Recommandations concrètes
                                </span>
                                <span className='text-sm'>
                                    Plan d'action technique & stratégique
                                </span>
                            </div>
                        </div>
                        <div className='flex gap-2 md:gap-3'>
                            <div className='size-2 bg-[#2D1F67] rounded-full mt-2'></div>
                            <div className='flex flex-col flex-1'>
                                <span className='md:text-lg font-normal'>
                                    Retest (optionnel)
                                </span>
                                <span className='text-sm'>
                                    Après correction
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='bg-[#DDBFFF]'>
                <section className='grid text-[#2D1F67] grid-cols-1 sm:container sm:mx-auto xl:grid-cols-2 px-4 md:px-16 pb-10'>

                    <div className='flex flex-col gap-4 pt-4 md:pt-16'>
                        <div className='text-2xl sm:text-3xl xl:text-4xl font-bold'>
                            Pourquoi LIADTECH ?
                        </div>
                        <div className='flex flex-col gap-4'>
                            <div className='flex gap-2 md:gap-3'>
                                <div className='size-2 bg-[#2D1F67] rounded-full mt-2'></div>
                                <div className='flex flex-col flex-1'>
                                    <span className='text-sm md:text-base'>
                                        🛡️ Experts certifiés en cybersécurité (OSCP, CEH, etc.)
                                    </span>
                                </div>
                            </div>
                            <div className='flex gap-2 md:gap-3'>
                                <div className='size-2 bg-[#2D1F67] rounded-full mt-2'></div>
                                <div className='flex flex-col flex-1'>
                                    <span className='text-sm md:text-base'>
                                        🧠 Audit orienté risques réels, pas techno blabla
                                    </span>
                                </div>
                            </div>
                            <div className='flex gap-2 md:gap-3'>
                                <div className='size-2 bg-[#2D1F67] rounded-full mt-2'></div>
                                <div className='flex flex-col flex-1'>
                                    <span className='text-sm md:text-base'>
                                        🚀 Réactivité : audit livré en 5 à 10 jours ouvrés
                                    </span>
                                </div>
                            </div>
                            <div className='flex gap-2 md:gap-3'>
                                <div className='size-2 bg-[#2D1F67] rounded-full mt-2'></div>
                                <div className='flex flex-col flex-1'>
                                    <span className='text-sm md:text-base'>
                                        🤝 Restitution claire, en langage métier ou dev
                                    </span>
                                </div>
                            </div>
                            <div className='flex gap-2 md:gap-3'>
                                <div className='size-2 bg-[#2D1F67] rounded-full mt-2'></div>
                                <div className='flex flex-col flex-1'>
                                    <span className='text-sm md:text-base'>
                                        🔐 Confidentialité, transparence, pédagogie
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div></div>
                </section>
                <div className='grid  text-[#2D1F67] grid-cols-1 container mx-auto xl:grid-cols-2 px-4 md:px-16 py-8 md:py-[110px]'>

                    <div>
                        {/* <Image src="/images/UI UX 6.svg" width={0} height={0} className='w-auto h-auto mb-5 origin-left z-0 invisible' alt='hero' /> */}

                    </div>
                    <div className='flex flex-col gap-4'>
                        <h2 className='text-2xl sm:text-3xl xl:text-4xl font-bold !text-left'>
                            Mieux vaut prévenir que réparer.
                        </h2>
                        <h3 className='text-xl md:text-2xl lg:text-3xl font-medium text-[#2D1F67]'>
                            Identifiez vos failles, sécurisez vos systèmes, protégez votre réputation.
                        </h3>
                        <Link href="/" className="bg-[#673de6] self-start hover:bg-[#5735bc] text-white rounded-lg px-[31px] py-[10px]">
                            Planifier un audit de sécurité
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default page