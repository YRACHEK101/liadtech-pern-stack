"use client"

import React, { useEffect } from 'react'
import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import PricingCard from './PricingCard';
import { cn } from '@/lib/utils';
import { PricingCardProps } from './PricingCard';



const TarifPricingPlan = ({ plans = [] }: { plans: PricingCardProps[] }) => {
    const swiperRef = React.useRef<SwiperRef>(null);

    const handlePrevClick = () => {
        swiperRef.current?.swiper.slidePrev();
    };

    const handleNextClick = () => {
        swiperRef.current?.swiper.slideNext();
    };

    return (
        <div className="w-full mx-auto relative ">
            <div className="xl:flex xl:flex-row xl:justify-center xl:items-end xl:gap-4">
                <div className='relative lg:!hidden overflow-hidden'>
                    <Swiper
                        ref={swiperRef}
                        modules={[Pagination, Navigation]}
                        spaceBetween={5}
                        slidesPerView={1}
                        initialSlide={1}
                        navigation={true}
                        pagination={{
                            clickable: true
                        }}
                        className={cn(
                            // common
                            "  !w-full !max-w-96 !pb-0 !overflow-visible ", //[&_.swiper-button-disabled]:!hidden //  
                            // swiper prev btn
                            "[&_.swiper-button-prev]:!hidden", // [&_.swiper-button-prev]:-left-5 sm:[&_.swiper-button-prev]:-left-32 md:[&_.swiper-button-prev]:-left-48
                            // swiper next btn
                            "[&_.swiper-button-next]:!hidden", // [&_.swiper-button-next]:-right-5 sm:[&_.swiper-button-next]:-right-32 md:[&_.swiper-button-next]:-right-48
                            // pagination
                            "[&_.swiper-pagination]:!absolute [&_.swiper-pagination]:h-min [&_.swiper-pagination]:!top-0 [&_.swiper-pagination]:!mx-auto [&_.swiper-pagination-bullet]:!size-3 [&_.swiper-pagination-bullet]:!border-purple-400 [&_.swiper-pagination-bullet]:!opacity-100 [&_.swiper-pagination-bullet]:!mx-2 [&_.swiper-pagination-bullet]:bg-transparent [&_.swiper-pagination-bullet-active]:!bg-purple-400 [&_.swiper-pagination-bullet]:!border"
                        )}
                    >
                        {
                            plans.map((plan, index) => (
                                <SwiperSlide className='' key={index}>
                                    <div className={cn(
                                        "flex justify-center",
                                        !plan.isPopular && "pt-10"
                                    )}>
                                        <PricingCard
                                            {...plan}
                                        />
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                    <div
                        onClick={handlePrevClick}
                        className='swiper-button-prev !mt-14 bg-white hover:bg-gray-100 rounded-full !size-[46px] shadow-[0px_5px_10px_0px_#00000033] after:text-purple-600 after:!text-xl after:!font-bold !z-20 cursor-pointer'></div>
                    <div
                        onClick={handleNextClick}
                        className='swiper-button-next !mt-14 bg-white hover:bg-gray-100 rounded-full !size-[46px] shadow-[0px_5px_10px_0px_#00000033] after:text-purple-600 after:!text-xl after:!font-bold !z-20 cursor-pointer'></div>
                </div>

                {/* Desktop view */}
                <div className="hidden w-full lg:flex justify-center gap-4 ">
                    {
                        plans.map((plan, index) => (
                            <div key={index} className={cn(
                                "mt-10 flex flex-col items-center w-full max-w-[300px] sm:!max-w-[360px]",
                                !plan.isPopular && "pt-10"
                            )}>
                                <PricingCard
                                    {...plan}
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default TarifPricingPlan