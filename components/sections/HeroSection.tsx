"use client"
import React, { useRef } from 'react'
import Link from 'next/link'
import Modal, { ModalRef } from '@/components/ui/modal'
import Image from 'next/image'

const HeroSection = () => {
    const youtubeModalRef = useRef<ModalRef>(null)
    return (
        <section className="container  w-full mx-auto pt-16 pb-12">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-2 items-center">
                <div className="  z-10 ">
                    <div className="text-[#2f1c6a] !font-bold text-4xl">
                    Everything you need to create a website
                    </div>
                    <p className="text-[20px] text-[#2f1c6a] mb-6 font-bold">
                        Tout est pensé pour faire décoller votre business.<br className="hidden md:block" />
                        Site web optimisé, image professionnelle, marketing digital et automatisation
                    </p>
                    <div className="flex flex-col gap-2 mb-8">
                        <div className="flex items-center ">
                            <svg width="24px" height="20px" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 2L7.81818 20L2 10.8571" stroke="#673DE6" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <p className="ml-3 flex-1 text-[#2f1c6a]">Un site web qui convertit les visiteurs en clients</p>
                        </div>
                        <div className="flex items-center ">
                            <svg width="24px" height="20px" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 2L7.81818 20L2 10.8571" stroke="#673DE6" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <p className="ml-3 flex-1 text-[#2f1c6a]">Un branding pro qui inspire confiance</p>
                        </div>
                        <div className="flex items-center ">
                            <svg width="24px" height="20px" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 2L7.81818 20L2 10.8571" stroke="#673DE6" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <p className="ml-3 flex-1 text-[#2f1c6a]">Des vidéos qui expliquent, vendent et captent l'attention</p>
                        </div>
                        <div className="flex items-center ">
                            <svg width="24px" height="20px" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 2L7.81818 20L2 10.8571" stroke="#673DE6" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <p className="ml-3 flex-1 text-[#2f1c6a]">Des campagnes marketing qui boostent vos ventes</p>
                        </div>
                        <div className="flex items-center ">
                            <svg width="24px" height="20px" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 2L7.81818 20L2 10.8571" stroke="#673DE6" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <p className="ml-3 flex-1 text-[#2f1c6a]">Un accompagnement de A à Z (créa, technique & support)</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2.5">
                        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-[26px]">
                            <Link href={"/"} className="w-full sm:w-auto bg-[#673de6] rounded-lg hover:bg-[rgb(86,40,197)] text-white px-6 py-3 !rounded-lgLink font-medium">
                                Découvrir nos Solutions tout-en-un
                            </Link>
                            <div onClick={() => youtubeModalRef.current?.show()} className="flex items-center justify-center bg-[#A384FF] hover:bg-[#A384FF] size-12 !rounded-full mt-4 sm:mt-0">
                                <button className="bg-[#673de6] hover:bg-[#5628c5] size-10 !rounded-full flex justify-center items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={0} stroke="currentColor" className="size-10 absolute">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <p className="text-base md:text-lg lg:text-[20px] text-[#673DE6] font-bold text-center sm:text-left">
                            Commencer avec un expert LIADTECH
                        </p>
                        <p className=" text-[#2f1c6a] text-center sm:text-left">
                            100 % sur-mesure - Livraison rapide - Support 24/7
                        </p>
                    </div>
                </div>
                <div className="flex justify-center mt-8 lg:mt-0">
                    <div className="relative">
                        {/* <div id="lottie"></div> */}
                        <Image
                            src="/images/robot-liadtech.png"
                            alt="Robot LIADTECH"
                            width={0}
                            height={0}
                            className="w-auto h-auto"
                        />
                    </div>
                </div>
            </div>
            {/* Youtube video modal */}
            <Modal ref={youtubeModalRef} >
                <div className="w-full h-full">
                    Youtube video
                </div>
            </Modal>
        </section>
    )
}

export default HeroSection