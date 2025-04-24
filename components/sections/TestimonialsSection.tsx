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
      description: `J'ai lancé mon site, ma vidéo explicative et mes pubs en une seule fois. C'était simple, rapide, et j'ai eu des résultats dès le 1er mois.`,
      jobTitle: 'fondateur de GreenTech Conseil',
    },
    {
      name: 'Romain D.',
      image: '/Liadtech/Accueil/romain section 6.png',
      description: `Je voulais juste un logo, j'ai fini avec une vraie identité visuelle, un site qui cartonne et une vidéo qui explique parfaitement mon service. Le tout en moins de 15 jours.`,
      jobTitle: 'créateur de PortagePro',
    },
    {
      name: 'Sofia M.',
      image: '/Liadtech/Accueil/sofia section 6.png',
      description: `On avait déjà un site, mais LIADTECH a tout refondu : nouveau design, meilleur référencement, et en plus une stratégie digitale claire. On a doublé nos leads en 3 semaines.`,
      jobTitle: 'créateur de PortagePro',
    },
  ]

const TestimonialsSection = () => {
  return (
    <section className="pb-10 lg:pb-20">
      <div className="container mx-auto relative px-4 lg:px-0">
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
              <div className="flex px-12 flex-col lg:grid lg:grid-cols-3 items-center lg:h-[600px] gap-5 lg:gap-10">
                <div className="w-full lg:col-span-1 flex justify-center h-full relative ">
                  <Image src="/Liadtech/Accueil/icones/Rectangle 96.svg" width={0} height={0} className='max-w-full w-[90%] h-[90%] max-h-full  absolute' alt='bg' />
                  {/* <Image src={testimonial.image} width={0} height={0} className='w-3/4 lg:w-full h-full  max-h-[500px] object-contain lg:max-h-full lg:h-auto z-10' alt={testimonial.name} /> */}
                  <Image src={testimonial.image} width={0} height={0} className='w-3/4 lg:w-full h-[500px] object-contain lg:max-h-full lg:h-auto z-10' alt={testimonial.name} />
                </div>
                <div className="w-full lg:col-span-2 relative mb-10 ">
                  <Image src="/Liadtech/Accueil/icones/Rectangle 98.svg" width={0} height={0} className='max-w-full w-auto max-h-full h-auto -top-5 -right-5 z-0 absolute' alt='bg' />
                  <Image src="/Liadtech/Accueil/icones/Rectangle 98.svg" width={0} height={0} className='max-w-full w-auto max-h-full h-auto -bottom-5 -left-5 z-0 absolute' alt='bg' />
                  <div className="flex flex-col gap-4 px-4 lg:px-9 py-6  lg:py-20 h-full relative rounded-lg z-10 bg-white shadow-md lg:shadow-none">
                    <div className='flex md:items-center gap-2 justify-between flex-col md:flex-row flex-wrap lg:flex-nowrap'>
                      <div className="flex flex-col gap-2">
                        <h3 className="text-xl lg:text-2xl font-bold text-[#2D1F67]">{testimonial.name}</h3>
                        <p className="text-xs lg:text-sm text-gray-500">{testimonial.jobTitle}</p>
                      </div>
                      <div className='flex items-center self-end md:self-auto gap-4 lg:gap-8 mt-4 lg:mt-0'>
                        <button className='swiper-button-prev !static bg-[#E6CFFF] after:!hidden !size-8 lg:!size-10 !rounded-full p-1 lg:p-2'>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="text-[#673DE6] !size-5 lg:!size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                          </svg>
                        </button>
                        <button className='swiper-button-next !static bg-[#E6CFFF] after:!hidden !size-8 lg:!size-10 !rounded-full p-1 lg:p-2'>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="text-[#673DE6] !size-5 lg:!size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <hr className='w-full border-purple-700' />
                    <p className="text-base  lg:text-2xl text-gray-500">{testimonial.description}</p>
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