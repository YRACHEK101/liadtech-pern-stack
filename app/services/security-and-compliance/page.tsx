import PricingPacksSection from '@/components/sections/PricingPacksSection'
import SocialMediaVerticalIcons from '@/components/common/SocialMediaVerticalIcons'
import TrustedByClientsSection from '@/components/sections/TrustedByClientsSection'
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
            <div className='bg-[#2D1F67]'>
                <section className='relative overflow-hidden grid grid-cols-1 container mx-auto lg:grid-cols-2 px-4 pb-10 md:pb-20 pt-5 lg:pt-0 md:px-[42px] gap-10 lg:gap-20 lg:items-center'>
                    <div className='flex flex-col text-white z-10'>
                        <h2 className='text-2xl sm:text-3xl xl:text-4xl font-bold !text-left !text-white'>
                            Le RGPD n'est pas une option.C'est une exigence légale… et un gage de confiance.
                        </h2>
                        <span className='text-base sm:text-lg mb-4'>
                            Nous vous aidons à mettre votre site, vos outils, vos données et vos pratiques marketing en conformité avec la réglementation européenne — simplement, efficacement, sans jargon.
                        </span>

                        <div className='flex flex-wrap gap-4'>
                            <Link href="/" className="bg-[#673de6] hover:bg-[#5735bc] text-white rounded-lg px-5 lg:px-[31px] py-[10px] w-min whitespace-nowrap flex items-center gap-2">
                                Mettre mon entreprise en conformité
                            </Link>
                            <Link href="/" className="bg-[#673de6] hover:bg-[#5735bc] text-white rounded-lg px-5 lg:px-[31px] py-[10px] w-min whitespace-nowrap flex items-center gap-2">
                                Voir les éléments vérifiés
                            </Link>
                        </div>
                    </div>
                    <Image src="/images/RGBD.svg" width={0} height={0} className='w-auto h-auto mx-auto' alt='pic' />
                    <SocialMediaVerticalIcons className='absolute bottom-5 right-0' />
                </section>
            </div>
            <TrustedByClientsSection />

            <PricingPacksSection />

            <section className='grid text-[#2D1F67] grid-cols-1 sm:container sm:mx-auto lg:grid-cols-2 px-4 md:px-16 gap-10 lg:gap-20 lg:items-center mb-4 md:mb-20'>
                <div className='flex flex-col gap-4'>
                    <div className='text-2xl sm:text-3xl xl:text-4xl font-bold'>
                        Pourquoi la conformité RGPD est essentielle ?
                    </div>
                    <div className='flex flex-col gap-4'>
                        <div className='flex gap-2 md:gap-3'>
                            <div className='flex flex-col flex-1'>
                                <span className='text-sm md:text-base'>
                                    ⚖️ C'est obligatoire pour toute entreprise traitant des données personnelles en Europe
                                </span>
                            </div>
                        </div>
                        <div className='flex gap-2 md:gap-3'>
                            <div className='flex flex-col flex-1'>
                                <span className='text-sm md:text-base'>
                                    💰 Les sanctions peuvent monter jusqu'à 4 % du CA
                                </span>
                            </div>
                        </div>
                        <div className='flex gap-2 md:gap-3'>
                            <div className='flex flex-col flex-1'>
                                <span className='text-sm md:text-base'>
                                    👥 Elle renforce la confiance de vos utilisateurs
                                </span>
                            </div>
                        </div>
                        <div className='flex gap-2 md:gap-3'>
                            <div className='flex flex-col flex-1'>
                                <span className='text-sm md:text-base'>
                                    📈 Elle structure vos pratiques internes (marketing, RH, CRM…)
                                </span>
                            </div>
                        </div>
                        <div className='flex gap-2 md:gap-3'>
                            <div className='flex flex-col flex-1'>
                                <span className='text-sm md:text-base'>
                                    🔐 Elle protège vos données en cas de piratage ou de litige
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <Image src="/images/RGBD 3.svg" width={0} height={0} className='w-auto h-auto mx-auto' alt='pic' />
            </section>
            <section className='grid text-[#2D1F67] grid-cols-1 sm:container sm:mx-auto lg:grid-cols-2 px-4 md:px-16 gap-10 lg:gap-20 lg:items-center mb-10 md:mb-20'>
                <Image src="/images/RGBD2.svg" width={0} height={0} className='w-auto h-auto mx-auto' alt='pic' />
                <div className='flex flex-col gap-4'>
                    <div className='text-2xl sm:text-3xl xl:text-4xl font-bold'>
                        Ce que nous vérifions et mettons en place
                    </div>
                    <div className='flex flex-col gap-4'>
                        <div className='flex gap-2 md:gap-3'>
                            <div className='flex flex-col flex-1'>
                                <span className='text-sm md:text-base'>
                                    🍪 Gestion des cookies : bandeau, choix, consentement explicite
                                </span>
                            </div>
                        </div>
                        <div className='flex gap-2 md:gap-3'>
                            <div className='flex flex-col flex-1'>
                                <span className='text-sm md:text-base'>
                                    📄 Mentions légales & politique de confidentialité
                                </span>
                            </div>
                        </div>
                        <div className='flex gap-2 md:gap-3'>
                            <div className='flex flex-col flex-1'>
                                <span className='text-sm md:text-base'>
                                    📬 Formulaires conformes : finalité, durée, base légale
                                </span>
                            </div>
                        </div>
                        <div className='flex gap-2 md:gap-3'>
                            <div className='flex flex-col flex-1'>
                                <span className='text-sm md:text-base'>
                                    📥 Collecte & stockage des données : sécurisation, minimisation
                                </span>
                            </div>
                        </div>
                        <div className='flex gap-2 md:gap-3'>
                            <div className='flex flex-col flex-1'>
                                <span className='text-sm md:text-base'>
                                    🔐 Droits utilisateurs : accès, rectification, suppression
                                </span>
                            </div>
                        </div>
                        <div className='flex gap-2 md:gap-3'>
                            <div className='flex flex-col flex-1'>
                                <span className='text-sm md:text-base'>
                                    📁 Registre des traitements, DPIA si nécessaire
                                </span>
                            </div>
                        </div>
                        <div className='flex gap-2 md:gap-3'>
                            <div className='flex flex-col flex-1'>
                                <span className='text-sm md:text-base'>
                                    🧑‍💻 Formation de vos équipes ou DPO externe en option
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='grid text-[#2D1F67] grid-cols-1 sm:container sm:mx-auto lg:grid-cols-2 px-4 md:px-16 gap-10 lg:gap-20 lg:items-center mb-4 md:mb-20'>
                <div className='flex flex-col gap-4'>
                    <div className='text-2xl sm:text-3xl xl:text-4xl font-bold'>
                        Protégez vos données.Rassurez vos clients.
                    </div>
                    <span className='text-base sm:text-lg mb-4'>
                        Faites de la conformité un levier de confiance.
                    </span>

                    <div className='flex flex-col gap-4'>
                        <div className='flex gap-2 md:gap-3'>
                            <div className='flex flex-col flex-1'>
                                <span className='text-sm md:text-base'>
                                    ⚖️ Double expertise tech & réglementaire
                                </span>
                            </div>
                        </div>
                        <div className='flex gap-2 md:gap-3'>
                            <div className='flex flex-col flex-1'>
                                <span className='text-sm md:text-base'>
                                    🧑‍💼 Accompagnement personnalisé : TPE, PME, SaaS, e-commerce
                                </span>
                            </div>
                        </div>
                        <div className='flex gap-2 md:gap-3'>
                            <div className='flex flex-col flex-1'>
                                <span className='text-sm md:text-base'>
                                    🧩 Intégration fluide à vos outils web & CRM
                                </span>
                            </div>
                        </div>
                        <div className='flex gap-2 md:gap-3'>
                            <div className='flex flex-col flex-1'>
                                <span className='text-sm md:text-base'>
                                    🧠 Documentation claire, sans jargon
                                </span>
                            </div>
                        </div>
                        <div className='flex gap-2 md:gap-3'>
                            <div className='flex flex-col flex-1'>
                                <span className='text-sm md:text-base'>
                                    🤝 Approche pragmatique : utile, appliquée, non bureaucratique
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <Image src="/images/RGBD 6.svg" width={0} height={0} className='w-auto h-auto mx-auto' alt='pic' />
            </section>
            <section className='grid text-[#2D1F67] grid-cols-1 sm:container sm:mx-auto lg:grid-cols-2 px-4 md:px-16 gap-10 lg:gap-20 lg:items-center mb-10 md:mb-20'>
                <Image src="/images/RGBD 5.svg" width={0} height={0} className='w-auto h-auto mx-auto' alt='pic' />
                <div className='flex flex-col gap-4'>
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
            </section>
            <section className='bg-[#2D1F67] text-white py-10 md:py-20'>
                <div className='grid grid-cols-1 container mx-auto lg:grid-cols-2 px-4 md:px-16 gap-10 lg:gap-20 lg:items-center pb-10'>
                    <div className='flex flex-col gap-4'>
                        <h2 className='text-2xl sm:text-3xl xl:text-4xl font-bold !text-left'>
                            Protégez vos données.
                        </h2>
                        <h3 className='text-xl md:text-2xl lg:text-3xl font-medium'>
                            Rassurez vos clients.Faites de la conformité un levier de confiance
                        </h3>
                        <Link href="/" className="bg-[#673de6] hover:bg-[#5735bc] text-white rounded-lg px-[31px] py-[10px] w-min whitespace-nowrap">
                            Planifier ma mise en conformité
                        </Link>
                    </div>
                    <Image src="/images/RGBD 4.svg" width={0} height={0} className='w-auto h-auto mx-auto' alt='pic' />
                </div>
            </section>
        </div>
    )
}

export default page