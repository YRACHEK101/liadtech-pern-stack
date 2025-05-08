import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import SocialMediaVerticalIcons from '@/components/common/SocialMediaVerticalIcons'
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
                <section className='relative overflow-hidden grid grid-cols-1 sm:container sm:mx-auto xl:grid-cols-2 px-4 py-8 md:px-[42px]'>
                    <div className='flex flex-col text-[#2D1F67] self-center '>
                        <h2 className='text-2xl sm:text-3xl xl:text-4xl font-bold !text-left'>
                            Du design à la gestion :
                            votre infrastructure Cloud,pensée pour durer, scalée pour grandir.

                        </h2>
                        <span className='text-base sm:text-lg text-[#2D1F67] mb-4 sm:mb-6 font-normal'>
                            Nos architectes Cloud vous accompagnent sur toutes les étapes : conception, migration, hébergement, sécurisation et optimisation de vos environnements Cloud
                        </span>

                        <div className='flex gap-4 flex-wrap md:justify-start'>
                            <Link href="/" className="bg-[#673de6] hover:bg-[#5735bc] text-white rounded-lg px-[31px] py-[10px] self-start whitespace-nowrap flex items-center gap-2">
                                Construire ou migrer mon infrastructure Cloud
                            </Link>
                            <Link href="/" className="bg-[#673de6] hover:bg-[#5735bc] text-white rounded-lg px-[31px] py-[10px] self-start whitespace-nowrap flex items-center gap-2">
                                Découvrir nos offres Cloud managé
                            </Link>
                        </div>
                    </div>
                    {/* <Image src="/images/Video explainer.svg" width={0} height={0} className='w-auto h-auto mb-5' alt='pic' /> */}
                    <SocialMediaVerticalIcons className='absolute bottom-5 right-0' />
                </section>
            </div>
            <TrustedByClientsSection />
            {/* Pricing Table Section */}
            <PricingPacksSection />

            <section className='grid text-[#2D1F67] grid-cols-1 sm:container sm:mx-auto xl:grid-cols-2 px-4 md:px-16 pb-10'>
                <div className='flex flex-col gap-4 pt-4'>
                    <div className='text-2xl sm:text-3xl xl:text-4xl font-bold'>
                        Ce que nous proposons
                    </div>
                    <span className='text-base sm:text-lg mb-9'>
                        Une offre complète pour vos besoins Cloud :
                    </span>
                    <div className='flex flex-col gap-4'>
                        <div className='flex gap-2 md:gap-3'>
                            <div className='flex flex-col flex-1'>
                                <span className='text-sm md:text-base'>
                                    🧱 Architecture Cloud sur-mesure (Azure, AWS, GCP, OVHcloud…)
                                </span>
                            </div>
                        </div>
                        <div className='flex gap-2 md:gap-3'>
                            <div className='flex flex-col flex-1'>
                                <span className='text-sm md:text-base'>
                                    🔧 Migration de serveurs, apps, DB, sites, services
                                </span>
                            </div>
                        </div>
                        <div className='flex gap-2 md:gap-3'>
                            <div className='flex flex-col flex-1'>
                                <span className='text-sm md:text-base'>
                                    🛠️ Hébergement managé sécurisé, scalable et supervisé
                                </span>
                            </div>
                        </div>
                        <div className='flex gap-2 md:gap-3'>
                            <div className='flex flex-col flex-1'>
                                <span className='text-sm md:text-base'>
                                    🧠 Conseil & stratégie Cloud (choix techno, design, coût, scalabilité)
                                </span>
                            </div>
                        </div>
                        <div className='flex gap-2 md:gap-3'>
                            <div className='flex flex-col flex-1'>
                                <span className='text-sm md:text-base'>
                                    🔐 Sécurité Cloud : IAM, backups, chiffrement, firewalls, RBAC
                                </span>
                            </div>
                        </div>
                        <div className='flex gap-2 md:gap-3'>
                            <div className='flex flex-col flex-1'>
                                <span className='text-sm md:text-base'>
                                    📊 Monitoring & optimisation des coûts, ressources et performances
                                </span>
                            </div>
                        </div>
                        <div className='flex gap-2 md:gap-3'>
                            <div className='flex flex-col flex-1'>
                                <span className='text-sm md:text-base'>
                                    📁 Infrastructure as Code (IaC) & CI/CD automatisés
                                </span>
                            </div>
                        </div>
                        <div className='flex gap-2 md:gap-3'>
                            <div className='flex flex-col flex-1'>
                                <span className='text-sm md:text-base'>
                                    🧩 Multi-cloud & hybrid-cloud (Azure AD, VPNs, ponts réseau, etc.)
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div></div>
            </section>
            <section className='grid text-[#2D1F67] grid-cols-1 sm:container sm:mx-auto xl:grid-cols-2 px-4 md:px-16 pb-10'>
                <div></div>
                <div className='flex flex-col gap-4 pt-4'>
                    <div className='text-2xl sm:text-3xl xl:text-4xl font-bold'>
                        Pourquoi travailler avec un architecte Cloud ?
                    </div>
                    <div className='flex flex-col gap-4'>
                        <div className='flex gap-2 md:gap-3'>
                            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="text-[#00b090] min-w-[24px]"><path fill="currentColor" d="M21.046 5.955c.439.439.439 1.151 0 1.59l-9.538 9.539a1.425 1.425 0 0 1-2.016 0l-4.288-4.288a1.125 1.125 0 0 1 1.591-1.591l3.705 3.704 8.954-8.954c.44-.44 1.152-.44 1.591 0Z"></path>
                            </svg>
                            <div className='flex flex-col flex-1'>
                                <span className='text-sm md:text-base'>
                                    Vous gagnez en performance et en résilience
                                </span>
                            </div>
                        </div>
                        <div className='flex gap-2 md:gap-3'>
                            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="text-[#00b090] min-w-[24px]"><path fill="currentColor" d="M21.046 5.955c.439.439.439 1.151 0 1.59l-9.538 9.539a1.425 1.425 0 0 1-2.016 0l-4.288-4.288a1.125 1.125 0 0 1 1.591-1.591l3.705 3.704 8.954-8.954c.44-.44 1.152-.44 1.591 0Z"></path>
                            </svg>
                            <div className='flex flex-col flex-1'>
                                <span className='text-sm md:text-base'>
                                    Vous contrôlez vos coûts avec une infra optimisée
                                </span>
                            </div>
                        </div>
                        <div className='flex gap-2 md:gap-3'>
                            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="text-[#00b090] min-w-[24px]"><path fill="currentColor" d="M21.046 5.955c.439.439.439 1.151 0 1.59l-9.538 9.539a1.425 1.425 0 0 1-2.016 0l-4.288-4.288a1.125 1.125 0 0 1 1.591-1.591l3.705 3.704 8.954-8.954c.44-.44 1.152-.44 1.591 0Z"></path>
                            </svg>
                            <div className='flex flex-col flex-1'>
                                <span className='text-sm md:text-base'>
                                    Vous bénéficiez d'un accompagnement expert indépendant des fournisseurs
                                </span>
                            </div>
                        </div>
                        <div className='flex gap-2 md:gap-3'>
                            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="text-[#00b090] min-w-[24px]"><path fill="currentColor" d="M21.046 5.955c.439.439.439 1.151 0 1.59l-9.538 9.539a1.425 1.425 0 0 1-2.016 0l-4.288-4.288a1.125 1.125 0 0 1 1.591-1.591l3.705 3.704 8.954-8.954c.44-.44 1.152-.44 1.591 0Z"></path>
                            </svg>
                            <div className='flex flex-col flex-1'>
                                <span className='text-sm md:text-base'>
                                    Vous gardez la main tout en déléguant l'exploitation
                                </span>
                            </div>
                        </div>
                        <div className='flex gap-2 md:gap-3'>
                            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="text-[#00b090] min-w-[24px]"><path fill="currentColor" d="M21.046 5.955c.439.439.439 1.151 0 1.59l-9.538 9.539a1.425 1.425 0 0 1-2.016 0l-4.288-4.288a1.125 1.125 0 0 1 1.591-1.591l3.705 3.704 8.954-8.954c.44-.44 1.152-.44 1.591 0Z"></path>
                            </svg>
                            <div className='flex flex-col flex-1'>
                                <span className='text-sm md:text-base'>
                                    Vous scalez sans friction, selon vos pics d'activité
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='grid text-[#2D1F67] grid-cols-1 sm:container sm:mx-auto xl:grid-cols-2 px-4 md:px-16 pb-10'>

                <div className='flex flex-col gap-4 pt-4'>
                    <div className='text-2xl sm:text-3xl xl:text-4xl font-bold'>
                        Notre méthode
                    </div>
                    <span className='text-base sm:text-lg '>
                        {"(Design > Déploiement > Management) "}
                    </span>

                    <ol className='flex flex-col gap-4 list-decimal'>
                        <li className=' gap-3'>
                            Brief : vos objectifs, vos utilisateurs, vos canaux
                        </li>
                        <li className=' gap-3'>
                            Cadrage & audit de l'existant ou des besoins
                        </li>
                        <li className=' gap-3'>
                            Design de l'architecture cible : sécurité, performance, coût
                        </li>
                        <li className=' gap-3'>
                            Déploiement automatisé (IaC) + migration si besoin
                        </li>
                        <li className=' gap-3'>
                            Configuration des accès, des rôles, des sauvegardes
                        </li>
                        <li className=' gap-3'>
                            Monitoring, alerting et supervision continue
                        </li>
                        <li className=' gap-3'>
                            Optimisation régulière & évolutions à la demande
                        </li>
                    </ol>
                </div>
                <div></div>
            </section>
            <section className='grid text-[#2D1F67] grid-cols-1 sm:container sm:mx-auto xl:grid-cols-2 px-4 md:px-16 pb-10'>
                <div></div>
                <div className='flex flex-col gap-4 pt-4 md:pt-16'>
                    <div className='text-2xl sm:text-3xl xl:text-4xl font-bold'>
                        Cas typiques où LIADTECH intervient
                    </div>
                    <div className='flex flex-col gap-4'>
                        <div className='flex gap-2 md:gap-3'>
                            <div className='size-2 bg-[#2D1F67] rounded-full mt-2'></div>
                            <div className='flex flex-col flex-1'>
                                <span className='text-sm md:text-base'>
                                    🧱 Création d'une infrastructure Cloud from scratch pour app ou SaaS
                                </span>
                            </div>
                        </div>
                        <div className='flex gap-2 md:gap-3'>
                            <div className='size-2 bg-[#2D1F67] rounded-full mt-2'></div>
                            <div className='flex flex-col flex-1'>
                                <span className='text-sm md:text-base'>
                                    🔁 Migration on-premise vers Azure ou AWS avec scalabilité
                                </span>
                            </div>
                        </div>
                        <div className='flex gap-2 md:gap-3'>
                            <div className='size-2 bg-[#2D1F67] rounded-full mt-2'></div>
                            <div className='flex flex-col flex-1'>
                                <span className='text-sm md:text-base'>
                                    💸 Optimisation des coûts cloud mal maîtrisés
                                </span>
                            </div>
                        </div>
                        <div className='flex gap-2 md:gap-3'>
                            <div className='size-2 bg-[#2D1F67] rounded-full mt-2'></div>
                            <div className='flex flex-col flex-1'>
                                <span className='text-sm md:text-base'>
                                    🛡️ Sécurisation d'une infra exposée ou à risque
                                </span>
                            </div>
                        </div>
                        <div className='flex gap-2 md:gap-3'>
                            <div className='size-2 bg-[#2D1F67] rounded-full mt-2'></div>
                            <div className='flex flex-col flex-1'>
                                <span className='text-sm md:text-base'>
                                    🚀 Mise en place de CI/CD, sauvegardes, plans de reprise (PRA/PCA)
                                </span>
                            </div>
                        </div>
                        <div className='flex gap-2 md:gap-3'>
                            <div className='size-2 bg-[#2D1F67] rounded-full mt-2'></div>
                            <div className='flex flex-col flex-1'>
                                <span className='text-sm md:text-base'>
                                    📊 Besoin d'un tableau de bord unifié multi-cloud
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className='bg-[#2D1F67] py-10 md:py-20'>
                <section className='grid grid-cols-1 sm:container sm:mx-auto lg:grid-cols-2 px-4 md:px-16 gap-10 lg:gap-20 lg:items-center mb-10 lg:mb-20'>
                    <div className='flex text-white flex-col gap-4'>
                        <div className='text-2xl sm:text-3xl xl:text-4xl font-bold'>
                            Pourquoi LIADTECH ?
                        </div>
                        <div className='flex flex-col gap-4'>
                            <div className='flex items-center gap-2 md:gap-3'>
                                <div className='size-2 bg-white rounded-full'></div>
                                <div className='flex flex-col flex-1'>
                                    <span className='text-sm md:text-base'>
                                        🧠 Architectes Cloud certifiés (Azure/AWS)
                                    </span>
                                </div>
                            </div>
                            <div className='flex items-center gap-2 md:gap-3'>
                                <div className='size-2 bg-white rounded-full'></div>
                                <div className='flex flex-col flex-1'>
                                    <span className='text-sm md:text-base'>
                                        💡 Expertise dev + infra + sécurité + coût
                                    </span>
                                </div>
                            </div>
                            <div className='flex items-center gap-2 md:gap-3'>
                                <div className='size-2 bg-white rounded-full'></div>
                                <div className='flex flex-col flex-1'>
                                    <span className='text-sm md:text-base'>
                                        🔐 Approche Cloud secure by design
                                    </span>
                                </div>
                            </div>
                            <div className='flex items-center gap-2 md:gap-3'>
                                <div className='size-2 bg-white rounded-full'></div>
                                <div className='flex flex-col flex-1'>
                                    <span className='text-sm md:text-base'>
                                        ☁️ Multi-cloud, hybride ou souverain, selon vos besoins
                                    </span>
                                </div>
                            </div>
                            <div className='flex items-center gap-2 md:gap-3'>
                                <div className='size-2 bg-white rounded-full'></div>
                                <div className='flex flex-col flex-1'>
                                    <span className='text-sm md:text-base'>
                                        🤝 Accompagnement stratégique + exécution technique
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <Image src={"/images/UI UX 1.svg"} width={0} height={0} className='w-auto h-auto mb-5 invisible' alt='pic' /> */}
                </section>
                <section className='grid grid-cols-1 sm:container sm:mx-auto lg:grid-cols-2 px-4 md:px-[42px] bg-[#2D1F67] pb-10 gap-10 lg:gap-20 lg:items-center'>
                    <div></div>
                    <div className='flex flex-col gap-6 md:gap-8 text-white'>
                        <span className='text-2xl sm:text-3xl xl:text-4xl font-bold'>
                            Votre cloud mérite mieux qu’un simple hébergeur.
                        </span>
                        <span className='font-bold text-base sm:text-lg'>
                            Confiez-le à une équipe d’architectes et de développeurs qui comprennent vos enjeux business et tech.
                        </span>
                        <Link href="/create-my-app-mobile" className="bg-[#673de6] hover:bg-[#5735bc] text-white rounded-lg px-4 py-2 sm:px-[31px] sm:py-[10px] w-min whitespace-nowrap">
                            Construire ou migrer mon infrastructure Cloud
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default page