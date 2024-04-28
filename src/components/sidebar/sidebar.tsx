'use client'

import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { ReactNode, useState } from 'react'

const SidebarItem = ({ icon, title, active, expanded }: { icon: ReactNode, title: string, active?: boolean, expanded?: boolean }) => {
    return (
        <button className={`flex h-16 w-full items-center justify-center ${active ? 'text-black dark:text-white' : 'text-[#CCCCCC] hover:text-[#864CFF]'} group`}>
            <div className={`absolute left-0 h-16 w-1 bg-[#864CFF] rounded-r ${!active && 'opacity-0 transition-all duration-300 group-hover:opacity-100'}`} />
            {icon}
            <p className={`text-base w-[5.25rem] text-start ml-4 ${!expanded && 'absolute z-10 -left-[9999px] invisible'}`}>{title}</p>
        </button>
    )
}

export const Sidebar = () => {
    const [expanded, setExpanded] = useState(false)
    const translation = useTranslations('sidebar')

    return (
        <div className={expanded ? '' : 'absolute lg:static'}>
            <div className={`flex items-center justify-center h-[50px] mt-8 ml-4 ${expanded && 'hidden'} lg:hidden`}>
                <button type="button" className='inline-flex items-center text-sm text-[#494949] outline-none transition-all duration-300 hover:text-[#864CFF]' onClick={() => setExpanded(true)}>
                    <span className="sr-only">Open sidebar</span>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="32" width="32" xmlns="http://www.w3.org/2000/svg">
                        <path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"></path>
                    </svg>
                </button>
            </div>

            <aside className={`fixed lg:static top-0 left-0 z-40 ${expanded ? 'w-52' : 'w-[6.25rem]'} h-screen transition-all ${!expanded && '-translate-x-full lg:translate-x-0'} duration-300`}>
                <div className="flex flex-col h-full w-full py-4 overflow-y-auto bg-white dark:bg-[#181818] border-r border-r-[#EEEEEE] dark:border-r-[#222222] overflow-x-hidden">
                    <div className='flex flex-col mt-12 mb-20 w-full items-center'>
                        <button aria-controls="sidebar" type="button" className="inline-flex items-center text-sm text-[#494949] outline-none transition-all duration-300 hover:text-[#864CFF] mb-10" onClick={() => setExpanded(!expanded)}>
                            <span className="sr-only">Open sidebar</span>
                            {expanded ? <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" fillRule="evenodd" height="32" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M799.855 166.312c.023.007.043.018.084.059l57.69 57.69c.041.041.052.06.059.084a.118.118 0 0 1 0 .069c-.007.023-.018.042-.059.083L569.926 512l287.703 287.703c.041.04.052.06.059.083a.118.118 0 0 1 0 .07c-.007.022-.018.042-.059.083l-57.69 57.69c-.041.041-.06.052-.084.059a.118.118 0 0 1-.069 0c-.023-.007-.042-.018-.083-.059L512 569.926 224.297 857.629c-.04.041-.06.052-.083.059a.118.118 0 0 1-.07 0c-.022-.007-.042-.018-.083-.059l-57.69-57.69c-.041-.041-.052-.06-.059-.084a.118.118 0 0 1 0-.069c.007-.023.018-.042.059-.083L454.073 512 166.371 224.297c-.041-.04-.052-.06-.059-.083a.118.118 0 0 1 0-.07c.007-.022.018-.042.059-.083l57.69-57.69c.041-.041.06-.052.084-.059a.118.118 0 0 1 .069 0c.023.007.042.018.083.059L512 454.073l287.703-287.702c.04-.041.06-.052.083-.059a.118.118 0 0 1 .07 0Z"></path></svg> : <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="32" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"></path></svg>}
                        </button>

                        <Image className='rounded-2xl' src='/logo.svg' width={54} height={54} alt='Logo' />
                    </div>

                    <SidebarItem
                        icon={<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M11 21H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h6v18zm2 0h6c1.1 0 2-.9 2-2v-7h-8v9zm8-11V5c0-1.1-.9-2-2-2h-6v7h8z"></path></svg>}
                        title={translation('dashboard')}
                        active={true}
                        expanded={expanded}
                    />

                    <SidebarItem
                        icon={<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17z"></path></svg>}
                        title={translation('profile')}
                        expanded={expanded}
                    />

                    <SidebarItem
                        icon={<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zM5 8.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-2zm6 7.5H5v-2h6v2zm8 0h-6v-2h6v2z"></path></svg>}
                        title={translation('cards')}
                        expanded={expanded}
                    />

                    <SidebarItem
                        icon={<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M885.6 230.2L779.1 123.8a80.83 80.83 0 0 0-57.3-23.8c-21.7 0-42.1 8.5-57.4 23.8L549.8 238.4a80.83 80.83 0 0 0-23.8 57.3c0 21.7 8.5 42.1 23.8 57.4l83.8 83.8A393.82 393.82 0 0 1 553.1 553 395.34 395.34 0 0 1 437 633.8L353.2 550a80.83 80.83 0 0 0-57.3-23.8c-21.7 0-42.1 8.5-57.4 23.8L123.8 664.5a80.89 80.89 0 0 0-23.8 57.4c0 21.7 8.5 42.1 23.8 57.4l106.3 106.3c24.4 24.5 58.1 38.4 92.7 38.4 7.3 0 14.3-.6 21.2-1.8 134.8-22.2 268.5-93.9 376.4-201.7C828.2 612.8 899.8 479.2 922.3 344c6.8-41.3-6.9-83.8-36.7-113.8z"></path></svg>}
                        title={translation('support')}
                        expanded={expanded}
                    />

                    <SidebarItem
                        icon={<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M413.967 276.8c1.06-6.235 1.06-13.518 1.06-20.8s-1.06-13.518-1.06-20.8l44.667-34.318c4.26-3.118 5.319-8.317 2.13-13.518L418.215 115.6c-2.129-4.164-8.507-6.235-12.767-4.164l-53.186 20.801c-10.638-8.318-23.394-15.601-36.16-20.801l-7.448-55.117c-1.06-4.154-5.319-8.318-10.638-8.318h-85.098c-5.318 0-9.577 4.164-10.637 8.318l-8.508 55.117c-12.767 5.2-24.464 12.482-36.171 20.801l-53.186-20.801c-5.319-2.071-10.638 0-12.767 4.164L49.1 187.365c-2.119 4.153-1.061 10.399 2.129 13.518L96.97 235.2c0 7.282-1.06 13.518-1.06 20.8s1.06 13.518 1.06 20.8l-44.668 34.318c-4.26 3.118-5.318 8.317-2.13 13.518L92.721 396.4c2.13 4.164 8.508 6.235 12.767 4.164l53.187-20.801c10.637 8.318 23.394 15.601 36.16 20.801l8.508 55.117c1.069 5.2 5.318 8.318 10.637 8.318h85.098c5.319 0 9.578-4.164 10.638-8.318l8.518-55.117c12.757-5.2 24.464-12.482 36.16-20.801l53.187 20.801c5.318 2.071 10.637 0 12.767-4.164l42.549-71.765c2.129-4.153 1.06-10.399-2.13-13.518l-46.8-34.317zm-158.499 52c-41.489 0-74.46-32.235-74.46-72.8s32.971-72.8 74.46-72.8 74.461 32.235 74.461 72.8-32.972 72.8-74.461 72.8z"></path></svg>}
                        title={translation('settings')}
                        expanded={expanded}
                    />

                    <div className='mt-auto'>
                        <SidebarItem
                            icon={<svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"></path><path d="M9 12h12l-3 -3"></path><path d="M18 15l3 -3"></path></svg>}
                            title={translation('logout')}
                            expanded={expanded}
                        />
                    </div>
                </div>
            </aside>
        </div>
    )
}