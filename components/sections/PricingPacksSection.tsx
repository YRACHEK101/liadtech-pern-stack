"use client"
import React, { useRef } from 'react'
import TarifPricingPlan from '../tarifs/TarifPricingPlan'
import Modal, { ModalRef } from '../ui/modal'

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
        <TarifPricingPlan plans={[
          'Digital Marketing',
          'Studio Créatif',
          'Cloud, SaaS & Support'
        ]} />

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