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
        <div>
            {/* Success Section */}
            <section className="py-16 w-full px-10 mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-[#673de6] mb-4">Ce que vous pouvez créer avec LIADTECH</h2>
                <p className="text-xl text-[#1f1d2c] mb-12">Sites. Apps. Branding. Visibilité. Résultats.</p>

                {/* Category Buttons*/}
                <div className="flex flex-wrap  gap-9 justify-between mb-8" style={{ marginBottom: 0 }}>
                    {
                        contentSections.map((section,index) => (
                            <button
                                key={index}
                                onClick={() => setActiveSection(section.id)}
                                className={`rounded-full px-6 py-2 font-medium shadow-sm whitespace-nowrap !w-auto transition-all duration-300 transform ${activeSection === section.id
                                    ? 'bg-[#5d3ee6] text-white scale-105'
                                    : 'bg-[#d59fff] text-[#1f1d2c] hover:bg-[#c58fee] hover:scale-102'
                                    }`}
                                style={{ width: 196 }}
                            >
                                {section.tabTitle}
                            </button>
                        ))
                    }
                </div>
            </section>
            {
                contentSections.filter((section) => section.id === activeSection).map((section, index) => (
                    <div key={index}>
                        {/* Content Sections - تظهر فقط القسم النشط */}
                        <div className="transition-all duration-500">
                            {/* web-mobile */}
                            <section
                                className={`container mx-auto mt-8 mb-16 transition-opacity duration-300 ${activeSection === section.id ? 'opacity-100' : 'hidden opacity-0'}`}
                                id={section.id}
                            >
                                <div className="rounded-3xl bg-[#1f1d2c] p-8 md:p-12 flex flex-col lg:flex-row gap-8 overflow-hidden relative">
                                    {/* Left Column */}
                                    <div className="lg:w-1/2 z-10">
                                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
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

                                </div>
                                {/* Right Column - Image */}
                                <div className="relative">
                                    <Image
                                        src={section.image}
                                        alt={section.alt}
                                        width={500}
                                        height={350}
                                        className="img-web"
                                    />
                                </div>
                            </section>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ContentSection