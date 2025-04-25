"use client"

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import PricingCard from './PricingCard';



const TarifPricingPlan = ({ plans = [] }: { plans: string[] }) => {
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
        <div className="w-full mx-auto bg-[#fafbff] ">
            <div className="xl:flex xl:flex-row xl:justify-center xl:items-end xl:gap-4">
                <div className="relative">
                    <Swiper
                        modules={[Pagination, Navigation]}
                        spaceBetween={5}
                        slidesPerView={1}
                        navigation={true}
                        className="xl:!hidden !overflow-visible [&_.swiper-button-disabled]:!hidden  w-full [&_.swiper-button-next]:bg-white hover:[&_.swiper-button-next]:bg-gray-100 [&_.swiper-button-next]:right-10 [&_.swiper-button-prev]:left-10 [&_.swiper-button-next]:rounded-full [&_.swiper-button-next]:!size-[46px] [&_.swiper-button-next]:shadow-[0px_5px_10px_0px_#00000033] [&_.swiper-button-prev]:bg-white hover:[&_.swiper-button-prev]:bg-gray-100 [&_.swiper-button-prev]:rounded-full [&_.swiper-button-prev]:!size-[46px] [&_.swiper-button-prev]:shadow-[0px_5px_10px_0px_#00000033] [&_.swiper-button-next::after]:text-purple-600 [&_.swiper-button-prev::after]:text-purple-600 [&_.swiper-button-next::after]:!text-xl [&_.swiper-button-next::after]:!font-bold [&_.swiper-button-prev::after]:!text-xl [&_.swiper-button-prev::after]:!font-bold [&_.swiper-button-next]:z-10 [&_.swiper-button-prev]:z-10"
                    >
                        <SwiperSlide>
                            <div className='flex justify-center'>
                                <PricingCard
                                    title={plans[0]}
                                    features={features}
                                    blockedFeatures={blockedFeatures}
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='flex justify-center'>
                                <PricingCard
                                    title={plans[1]}
                                    isPopular={true}
                                    features={premiumFeatures}
                                    blockedFeatures={blockedFeatures.slice(1)}
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='flex justify-center'>
                                <PricingCard
                                    title={plans[2]}
                                    features={ultimateFeatures}
                                    blockedFeatures={[]}
                                />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>

                {/* Desktop view */}
                <div className="hidden w-full xl:grid grid-cols-3 xl:gap-4">
                    <div className='mt-5'>
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
                    <div className='mt-5'>
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