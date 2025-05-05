import PricingPacksSection from '@/components/sections/PricingPacksSection'
import SocialMediaVerticalIcons from '@/components/common/SocialMediaVerticalIcons'
import TrustedByClientsSection from '@/components/sections/TrustedByClientsSection'
import TarifPricingPlan from '@/components/tarifs/TarifPricingPlan'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const page = () => {
    return (
        <div>
            <div className='text-[#2D1F67]'>
                <section className='relative overflow-hidden grid grid-cols-1 container mx-auto lg:grid-cols-2 lg:items-center px-4 xl:pt-10 md:px-8 gap-10 lg:gap-20 pb-10 md:pb-20 pt-5 lg:pt-0'>
                    <div className='flex flex-col z-10'>
                        <h3 className='text-xl sm:text-2xl font-bold !text-left'>
                            Votre SaaS mérite mieux qu'une application.
                        </h3>
                        <h2 className='text-2xl sm:text-3xl xl:text-4xl font-bold !text-left'>
                            Il mérite une vision produit, une architecture scalable, une stratégie de croissance.
                        </h2>
                        <span className='text-base sm:text-lg mb-9'>
                            Nous concevons des plateformes SaaS robustes, modulaires et sécurisées avec la même exigence que pour nos propres solutions internes.Vous ne construisez pas seulement une application : vous bâtissez un produit cloud-ready prêt à évoluer avec votre ambition.
                        </span>

                        <div className='flex flex-col md:flex-row gap-4'>
                            <Link href="/" className="bg-[#673de6] hover:bg-[#5735bc] text-white rounded-lg px-5 lg:px-[31px] py-[10px] w-min whitespace-nowrap flex items-center gap-2">
                                Lancer mon produit SaaS
                            </Link>
                            <Link href="/" className="bg-[#673de6] hover:bg-[#5735bc] text-white rounded-lg px-5 lg:px-[31px] py-[10px] w-min whitespace-nowrap flex items-center gap-2">
                                Découvrir notre approche produit
                            </Link>
                        </div>
                    </div>
                    {/* <Image src={"/images/Ux ui.svg"} width={0} height={0} className='w-auto h-auto mx-auto' alt='pic' /> */}
                    <SocialMediaVerticalIcons className='absolute bottom-5 right-0' />
                </section>
            </div>
            <TrustedByClientsSection />

            <PricingPacksSection />
            <div className='bg-[#2D1F67] py-10 md:py-20 mb-4 lg:mb-20'>
                <section className='grid grid-cols-1 sm:container sm:mx-auto lg:grid-cols-2 lg:items-center px-4 gap-10 lg:gap-20'>
                    <div className='flex flex-col gap-7 text-white'>
                        <span className='font-bold text-2xl sm:text-3xl xl:text-4xl'>
                            Oui, nous développons aussi nos propres SaaS
                        </span>

                        <div>
                            Nous allons au-delà du développement sur commande.Nous concevons et exploitons nos propres solutions SaaS, renforçant notre expertise sur l'ensemble du cycle de vie d'un produit cloud.
                        </div>
                        <div className='border-l-4 border-purple-600 p-1'>
                            Cette expérience concrète nous permet de comprendre et d'anticiper vos véritables enjeux : scalabilité, expérience utilisateur, sécurité, modèle économique.
                        </div>
                    </div>
                    {/* <Image src={"/images/UI UX 1.svg"} width={0} height={0} className='w-auto h-auto mx-auto' alt='pic' /> */}
                </section>
                <section className='grid grid-cols-1 sm:container sm:mx-auto lg:grid-cols-2 lg:items-center px-4 gap-10 lg:gap-20'>
                    <div></div>
                    <div className='flex flex-col gap-7 pr-0 md:pr-20 text-white'>
                        <span className='font-bold text-2xl sm:text-3xl xl:text-4xl'>
                            Ce que nous développons pour vous
                        </span>
                        <ul className='list-disc pl-4 flex flex-col gap-4'>
                            <li>
                                🔧 Plateformes SaaS sur mesure, cloud-native, prêtes à scaler
                            </li>
                            <li>
                                🔐 Authentification et rôles sécurisés (IAM, SSO, RBAC)
                            </li>
                            <li>
                                🗂️ Base de données scalable, multi-tenant ou dédiée
                            </li>
                            <li>
                                🔗 API sécurisées (REST ou GraphQL)
                            </li>
                            <li>
                                💳 Paiements intégrés (Stripe, GoCardless, abonnements)
                            </li>
                            <li>
                                📈 Modules métiers : CRM, analytics, support, IA
                            </li>
                            <li>
                                ☁️ Déploiement optimisé : Azure, AWS, GCP
                            </li>
                            <li>
                                🔒 Sécurité & RGPD dès la conception
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
            <section className='px-4 grid grid-cols-1 sm:container sm:mx-auto lg:grid-cols-2 lg:items-center gap-10 lg:gap-20 mb-4 md:mb-20'>
                <div className='flex text-[#2D1F67] flex-col gap-4'>
                    <div className='text-2xl sm:text-3xl xl:text-4xl font-bold'>
                        Ce qu'un vrai SaaS doit intégrer
                    </div>
                    <ul className='list-disc pl-4 flex flex-col gap-4'>
                        <li>
                            Une architecture cloud-native évolutive
                        </li>
                        <li>
                            Une expérience utilisateur fluide (clients, admins, agents)
                        </li>
                        <li>
                            Un modèle d'abonnement simple et scalable
                        </li>
                        <li>
                            Des outils d'analyse intégrés pour piloter l'activité
                        </li>
                        <li>
                            Une sécurité de haut niveau et une conformité RGPD native
                        </li>
                    </ul>
                </div>
                {/* <Image src="/images/UI UX 2.svg" width={0} height={0} className='w-auto h-auto mx-auto' alt='hero' /> */}
            </section>
            <section className='px-4 grid grid-cols-1 sm:container sm:mx-auto lg:grid-cols-2 lg:items-center gap-10 lg:gap-20 mb-4 md:mb-20'>
                <div></div>
                <div className='flex text-[#2D1F67] flex-col gap-4 pt-4'>
                    <div className='text-2xl sm:text-3xl xl:text-4xl font-bold'>
                        Notre méthode de création SaaS
                    </div>

                    <ol className='flex flex-col gap-4 list-decimal pl-4'>
                        <li className=''>
                            <div className='flex flex-col'>
                                <span className='font-bold'>
                                    Cadrage produit
                                </span>
                                <span className=''>
                                    définir votre vision, votre modèle, vos utilisateurs
                                </span>
                            </div>
                        </li>
                        <li className=''>
                            <div className='flex flex-col'>
                                <span className='font-bold'>
                                    Conception UX/UI
                                </span>
                                <span className=''>
                                    design multi-rôles fluide et intuitif
                                </span>
                            </div>
                        </li>
                        <li className=''>
                            <div className='flex flex-col'>
                                <span className='font-bold'>
                                    Architecture technique
                                </span>
                                <span className=''>
                                    cloud-native, scalable, sécurisée
                                </span>
                            </div>
                        </li>
                        <li className=''>
                            <div className='flex flex-col'>
                                <span className='font-bold'>
                                    Développement agile
                                </span>
                                <span className=''>
                                    modules indépendants, versionnés, testés
                                </span>
                            </div>
                        </li>
                        <li className=''>
                            <div className='flex flex-col'>
                                <span className='font-bold'>
                                    Déploiement cloud
                                </span>
                                <span className=''>
                                    CI/CD, staging, monitoring, alerting
                                </span>
                            </div>
                        </li>
                        <li className=''>
                            <div className='flex flex-col'>
                                <span className='font-bold'>
                                    Évolution continue
                                </span>
                                <span className=''>
                                    support, mises à jour, nouveaux modules
                                </span>
                            </div>
                        </li>
                    </ol>
                </div>
            </section>
            <div className='bg-[#DDBFFF] text-[#2D1F67] py-10 md:py-20'>
                <section className='grid grid-cols-1 sm:container sm:mx-auto lg:grid-cols-2 px-4 md:px-8 gap-10 lg:gap-20 lg:items-center mb-10 lg:mb-20'>
                    <div className='flex flex-col gap-4'>
                        <div className='text-2xl sm:text-3xl xl:text-4xl font-bold'>
                            Pourquoi choisir LIADTECH pour votre SaaS
                        </div>
                        <ul className='list-disc pl-4 flex flex-col gap-4'>
                            <li>
                                🧠 Éditeur SaaS expérimenté : nous développons et exploitons nos propres plateformes
                            </li>
                            <li>
                                ☁️ Architectes cloud certifiés : optimisation Azure, AWS, GCP
                            </li>
                            <li>
                                🔒 Conformité RGPD & sécurité native dès la conception
                            </li>
                            <li>
                                🧩 Modules maison réutilisables pour accélérer votre time-to-market
                            </li>
                            <li>
                                📈 Vision business : nous pensons produit + croissance + scalabilité
                            </li>
                            <li>
                                🤝 Vous êtes partenaire, pas juste client : votre succès est aussi le nôtre
                            </li>
                        </ul>
                    </div>
                    {/* <Image src={"/images/UI UX 1.svg"} width={0} height={0} className='w-auto h-auto mb-5 invisible' alt='pic' /> */}
                </section>
                <section className='grid grid-cols-1 sm:container sm:mx-auto lg:grid-cols-2 px-4 md:px-8 pb-10 gap-10 lg:gap-20 lg:items-center'>
                    <div></div>
                    <div className='flex flex-col gap-6 md:gap-8'>
                        <h3 className='text-xl sm:text-2xl font-bold !text-left'>
                            Vous ne cherchez pas seulement à développer un logiciel.
                        </h3>
                        <span className='text-2xl sm:text-3xl xl:text-4xl font-bold'>
                            Vous bâtissez votre futur.
                        </span>
                        <span className='font-bold text-base sm:text-lg'>
                            Avec LIADTECH, transformez votre idée en véritable produit SaaS scalable et sécurisé.
                        </span>
                        <Link href="/create-my-app-mobile" className="bg-[#673de6] hover:bg-[#5735bc] text-sm sm:text-base text-white rounded-lg p-2 sm:px-[31px] sm:py-[10px] w-min whitespace-nowrap">
                            Lancer mon produit SaaS avec LIADTECH
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default page