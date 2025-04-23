import React from 'react'
import TarifPricingPlan from '../tarifs/TarifPricingPlan'

const PricingPacksSection = () => {
  return (
    <section className='py-12 px-4 md:px-6 flex flex-col items-center'>
        <span className='font-bold text-3xl md:text-4xl lg:text-[59px] !leading-[80px] text-[#2D1F67] mb-2 text-center'>
          Choisissez votre pack Studio Créatif avec Liadtech
        </span>
        <span className='text-xl md:text-2xl lg:text-[32px] font-light text-[#2D1F67] mb-8 text-center'>
          Des animations pensées pour captiver, valoriser et faire rayonner votre message.
        </span>
        <TarifPricingPlan plans={[
          'Digital Marketing',
          'Studio Créatif',
          'Cloud, SaaS & Support'
        ]} />

        <span className='text-lg md:text-xl lg:text-[26px] font-light text-[#673DE6] my-4 text-center'>
          Conditions de paiement
        </span>
      </section>
  )
}

export default PricingPacksSection