"use client"
import { cn } from '@/lib/utils'
import React, { useState } from 'react'

const AIChatBotFloatingButton = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='fixed z-10 bottom-10 right-10 flex flex-col justify-end'>
            {/* Chat bubble container */}
            <div
                className={` mb-5 w-80 overflow-hidden sm:w-96 h-[500px] bg-white rounded-2xl shadow-xl transition-all duration-200 transform ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
                    }`}
            >
                <iframe
                    id="chatbot-container_iframe"
                    src="https://purple-wave-0f6b14c03-development.westeurope.5.azurestaticapps.net/"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    style={{ backgroundColor: 'transparent' }}
                />
            </div>
            <button
                title="Chatbot"
                type="button"
                className={cn(
                    "group self-end z-[99] relative flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-600 shadow-lg transition-all duration-200 hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-500 focus:ring-opacity-50",
                    isOpen && "rotate-45"
                )}
                aria-label="Open AI Chatbot"
                onClick={() => setIsOpen(!isOpen)}
            >
                {/* Pulse animation SVG */}
                <svg
                    className="absolute -top-9"
                    width="132"
                    height="117"
                    viewBox="0 0 132 117"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <style>
                            {`
              .pulse {
                animation: pulse 2s infinite;
                transform-origin: center;
              }
              @keyframes pulse {
                0% { transform: scale(.5); }
                50% { transform: scale(.7); }
                100% { transform: scale(.8); }
              }
            `}
                        </style>
                    </defs>
                    <g fill="none" fillRule="evenodd">
                        <rect className="pulse" width="132" height="132" rx="50" fill="#6F2FFD" fillOpacity="0.06" />
                        <rect className="pulse" x="20" y="20" width="92" height="92" rx="30" fill="#6F2FFD" fillOpacity="0.1" style={{ animationDelay: '0.5s' }} />
                        <rect className="pulse" x="32" y="32" width="68" height="68" rx="22" fill="#6F2FFD" fillOpacity="0.1" style={{ animationDelay: '1s' }} />
                    </g>
                </svg>

                {/* Open icon (X shape) */}
                <svg
                    id="chatbot-icon-opened"
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`absolute transition-opacity duration-200 rotate-45 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
                >
                    <g clipPath="url(#clip0_246_156)">
                        <path d="M23.8235 0.355129C23.9328 0.383212 24.0428 0.408259 24.1506 0.439378C24.4098 0.511013 24.647 0.646401 24.8405 0.833199C25.0341 1.02 25.1777 1.25226 25.2585 1.50882C25.3392 1.76537 25.3544 2.03806 25.3028 2.30201C25.2511 2.56597 25.1342 2.81279 24.9627 3.01998C24.8868 3.1141 24.798 3.19987 24.7123 3.28639C21.5902 6.40893 18.4674 9.53095 15.3439 12.6525C15.2575 12.7238 15.1656 12.7883 15.0691 12.8453C15.2058 12.9591 15.2862 13.016 15.3553 13.0851C18.4955 16.2223 21.6355 19.3613 24.7753 22.502C25.2147 22.9407 25.4272 23.447 25.2967 24.0686C25.2413 24.3365 25.1185 24.5859 24.94 24.7932C24.7614 25.0005 24.533 25.1588 24.2763 25.2533C24.0195 25.3478 23.7429 25.3753 23.4726 25.3332C23.2023 25.2912 22.9471 25.1809 22.7313 25.0128C22.6299 24.9315 22.5338 24.8438 22.4436 24.7502C19.3206 21.6297 16.1985 18.5079 13.0775 15.3849C13.0092 15.3166 12.9546 15.2331 12.8764 15.1367C12.7754 15.2331 12.7056 15.2968 12.6388 15.3644C9.49048 18.5087 6.34569 21.6542 3.20443 24.8011C2.71488 25.2914 2.14714 25.4614 1.49212 25.2754C0.966895 25.1236 0.617754 24.7631 0.437871 24.2432C0.412065 24.1673 0.381704 24.0914 0.353621 24.0155V23.4789C0.463677 22.9901 0.774867 22.6371 1.11945 22.2933C4.19948 19.2259 7.2747 16.154 10.3451 13.0775C10.4348 13.0047 10.5303 12.9392 10.6305 12.8817C10.4848 12.7663 10.4028 12.7124 10.3322 12.6434C7.26231 9.57548 4.19215 6.50785 1.12173 3.44047C0.777144 3.09664 0.467472 2.74295 0.350586 2.25719V1.72057C0.481134 1.26517 0.693654 0.859106 1.12097 0.625333C1.34867 0.500857 1.61432 0.442414 1.86328 0.35437H2.05834C2.65264 0.43027 3.06326 0.789278 3.46705 1.19534C6.51975 4.2607 9.57777 7.322 12.6411 10.3793C12.7033 10.4415 12.7679 10.4999 12.8885 10.6146C12.9387 10.5261 12.9966 10.4423 13.0616 10.3641C16.1128 7.30885 19.1642 4.25387 22.2159 1.19914C22.6197 0.793072 23.0296 0.429512 23.6246 0.358165L23.8235 0.355129Z" fill="white" />
                    </g>
                    <defs>
                        <clipPath id="clip0_246_156">
                            <rect width="24.981" height="25" fill="white" />
                        </clipPath>
                    </defs>
                </svg>

                {/* Closed icon (chat bubble) */}
                <svg
                    id="chatbot-icon-closed"
                    width="32"
                    height="30"
                    viewBox="0 0 32 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`absolute transition-opacity duration-200 ${isOpen ? 'opacity-0' : 'opacity-100'}`}
                >
                    <g clipPath="url(#clip0_242_13)">
                        <path d="M31.8424 17.9236C31.7594 18.2212 31.6981 18.5238 31.5994 18.8149C31.3224 19.635 30.8038 20.3522 30.1117 20.8722C29.4196 21.3922 28.5864 21.6907 27.7215 21.7285C27.2456 21.7492 26.768 21.7409 26.2921 21.7359C25.6412 21.7301 25.2565 21.3396 25.2565 20.6813C25.2565 18.0391 25.2565 15.3966 25.2565 12.7539C25.2565 11.6254 25.2971 10.4961 25.0608 9.37925C24.6525 7.47179 23.6574 5.73997 22.215 4.42668C20.7727 3.11339 18.9554 2.2845 17.0181 2.05627C12.3526 1.52728 8.08 4.43176 6.90842 8.98043C6.71008 9.79472 6.6096 10.6298 6.6091 11.4679C6.57427 14.4934 6.59583 17.5206 6.595 20.5453C6.595 21.328 6.36118 21.6597 5.60003 21.7393C3.77592 21.9275 2.1251 21.5834 0.91787 20.052C0.32251 19.3066 -0.000175047 18.38 0.0033269 17.4261C-0.00330623 16.535 -0.00330623 15.644 0.0033269 14.7529C0.00396661 13.6152 0.450474 12.5231 1.24706 11.7109C2.04364 10.8987 3.12685 10.431 4.26429 10.4082C4.37705 10.4082 4.48981 10.4082 4.61916 10.4082C4.98895 6.91006 6.55355 4.10674 9.40082 2.06871C11.5392 0.53811 13.952 -0.121058 16.5762 0.0149212C22.4001 0.317558 26.9289 5.0959 27.2257 10.3792C27.5797 10.4148 27.9412 10.424 28.292 10.4928C29.1752 10.6528 29.9866 11.0844 30.6128 11.7276C31.239 12.3707 31.6488 13.1933 31.7852 14.0805C31.7993 14.1401 31.8179 14.1986 31.8407 14.2554L31.8424 17.9236Z" fill="white" />
                        <path d="M15.9336 29.9975C15.519 29.9975 15.1044 30.005 14.6899 29.9975C13.5772 29.9751 12.7165 29.1161 12.7066 28.0233C12.704 27.5042 12.9043 27.0045 13.265 26.6311C13.6256 26.2576 14.1179 26.0398 14.6368 26.0243C15.4958 25.9977 16.3564 25.9969 17.2146 26.0243C17.719 26.0617 18.1903 26.2897 18.5326 26.6621C18.8749 27.0345 19.0625 27.5233 19.0574 28.0291C19.0522 28.5349 18.8546 29.0198 18.5048 29.3851C18.1549 29.7504 17.6791 29.9688 17.174 29.9959C16.7619 30.005 16.3473 29.9967 15.9336 29.9975Z" fill="white" />
                        <path d="M11.6113 27.4587V28.5241C7.90337 28.971 4.67138 26.1934 4.23193 22.9092H5.30153C6.22188 26.0649 8.34448 27.5557 11.6113 27.4587Z" fill="white" />
                    </g>
                    <defs>
                        <clipPath id="clip0_242_13">
                            <rect width="31.8424" height="30" fill="white" />
                        </clipPath>
                    </defs>
                </svg>


            </button>
        </div>
    )
}

export default AIChatBotFloatingButton