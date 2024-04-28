import Image from 'next/image'
import '@/styles/preloader.css'

export const PreLoader = ({ language }: { language: string | undefined }) => {
    return (
        <div id='preloader' className={language && 'preloaded'}>
            <div className='loader_line'></div>
            <Image className='absolute w-20 h-20 transition-all delay-300 -translate-x-1/2 -translate-y-1/2 rounded-full top-1/2 left-1/2' src='/logo.svg' alt='Logo' width={80} height={80} />
        </div>
    )
}