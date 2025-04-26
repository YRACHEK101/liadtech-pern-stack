import React from 'react'
import TarifPricingPlan from '../tarifs/TarifPricingPlan'

const PricingPacksSection = () => {
  return (
    <section className='py-12 px-1 container mx-auto flex flex-col items-center overflow-x-hidden'>
        <span className='font-bold text-2xl sm:text-3xl xl:text-4xl text-[#2D1F67] mb-2 text-center'>
          Choisissez votre pack Studio Créatif avec Liadtech
        </span>
        <span className='text-lg font-light text-[#2D1F67] mb-8 text-center'>
          Des animations pensées pour captiver, valoriser et faire rayonner votre message.
        </span>
        <TarifPricingPlan plans={[
          'Digital Marketing',
          'Studio Créatif',
          'Cloud, SaaS & Support'
        ]} />

        <span className='font-bold text-[#673DE6] mb-4 xl:mt-4 mt-4 z-10 text-center'>
          Conditions de paiement
        </span>
      </section>
  )
}

export default PricingPacksSection