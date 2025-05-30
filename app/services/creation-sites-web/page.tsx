import { PricingTable } from '@/app/page'
import SocialMediaVerticalIcons from '@/components/common/SocialMediaVerticalIcons'
import PricingPacksSection from '@/components/sections/PricingPacksSection'
import TrustedByClientsSection from '@/components/sections/TrustedByClientsSection'
import TarifPricingPlan from '@/components/tarifs/TarifPricingPlan'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const sitesTypes = [
    {
        title: 'Site vitrine professionnel',
        description: 'Idéal pour présenter votre activité, vos services, vos contacts. Simple, clair et efficace.',
    },
    {
        title: 'Site e-commerce',
        description: 'Vendez en ligne avec un panier sécurisé, gestion de produits, paiements intégrés.'
    },
    {
        title: 'Landing page / page de campagne',
        description: 'Parfait pour une pub ciblée ou un lancement produit. Rapide à mettre en place, optimisée pour la conversion.'
    },
    {
        title: 'Blog professionnel ou site de contenu',
        description: 'SEO-friendly, idéal pour attirer du trafic qualifié régulièrement.'
    },
    {
        title: 'Application web légère ou mini plateforme',
        description: 'Outil interne, dashboard client, extranet ou service sur mesure.'
    },
    {
        title: 'Site WordPress administrable',
        description: 'Facile à gérer, évolutif, idéal pour les clients autonomes.'
    },
    {
        title: 'Site full custom en MERN Stack',
        description: 'Pour les projets avancés, complexes ou à forte logique métier '
    }
]

const sitesFeatures = [
    'Design personnalisé selon votre image de marque',
    'Affichage optimisé mobile & tablette',
    'SEO technique de base',
    'Sécurité SSL & développement sécurisé',
    'Connexion aux outils',
    'Maintenance & support offerts pendant 1 mois',
]

const page = () => {
    return (
        <div>
            <div className='bg-[#CC9EFF]'>
                <section className='relative container mx-auto overflow-hidden grid grid-cols-1 lg:grid-cols-2 px-4 md:px-10 pb-12 pt-5 lg:py-10 gap-8 lg:items-center'>
                    <div className='flex flex-col'>
                        <h2 className='text-[#2f1c6a] font-bold mb-3 sm:mb-4 text-2xl sm:text-3xl lg:text-4xl'>
                            Un site qui vous ressemble.Conçu pour convertir… et séduire vos clients.
                        </h2>
                        <span className='text-base sm:text-lg text-[#2f1c6a] mb-4 sm:mb-6 font-bold'>
                            Sites vitrines, e-commerce ou applications sur-mesure:
                        </span>
                        <span className='text-base sm:text-lg text-[#2f1c6a] mb-4 sm:mb-16 font-normal'>
                            offrez à vos visiteurs une expérience fluide, gagnez en visibilité, en crédibilité… et en clients.
                        </span>
                        <Link href="/create-my-website" className="bg-[#673de6] hover:bg-[#5735bc] text-white rounded-lg px-[31px] py-[10px] w-min whitespace-nowrap">
                            Créer mon site web
                        </Link>
                    </div>
                    <Image src="/Liadtech/Accueil/image 1 section 4.svg" width={0} height={0} className='w-auto h-auto' alt='pic' />
                    <SocialMediaVerticalIcons className='absolute bottom-5 right-0' />
                </section>
            </div>
            <TrustedByClientsSection />
            <PricingPacksSection />

            <section className='bg-[#2D1F67] md:pl-[66px] py-16 md:py-[132px] text-white mb-16'>
                <div className='sm:container px-4 mx-auto'>
                    <div className='col-span-2 flex flex-col gap-2 mb-6'>
                        <span className='font-bold text-2xl sm:text-3xl lg:text-4xl'>Types de sites que vous pouvez créer</span>
                        <span className='font-normal md:text-lg flex flex-col'>
                            <span>Ne perdez plus de temps avec les démarches techniques.</span>
                            <span>Créez, animez et propulsez votre image grâce à nos packs 100% clé-en-main.</span>
                        </span>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 lg:items-center'>
                        <div className='flex flex-col gap-4 md:gap-7'>
                            <div className='flex flex-col gap-3 md:gap-8'>
                                {sitesTypes.map((site, index) => (
                                    <div key={index} className='flex gap-3'>
                                        <div className='size-[42px] bg-gray-300 rounded-full'></div>
                                        <div className='flex flex-col flex-1'>
                                            <span className='font-bold text-sm md:text-base'>{site.title}</span>
                                            <span className='text-xs md:text-sm font-normal w-11/12'>{site.description}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <Image src="/images/digital web Section 1 (1).svg" width={0} height={0} className='w-auto h-auto' alt='pic' />
                    </div>
                </div>
                <div className='sm:container px-4 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 lg:items-center mt-10 md:mt-20'>
                    <Image src="/images/digital web.svg" width={0} height={0} className='w-auto h-auto' alt='pic' />
                    <div className='flex flex-col gap-4 md:gap-7'>
                        <span className='font-bold text-2xl sm:text-3xl lg:text-4xl'>
                            Ce que votre site inclut
                        </span>
                        <div className='flex flex-col gap-3 md:gap-4'>
                            {sitesFeatures.map((site, index) => (
                                <div key={index} className='flex gap-3'>
                                    <svg width="14" height="15" viewBox="0 0 14 15" className='mt-2' fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2L5.63636 13L2 7.4127" stroke="#60BB6F" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <div className='flex flex-col'>
                                        <span className='font-bold md:text-lg'>{site}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className='grid grid-cols-1 lg:grid-cols-2 container mx-auto px-4 md:px-16 overflow-hidden mb-5 lg:items-center'>
                <div className='flex flex-col lg:p-7'>
                    <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold !text-left'>
                        Pourquoi un bon site change tout
                    </h2>
                    <span className='text-base sm:text-lg font-normal text-[#673DE6] mb-8 md:mb-12'>
                        Un site bien conçu, ce n'est pas juste un beau design.C'est un outil de croissance qui travaille pour vous, même quand vous dormez.
                    </span>

                    <div className='flex flex-col gap-6 md:gap-8'>
                        <div className='flex items-center gap-3'>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M31.5347 18.5787C31.2382 18.1013 30.8183 17.7119 30.3194 17.4535C30.2139 17.3979 30.0987 17.3476 29.9757 17.3019H29.9582C29.8129 17.3019 29.6738 17.2579 29.5567 17.1767C29.3377 17.1287 29.113 17.1044 28.8873 17.1044C28.1686 17.1044 27.4943 17.3422 26.9366 17.7918C26.8115 17.8927 26.6544 17.9483 26.4939 17.9483C26.2789 17.9483 26.0784 17.8528 25.9438 17.6858C25.8254 17.5391 25.7711 17.3552 25.7913 17.1676C25.811 16.9796 25.903 16.8114 26.0497 16.6925C26.8492 16.0474 27.8564 15.6921 28.886 15.6921C29.2144 15.6921 29.5428 15.7279 29.8649 15.7998C30.4679 15.3224 30.8492 14.6454 30.9444 13.8773C30.9596 13.7562 30.9672 13.6341 30.9672 13.5134C30.9672 12.81 30.7097 12.1281 30.2418 11.5951C29.7702 11.0585 29.1202 10.7139 28.4109 10.6259C28.3247 10.6152 28.2377 10.6081 28.1511 10.6053C28.0874 10.6776 28.021 10.7489 27.9524 10.818C27.6742 11.0979 27.3314 11.3519 26.9039 11.5955C26.5818 11.7781 26.2166 11.9504 25.8186 12.1074C25.1291 12.3789 24.5889 12.5085 24.5836 12.5094C24.5315 12.522 24.4759 12.5283 24.4202 12.5283C24.0932 12.5283 23.8114 12.3067 23.7339 11.989C23.6894 11.8051 23.7195 11.6158 23.8177 11.4551C23.9133 11.2977 24.0627 11.1864 24.2404 11.1398L24.2542 11.1366L24.3826 11.47L24.2942 11.1259L24.4212 11.0913C24.5351 11.059 24.6966 11.0101 24.8877 10.9456C25.2332 10.8276 25.7424 10.6315 26.2063 10.3677C26.5123 10.1941 26.7694 10.0061 26.9488 9.82488C27.0516 9.72075 27.1521 9.60594 27.2481 9.48256L27.2938 9.426C27.7348 8.84325 27.9901 8.11063 27.9896 7.38963C27.9887 6.64488 27.7258 5.95713 27.2292 5.39988C26.6392 4.7395 25.7926 4.36038 24.9061 4.36038C24.1411 4.36038 23.4053 4.64119 22.8347 5.15088C22.7051 5.26663 22.5381 5.33031 22.3645 5.33031C22.1631 5.33031 21.971 5.24419 21.8373 5.09394C21.7122 4.9535 21.6489 4.77225 21.6592 4.58425C21.67 4.39581 21.7534 4.22306 21.8939 4.09744C22.1998 3.82425 22.5386 3.59538 22.9032 3.41506C22.8135 2.74075 22.5049 2.11356 22.0194 1.62813C21.4312 1.03994 20.6497 0.716439 19.8188 0.716064C18.9874 0.716439 18.2059 1.03994 17.6178 1.62813C17.0301 2.21588 16.7066 2.99788 16.7062 3.82869V8.90288H19.6062C19.9956 8.90288 20.3123 9.22007 20.3123 9.609C20.3123 9.99838 19.9956 10.3152 19.6062 10.3152H16.7062V13.7989C17.5474 13.8384 18.2589 13.9511 18.874 14.1413C19.6075 14.3669 20.2101 14.7142 20.6636 15.1723C20.9315 15.4428 21.1576 15.7622 21.3361 16.1216C21.5681 16.5913 21.6924 17.0696 21.7749 17.4339C21.8202 17.6358 21.8597 17.8354 21.8979 18.0301C21.9634 18.3599 22.0248 18.6713 22.1065 18.9471C22.1814 19.2011 22.2666 19.4047 22.3681 19.5703C22.4932 19.7766 22.6444 19.9319 22.8427 20.0602C23.1249 20.2406 23.4972 20.359 23.9805 20.4218C24.1662 20.4451 24.3327 20.5403 24.4484 20.6892C24.5641 20.8391 24.6144 21.0248 24.5906 21.2114C24.5449 21.5632 24.2438 21.8279 23.8907 21.8279L23.7992 21.8216C23.2083 21.7457 22.7171 21.5995 22.2967 21.3752C21.8965 21.1625 21.5622 20.8736 21.3039 20.5178C21.1531 20.3123 21.0275 20.0849 20.9194 19.8242C20.8076 19.555 20.7192 19.2648 20.6322 18.8829C20.5878 18.6856 20.5492 18.4881 20.5106 18.2925C20.4711 18.0933 20.4321 17.8955 20.3872 17.7026C20.258 17.1382 20.105 16.7501 19.8906 16.4441C19.7452 16.2355 19.5698 16.0605 19.3536 15.9093C19.0601 15.7048 18.6981 15.5482 18.2467 15.4306C17.8111 15.3171 17.2943 15.2435 16.7061 15.2126V28.1717C16.7066 29.0026 17.0301 29.7846 17.6173 30.3728C18.2059 30.9605 18.9874 31.2839 19.8188 31.2844C20.6497 31.284 21.4312 30.9605 22.0194 30.3728C22.6072 29.7841 22.9311 29.0026 22.9311 28.1717C22.9315 27.7217 22.8081 27.2278 22.5919 26.8163C22.346 26.3456 22.0037 25.9984 21.5752 25.7831C21.2441 25.618 20.8776 25.5373 20.4546 25.5363C20.0656 25.5363 19.7488 25.22 19.7488 24.8311C19.7488 24.4411 20.0656 24.1244 20.4549 24.1244C20.9372 24.1244 21.3949 24.2012 21.8152 24.3528C22.2087 24.4941 22.5712 24.7018 22.8924 24.9693C23.4532 25.4381 23.8791 26.081 24.124 26.8284C24.2676 27.2676 24.3429 27.7319 24.3429 28.1716C24.3434 28.5224 24.303 28.8706 24.2232 29.2107C24.5489 29.3219 24.8939 29.3803 25.2349 29.3803C25.9966 29.3798 26.7307 29.1003 27.3004 28.5933C27.9636 28.0033 28.344 27.1554 28.3444 26.2667C28.3444 25.8903 28.2771 25.5215 28.1457 25.1702C28.012 24.8144 27.8137 24.4873 27.5575 24.1989C27.2991 23.9077 27.3255 23.4608 27.6158 23.202C27.7459 23.0867 27.9124 23.0239 28.0851 23.0239C28.2869 23.0239 28.4794 23.11 28.6136 23.2612L28.6625 23.3173L28.6948 23.3227C28.7168 23.3258 28.7307 23.3271 28.7634 23.3285C28.7921 23.3289 28.8321 23.3294 28.8872 23.3294C29.7181 23.3289 30.5001 23.0054 31.0884 22.4178C31.6761 21.8291 31.9996 21.0476 32 20.2167C31.9996 19.6357 31.8385 19.0691 31.5347 18.5787Z" fill="#673DE6" stroke="#673DE6" strokeWidth="2" mask="url(#path-1-inside-1_325_30184)" />
                            </svg>
                            <span className='text-sm md:text-base'>
                                Améliore votre image de marque
                            </span>
                        </div>
                        <div className='flex items-center gap-3'>
                            <svg width="38" height="41" viewBox="0 0 38 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.188 35H19.0654C18.8143 35 18.6108 34.7826 18.6108 34.5143V33.5392C18.6108 33.2828 18.424 33.072 18.1853 33.0435C17.6169 32.9763 17.0672 32.8507 16.5359 32.6671C16.0197 32.4859 15.5725 32.2713 15.1943 32.0223C15.0205 31.9079 14.9573 31.6758 15.0291 31.4718L15.7991 29.2846C15.9029 28.9903 16.2374 28.8776 16.4951 29.0298C16.8429 29.2351 17.2169 29.4106 17.6165 29.5564C18.2121 29.7613 18.7838 29.8638 19.3312 29.8638C19.8019 29.8638 20.1383 29.8097 20.34 29.7011C20.5416 29.5804 20.6426 29.4055 20.6426 29.1765C20.6426 28.9113 20.5081 28.7124 20.239 28.5798C19.9798 28.4472 19.5473 28.3025 18.9423 28.1458C18.1641 27.9409 17.5157 27.7238 16.997 27.4947C16.4783 27.2536 16.0267 26.8677 15.6425 26.3373C15.2582 25.7947 15.0661 25.0652 15.0661 24.1489C15.0661 23.0879 15.3687 22.1776 15.9738 21.418C16.5193 20.7443 17.2723 20.2887 18.2333 20.0514C18.4497 19.998 18.6108 19.7974 18.6108 19.5604V18.4857C18.6108 18.2174 18.8143 18 19.0654 18H20.188C20.4391 18 20.6426 18.2174 20.6426 18.4857V19.4989C20.6426 19.7471 20.8179 19.9538 21.0473 19.9919C21.8892 20.1316 22.6289 20.396 23.2663 20.7853C23.4472 20.8958 23.519 21.1309 23.4496 21.3407L22.7289 23.5189C22.6336 23.8077 22.3153 23.9298 22.0594 23.7919C21.2476 23.3548 20.4729 23.1362 19.7347 23.1362C18.8605 23.1362 18.4233 23.4014 18.4233 23.9318C18.4233 24.1851 18.5532 24.3779 18.8125 24.5108C19.0719 24.6312 19.4993 24.7638 20.0949 24.9086C20.8634 25.0895 21.512 25.3003 22.0402 25.5414C22.5685 25.7705 23.0248 26.1503 23.4092 26.6809C23.803 27.2113 24 27.9348 24 28.8511C24 29.8638 23.7069 30.75 23.1208 31.5097C22.6105 32.1717 21.9039 32.6351 21.0014 32.9C20.7939 32.961 20.6426 33.1572 20.6426 33.3869V34.5143C20.6426 34.7826 20.4391 35 20.188 35Z" fill="#673DE6" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M13.3806 1.70825H24.1108C26.8591 1.70825 25.3499 5.93759 24.2372 8.51738L22.9709 11.4759L22.7998 11.8749C23.9993 11.8152 25.1854 12.1559 26.18 12.8458C29.9007 16.3376 32.9205 20.5415 35.0692 25.2212C35.9065 26.9516 36.2386 28.8934 36.0257 30.8129C35.77 35.7053 31.943 39.604 27.1713 39.8333H10.3201C5.54708 39.6109 1.71443 35.7163 1.45335 30.823C1.24033 28.9036 1.5725 26.9617 2.40991 25.2314C4.56115 20.5471 7.58507 16.3394 11.3113 12.8458C12.3061 12.1559 13.4921 11.8152 14.6914 11.8749L14.4932 11.4149L13.2542 8.51738C12.1464 5.93759 10.6298 1.70825 13.3806 1.70825Z" stroke="#673DE6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M22.1017 13C23.0369 13 23.7952 12.3285 23.7952 11.5001C23.7952 10.6717 23.0369 10.0002 22.1017 10.0002V13ZM14.8982 10.0002C13.963 10.0002 13.2048 10.6717 13.2048 11.5001C13.2048 12.3285 13.963 13 14.8982 13V10.0002ZM28.1515 10.7999C28.9619 10.3864 29.2406 9.4693 28.7736 8.7515C28.3067 8.0337 27.2714 7.78701 26.461 8.20051L28.1515 10.7999ZM22.2536 11.1861L22.5804 12.6578L22.5853 12.657L22.2536 11.1861ZM14.7221 11.1381L15.0728 9.67061L15.0574 9.66785L14.7221 11.1381ZM10.513 8.18741C9.69435 7.78673 8.664 8.04966 8.21161 8.77468C7.7592 9.49972 8.05606 10.4123 8.87467 10.813L10.513 8.18741ZM22.1017 10.0002H14.8982V13H22.1017V10.0002ZM26.461 8.20051C25.0452 8.92279 23.5129 9.43386 21.9219 9.71522L22.5853 12.657C24.5392 12.3114 26.4185 11.6841 28.1515 10.7999L26.461 8.20051ZM21.9269 9.71436C19.6612 10.109 17.3323 10.0941 15.0728 9.67061L14.3716 12.6055C17.0774 13.1126 19.8669 13.1304 22.5804 12.6578L21.9269 9.71436ZM15.0574 9.66785C13.4706 9.38412 11.9388 8.88533 10.513 8.18741L8.87467 10.813C10.6016 11.6583 12.4598 12.2637 14.387 12.6084L15.0574 9.66785Z" fill="#673DE6" />
                            </svg>
                            <span className='text-sm md:text-base'>
                                Augmente vos conversions
                            </span>
                        </div>
                        <div className='flex items-center gap-3'>
                            <svg width="41" height="36" viewBox="0 0 41 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M38.0421 0H2.95788C1.32678 0 0 1.16125 0 2.58858V3.00395C0 4.19024 0.917492 5.19003 2.16324 5.49488V27.407C2.16324 27.9058 2.62522 28.31 3.19506 28.31H19.4682V30.1693C18.168 30.5484 17.2275 31.6229 17.2275 32.8866C17.2275 34.4659 18.6956 35.7508 20.5 35.7508C22.3044 35.7508 23.7725 34.4659 23.7725 32.8866C23.7725 31.6229 22.832 30.5484 21.5318 30.1693V28.31H37.805C38.3748 28.31 38.8368 27.9058 38.8368 27.407V5.495C40.0825 5.19016 41 4.19024 41 3.00407V2.5887C41 1.16125 39.6731 0 38.0421 0ZM20.5 33.945C19.8333 33.945 19.2911 33.4704 19.2911 32.8868C19.2911 32.3034 19.8333 31.8288 20.5 31.8288C21.1667 31.8288 21.7089 32.3034 21.7089 32.8868C21.7089 33.4703 21.1667 33.945 20.5 33.945ZM36.7731 26.5041H4.22687V5.59253H36.7731V26.5041ZM38.9364 3.00395C38.9364 3.43546 38.5352 3.78654 38.0421 3.78654H2.95788C2.4648 3.78654 2.06363 3.43546 2.06363 3.00395V2.58858C2.06363 2.15707 2.4648 1.80598 2.95788 1.80598H38.0421C38.5352 1.80598 38.9364 2.15707 38.9364 2.58858V3.00395Z" fill="#673DE6" />
                                <path d="M7.05586 24.3875C7.31987 24.3875 7.58401 24.2994 7.78556 24.123L11.7409 20.6614L15.5573 22.3312C16.023 22.535 16.5887 22.4032 16.8772 22.0245L20.7862 16.8928L26.6498 20.314C26.9014 20.4608 27.214 20.5033 27.5051 20.4311C27.7959 20.3584 28.0357 20.1778 28.1611 19.937L32.1955 12.1838L33.0023 13.7604C33.1739 14.0957 33.5503 14.2946 33.9446 14.2946C34.0856 14.2946 34.2288 14.2692 34.3657 14.2155C34.8857 14.0117 35.1187 13.4775 34.8856 13.0224L33.0259 9.38848C32.914 9.16996 32.7075 8.99923 32.4518 8.91387C32.1961 8.82875 31.9121 8.83573 31.6624 8.93349L27.511 10.5608C26.991 10.7646 26.7582 11.299 26.9912 11.7541C27.2244 12.2093 27.8347 12.4129 28.3548 12.2089L30.3148 11.4404L26.7857 18.2225L21.0725 14.889C20.8448 14.7563 20.5659 14.7079 20.2978 14.7549C20.0294 14.802 19.7934 14.9402 19.6415 15.1395L15.6655 20.3592L11.9985 18.7548C11.6015 18.5809 11.1218 18.649 10.8075 18.924L6.32643 22.8458C5.92347 23.1985 5.92347 23.7702 6.32657 24.1228C6.52771 24.2993 6.79185 24.3875 7.05586 24.3875Z" fill="#673DE6" />
                            </svg>
                            <span className='text-sm md:text-base'>
                                Boost votre visibilité Google
                            </span>
                        </div>
                    </div>
                </div>
                <Image src={"/images/Site web.svg"} width={0} height={0} className='w-auto h-auto' alt='pic' />
            </section>

            <section className='grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-20 container mx-auto px-4 md:px-16 mb-16 lg:items-center pb-10 md:pb-0'>
                <Image src={"/images/SEO 7.svg"} width={0} height={0} className='w-auto h-auto' alt='pic' />
                <div className='flex flex-col lg:p-7 justify-center'>
                    <h2 className='font-bold text-2xl sm:text-3xl lg:text-4xl !text-left'>
                        Prêt à lancer un site qui vous apporte de vrais résultats ?
                    </h2>
                    <span className='md:text-lg font-normal text-[#673DE6] mb-8 md:mb-12'>
                        Parlez à un expert LIADTECH ou démarrez votre projet en quelques clics.
                    </span>

                    <div className='flex flex-col gap-6 md:gap-8'>
                        <div className='flex items-center gap-3'>
                            <Image src={"/images/hand-finger.svg"} width={0} height={0} className='w-auto h-auto' alt='pic' />
                            <span className='text-sm md:text-base'>
                                Réserver un appel gratuit
                            </span>
                        </div>
                        <div className='flex items-center gap-3'>
                            <Image src={"/images/hand-finger.svg"} width={0} height={0} className='w-auto h-auto' alt='pic' />
                            <span className='text-sm md:text-base'>
                                Réserver un appel gratuit
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default page