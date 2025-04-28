"use client"
import React, { useRef, useEffect } from 'react'
import Link from 'next/link'
import Modal, { ModalRef } from '@/components/ui/modal'
import Image from 'next/image'
import SocialMediaVerticalIcons from '../common/SocialMediaVerticalIcons'

const HeroSection = () => {
    const youtubeModalRef = useRef<ModalRef>(null)
    const lottieContainerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const loadLottie = async () => {
            try {
                const lottie = await import('lottie-web')
                if (lottieContainerRef.current) {
                    lottie.default.loadAnimation({
                        container: lottieContainerRef.current,
                        renderer: 'svg',
                        loop: true,
                        autoplay: true,
                        path: '/lottie-animations/hero_animation.json' // Make sure this path is correct
                    })
                }
            } catch (error) {
                console.error('Error loading Lottie animation:', error)
            }
        }
        loadLottie()
    }, [])

    return (
        <section className="container relative px-4 sm:px-8 lg:px-20 xl:px-8 w-full mx-auto pb-8 sm:pb-12">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-8">
                <div className="z-10 order-2 xl:order-1 self-center ">
                    <h1 className="text-[#2f1c6a] font-bold mb-3 sm:mb-4 text-2xl sm:text-3xl xl:text-4xl">
                        Plus de visibilité. Plus de clients. Moins de stress.
                    </h1>
                    <p className="text-base sm:text-lg text-[#2f1c6a] mb-4 sm:mb-6 font-bold">
                        Tout est pensé pour faire décoller votre activité : Site web optimisé, image professionnelle, marketing digital et automatisation
                    </p>
                    <div className="flex flex-col gap-3 mb-6 sm:mb-8">
                        <div className="flex items-start sm:items-center">
                            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="text-[#00b090] min-w-[24px]"><path fill="currentColor" d="M21.046 5.955c.439.439.439 1.151 0 1.59l-9.538 9.539a1.425 1.425 0 0 1-2.016 0l-4.288-4.288a1.125 1.125 0 0 1 1.591-1.591l3.705 3.704 8.954-8.954c.44-.44 1.152-.44 1.591 0Z"></path>
                            </svg>
                            <p className="ml-3 text-[#2f1c6a]">Un site web qui convertit les visiteurs en clients</p>
                        </div>
                        <div className="flex items-center ">
                            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="text-[#00b090]" ><path fill="currentColor" d="M21.046 5.955c.439.439.439 1.151 0 1.59l-9.538 9.539a1.425 1.425 0 0 1-2.016 0l-4.288-4.288a1.125 1.125 0 0 1 1.591-1.591l3.705 3.704 8.954-8.954c.44-.44 1.152-.44 1.591 0Z"></path>
                            </svg>
                            <p className="ml-3 flex-1 text-[#2f1c6a]">Un branding pro qui inspire confiance</p>
                        </div>
                        <div className="flex items-center ">
                            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="text-[#00b090]" ><path fill="currentColor" d="M21.046 5.955c.439.439.439 1.151 0 1.59l-9.538 9.539a1.425 1.425 0 0 1-2.016 0l-4.288-4.288a1.125 1.125 0 0 1 1.591-1.591l3.705 3.704 8.954-8.954c.44-.44 1.152-.44 1.591 0Z"></path>
                            </svg>
                            <p className="ml-3 flex-1 text-[#2f1c6a]">Des vidéos qui expliquent, vendent et captent l'attention</p>
                        </div>
                        <div className="flex items-center ">
                            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="text-[#00b090]" ><path fill="currentColor" d="M21.046 5.955c.439.439.439 1.151 0 1.59l-9.538 9.539a1.425 1.425 0 0 1-2.016 0l-4.288-4.288a1.125 1.125 0 0 1 1.591-1.591l3.705 3.704 8.954-8.954c.44-.44 1.152-.44 1.591 0Z"></path>
                            </svg>
                            <p className="ml-3 flex-1 text-[#2f1c6a]">Des campagnes marketing qui boostent vos ventes</p>
                        </div>
                        <div className="flex items-center ">
                            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="text-[#00b090]" ><path fill="currentColor" d="M21.046 5.955c.439.439.439 1.151 0 1.59l-9.538 9.539a1.425 1.425 0 0 1-2.016 0l-4.288-4.288a1.125 1.125 0 0 1 1.591-1.591l3.705 3.704 8.954-8.954c.44-.44 1.152-.44 1.591 0Z"></path>
                            </svg>
                            <p className="ml-3 flex-1 text-[#2f1c6a]">Un accompagnement de A à Z (créa, technique & support)</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-[26px]">
                            <Link href={"/"} className="w-full sm:w-auto bg-[#673de6] rounded-lg hover:bg-[rgb(86,40,197)] text-white px-4 sm:px-6 py-3 text-center sm:text-left font-medium">
                                Découvrir nos Solutions tout-en-un
                            </Link>
                            <div onClick={() => youtubeModalRef.current?.show()} className="flex items-center justify-center bg-[#A384FF] hover:bg-[#A384FF] size-12 rounded-full self-center">
                                <button className="bg-[#673de6] hover:bg-[#5628c5] size-10 rounded-full flex justify-center items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={0} stroke="currentColor" className="size-10 absolute">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <p className="text-base md:text-lg lg:text-[20px] text-[#673DE6] font-bold text-center sm:text-left">
                            Commencer avec un expert LIADTECH
                        </p>
                        <p className="text-[#2f1c6a] flex items-start sm:items-center gap-2 text-sm sm:text-base">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" className="!size-4 min-w-4 min-h-4 mt-1 sm:mt-0"><path fill="currentColor" d="M10.838 6.518a.761.761 0 0 0 0-1.075.756.756 0 0 0-1.072 0L7.471 7.745 6.456 6.727a.756.756 0 0 0-1.071 0 .761.761 0 0 0 0 1.075l1.547 1.552.003.003a.756.756 0 0 0 1.072 0l2.83-2.84Z"></path><path fill="currentColor" fillRule="evenodd" d="M1.003 4.4A2.027 2.027 0 0 1 2.17 2.45L7.019.19A2.016 2.016 0 0 1 8.694.176l5.108 2.285a2.027 2.027 0 0 1 1.195 1.963l-.006.105c-.228 4.116-2.06 8.252-5.766 10.035-.556.268-1.039.436-1.372.436-.338 0-.817-.174-1.363-.448-3.548-1.783-5.246-5.805-5.466-9.779l-.02-.372Zm12.48-.06-.005.105c-.211 3.806-1.888 7.295-4.909 8.749-.24.116-.435.195-.582.243-.063.02-.106.032-.132.037a1.394 1.394 0 0 1-.122-.036 4.553 4.553 0 0 1-.564-.245C4.299 11.751 2.74 8.375 2.537 4.69l-.02-.373a.507.507 0 0 1 .29-.487l4.85-2.262a.504.504 0 0 1 .42-.003l5.108 2.285c.191.085.31.28.299.49Z" clipRule="evenodd"></path></svg>
                            100 % sur-mesure - Livraison rapide - Support 24/7
                        </p>
                    </div>
                </div>
                {/* <div className="flex justify-center mt-6 sm:mt-8 lg:mt-0">
                    <div className="relative w-full max-w-[400px] sm:max-w-none">
                        <Image
                            src="/images/robot-liadtech.png"
                            alt="Robot LIADTECH"
                            width={0}
                            height={0}
                            className="w-full h-auto"
                        />
                    </div>
                </div> */}
                <div className="flex mt-6 max-h-[400px] md:max-h-[700px] relative  w-full sm:mt-8 lg:mt-0 order-1 xl:order-2">
                    <div
                        ref={lottieContainerRef} 
                        className="relative w-full  scale-150 xl:scale-[200%] z-0 xl:pt-20"
                        style={{
                            backgroundImage: "url('/images/robot background.svg')",
                            backgroundSize: '80%',
                            backgroundPosition: 'center center',
                            backgroundRepeat: 'no-repeat',
                        }}
                    >
                        {/* Lottie animation will be rendered here */}
                    </div>
                    <SocialMediaVerticalIcons className='absolute bottom-0 right-0 md:bottom-24 md:right-20  lg:bottom-20 lg:right-[92px] xl:bottom-10 xl:-right-7 2xl:bottom-14 2xl:-right-7' />
                </div>
            </div>
            <Modal ref={youtubeModalRef}>
                <div className="w-full h-full">
                    Youtube video
                </div>
            </Modal>
            
        </section>
    )
}

export default HeroSection