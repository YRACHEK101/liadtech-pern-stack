import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/button'


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
        <div className=''>
            {/* Success Section */}
            <section className="mb-9 w-full px-10 mx-auto text-center">
                <h2 className="!text-[64px] font-bold text-[#673de6] mb-4">Ce que vous pouvez créer avec LIADTECH</h2>
                <p className="text-[32px] text-[#1f1d2c] mb-12 font-light">Sites. Apps. Branding. Visibilité. Résultats.</p>
            </section>
            {/* Category Buttons*/}
            <div className="flex flex-wrap  gap-[29px] justify-center mb-[58px]">
                {
                    contentSections.map((section, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveSection(section.id)}
                            className={`rounded-full px-[29px] py-[10px] font-bold text-[19px] shadow-sm whitespace-nowrap !w-auto transition-all duration-300 transform ${activeSection === section.id
                                ? 'bg-[#5d3ee6] text-white cursor-default'
                                : 'bg-[#d59fff] text-[#1f1d2c] hover:bg-[#c58fee] hover:scale-110'
                                }`}
                            style={{ width: 196 }}
                        >
                            {section.tabTitle}
                        </button>
                    ))
                }
            </div>
            {
                contentSections.filter((section) => section.id === activeSection).map((section, index) => (
                    <section
                        className='px-24'
                        key={section.id}
                    >
                        <div className="rounded-3xl bg-[#1f1d2c] p-10 !pr-0 grid grid-cols-2 relative">
                            {/* Left Column */}
                            <div className="z-10 flex flex-col">
                                <h2 className="text-4xl md:text-5xl flex-1 flex justify-center items-center font-bold text-white mb-6">
                                    {section.title}
                                </h2>
                                <p className="text-gray-300 mb-8 max-w-md">
                                    {section.description}
                                </p>
                                <Link href={section.actionButtonLink}>
                                    <Button className="bg-[#5f65f4] hover:bg-[#673de6] text-white px-8 py-3 rounded-lg">
                                        {section.actionButtonLabel}
                                    </Button>
                                </Link>
                            </div>
                            <Image
                                        src={section.image}
                                        alt={section.alt}
                                        width={0}
                                        height={0}
                                        className="size-auto -my-20 z-0 "
                                    />
                        </div>
                    </section>
                ))
            }
        </div>
    )
}

export default ContentSection