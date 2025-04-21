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
    <section className="pb-20">
      <div className="container mx-auto relative">
        <Image src="/Liadtech/Accueil/Frame 80.svg" width={0} height={0} className='w-full h-full object-cover absolute top-0 left-0' alt="testimonials" />
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          // spaceBetween={50}
          slidesPerView={1}
          className="relative"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="grid grid-cols-3 items-center gap-10">
                <div className="col-span-1 self-end">
                  <Image src={testimonial.image} width={0} height={0} className='w-full h-full' alt={testimonial.name} />
                </div>
                <div className="col-span-2 px-10">
                  <div className="flex flex-col gap-4 px-9 py-20 rounded-lg bg-white">
                    <div className='flex items-center gap-2 justify-between'>
                      <div className="flex flex-col gap-2">
                        <h3 className="text-2xl font-bold text-[#2D1F67]">{testimonial.name}</h3>
                        <p className="text-sm text-gray-500">{testimonial.jobTitle}</p>
                      </div>
                      <div className='flex items-center gap-8'>
                        <button className='swiper-button-prev !static bg-[#E6CFFF] after:!hidden !size-10 !rounded-full p-2'>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="text-[#673DE6] !size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                          </svg>
                        </button>
                        <button className='swiper-button-next !static bg-[#E6CFFF] after:!hidden !size-10 !rounded-full p-2'>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="text-[#673DE6] !size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <hr className='w-full border-purple-700' />
                    <p className="text-sm text-gray-500">{testimonial.description}</p>
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