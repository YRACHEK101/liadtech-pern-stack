import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

const SocialMediaVerticalIcons = ({className=''}) => {
  return (
    <div className={cn(
        "flex flex-col gap-3 items-center justify-center",
        className
    )}>
        <a href={process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://www.linkedin.com/company/liadtech"} target="_blank" className='rounded-full' >
            <Image src="/images/Group 201.svg" width={0} height={0} alt='' className='w-auto h-auto' />
        </a>
        <a href={process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://www.instagram.com/liadtech_?igsh=azljaDNzb3F6YWk3"} target="_blank" className='rounded-full' >
            <Image src="/images/Group 202.svg" width={0} height={0} alt='' className='w-auto h-auto' />
        </a>
        <a href={process.env.NEXT_PUBLIC_FACEBOOK_URL || "https://www.facebook.com/share/18z8CL7a2Q/"} target="_blank" className='rounded-full' >
            <Image src="/images/Group 203.svg" width={0} height={0} alt='' className='w-auto h-auto' />
        </a>
        <a href={process.env.NEXT_PUBLIC_YOUTUBE_URL || "https://www.youtube.com/@LIADTechOfficial"} target="_blank" className='rounded-full' >
            <Image src="/images/Group 205.svg" width={0} height={0} alt='' className='w-auto h-auto' />
        </a>
    </div>
  )
}

export default SocialMediaVerticalIcons