'use client'

import { Card } from '@/components/card/card'
import { MyBalance } from '@/components/chart/my-balance'
import { MonthlyExpenses } from '@/components/chart/montly-expenses'
import { Sales } from '@/components/chart/slaes'
import { Profile } from '@/components/profile/profile'
import { Sidebar } from '@/components/sidebar/sidebar'
import { PendingPayments } from '@/components/pending-payments/pending-payments'
import { RecentTransactions } from '@/components/recent-transactions/recent-transactions'
import { CARDS, MONTLY_EXPENSES, MY_BALANCE, PENDING_PAYMENTS, PROFILE, RECENT_TRANSACTIONS } from '@/util/data'
import { useTheme } from 'next-themes'
import { useState } from 'react'

import '@/styles/charts.css'
import { useTranslations } from 'next-intl'

export default function AppPage() {
    const [showing, setShowing] = useState(false)
    const { theme, setTheme } = useTheme()
    const translation = useTranslations('dashboard')

    return (
        <div className='flex w-full h-full'>
            <Sidebar />

            <div className='flex flex-col w-full h-screen overflow-y-auto px-4 sm:px-14'>
                <div className='flex w-full mt-8'>
                    <div className='relative hidden lg:flex group items-center w-96 xl:w-[37.5rem] text-[#AAAAAA] focus-within:text-[#864CFF]'>
                        <label form='search' className='absolute z-10 left-6'><svg stroke='currentColor' fill='currentColor' strokeWidth='0' viewBox='0 0 24 24' height='20' width='20' xmlns='http://www.w3.org/2000/svg'><path d='M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z'></path></svg></label>
                        <input type='text' className='w-full h-12 rounded outline-none border bg-white border-[#EEEEEE] dark:bg-[#181818] dark:border-[#222222] px-14 transition-all duration-300 focus:border-[#864CFF] focus:dark:border-[#864CFF] text-black dark:text-white' placeholder={translation('search')} />
                    </div>

                    <div className='flex items-center ml-auto space-x-8 text-[#AAAAAA]'>
                        <svg className='hover:text-black hover:dark:text-white hover:-translate-y-[2px] cursor-pointer transition-all duration-300' onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} stroke='currentColor' fill='currentColor' strokeWidth='0' viewBox='0 0 24 24' height='24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M6.993 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007S14.761 6.993 12 6.993 6.993 9.239 6.993 12zM12 8.993c1.658 0 3.007 1.349 3.007 3.007S13.658 15.007 12 15.007 8.993 13.658 8.993 12 10.342 8.993 12 8.993zM10.998 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2h-3zm17 0h3v2h-3zM4.219 18.363l2.12-2.122 1.415 1.414-2.12 2.122zM16.24 6.344l2.122-2.122 1.414 1.414-2.122 2.122zM6.342 7.759 4.22 5.637l1.415-1.414 2.12 2.122zm13.434 10.605-1.414 1.414-2.122-2.122 1.414-1.414z'></path></svg>

                        <div className='relative hover:text-black hover:dark:text-white hover:-translate-y-[2px] cursor-pointer transition-all duration-300 h-6'>
                            <span className='absolute inline-block left-3 w-3 h-3 bg-[#864CFF] rounded-full' />
                            <svg stroke='currentColor' fill='currentColor' strokeWidth='0' viewBox='0 0 24 24' height='24' width='24' xmlns='http://www.w3.org/2000/svg'><path fill='none' d='M0 0h24v24H0z'></path><path d='M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z'></path></svg>
                        </div>

                        <Profile {...PROFILE} />
                    </div>
                </div>

                <div className='flex flex-col sm:flex-row sm:justify-between mt-10 mb-5 text-black dark:text-white'>
                    <div className='max-w-full sm:max-w-[calc(100%_-_25.5rem)]'>
                        <h1 className='text-3xl font-semibold'>{translation('overview')}</h1>

                        <div className='flex items-center mt-9 w-full'>
                            <div className='flex space-x-3'>
                                <h2 className='text-xl font-semibold'>{translation('my-cards.title')}</h2>
                                <button className='transition-all duration-300 text-[#AAAAAA] hover:text-[#A1A1A1] dark:hover:text-white' onClick={() => setShowing(!showing)}>
                                    {showing ? <svg className='w-5 h-5' stroke='currentColor' fill='currentColor' strokeWidth='0' viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg'><path d='M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 0 0 0-51.5zm-63.57-320.64L836 122.88a8 8 0 0 0-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 0 0 0 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 0 0 0 11.31L155.17 889a8 8 0 0 0 11.31 0l712.15-712.12a8 8 0 0 0 0-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 0 0-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 0 1 146.2-106.69L401.31 546.2A112 112 0 0 1 396 512z'></path><path d='M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 0 0 227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 0 1-112 112z'></path></svg> : <svg className='w-5 h-5' stroke='currentColor' fill='currentColor' strokeWidth='0' viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg'><path d='M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z'></path></svg>}
                                </button>
                            </div>

                            <button className='w-28 py-1 text-sm font-semibold bg-[#864CFF] text-white ml-auto rounded transition-all duration-300 hover:bg-opacity-80'>{translation('my-cards.button')}</button>
                        </div>


                        <div className='flex w-full space-x-2 overflow-y-auto pt-6 pb-1'>
                            {CARDS.map((item, index) => <Card key={index} {...item} showing={showing} />)}
                        </div>

                        <div className='flex flex-col w-full max-h-[18.5rem] bg-white dark:bg-[#181818] border border-[#EEEEEE] dark:border-[#222222] rounded mt-4 p-6'>
                            <div className='flex w-full items-center justify-between'>
                                <h1 className='text-start text-lg font-semibold'>{translation('my-balance.title')}</h1>
                                <div className='flex space-x-4 mx-auto'>
                                    <div className='flex items-center space-x-2'>
                                        <span className='inline-block w-2 h-2 rounded-full bg-lime-400' />
                                        <p className='text-sm'>{translation('my-balance.income')}</p>
                                    </div>

                                    <div className='flex items-center space-x-2'>
                                        <span className='inline-block w-2 h-2 rounded-full bg-[#864CFF]' />
                                        <p className='text-sm'>{translation('my-balance.spend')}</p>
                                    </div>
                                </div>
                            </div>

                            <div className='flex w-full h-72 mt-4 items-center justify-center'>
                                <MyBalance data={MY_BALANCE} />
                            </div>
                        </div>

                        <div className='flex flex-col sm:flex-row w-full sm:space-x-4'>
                            <div className='flex flex-col w-full sm:w-1/2 max-h-56 bg-white dark:bg-[#181818] border border-[#EEEEEE] dark:border-[#222222] rounded mt-6 p-6'>
                                <h1 className='text-start text-lg font-semibold'>{translation('monthly-expenses')}</h1>

                                <div className='flex w-full h-40 mt-6'>
                                    <MonthlyExpenses data={MONTLY_EXPENSES} />
                                </div>
                            </div>

                            <div className='flex flex-col w-full sm:w-1/2 max-h-56 bg-white dark:bg-[#181818] border border-[#EEEEEE] dark:border-[#222222] rounded mt-6 p-6'>
                                <h1 className='text-start text-lg font-semibold'>{translation('sales')}</h1>

                                <div className='flex flex-col items-center justify-center text-center mt-1'>
                                    <Sales />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col min-w-96 bg-white dark:bg-[#181818] border border-[#EEEEEE] dark:border-[#222222] rounded mt-4 p-12 pb-0'>
                        <PendingPayments title={translation('pending-payments')} description={translation('see-all')} data={PENDING_PAYMENTS} />
                        <RecentTransactions title={translation('recent-transactions')} description={translation('see-all')} data={RECENT_TRANSACTIONS} />
                    </div>
                </div>
            </div>
        </div>
    )
}