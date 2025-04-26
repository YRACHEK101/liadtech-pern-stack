import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import TrustedByClientsSection from '@/components/sections/TrustedByClientsSection'
import PricingPacksSection from '@/components/sections/PricingPacksSection'

const features2 = [
  'Script + storyboard sur-mesure',
  'Animation fluide et professionnelle',
  'Voix-off (1 langue) incluse',
  'Design personnalisé à votre charte',
  'Musique & sound design inclus',
]

const sitesFeatures = [
  'UX/UI mobile-first & responsive',
  'Développement iOS & Android',
  'Connexion API, CRM, site existant',
  'Sécurité & RGPD',
  'Hébergement + suivi technique',
  '1 mois de maintenance offert'
]

const page = () => {
  return (
    <div>
      <section className='overflow-hidden grid grid-cols-1 sm:container sm:mx-auto xl:grid-cols-2 px-4 md:px-[42px]'>
        <div className='flex flex-col text-[#2D1F67] self-center py-8 md:py-0'>
          <h2 className='text-2xl sm:text-3xl xl:text-4xl font-bold !text-left'>
            Votre logo, ce n'est pas un dessin. C'est votre première impression, votre signature.
          </h2>
          <span className='text-base sm:text-lg text-[#2D1F67] mb-4 sm:mb-6 font-normal'>
            Nous créons des logos mémorables, sur-mesure, pensés pour séduire vos clients et ancrer votre identité de marque.
          </span>

          <div className='flex gap-4 flex-wrap md:justify-start'>
            <Link href="/" className="bg-[#673de6] hover:bg-[#5735bc] text-white rounded-lg px-[31px] py-[10px] self-start whitespace-nowrap flex items-center gap-2">
              Créer mon logo
            </Link>
            <Link href="/" className="bg-[#673de6] hover:bg-[#5735bc] text-white rounded-lg px-[31px] py-[10px] self-start whitespace-nowrap flex items-center gap-2">
              Voir nos réalisations
            </Link>
          </div>
        </div>
        <Image src="/images/Creation Logo.svg" width={0} height={0} className='w-auto h-auto mb-5' alt='pic' />
      </section>
      <TrustedByClientsSection />
      {/* Pricing Table Section */}
      <PricingPacksSection />
      <div className='bg-[#2D1F67]'>
        <section className='grid grid-cols-1 sm:container sm:mx-auto xl:grid-cols-2 px-4 md:px-[42px] pb-20'>
          <div className='flex flex-col gap-6 pt-8 md:pt-[151px] text-white'>
            <span className='text-2xl sm:text-3xl xl:text-4xl font-bold'>
              Un bon logo, ce n'est pas qu'un joli visuel. C'est un déclencheur de confiance.
            </span>
            <div className='flex flex-col gap-4'>
              <div className='flex gap-3'>
                <div className='flex flex-col'>
                  <span className='text-sm md:text-base'>
                    Il rend votre marque reconnaissable au premier regard
                  </span>
                </div>
              </div>
              <div className='flex gap-3'>
                <div className='flex flex-col'>
                  <span className='text-sm md:text-base'>
                    Il affirme votre crédibilité et votre professionnalisme
                  </span>
                </div>
              </div>
              <div className='flex gap-3'>
                <div className='flex flex-col'>
                  <span className='text-sm md:text-base'>
                    Il soutient vos campagnes marketing
                  </span>
                </div>
              </div>
              <div className='flex gap-3'>
                <div className='flex flex-col'>
                  <span className='text-sm md:text-base'>
                    Il s'intègre sur tous vos supports : print, web, réseaux
                  </span>
                </div>
              </div>
              <div className='flex gap-3'>
                <div className='flex flex-col'>
                  <span className='text-sm md:text-base'>
                    Il vous accompagne dans votre croissance et vos nouveaux projets
                  </span>
                </div>
              </div>
            </div>
          </div>
          <Image src={"/images/Creation Logo 2.svg"} width={0} height={0} className='w-auto h-auto mb-5' alt='pic' />
        </section>
        <section className='grid grid-cols-1 sm:container sm:mx-auto xl:grid-cols-2 px-4 md:px-[42px] bg-[#2D1F67] py-8 md:py-[110px] gap-6 md:gap-8'>
          <Image src={"/images/Création du logo 3.svg"} width={0} height={0} className='w-auto h-auto mb-5 origin-left z-0' alt='pic' />
          <div className='flex flex-col gap-6 md:gap-8 text-white'>
            <span className='text-2xl sm:text-3xl xl:text-4xl font-bold'>
              Notre méthode de création
            </span>
            <div className='flex flex-col gap-4'>
              <div className='flex gap-3'>
                <svg width="14" height="15" viewBox="0 0 14 15" className='mt-2' fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L5.63636 13L2 7.4127" stroke="#60BB6F" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className='flex flex-col'>
                  <span className='text-sm md:text-base'>
                    Il rend votre marque reconnaissable au premier regard
                  </span>
                </div>
              </div>
              <div className='flex gap-3'>
                <svg width="14" height="15" viewBox="0 0 14 15" className='mt-2' fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L5.63636 13L2 7.4127" stroke="#60BB6F" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className='flex flex-col'>
                  <span className='text-sm md:text-base'>
                    Il affirme votre crédibilité et votre professionnalisme
                  </span>
                </div>
              </div>
              <div className='flex gap-3'>
                <svg width="14" height="15" viewBox="0 0 14 15" className='mt-2' fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L5.63636 13L2 7.4127" stroke="#60BB6F" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className='flex flex-col'>
                  <span className='text-sm md:text-base'>
                    Il soutient vos campagnes marketing
                  </span>
                </div>
              </div>
              <div className='flex gap-3'>
                <svg width="14" height="15" viewBox="0 0 14 15" className='mt-2' fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L5.63636 13L2 7.4127" stroke="#60BB6F" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className='flex flex-col'>
                  <span className='text-sm md:text-base'>
                    Il s'intègre sur tous vos supports : print, web, réseaux
                  </span>
                </div>
              </div>
              <div className='flex gap-3'>
                <svg width="14" height="15" viewBox="0 0 14 15" className='mt-2' fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L5.63636 13L2 7.4127" stroke="#60BB6F" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className='flex flex-col'>
                  <span className='text-sm md:text-base'>
                    Il vous accompagne dans votre croissance et vos nouveaux projets
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className='grid grid-cols-1 sm:container sm:mx-auto xl:grid-cols-2 px-4 md:px-[42px] py-8 md:py-[110px]'>
        <div className='flex flex-col gap-6 pt-8 md:pt-[151px]'>
          <span className='text-2xl sm:text-3xl xl:text-4xl font-bold'>
            Votre app inclut toujours…
          </span>
          <span className='font-bold text-base sm:text-lg text-[#673DE6]'>
            Parlez à un expert LIADTECH ou démarrez votre projet en quelques clics.
          </span>
          <div className='flex flex-col gap-4'>
            {sitesFeatures.map((site, index) => (
              <div key={index} className='flex gap-3'>
                <svg width="14" height="15" viewBox="0 0 14 15" className='mt-2' fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L5.63636 13L2 7.4127" stroke="#60BB6F" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className='flex flex-col'>
                  <span className='text-sm md:text-base'>{site}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Image src={"/images/Création du logo 4.svg"} width={0} height={0} className='w-auto h-auto mb-5' alt='pic' />
      </section>
      <section className='grid grid-cols-1 sm:container sm:mx-auto xl:grid-cols-2 px-4 md:px-[42px] py-8 md:py-[110px]'>
        <Image src={"/images/Création du logo 5.svg"} width={0} height={0} className='w-auto h-auto mb-5' alt='pic' />
        <div className='flex flex-col gap-4'>
          <h2 className='text-2xl sm:text-3xl xl:text-4xl font-bold'>
            Discutons de votre projet. Une app performante peut tout changer.
          </h2>
          <Link href="/create-my-app-mobile" className="bg-[#673de6] hover:bg-[#5735bc] text-white rounded-lg px-[31px] py-[10px] self-start mb-4 whitespace-nowrap">
            Parlez à un expert
          </Link>
        </div>
      </section>
    </div>
  )
}

export default page