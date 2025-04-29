import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

const SocialMediaVerticalIcons = ({ className = '' }) => {
    return (
        <div className={cn(
            "flex flex-col gap-3 items-center justify-center",
            className
        )}>
            <a href={process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://www.linkedin.com/company/liadtech"} target="_blank" className='rounded-full' >
                <svg className='group hover:fill-[rgb(86,40,197)] ' width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle className='group-hover:fill-[rgb(86,40,197)]' cx="16.5" cy="16.5" r="16.5" fill="#673DE6" />
                    <rect x="8.66669" y="8.03704" width="15.4815" height="16.2963" rx="2" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M13.1482 15.2685V19.8518" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M13.1482 12.5185V12.5277" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16.8148 19.8518V15.2685" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M20.4815 19.8518V17.1018C20.4815 16.0893 19.6607 15.2685 18.6482 15.2685C17.6356 15.2685 16.8148 16.0893 16.8148 17.1018" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </a>
            <a href={process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://www.instagram.com/liadtech_?igsh=azljaDNzb3F6YWk3"} target="_blank" className='rounded-full' >
                <svg className='group hover:fill-[rgb(86,40,197)] ' width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle className='group-hover:fill-[rgb(86,40,197)]' cx="16.5" cy="16.5" r="16.5" fill="#673DE6" />
                    <rect x="8.16669" y="8.16667" width="16.6667" height="16.6667" rx="4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="16.5" cy="16.5" r="3.125" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M21.1875 11.8125V11.8135" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </a>
            <a href={process.env.NEXT_PUBLIC_FACEBOOK_URL || "https://www.facebook.com/share/18z8CL7a2Q/"} target="_blank" className='rounded-full' >
                <svg className='group hover:fill-[rgb(86,40,197)] ' width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle className='group-hover:fill-[rgb(86,40,197)]' cx="16.5" cy="16.5" r="16.5" fill="#673DE6" />
                    <path d="M11.4167 15.1667V18.8333H14.1667L14.1667 25.25H17.8334L17.8334 18.8333H20.5834L21.5 15.1667L17.8334 15.1667V13.3333C17.8334 12.8271 18.2438 12.4167 18.75 12.4167H21.5V8.75H18.75C16.2187 8.75 14.1667 10.802 14.1667 13.3333V15.1667H11.4167" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </a>
            <a href={process.env.NEXT_PUBLIC_YOUTUBE_URL || "https://www.youtube.com/@LIADTechOfficial"} target="_blank" className='rounded-full' >
                <svg className='group hover:fill-[rgb(86,40,197)] ' width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle className='group-hover:fill-[rgb(86,40,197)]' cx="16.5" cy="16.5" r="16.5" fill="#673DE6" />
                    <rect x="6.25" y="9.41667" width="19.5" height="15.1667" rx="4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M13.8333 13.75L19.25 17L13.8333 20.25V13.75Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </a>
        </div>
    )
}

export default SocialMediaVerticalIcons