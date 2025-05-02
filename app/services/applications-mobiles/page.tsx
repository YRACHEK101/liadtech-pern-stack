import { PricingTable } from '@/app/page'
import PricingPacksSection from '@/components/sections/PricingPacksSection'
import TrustedByClientsSection from '@/components/sections/TrustedByClientsSection'
import TarifPricingPlan from '@/components/tarifs/TarifPricingPlan'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SocialMediaVerticalIcons from '@/components/common/SocialMediaVerticalIcons'

const sitesTypes = [
    {
        title: 'Site vitrine professionnel',
        description: 'Idéal pour présenter votre activité, vos services, vos contacts. Simple, clair et efficace.',
    },
    {
        title: 'Site e-commerce',
        description: 'Vendez en ligne avec un panier sécurisé, gestion de produits, paiements intégrés.'
    },
    {
        title: 'Landing page / page de campagne',
        description: 'Parfait pour une pub ciblée ou un lancement produit. Rapide à mettre en place, optimisée pour la conversion.'
    },
    {
        title: 'Blog professionnel ou site de contenu',
        description: 'SEO-friendly, idéal pour attirer du trafic qualifié régulièrement.'
    },
    {
        title: 'Application web légère ou mini plateforme',
        description: 'Outil interne, dashboard client, extranet ou service sur mesure.'
    },
    {
        title: 'Site WordPress administrable',
        description: 'Facile à gérer, évolutif, idéal pour les clients autonomes.'
    },
    {
        title: 'Site full custom en MERN Stack',
        description: 'Pour les projets avancés, complexes ou à forte logique métier '
    }
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
            <div className='bg-[#2D1F67]'>
            <section className='relative overflow-hidden grid container mx-auto lg:grid-cols-2 grid-cols-1 px-4 md:px-[48px] gap-5 md:gap-10 lg:gap-20 pb-12 pt-5 lg:py-10 lg:items-center'>
                <div className='flex flex-col text-white'>
                    <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold !text-left'>
                        Des applications mobiles qui transforment votre vision en réalité.
                    </h2>
                    <span className='text-base md:text-xl lg:text-2xl mb-6 md:mb-9'>
                        Nous créons des applications mobiles performantes, intuitives et évolutives pour iOS et Android.
                    </span>

                    <div className='flex gap-4'>
                        <Link href="/" className="bg-[#673de6] hover:bg-[#5735bc] text-white rounded-lg px-3 md:px-[31px] py-[10px] w-min whitespace-nowrap">
                            Créer mon application mobile
                        </Link>
                        <Link href="/" className="bg-[#673de6] hover:bg-[#5735bc] text-white rounded-lg px-3 md:px-[31px] py-[10px] w-min whitespace-nowrap">
                            Voir nos réalisations
                        </Link>
                    </div>
                </div>
                <Image src="/images/Création du l'app (1).svg" width={0} height={0} className='w-auto h-auto mx-auto' alt='hero' />
                <SocialMediaVerticalIcons className='absolute bottom-5 right-0' />
            </section>
            </div>
            <TrustedByClientsSection />
            {/* Pricing Table Section */}
            <PricingPacksSection />

            <section className="bg-[#2D1F67] px-4 py-10 md:p-20 text-white flex flex-col gap-20 lg:gap-40">
                <div className="sm:container sm:mx-auto flex flex-col items-center gap-5">
                    <div className="text-white text-2xl sm:text-3xl xl:text-4xl font-bold mb-10 lg:mb-[105px] text-center ">
                        Pourquoi une app mobile change tout ?
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div className="bg-[#41308F] flex flex-col gap-2 items-center shadow-lg rounded-lg p-4">
                            <div className="bg-[#9C51F1] rounded-md p-2 mb-2">
                                <Image src={"/images/rocket.svg"} width={40} height={40} alt="Rectangle 97" />
                            </div>
                            <span className="font-bold text-base sm:text-lg lg:text-xl">
                                Accès instantané à vos services
                            </span>
                            <p className=" font-light text-base sm:text-lg lg:text-xl">
                                Vos clients n'ont plus à chercher votre site, ils vous trouvent en un tap.
                            </p>
                        </div>
                        <div className="bg-[#41308F] flex flex-col gap-2 items-center shadow-lg rounded-lg p-4">
                            <div className="bg-[#9C51F1] rounded-md p-2 mb-2">
                                <Image src={"/Liadtech/Accueil/icones/sync_svgrepo.com.svg"} width={40} height={40} alt="Rectangle 97" />
                            </div>
                            <span className="font-bold text-base sm:text-lg lg:text-xl">
                                Engagement récurrent & fidélisation
                            </span>
                            <p className=" font-light text-base sm:text-lg lg:text-xl">
                                Notifications push, achats récurrents, raccourcis… vos clients reviennent plus souvent.
                            </p>
                        </div>
                        <div className="bg-[#41308F] flex flex-col gap-2 items-center shadow-lg rounded-lg p-4">
                            <div className="bg-[#9C51F1] rounded-md p-2 mb-2">
                                <Image src={"/Liadtech/Accueil/icones/face-smile_svgrepo.com.svg"} width={40} height={40} alt="Rectangle 97" />
                            </div>
                            <span className="font-bold text-base sm:text-lg lg:text-xl">
                                Des données précieuses sur vos utilisateurs
                            </span>
                            <p className=" font-light text-base sm:text-lg lg:text-xl">
                                Analyse du comportement, parcours client, préférences : vous pilotez avec clarté.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 sm:container sm:mx-auto lg:items-center gap-20 lg:gap-8">
                    <div className="flex flex-col gap-9 text-[18px] md:text-[24px]">
                        <span className="text-white text-2xl sm:text-3xl xl:text-4xl leading-[40px] md:leading-[59px] font-bold">
                            Notre expertise mobile, votre avantage compétitif
                        </span>
                        <span className="text-white text-base sm:text-lg font-semibold">
                            On développe des apps qui ne sont pas juste attractives — elles sont fluides, optimisées, sécurisées, et pensées pour performer. Que ce soit en MERN stack, Flutter, ou React Native, nos solutions s'adaptent à votre projet et à votre budget.
                        </span>
                    </div>
                    <Image src={"/images/App mobile (1).svg"} width={0} height={0} className='w-auto h-auto' alt='pic' />
                </div>
            </section>
            <section className='grid grid-cols-1 container mx-auto lg:grid-cols-2 lg:items-center gap-20 px-4 md:px-16 pt-[50px] md:pt-[110px]'>
                <Image src={"/images/App mobile.svg"} width={0} height={0} className='w-auto h-auto' alt='pic' />
                <div className='flex flex-col'>
                    <h2 className='text-2xl sm:text-3xl xl:text-4xl font-bold !text-left mb-9'>
                        Des applications sur mesure pour chaque besoin
                    </h2>
                    <div className='flex flex-col gap-8'>
                        {sitesFeatures.map((site, index) => (
                            <div key={index} className='flex gap-3'>
                                <svg width="14" height="15" viewBox="0 0 14 15" className='mt-2' fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2L5.63636 13L2 7.4127" stroke="#60BB6F" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <div className='flex flex-col'>
                                    <span className='!text-[16px] md:!text-[20px]'>{site}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className='grid grid-cols-1 container mx-auto lg:grid-cols-2 lg:items-center px-4 md:px-16 py-10'>
                <div className='flex flex-col gap-7'>
                    <span className='font-bold text-2xl sm:text-3xl xl:text-4xl'>
                        Votre app inclut toujours…
                    </span>
                    <span className='font-bold text-[#673DE6] text-base sm:text-lg'>
                        Parlez à un expert LIADTECH ou démarrez votre projet en quelques clics.
                    </span>
                    <div className='flex flex-col gap-4'>
                        {sitesFeatures.map((site, index) => (
                            <div key={index} className='flex gap-3'>
                                <svg width="14" height="15" viewBox="0 0 14 15" className='mt-2' fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2L5.63636 13L2 7.4127" stroke="#60BB6F" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <div className='flex flex-col'>
                                    <span className='!text-[16px] md:!text-[20px]'>{site}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <Image src={"/images/Création du l'app 3.svg"} width={0} height={0} className='w-auto h-auto' alt='pic' />
            </section>
            <section className='grid grid-cols-1 container mx-auto lg:grid-cols-2 lg:items-center px-4 md:px-16 pb-[50px] md:pb-[110px] pb-10 md:pb-0'>
                <Image src={"/images/Création du l'app 4.svg"} width={0} height={0} className='w-auto h-auto' alt='pic' />
                <div className='flex flex-col gap-4'>
                    <h2 className='text-2xl sm:text-3xl xl:text-4xl font-bold'>
                        Discutons de votre projet. Une app performante peut tout changer.
                    </h2>
                    <Link href="/create-my-app-mobile" className="bg-[#673de6] hover:bg-[#5735bc] text-white rounded-lg px-[31px] py-[10px] w-min whitespace-nowrap">
                        Parlez à un expert
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default page