import React, { useState } from 'react';
import { Select, SelectValue, SelectTrigger, SelectItem, SelectContent } from '../ui/select';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';

interface Feature {
    title: React.ReactNode;
    description: React.ReactNode;
}

interface Option {
    label: string;
    value: string;
}

export interface PricingCardProps {
    title: string;
    isPopular?: boolean;
    options: Option[];
    features: Feature[];
    blockedFeatures: Feature[];
    price: number;
    discount?: number; // 0 to 100
}

const PricingCard: React.FC<PricingCardProps> = ({
    title,
    isPopular = false,
    features = [],
    blockedFeatures = [],
    options = [],
    price,
    discount = 0
}) => {
    const [isExpanded, setIsExpanded] = useState(false);
    return (
        <div className={`flex-1 !w-full !max-w-[300px] sm:!max-w-[360px] relative rounded-2xl border border-gray-200 ${isPopular ? 'border-purple-600' : ''} `} style={{ marginTop: 46 }}>
            {isPopular && (
                <div className="title bg-purple-400 font-bold text-white text-center py-2 rounded-t-2xl">
                    Le plus populaire
                    {/* MOST POPULAR */}
                </div>
            )}
            <div className="py-12 px-[34px]">
                <h3 className="text-xl font-bold text-[#2D1F67]">
                    {title}
                </h3>

                <div className='flex flex-col gap-1 my-4'>
                    <RadioGroup>
                        {
                            options.map((option, index) => (
                                <label key={index} className='flex items-center gap-3 cursor-pointer w-min whitespace-nowrap'>
                                    <RadioGroupItem value={option.value} />
                                    <span>{option.label}</span>
                                </label>
                            ))
                        }
                    </RadioGroup>
                </div>

                <label className='flex flex-col gap-3'>
                    <span className='text-[#2D1F67] font-semibold'>
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

                {
                    discount > 0 && (
                        <div className='flex items-center gap-2 mt-5'>
                            <span className='text-sm line-through text-[#2D1F67]'>
                                US$ {(price - (price * discount / 100)).toFixed(2)}
                            </span>
                            <span className='py-1 px-3 rounded-full text-[#2D1F67] font-bold bg-[#d5dfff]'>
                                SAVE {discount}%
                            </span>
                        </div>
                    )
                }

                <div className="text-5xl font-bold text-purple-900 my-3 !ml-0">
                    {discount > 0 ? (price - (price * discount / 100)).toFixed(2) : price}
                    <span className='text-3xl'>€</span>
                </div>

                <div className='my-6 text-[#673DE6]'>
                    *Pour les nouveaux clients
                </div>

                <a
                    href="/Checkout?productId=1"
                    className={`block !w-full py-4 border-2 border-purple-600 rounded-lg font-medium mb-8 text-center ${isPopular
                        ? 'text-white bg-purple-600'
                        : 'text-purple-600 hover:bg-purple-50'
                        }`}
                >
                    Sélectionner
                </a>

                <ul className="flex flex-col gap-3 justify-between text-[#2D1F67]">
                    {
                        [
                            ...(features?.map((feature, index) => (
                                <div key={index} className='flex  items-center gap-2 '>
                                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="text-[#00b090]">
                                        <path fill="currentColor" d="M21.046 5.955c.439.439.439 1.151 0 1.59l-9.538 9.539a1.425 1.425 0 0 1-2.016 0l-4.288-4.288a1.125 1.125 0 0 1 1.591-1.591l3.705 3.704 8.954-8.954c.44-.44 1.152-.44 1.591 0Z"></path>
                                    </svg>
                                    <div className='text-sm  group cursor-pointer  relative flex flex-wrap items-start gap-1 border-b border-[#2D1F67] border-dashed'>
                                        {feature.title}
                                        <div className='absolute top-[120%] left-0 hidden min-w-64 group-hover:block p-6 bg-purple-600 z-50 rounded-md font-light text-white'>
                                            {feature.description} Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat ipsam aliquid ducimus dolores at magni maiores tenetur beatae eos nisi, magnam ut velit, a reiciendis repellendus quis et repudiandae. Quasi!
                                        </div>
                                    </div>

                                </div>
                            )) || []),
                            ...(blockedFeatures?.map((feature, index) => (
                                <div key={index} className='flex cursor-pointer items-center gap-2'>
                                    <span className='text-2xl pl-2 pr-1 text-gray-400'>-</span>
                                    <div className='text-sm  group cursor-pointer  relative flex flex-wrap items-start gap-1 border-b border-[#2D1F67] border-dashed text-gray-400'>
                                        {feature.title}
                                        <div className='absolute top-[120%] left-0 hidden min-w-64 group-hover:block p-6 bg-purple-600 z-50 rounded-md font-light text-white'>
                                            {feature.description} Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat ipsam aliquid ducimus dolores at magni maiores tenetur beatae eos nisi, magnam ut velit, a reiciendis repellendus quis et repudiandae. Quasi!
                                        </div>
                                    </div>
                                </div>
                            )) || [])
                        ].splice(0, isExpanded ? (features?.length || 0) + (blockedFeatures?.length || 0) : 5).map((item, index) => (
                            <div key={index}>
                                {item}
                            </div>
                        ))
                    }
                </ul>

                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className=" mx-auto flex justify-center mt-4 sm:mt-6 text-purple-600 font-bold"
                >
                    {isExpanded ? 'Masquer' : 'Voir tous'}
                    {isExpanded ? <ChevronUp className="h-4 w-4 sm:h-5 sm:w-5 ml-1" /> : <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5 ml-1" />}
                </button>
            </div>
        </div>
    );
};

export default PricingCard; 