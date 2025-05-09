import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'


const contentSections = [
    {
        id: 'web-mobile',
        tabTitle: 'Web & Mobile',
        title: 'Sites performants & mobiles inclus',
        description: 'Que ce soit un site vitrine, une boutique e-commerce ou une app mobile, nous créons des expériences digitales pensées pour convertir et engager vos clients, partout.',
        image: '/Liadtech/Accueil/image 1 section 4.svg',
        alt: 'Web & Mobile',
        actionButtonLabel: 'Lancer mon projet web',
        actionButtonLink: '/action',
    },
    {
        id: 'digital-marketing',
        tabTitle: 'Digital Marketing',
        title: 'Générez plus de clients avec le digital',
        description: "SEO, campagnes Ads et création de contenu : notre équipe vous aide à attirer, convertir et fidéliser grâce à une stratégie sur-mesure orientée résultats.",
        actionButtonLabel: 'Générer plus de clients',
        actionButtonLink: '/action',
        image: '/Liadtech/Accueil/image 2 section 4.svg',
        alt: 'Digital Marketing',
    },
    {
        id: 'studio-creatif',
        tabTitle: 'Studio Créatif',
        title: 'Marquez les esprits avec votre image',
        description: 'Du logo animé à la vidéo explicative, on crée une identité forte et mémorable pour votre marque. Des contenus percutants pour vos présentations, votre site ou les réseaux sociaux.',
        actionButtonLabel: 'Améliorer mon image de marque',
        actionButtonLink: '/action',
        image: '/Liadtech/Accueil/image 3  section 4.svg',
        alt: 'Studio Créatif',
    },
    {
        id: 'cloud-saas-support',
        tabTitle: 'Cloud, SaaS & Support',
        title: 'Votre projet. Scalable, Sécurisé, Performant.',
        description: 'On vous accompagne de A à Z sur vos solutions SaaS ou web-apps sur-mesure : cloud scalable, sécurité, disponibilité maximale et support continu.',
        actionButtonLabel: 'Construire mon SaaS',
        actionButtonLink: '/action',
        image: '/Liadtech/Accueil/image 4 section 4.svg',
        alt: 'Cloud, SaaS & Support',
    },
    {
        id: 'ia-cybersecurite',
        tabTitle: 'IA, Automatisation & Cybersécurité',
        title: 'Gagnez du temps. Protégez vos données.',
        description: 'Grâce à nos outils IA & sécurité, vous gagnez en efficacité tout en restant conforme au RGPD. Automatisez vos tâches, sécurisez vos services et restez maître de vos données.',
        actionButtonLabel: 'Optimiser & sécuriser mes outils',
        actionButtonLink: '/action',
        image: '/Liadtech/Accueil/image 5 section 4.svg',
        alt: 'IA, Automatisation & Cybersécurité',
    },


]

const ContentSection = () => {
    const [activeSection, setActiveSection] = useState('web-mobile')


    return (
        <div className='container mx-auto'>
            {/* Success Section */}
            <section className="mb-6 md:mb-9 w-full mx-auto text-center">
                <h2 className="text-2xl md:text-[28px] leading-[36px] lg:text-4xl  text-[#2D1F67]  font-bold mb-2 md:mb-4">Ce que vous pouvez créer avec LIADTECH</h2>
                <p className="text-[#2D1F67] text-base mb-6 md:mb-12 font-normal">Sites. Apps. Branding. Visibilité. Résultats.</p>
            </section>
            {/* Category Buttons*/}
            <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-[29px] justify-center mb-6 md:mb-[58px]">
                {
                    contentSections.map((section, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveSection(section.id)}
                            className={`rounded-full text-white text-sm  px-3 sm:px-4 md:px-[29px] py-2 md:py-[10px] font-bold shadow-sm whitespace-nowrap transition-all duration-300 transform ${activeSection === section.id
                                ? 'bg-[#5d3ee6] cursor-default'
                                : 'bg-[#d59fff] text-[#1f1d2c] hover:bg-[#c58fee] hover:scale-105 md:hover:scale-110'
                                }`}
                        >
                            {section.tabTitle}
                        </button>
                    ))
                }
            </div>
            {
                contentSections.map((section, index) => (
                    <section
                        className={cn(
                            " transition-opacity duration-300",
                            section.id === activeSection ? 'block opacity-100' : 'hidden opacity-0'
                        )}
                        key={section.id}
                    >
                        <div className="rounded-3xl  bg-[#1f1d2c]  grid grid-cols-1 lg:grid-cols-2 relative">
                            {/* Left Column */}
                            <div className="z-10 flex flex-col p-6 md:p-10">
                                <h2 className="text-2xl md:text-[28px] leading-[36px] lg:text-4xl flex-1  font-bold !text-white mb-4 md:mb-6">
                                    {section.title}
                                </h2>
                                <p className="text-gray-300 mb-6 md:mb-8 max-w-md md:mx-0">
                                    {section.description}
                                </p>
                                <div className="flex  mb-8">
                                    <Link href={section.actionButtonLink}>
                                        <Button className="bg-[#5f65f4] hover:bg-[#673de6] text-white px-4 sm:px-6 md:px-8 py-2 md:py-3 rounded-lg text-sm md:text-base">
                                            {section.actionButtonLabel}
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                            <div className="flex justify-center items-center pt-2">
                                <Image
                                    src={section.image}
                                    alt={section.alt}
                                    width={0}
                                    height={0}
                                    className=" z-0 size-auto  lg:max-h-[400px] mx-auto "
                                />
                            </div>
                        </div>
                    </section>
                ))
            }
        </div>
    )
}

export default ContentSection