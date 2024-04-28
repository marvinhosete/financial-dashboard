'use client'

import { useTranslations } from 'next-intl'
import Image from 'next/image'

export const Card = ({ type, name, number, flag, date, showing }: { type: 'Credit' | 'Debit', name: string, number: string, flag: string, date: string, showing?: boolean }) => {
    const translation = useTranslations('dashboard.my-cards')

    return (
        <div className='flex flex-col min-w-72 max-w-72 min-h-[11.25rem] max-h-[11.25rem] rounded-lg bg-white dark:bg-[#181818] border border-[#EEEEEE] dark:border-[#222222] transition-all duration-300 cursor-pointer hover:-translate-y-2 hover:border-[#864CFF] hover:dark:border-[#864CFF] p-4'>
            <div className='flex justify-between items-center'>
                <h1 className='font-medium'>{translation(type.toLowerCase())}</h1>
                <Image src={`/cardflags/single/${flag}.svg`} width={50} height={50} alt='Card Flag' />
            </div>

            <div className='flex items-center justify-between mt-auto'>
                <div className='space-y-1'>
                    <p className='text-lg font-light'>{name}</p>
                    <p className='text-sm font-semibold'>{showing ? number : '**** **** **** ****'}</p>
                </div>

                <p className='text-sm font-semibold'>{showing ? date : '**/**'}</p>
            </div>
        </div>
    )
}