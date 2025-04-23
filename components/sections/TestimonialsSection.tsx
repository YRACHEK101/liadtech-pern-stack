import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

const testimonials: {
  name: string,
  image: string,
  description: string,
  jobTitle: string,
}[] = [
  
    {
      name: 'Yassine L.',
      image: '/Liadtech/Accueil/yassin section 6.png',
      description: 'J’ai lancé mon site, ma vidéo explicative et mes pubs en une seule fois. C’était simple, rapide, et j’ai eu des résultats dès le 1er mois.',
      jobTitle: 'fondateur de GreenTech Conseil',
    },
    {
      name: 'Romain D.',
      image: '/Liadtech/Accueil/romain section 6.png',
      description: 'Je voulais juste un logo, j’ai fini avec une vraie identité visuelle, un site qui cartonne et une vidéo qui explique parfaitement mon service. Le tout en moins de 15 jours.',
      jobTitle: 'créateur de PortagePro',
    },
    {
      name: 'Sofia M.',
      image: '/Liadtech/Accueil/sofia section 6.png',
      description: 'On avait déjà un site, mais LIADTECH a tout refondu : nouveau design, meilleur référencement, et en plus une stratégie digitale claire. On a doublé nos leads en 3 semaines.',
      jobTitle: 'créateur de PortagePro',
    },
  ]

const TestimonialsSection = () => {
  return (
    <section className="pb-10 md:pb-20">
      <div className="container mx-auto relative px-4 md:px-0">
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          slidesPerView={1}
          className="relative"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="flex px-12 flex-col md:grid md:grid-cols-3 items-center md:h-[600px] gap-5 md:gap-10">
                <div className="w-full md:col-span-1 flex justify-center md:justify-end h-full relative overflow-hidden">
                  <Image src="/Liadtech/Accueil/icones/Rectangle 96.svg" width={0} height={0} className='w-[90%] left-0 bottom-10 right-10 h-auto absolute hidden md:block' alt='bg' />
                  <Image src={testimonial.image} width={0} height={0} className='w-3/4 md:w-full self-end h-auto z-10' alt={testimonial.name} />
                </div>
                <div className="w-full md:col-span-2 px-2 md:px-10 relative">
                  <Image src="/Liadtech/Accueil/icones/Rectangle 98.svg" width={0} height={0} className='!w-auto !h-[95%] right-5 -top-5 z-0 absolute hidden md:block' alt='bg' />
                  <Image src="/Liadtech/Accueil/icones/Rectangle 98.svg" width={0} height={0} className='!w-auto !h-[95%] left-5 -bottom-5 z-0 absolute hidden md:block' alt='bg' />
                  <div className="flex flex-col gap-4 px-4 md:px-9 py-6 md:py-20 h-full relative rounded-lg z-10 bg-white shadow-md md:shadow-none">
                    <div className='flex items-center gap-2 justify-between flex-wrap sm:flex-nowrap'>
                      <div className="flex flex-col gap-2">
                        <h3 className="text-xl md:text-2xl font-bold text-[#2D1F67]">{testimonial.name}</h3>
                        <p className="text-xs md:text-sm text-gray-500">{testimonial.jobTitle}</p>
                      </div>
                      <div className='flex items-center gap-4 md:gap-8 mt-2 sm:mt-0'>
                        <button className='swiper-button-prev !static bg-[#E6CFFF] after:!hidden !size-8 md:!size-10 !rounded-full p-1 md:p-2'>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="text-[#673DE6] !size-5 md:!size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                          </svg>
                        </button>
                        <button className='swiper-button-next !static bg-[#E6CFFF] after:!hidden !size-8 md:!size-10 !rounded-full p-1 md:p-2'>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="text-[#673DE6] !size-5 md:!size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <hr className='w-full border-purple-700' />
                    <p className="text-base sm:text-lg md:text-2xl text-gray-500">{testimonial.description}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default TestimonialsSection