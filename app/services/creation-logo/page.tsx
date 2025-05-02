import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import TrustedByClientsSection from '@/components/sections/TrustedByClientsSection'
import PricingPacksSection from '@/components/sections/PricingPacksSection'
import SocialMediaVerticalIcons from '@/components/common/SocialMediaVerticalIcons'

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
      <section className='relative overflow-hidden grid grid-cols-1 sm:container sm:mx-auto lg:grid-cols-2 lg:items-center px-4 md:px-[42px] gap-10 lg:gap-20 pb-12 pt-5 lg:py-0 mb-4 md:mb-20'>
        <div className='flex flex-col text-[#2D1F67]'>
          <h2 className='text-2xl sm:text-3xl xl:text-4xl font-bold !text-left'>
            Votre logo, ce n'est pas un dessin. C'est votre première impression, votre signature.
          </h2>
          <span className='text-base sm:text-lg text-[#2D1F67] mb-4 sm:mb-6 font-normal'>
            Nous créons des logos mémorables, sur-mesure, pensés pour séduire vos clients et ancrer votre identité de marque.
          </span>

          <div className='flex gap-4 flex-wrap md:justify-start'>
            <Link href="/" className="bg-[#673de6] hover:bg-[#5735bc] text-white rounded-lg px-[31px] py-[10px] w-min whitespace-nowrap flex items-center gap-2">
              Créer mon logo
            </Link>
            <Link href="/" className="bg-[#673de6] hover:bg-[#5735bc] text-white rounded-lg px-[31px] py-[10px] w-min whitespace-nowrap flex items-center gap-2">
              Voir nos réalisations
            </Link>
          </div>
        </div>
        <Image src="/images/Creation Logo.svg" width={0} height={0} className='w-auto h-auto mx-auto' alt='pic' />
        <SocialMediaVerticalIcons className='absolute bottom-5 right-0' />
      </section>
      <TrustedByClientsSection />
      <PricingPacksSection />
      <div className='bg-[#2D1F67] mb-4 md:mb-20'>
        <section className='grid grid-cols-1 sm:container sm:mx-auto lg:grid-cols-2 lg:items-center px-4 md:px-[42px] gap-10 lg:gap-20 pb-20 pt-10 lg:pt-20'>
          <div className='flex flex-col gap-6 text-white'>
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
          <Image src={"/images/Creation Logo 2.svg"} width={0} height={0} className='w-auto h-auto mx-auto' alt='pic' />
        </section>
        <section className='grid grid-cols-1 sm:container sm:mx-auto lg:grid-cols-2 lg:items-center px-4 md:px-[42px] gap-10 lg:gap-20 pb-8 md:pb-[110px]'>
          <Image src={"/images/Création du logo 3.svg"} width={0} height={0} className='w-auto h-auto origin-left z-0 mx-auto' alt='pic' />
          <div className='flex flex-col justify-center gap-6 md:gap-8 text-white'>
            <span className='text-2xl sm:text-3xl xl:text-4xl font-bold'>
              Notre méthode de création
            </span>
            <ul className='flex flex-col gap-4 list-decimal'>
              <li className='flex gap-3'>
                Brief créatif & benchmark concurrentiel
              </li>
              <li className='flex gap-3'>
                Axes graphiques : 2 à 3 pistes initiales
              </li>
              <li className='flex gap-3'>
                Affinage & déclinaisons selon vos retours
              </li>
              <li className='flex gap-3'>
                Livraison finale multi-formats
              </li>
              <li className='flex gap-3'>
                Charte d'utilisation (incluse dans les packs Pro & Premium)
              </li>
            </ul>
          </div>
        </section>
      </div>
      <section className='grid grid-cols-1 sm:container sm:mx-auto lg:grid-cols-2 lg:items-center px-4 md:px-[42px] gap-10 lg:gap-20 py-8 mb-4 lg:mb-10 '>
        <div className='flex flex-col gap-6'>
          <span className='text-2xl sm:text-3xl xl:text-4xl font-bold'>
            Ce que vous obtenez concrètement
          </span>
          <div className='flex flex-col gap-4'>
            <div className='flex gap-3 items-center'>
              <div className='size-[42px] bg-gray-300 rounded-full'></div>
              <div className='flex flex-col flex-1'>
                <span className='text-sm md:text-base'>
                  Un logo unique et stratégique, aligné à vos valeurs
                </span>
              </div>
            </div>
            <div className='flex gap-3 items-center'>
              <div className='size-[42px] bg-gray-300 rounded-full'></div>
              <div className='flex flex-col flex-1'>
                <span className='text-sm md:text-base'>
                  Des designers spécialisés en branding, soutenus par notre studio graphique interne
                </span>
              </div>
            </div>
            <div className='flex gap-3 items-center'>
              <div className='size-[42px] bg-gray-300 rounded-full'></div>
              <div className='flex flex-col flex-1'>
                <span className='text-sm md:text-base'>
                  Une vraie équipe créative : illustrateurs, directeurs artistiques, character designers…
                </span>
              </div>
            </div>
            <div className='flex gap-3 items-center'>
              <div className='size-[42px] bg-gray-300 rounded-full'></div>
              <div className='flex flex-col flex-1'>
                <span className='text-sm md:text-base'>
                  Tous les formats livrés, prêts à l'emploi (web, impression, réseaux)
                </span>
              </div>
            </div>
            <div className='flex gap-3 items-center'>
              <div className='size-[42px] bg-gray-300 rounded-full'></div>
              <div className='flex flex-col flex-1'>
                <span className='text-sm md:text-base'>
                  Une identité cohérente, professionnelle, qui inspire confiance
                </span>
              </div>
            </div>
            <div className='flex gap-3 items-center'>
              <div className='size-[42px] bg-gray-300 rounded-full'></div>
              <div className='flex flex-col flex-1'>
                <span className='text-sm md:text-base'>
                  Un accompagnement humain : à l'écoute, réactif, et force de proposition
                </span>
              </div>
            </div>
          </div>
        </div>
        <Image src={"/images/Création du logo 4.svg"} width={0} height={0} className='w-auto h-auto mx-auto' alt='pic' />
      </section>
      <section className='grid grid-cols-1 sm:container sm:mx-auto lg:grid-cols-2 lg:items-center px-4 md:px-[42px] gap-10 lg:gap-20 py-8 pb-10'>
        <Image src={"/images/Création du logo 5.svg"} width={0} height={0} className='w-auto h-auto mx-auto' alt='pic' />
        <div className='flex flex-col gap-4 justify-center'>
          <h2 className='text-2xl sm:text-3xl xl:text-4xl font-bold'>
            Votre logo mérite mieux qu'un générateur automatique.Confiez votre image à de vrais créatifs.
          </h2>
          <span className='text-base sm:text-lg text-[#2D1F67] font-normal'>
            Confiez votre image à de vrais créatifs
          </span>
          <Link href="/create-my-app-mobile" className="bg-[#673de6] hover:bg-[#5735bc] text-white rounded-lg px-[31px] py-[10px] w-min whitespace-nowrap">
            Créer mon logo
          </Link>
        </div>
      </section>
    </div>
  )
}

export default page