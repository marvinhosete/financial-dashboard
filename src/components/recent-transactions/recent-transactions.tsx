import Image from 'next/image'

export const RecentTransactions = ({ title, description, data }: { title?: string, description?: string, data: { name: string, avatar: string, time: string, total: number }[] }) => {
    return (
        <div className='mt-12'>
            <div className='flex justify-between items-end'>
                <h1 className='text-lg font-semibold'>{title ?? 'Pending Payments'}</h1>
                <a className='text-sm text-[#AAAAAA] transition-all duration-300 hover:text-black hover:dark:text-white' href='#'>{description ?? 'See all'}</a>
            </div>

            <div className='mt-7 space-y-3'>
                {data.map((item, index) => (
                    <div key={index} className='flex border-b border-b-[#222222] pb-3'>
                        <Image width={48} height={48} src={item.avatar} alt='User Image' />
                        <div className='flex flex-col justify-center ml-4'>
                            <span className='text-sm'>{item.name}</span>
                            <p className='text-[#AAAAAA] text-xs'>{item.time} ago</p>
                        </div>
                        <span className={`flex items-center text-sm ${item.total > 0 ? 'text-[#25D757]' : 'text-[#F85640]'} ml-auto`}>{item.total > 0 ? '+' : '-'} ${item.total > 0 ? item.total : item.total * -1},00</span>
                    </div>
                ))}
            </div>
        </div>
    )
}