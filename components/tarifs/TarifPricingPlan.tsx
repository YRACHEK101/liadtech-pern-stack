"use client"

import React, { useEffect } from 'react'
import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import PricingCard from './PricingCard';
import { cn } from '@/lib/utils';



const TarifPricingPlan = ({ plans = [] }: { plans: string[] }) => {
    const swiperRef = React.useRef<SwiperRef>(null);

    const handlePrevClick = () => {
        swiperRef.current?.swiper.slidePrev();
    };

    const handleNextClick = () => {
        swiperRef.current?.swiper.slideNext();
    };    


    const features = [
        {
            title: <>
                <span className='font-bold'>25</span> <span>websites</span>
            </>,
            description: "Websites"
        },
        {
            title: <>
                <span className='font-bold'>25</span> <span>GB</span>
            </>,
            description: "SSD storage"
        },
        {
            title: <>
                <span className='font-bold'>25</span> <span>GB</span>
            </>,
            description: "SSD storage"
        },
        {
            title: <>
                <span className='font-bold'>25</span> <span>GB</span>
            </>,
            description: "SSD storage"
        },
        {
            title: <>
                <span className='font-bold'>Free</span> <span>domain (US$ 9.99 value)</span>
            </>,
            description: "domain (US$ 9.99 value)"
        },
        {
            title: <>
                <span className='font-bold'>Free</span> <span>automatic website migration</span>
            </>,
            description: "automatic website migration"
        },
        {
            title: <>
                <span className='font-bold'>25</span> <span>mailboxes - free for 1 year</span>
            </>,
            description: "mailboxes - free for 1 year"
        },
        {
            title: <>
                <span className='font-bold'>Unlimited free</span> <span>SSL</span>
            </>,
            description: "SSL"
        },
        {
            title: <>
                <span className='font-bold'>Weekly backups</span>
            </>,
            description: "Weekly backups"
        },
        {
            title: <>
                <span className='font-bold'>Starter WooCommerce</span>
            </>,
            description: "Starter WooCommerce"
        }
    ];

    const blockedFeatures = [
        {
            title: <>
                <span className='font-bold'>Free</span> <span>CDN</span>
            </>,
            description: "Free CDN"
        },
        {
            title: <>
                <span className='font-bold'>Dedicated IP address</span>
            </>,
            description: "Dedicated IP address"
        },
        {
            title: <>
                <span className='font-bold'>Priority support</span>
            </>,
            description: "Priority support"
        }
    ];

    const premiumFeatures = [
        {
            title: <>
                <span className='font-bold'>50</span> <span>websites</span>
            </>,
            description: "websites"
        },
        {
            title: <>
                <span className='font-bold'>Managed hosting for WordPress</span>
            </>,
            description: "Managed hosting for WordPress"
        },
        {
            title: <>
                <span className='font-bold'>50 GB</span> <span>SSD storage</span>
            </>,
            description: "SSD storage"
        },
        {
            title: <>
                <span className='font-bold'>Hostinger Website Builder</span>
            </>,
            description: "Hostinger Website Builder"
        },
        {
            title: <>
                <span className='font-bold'>Free</span> <span>domain (US$ 9.99 value)</span>
            </>,
            description: "domain (US$ 9.99 value)"
        },
        {
            title: <>
                <span className='font-bold'>Free</span> <span>automatic website migration</span>
            </>,
            description: "automatic website migration"
        },
        {
            title: <>
                <span className='font-bold'>50</span> <span>mailboxes - free for 1 year</span>
            </>,
            description: "mailboxes - free for 1 year"
        },
        {
            title: <>
                <span className='font-bold'>Unlimited free</span> <span>SSL</span>
            </>,
            description: "SSL"
        },
        {
            title: <>
                <span className='font-bold'>Weekly backups (US$ 12.54)</span>
            </>,
            description: "Weekly backups (US$ 12.54)"
        },
        {
            title: <>
                <span className='font-bold'>Starter WooCommerce</span>
            </>,
            description: "Starter WooCommerce"
        },
        {
            title: <>
                <span className='font-bold'>Free CDN</span>
            </>,
            description: "Free CDN"
        }
    ];

    const ultimateFeatures = [
        {
            title: <>
                <span className='font-bold'>100</span> <span>websites</span>
            </>,
            description: "websites"
        },
        {
            title: <>
                <span className='font-bold'>Managed hosting for WordPress</span>
            </>,
            description: "Managed hosting for WordPress"
        },
        {
            title: <>
                <span className='font-bold'>100 GB</span> <span>NVMe storage</span>
            </>,
            description: "NVMe storage"
        },
        {
            title: <>
                <span className='font-bold'>Hostinger Website Builder</span>
            </>,
            description: "Hostinger Website Builder"
        },
        {
            title: <>
                <span className='font-bold'>Free</span> <span>domain (US$ 9.99 value)</span>
            </>,
            description: "domain (US$ 9.99 value)"
        },
        {
            title: <>
                <span className='font-bold'>Free</span> <span>automatic website migration</span>
            </>,
            description: "automatic website migration"
        },
        {
            title: <>
                <span className='font-bold'>200</span> <span>mailboxes - free for 1 year</span>
            </>,
            description: "mailboxes - free for 1 year"
        },
        {
            title: <>
                <span className='font-bold'>Unlimited free</span> <span>SSL</span>
            </>,
            description: "SSL"
        },
        {
            title: <>
                <span className='font-bold'>Daily backups (US$ 25.08 value)</span>
            </>,
            description: "Daily backups (US$ 25.08 value)"
        },
        {
            title: <>
                <span className='font-bold'>Standard WooCommerce</span>
            </>,
            description: "Standard WooCommerce"
        },
        {
            title: <>
                <span className='font-bold'>Free</span> <span>CDN</span>
            </>,
            description: "CDN"
        },
        {
            title: <>
                <span className='font-bold'>Dedicated IP address</span>
            </>,
            description: "Dedicated IP address"
        },
        {
            title: <>
                <span className='font-bold'>Priority support</span>
            </>,
            description: "Priority support"
        }
    ];

    return (
        <div className="w-full mx-auto bg-[#fafbff] relative ">
            <div className="xl:flex xl:flex-row xl:justify-center xl:items-end xl:gap-4">
                <div className='relative lg:!hidden'>
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
                        <SwiperSlide className=''>
                            <div className='flex justify-center pt-10'>
                                <PricingCard
                                    title={plans[0]}
                                    features={features}
                                    blockedFeatures={blockedFeatures}
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className=''>
                            <div className='flex justify-center'>
                                <PricingCard
                                    title={plans[1]}
                                    isPopular={true}
                                    features={premiumFeatures}
                                    blockedFeatures={blockedFeatures.slice(1)}
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className=''>
                            <div className='flex justify-center pt-10'>
                                <PricingCard
                                    title={plans[2]}
                                    features={ultimateFeatures}
                                    blockedFeatures={[]}
                                />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    <div 
                        onClick={handlePrevClick}
                        className='swiper-button-prev !mt-14 bg-white hover:bg-gray-100 rounded-full !size-[46px] shadow-[0px_5px_10px_0px_#00000033] after:text-purple-600 after:!text-xl after:!font-bold !z-20 cursor-pointer'></div>
                    <div 
                        onClick={handleNextClick}
                        className='swiper-button-next !mt-14 bg-white hover:bg-gray-100 rounded-full !size-[46px] shadow-[0px_5px_10px_0px_#00000033] after:text-purple-600 after:!text-xl after:!font-bold !z-20 cursor-pointer'></div>
                </div>

                {/* Desktop view */}
                <div className="hidden w-full lg:flex justify-center gap-4  ">
                    <div className='mt-10'>
                        <PricingCard
                            title={plans[0]}
                            features={features}
                            blockedFeatures={blockedFeatures}
                        />
                    </div>
                    <div className=''>
                        <PricingCard
                            title={plans[1]}
                            isPopular={true}
                            features={premiumFeatures}
                            blockedFeatures={blockedFeatures.slice(1)}
                        />
                    </div>
                    <div className='mt-10'>
                        <PricingCard
                            title={plans[2]}
                            features={ultimateFeatures}
                            blockedFeatures={[]}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TarifPricingPlan