import PricingPacksSection from '@/components/sections/PricingPacksSection'
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
                <section className='overflow-hidden grid grid-cols-1 container mx-auto xl:grid-cols-2 px-4 pt-8 md:px-[42px]'>
                    <div className='flex flex-col text-white z-10 self-center'>
                        <h2 className='text-2xl sm:text-3xl xl:text-4xl font-bold !text-left !text-white'>
                            Le RGPD n'est pas une option.C'est une exigence légale… et un gage de confiance.
                        </h2>
                        <span className='text-base sm:text-lg mb-9'>
                            Nous vous aidons à mettre votre site, vos outils, vos données et vos pratiques marketing en conformité avec la réglementation européenne — simplement, efficacement, sans jargon.
                        </span>

                        <div className='flex flex-col md:flex-row gap-4'>
                            <Link href="/" className="bg-[#673de6] hover:bg-[#5735bc] text-white rounded-lg px-5 lg:px-[31px] py-[10px] self-start whitespace-nowrap flex items-center gap-2">
                                Mettre mon entreprise en conformité
                            </Link>
                            <Link href="/" className="bg-[#673de6] hover:bg-[#5735bc] text-white rounded-lg px-5 lg:px-[31px] py-[10px] self-start whitespace-nowrap flex items-center gap-2">
                                Voir les éléments vérifiés
                            </Link>
                        </div>
                    </div>
                    <Image src={"/images/Ux ui.svg"} width={0} height={0} className='w-auto mx-auto origin-top-right scale-100 xl:scale-[120%] pt-10 z-0 h-auto invisible' alt='pic' />

                </section>
            </div>
            <TrustedByClientsSection />

            <PricingPacksSection />

            <section className='grid text-[#2D1F67] grid-cols-1 sm:container sm:mx-auto xl:grid-cols-2 px-4 md:px-16 pb-10'>
                <div className='flex flex-col gap-4 pt-4'>
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
                <div></div>
            </section>
            <section className='grid text-[#2D1F67] grid-cols-1 sm:container sm:mx-auto xl:grid-cols-2 px-4 md:px-16 pb-10'>
                <div></div>
                <div className='flex flex-col gap-4 pt-4'>
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
            <section className='grid text-[#2D1F67] grid-cols-1 sm:container sm:mx-auto xl:grid-cols-2 px-4 md:px-16 pb-10'>

                <div className='flex flex-col gap-4 pt-4'>
                    <div className='text-2xl sm:text-3xl xl:text-4xl font-bold'>
                        Protégez vos données.Rassurez vos clients.
                    </div>
                    <span className='text-base sm:text-lg mb-9'>
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
                <div></div>
            </section>
            <section className='grid text-[#2D1F67] grid-cols-1 sm:container sm:mx-auto xl:grid-cols-2 px-4 md:px-16 pb-10'>
                <div></div>
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
            </section>

        </div>
    )
}

export default page