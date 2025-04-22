import Image from 'next/image';
import React from 'react'
import { Select, SelectValue, SelectTrigger, SelectItem, SelectContent } from '../ui/select';




const TarifPricingPlan = ({ plans=[] }: { plans: string[] }) => {



    return (
        <div className="w-full max-w-6xl mx-auto">

            <div className="flex flex-col md:flex-row justify-center items-end gap-4">
                {/* Booster Card */}
                <div className="flex-1 self-start relative rounded-2xl border border-gray-200 overflow-hidden" style={{ marginTop: 46 }}
                >
                    <div className="py-12 px-[34px]">
                        <h3 className="text-xl font-bold text-[#2D1F67] ">
                            {plans[0]}
                        </h3>

                        <div className='flex flex-col gap-1 my-4'>
                            <label className='flex items-center gap-3'>
                                <input type="radio" name="offre" className=' text-purple-900 size-5' />
                                <span>
                                    Site vitrine
                                </span>
                            </label>
                            <label className='flex items-center gap-3'>
                                <input type="radio" name="offre" className=' text-purple-900 size-5' />
                                <span>
                                    Site dynamique et wordpress
                                </span>
                            </label>
                            <label className='flex items-center gap-3'>
                                <input type="radio" name="offre" className=' text-purple-900 size-5' />
                                <span>
                                    Site e commerce
                                </span>
                            </label>
                        </div>

                        <label className='flex flex-col gap-3'>
                            <span className='text-[#2D1F67] font-semibold '>
                                Choisir votre offre adaptée:
                            </span>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Choisir votre offre adaptée" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="1">Site statique 3 pages</SelectItem>
                                    <SelectItem value="2">Site statique 5 pages</SelectItem>
                                    <SelectItem value="3">Site statique 8 pages</SelectItem>
                                </SelectContent>
                            </Select>
                        </label>

                        <div className="text-5xl font-bold text-purple-900 my-3  !ml-0">
                            0
                            <span className='text-3xl'>€</span>
                        </div>

                        <div className='my-6 text-[#673DE6]'>
                            *Pour les nouveaux clients
                        </div>

                        <a href="/Checkout?productId=1" className="block !w-full py-4 border-2 border-purple-600 text-purple-600 rounded-lg font-medium hover:bg-purple-50 mb-8 text-center">
                            Sélectionner
                        </a>

                        <ul className="flex flex-col gap-10 justify-between">
                            {/* service items */}
                            {
                                Array.from({ length: 6 }).map((_, index) => (
                                    <div key={index} className='flex items-center gap-2'>
                                        <Image src="/images/check-mark-circle.svg" alt="check-mark-circle" width={24} height={24} />
                                        <div className='flex-1'>
                                            Site vitrine
                                        </div>
                                        <Image src="/images/info-circle.svg" alt="info-circle" width={24} height={24} />
                                    </div>
                                ))
                            }
                        </ul>
                    </div>
                </div>

                {/* Premium Card - Highlighted */}
                <div className="flex-1 self-start relative rounded-2xl border-2 border-purple-600 overflow-hidden bg-white transform  z-10">
                    <div className="title bg-purple-600 text-white text-center py-2 font-medium">
                        Le plus populaire
                    </div>

                    <div className="py-12 px-[34px]">
                        <h3 className="text-xl font-bold text-[#2D1F67] ">
                            {plans[1]}
                        </h3>

                        <div className='flex flex-col gap-1 my-4'>
                            <label className='flex items-center gap-3'>
                                <input type="radio" name="offre" className=' text-purple-900 size-5' />
                                <span>
                                    Site vitrine
                                </span>
                            </label>
                            <label className='flex items-center gap-3'>
                                <input type="radio" name="offre" className=' text-purple-900 size-5' />
                                <span>
                                    Site dynamique et wordpress
                                </span>
                            </label>
                            <label className='flex items-center gap-3'>
                                <input type="radio" name="offre" className=' text-purple-900 size-5' />
                                <span>
                                    Site e commerce
                                </span>
                            </label>
                        </div>

                        <label className='flex flex-col gap-3'>
                            <span className='text-[#2D1F67] font-semibold '>
                                Choisir votre offre adaptée:
                            </span>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Choisir votre offre adaptée" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="1">Site statique 3 pages</SelectItem>
                                    <SelectItem value="2">Site statique 5 pages</SelectItem>
                                    <SelectItem value="3">Site statique 8 pages</SelectItem>
                                </SelectContent>
                            </Select>
                        </label>

                        <div className="text-5xl font-bold text-purple-900 my-3  !ml-0">
                            0
                            <span className='text-3xl'>€</span>
                        </div>

                        <div className='my-6 text-[#673DE6]'>
                            *Pour les nouveaux clients
                        </div>

                        <a href="/Checkout?productId=1" className="block !w-full py-4 border-2 border-purple-600 text-purple-600 rounded-lg font-medium hover:bg-purple-50 mb-8 text-center">
                            Sélectionner
                        </a>

                        <ul className="flex flex-col gap-10 justify-between">
                            {/* service items */}
                            {
                                Array.from({ length: 6 }).map((_, index) => (
                                    <div key={index} className='flex items-center gap-2'>
                                        <Image src="/images/check-mark-circle.svg" alt="check-mark-circle" width={24} height={24} />
                                        <div className='flex-1'>
                                            Site vitrine
                                        </div>
                                        <Image src="/images/info-circle.svg" alt="info-circle" width={24} height={24} />
                                    </div>
                                ))
                            }
                        </ul>
                    </div>
                </div>

                {/* Ultimate Card */}
                <div className="flex-1 self-start relative rounded-2xl border border-gray-200 overflow-hidden" style={{ marginTop: 46 }}>
                    <div className="py-12 px-[34px]">
                        <h3 className="text-xl font-bold text-[#2D1F67] ">
                            {plans[2]}
                        </h3>

                        <div className='flex flex-col gap-1 my-4'>
                            <label className='flex items-center gap-3'>
                                <input type="radio" name="offre" className=' text-purple-900 size-5' />
                                <span>
                                    Site vitrine
                                </span>
                            </label>
                            <label className='flex items-center gap-3'>
                                <input type="radio" name="offre" className=' text-purple-900 size-5' />
                                <span>
                                    Site dynamique et wordpress
                                </span>
                            </label>
                            <label className='flex items-center gap-3'>
                                <input type="radio" name="offre" className=' text-purple-900 size-5' />
                                <span>
                                    Site e commerce
                                </span>
                            </label>
                        </div>

                        <label className='flex flex-col gap-3'>
                            <span className='text-[#2D1F67] font-semibold '>
                                Choisir votre offre adaptée:
                            </span>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Choisir votre offre adaptée" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="1">Site statique 3 pages</SelectItem>
                                    <SelectItem value="2">Site statique 5 pages</SelectItem>
                                    <SelectItem value="3">Site statique 8 pages</SelectItem>
                                </SelectContent>
                            </Select>
                        </label>

                        <div className="text-5xl font-bold text-purple-900 my-3  !ml-0">
                            0
                            <span className='text-3xl'>€</span>
                        </div>

                        <div className='my-6 text-[#673DE6]'>
                            *Pour les nouveaux clients
                        </div>

                        <a href="/Checkout?productId=1" className="block !w-full py-4 border-2 border-purple-600 text-purple-600 rounded-lg font-medium hover:bg-purple-50 mb-8 text-center">
                            Sélectionner
                        </a>

                        <ul className="flex flex-col gap-10 justify-between">
                            {/* service items */}
                            {
                                Array.from({ length: 6 }).map((_, index) => (
                                    <div key={index} className='flex items-center gap-2'>
                                        <Image src="/images/check-mark-circle.svg" alt="check-mark-circle" width={24} height={24} />
                                        <div className='flex-1'>
                                            Site vitrine
                                        </div>
                                        <Image src="/images/info-circle.svg" alt="info-circle" width={24} height={24} />
                                    </div>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TarifPricingPlan