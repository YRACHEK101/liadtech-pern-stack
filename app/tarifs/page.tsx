'use client'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectValue, SelectTrigger, SelectItem } from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import React, { useState } from 'react'
import { PricingTable } from '../page'
import TarifPricingPlan from '@/components/tarifs/TarifPricingPlan'


const contentSections = [
    {
        id: 'digital-marketing',
        tabTitle: 'Digital Marketing',
        title: 'Générez plus de clients avec le digital',
        description: "SEO, campagnes Ads et création de contenu : notre équipe vous aide à attirer, convertir et fidéliser grâce à une stratégie sur-mesure orientée résultats.",
        actionButtonLabel: 'Générer plus de clients',
        actionButtonLink: '/action',
        image: '/Liadtech/Accueil/image 2 section 4.svg',
        alt: 'Digital Marketing',
        plans : [
            'marketing digital & publicité',
            'referencement web/SEO',
            'blogging & contenu'
        ]
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
        plans: [
            'identité visuelle & branding',
            'motion design & animation',
            'design graphique & illustration'
        ]
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
        plans: [
            'cloud scalable',
            'sécurité',
            'disponibilité maximale',
        ]
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
        plans: [
            'IA & automatisation',
            'cybersécurité',
            'RGPD & conformité'
        ]
    },
    {
        id: "App mobile & MERN",
        tabTitle: "App mobile & MERN",
        title: "Sites performants & mobiles inclus",
        description: "Que ce soit un site vitrine, une boutique e-commerce ou une app mobile, nous créons des expériences digitales pensées pour convertir et engager vos clients, partout.",
        actionButtonLabel: "Lancer mon projet web",
        actionButtonLink: "/action",
        plans: [
            'sites performants',
            'mobiles inclus',
            'e-commerce'
        ]
    },
    {
        id:"Creation site web",
        tabTitle: "Creation site web",
        title: "Sites performants & mobiles inclus",
        description: "Que ce soit un site vitrine, une boutique e-commerce ou une app mobile, nous créons des expériences digitales pensées pour convertir et engager vos clients, partout.",
        actionButtonLabel: "Lancer mon projet web",
        actionButtonLink: "/action",
        plans: [
            'site vitrine',
            'site dynamique',
            'site e-commerce'
        ]
    }


]

const page = () => {
    const [activeSection, setActiveSection] = useState('digital-marketing')
    return (
        <section className="px-5 py-16">
            <div className="w-full flex flex-col gap-16 ">

                <div className=" flex flex-col gap-[22px] items-center text-[#2D1F67]">
                    <h1 className="text-6xl font-bold text-center">
                        Votre succès en ligne commence ici
                    </h1>
                    <h3 className='text-2xl text-center'>
                        Votre succès en ligne commence ici
                    </h3>
                </div>
                <div className="flex flex-wrap sm:pb-16 w-full max-w-[1100px] mx-auto  gap-2 sm:gap-9 justify-center" style={{ marginBottom: 0 }}>
                    {
                        contentSections.map((section,index) => (
                            <button
                                key={index}
                                onClick={() => setActiveSection(section.id)}
                                className={`rounded-full text-white px-2 sm:px-6 sm:py-2 sm:font-medium sm:text-lg shadow-sm whitespace-nowrap !w-auto transition-all duration-300 transform ${activeSection === section.id
                                    ? 'bg-[#5d3ee6]  scale-105'
                                    : 'bg-[#FF41ED88] text-[#1f1d2c] hover:bg-[#c58fee] hover:scale-102'
                                    }`}
                                style={{ width: 196 }}
                            >
                                {section.tabTitle}
                            </button>
                        ))
                    }
                </div>
                <div className='mb-[90px] container mx-auto px-2'>
                <TarifPricingPlan plans={contentSections.find(section => section.id === activeSection)?.plans || []} />
                </div>

            </div>
        </section>
    )
}

export default page