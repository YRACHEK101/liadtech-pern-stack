import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import React from 'react'

const page = () => {
    return (
        <div className='py-[84px] px-[65px] flex-col'>
            <h1 className='!text-6xl font-bold text-[#2D1F67] mb-[76px] '>
                Votre Panier
            </h1>
            <div className='grid grid-cols-9 gap-[37px] relative'>

                <Image src="/images/Rectangle 93 (1).svg" width={0} height={0} className='size-auto -top-[22px] -left-[25px] absolute' alt="bg" />
                <Image src="/images/Rectangle 95.svg" width={0} height={0} className='size-auto -bottom-[22px] -right-[25px] absolute' alt="bg" />

                <div className='col-span-5 self-start min-h-[415px] px-[25px] py-[37px] bg-white z-10 border-2 flex flex-col border-[#B7C1E7] rounded-lg'>
                    <span className='text-[#2D1F67] text-4xl font-bold mb-[25px]'>
                        Pack studio Créatif
                    </span>
                    <hr className='border-2' />
                </div>
                <div className='col-span-4 py-[53px] px-[49px] bg-white z-10 border-2 border-[#B7C1E7] rounded-lg'>
                    <div className='flex items-center mb-4 justify-between text-[#2D1F67] text-[34px] leading-[27px] font-bold '>
                        <span>Total</span>
                        <span>250€</span>
                    </div>
                    <span className='leading-[27px] text-[24px] text-[#878787] font-light   '>
                        Le sous-total n'inclut pas les taxes applicables
                    </span>

                    <div className=' text-[#2D1F67] text-[34px] leading-[27px] font-bold my-8 '>
                        Vous avez un code promo?
                    </div>

                    <div className='flex items-end gap-3.5 mb-[63px]'>
                        <label className='flex-1'>
                            <span className='text-[22px] font-light'>
                                Saisissez votre code promo
                            </span>
                            <Input placeholder="écrire ici" />
                        </label>
                        <button className='bg-[#673de6] hover:bg-[#5735bc] text-white rounded-lg px-[33.5px] py-[15px] font-bold text-[22px] '>
                            Appliquer
                        </button>
                    </div>

                    <button className='bg-[#673de6] hover:bg-[#5735bc] w-full text-white rounded-lg px-[33.5px] py-[15px] font-bold text-[22px] '>
                        Continuer
                    </button>
                </div>
            </div>
        </div>
    )
}

export default page