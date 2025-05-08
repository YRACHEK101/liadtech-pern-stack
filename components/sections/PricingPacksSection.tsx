"use client"
import React, { useRef } from 'react'
import TarifPricingPlan from '../tarifs/TarifPricingPlan'
import Modal, { ModalRef } from '../ui/modal'
import { PricingCardProps } from '../tarifs/PricingCard'

const features = [
    {
        title: <>
            <span className='font-bold'>25</span> <span>websites</span>
        </>,
        description: "Websites"
    },
    {
        title: <>
            <span className='font-bold'>25</span> <span>GB</span>
        </>,
        description: "SSD storage"
    },
    {
        title: <>
            <span className='font-bold'>25</span> <span>GB</span>
        </>,
        description: "SSD storage"
    },
    {
        title: <>
            <span className='font-bold'>25</span> <span>GB</span>
        </>,
        description: "SSD storage"
    },
    {
        title: <>
            <span className='font-bold'>Free</span> <span>domain (US$ 9.99 value)</span>
        </>,
        description: "domain (US$ 9.99 value)"
    },
    {
        title: <>
            <span className='font-bold'>Free</span> <span>automatic website migration</span>
        </>,
        description: "automatic website migration"
    },
    {
        title: <>
            <span className='font-bold'>25</span> <span>mailboxes - free for 1 year</span>
        </>,
        description: "mailboxes - free for 1 year"
    },
    {
        title: <>
            <span className='font-bold'>Unlimited free</span> <span>SSL</span>
        </>,
        description: "SSL"
    },
    {
        title: <>
            <span className='font-bold'>Weekly backups</span>
        </>,
        description: "Weekly backups"
    },
    {
        title: <>
            <span className='font-bold'>Starter WooCommerce</span>
        </>,
        description: "Starter WooCommerce"
    }
];

const blockedFeatures = [
    {
        title: <>
            <span className='font-bold'>Free</span> <span>CDN</span>
        </>,
        description: "Free CDN"
    },
    {
        title: <>
            <span className='font-bold'>Dedicated IP address</span>
        </>,
        description: "Dedicated IP address"
    },
    {
        title: <>
            <span className='font-bold'>Priority support</span>
        </>,
        description: "Priority support"
    }
];

const premiumFeatures = [
    {
        title: <>
            <span className='font-bold'>50</span> <span>websites</span>
        </>,
        description: "websites"
    },
    {
        title: <>
            <span className='font-bold'>Managed hosting for WordPress</span>
        </>,
        description: "Managed hosting for WordPress"
    },
    {
        title: <>
            <span className='font-bold'>50 GB</span> <span>SSD storage</span>
        </>,
        description: "SSD storage"
    },
    {
        title: <>
            <span className='font-bold'>Hostinger Website Builder</span>
        </>,
        description: "Hostinger Website Builder"
    },
    {
        title: <>
            <span className='font-bold'>Free</span> <span>domain (US$ 9.99 value)</span>
        </>,
        description: "domain (US$ 9.99 value)"
    },
    {
        title: <>
            <span className='font-bold'>Free</span> <span>automatic website migration</span>
        </>,
        description: "automatic website migration"
    },
    {
        title: <>
            <span className='font-bold'>50</span> <span>mailboxes - free for 1 year</span>
        </>,
        description: "mailboxes - free for 1 year"
    },
    {
        title: <>
            <span className='font-bold'>Unlimited free</span> <span>SSL</span>
        </>,
        description: "SSL"
    },
    {
        title: <>
            <span className='font-bold'>Weekly backups (US$ 12.54)</span>
        </>,
        description: "Weekly backups (US$ 12.54)"
    },
    {
        title: <>
            <span className='font-bold'>Starter WooCommerce</span>
        </>,
        description: "Starter WooCommerce"
    },
    {
        title: <>
            <span className='font-bold'>Free CDN</span>
        </>,
        description: "Free CDN"
    }
];

const ultimateFeatures = [
    {
        title: <>
            <span className='font-bold'>100</span> <span>websites</span>
        </>,
        description: "websites"
    },
    {
        title: <>
            <span className='font-bold'>Managed hosting for WordPress</span>
        </>,
        description: "Managed hosting for WordPress"
    },
    {
        title: <>
            <span className='font-bold'>100 GB</span> <span>NVMe storage</span>
        </>,
        description: "NVMe storage"
    },
    {
        title: <>
            <span className='font-bold'>Hostinger Website Builder</span>
        </>,
        description: "Hostinger Website Builder"
    },
    {
        title: <>
            <span className='font-bold'>Free</span> <span>domain (US$ 9.99 value)</span>
        </>,
        description: "domain (US$ 9.99 value)"
    },
    {
        title: <>
            <span className='font-bold'>Free</span> <span>automatic website migration</span>
        </>,
        description: "automatic website migration"
    },
    {
        title: <>
            <span className='font-bold'>200</span> <span>mailboxes - free for 1 year</span>
        </>,
        description: "mailboxes - free for 1 year"
    },
    {
        title: <>
            <span className='font-bold'>Unlimited free</span> <span>SSL</span>
        </>,
        description: "SSL"
    },
    {
        title: <>
            <span className='font-bold'>Daily backups (US$ 25.08 value)</span>
        </>,
        description: "Daily backups (US$ 25.08 value)"
    },
    {
        title: <>
            <span className='font-bold'>Standard WooCommerce</span>
        </>,
        description: "Standard WooCommerce"
    },
    {
        title: <>
            <span className='font-bold'>Free</span> <span>CDN</span>
        </>,
        description: "CDN"
    },
    {
        title: <>
            <span className='font-bold'>Dedicated IP address</span>
        </>,
        description: "Dedicated IP address"
    },
    {
        title: <>
            <span className='font-bold'>Priority support</span>
        </>,
        description: "Priority support"
    }
];

const options = [
  {
    label: 'Site vitrine',
    value: 'site-vitrine',
  },
  {
    label: 'Site dynamique et wordpress',
    value: 'site-dynamique-et-wordpress',
  },
  {
    label: 'Site e commerce',
    value: 'site-e-commerce',
  }
]
const plans : PricingCardProps[] = [
  {
    title: 'Digital Marketing',
    features: features,
    blockedFeatures: blockedFeatures,
    options: options,
    price: 100,
    discount: 75
  },
  {
    title: 'Studio Créatif',
    isPopular: true,
    features: premiumFeatures,
    blockedFeatures: [],
    options: options,
    price: 100,
    discount: 75
  },
  {
    title: 'Cloud, SaaS & Support',
    features: ultimateFeatures,
    blockedFeatures: [],
    options: options,
    price: 100,
    discount: 75
  }
]

const PricingPacksSection = () => {
  const paymentConditionsModal = useRef<ModalRef>(null)

  return (
    <div className='bg-[#fafbff] '>


      <section className='py-12 px-1 container mx-auto flex flex-col items-center'>
        <span className='font-bold text-2xl sm:text-3xl xl:text-4xl text-[#2D1F67] mb-2 text-center'>
          Choisissez votre pack Studio Créatif avec Liadtech
        </span>
        <span className='text-lg font-light text-[#2D1F67] mb-8 text-center'>
          Des animations pensées pour captiver, valoriser et faire rayonner votre message.
        </span>
        <TarifPricingPlan plans={plans} />

        <span onClick={() => paymentConditionsModal.current?.show()} className='cursor-pointer font-bold text-[#673DE6] mb-4 xl:mt-4 mt-4 z-10 text-center'>
          Conditions de paiement
        </span>
        <Modal ref={paymentConditionsModal}>
          <div className='text-center flex flex-col gap-8 text-[#2D1F67]'>
            <div className='text-2xl font-bold'>
              Conditions de paiement
            </div>
            <div className=' font-light'>
              Le prix affiché correspond au tarif mensuel hors taxes applicables. Le prix total de l'abonnement, à régler d'avance, comprend le tarif mensuel multiplié par le nombre de mois de votre abonnement, ainsi que les taxes applicables.
            </div>
          </div>
        </Modal>
      </section>
    </div>
  )
}

export default PricingPacksSection