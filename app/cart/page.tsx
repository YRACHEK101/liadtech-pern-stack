import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import React from 'react'

const page = () => {
    return (
        <div className='px-1 md:px-5 py-16 flex-col md:container sm:mx-auto'>
            <h1 className='text-2xl md:text-4xl lg:text-6xl font-bold text-[#2D1F67] mb-8 md:mb-[76px] text-center md:text-left'>
                Votre Panier
            </h1>
            <div className='grid grid-cols-1 lg:grid-cols-9 p-4 gap-6 md:gap-[37px] relative'>

                <Image src="/images/Rectangle 93 (1).svg" width={0} height={0} className='size-auto top-0 -left-0 absolute hidden md:block' alt="bg" />
                <Image src="/images/Rectangle 95.svg" width={0} height={0} className='size-auto bottom-0 -right-0 absolute hidden md:block' alt="bg" />

                <div className='lg:col-span-5 self-start min-h-[415px] p-5 md:px-[25px] md:py-[37px] bg-white z-10 border-2 flex flex-col border-[#B7C1E7] rounded-lg'>
                    <span className='text-[#2D1F67] text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-[25px]'>
                        Pack studio Créatif
                    </span>
                    <hr className='border-2' />
                </div>
                <div className='lg:col-span-4 p-5 md:py-[53px] md:px-[49px] bg-white z-10 border-2 border-[#B7C1E7] rounded-lg'>
                    <div className='flex items-center mb-4 justify-between text-[#2D1F67] text-xl md:text-2xl lg:text-[34px] leading-[27px] font-bold'>
                        <span>Total</span>
                        <span>250€</span>
                    </div>
                    <span className='leading-[27px] text-base md:text-xl lg:text-[24px] text-[#878787] font-light'>
                        Le sous-total n'inclut pas les taxes applicables
                    </span>

                    <div className='text-[#2D1F67] text-xl md:text-2xl lg:text-[34px] leading-[27px] font-bold my-6 md:my-8'>
                        Vous avez un code promo?
                    </div>

                    <div className='flex flex-col md:flex-row items-end gap-3.5 lg:gap-1 xl:gap-3.5 mb-2 md:mb-8'>
                        <label className='w-full md:flex-1'>
                            <span className='text-base md:text-lg lg:text-[22px] font-light block mb-2'>
                                Saisissez votre code promo
                            </span>
                            <Input placeholder="écrire ici" />
                        </label>
                        <Button className='bg-[#673de6] hover:bg-[#5735bc] text-white rounded-lg px-6 md:!px-[33.5px] lg:!px-2 xl:!px-[33.5px] w-min py-3 md:!py-8 font-bold text-base md:text-lg lg:text-[22px] md:w-auto'>
                            Appliquer
                        </Button>
                    </div>

                    <Button className='bg-[#673de6] hover:bg-[#5735bc] w-full text-white rounded-lg px-6 md:px-[33.5px] py-3 md:py-[15px] font-bold text-base md:text-lg lg:text-[22px]'>
                        Continuer
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default page