import Image from 'next/image'

export const PendingPayments = ({ title, description, data }: { title?: string, description?: string, data: { icon: string, color: string, name: string }[] }) => {
    return (
        <div className='flex flex-col'>
            <div className='flex justify-between items-end'>
                <h1 className='text-lg font-semibold'>{title ?? 'Pending Payments'}</h1>
                <a className='text-sm text-[#AAAAAA] transition-all duration-300 hover:text-black hover:dark:text-white' href='#'>{description ?? 'See all'}</a>
            </div>

            <div className='mt-7 space-y-4'>
                {data.map((item, index) =>
                    <div key={index} className='flex items-center space-x-2'>
                        <div className={`flex items-center justify-center w-10 h-10 rounded-full`} style={{ backgroundColor: item.color }}>
                            <Image width={24} height={24} src={`/icons/${item.icon}.svg`} alt={`Item ${index}`} />
                        </div>
                        <p className='text-sm'>{item.name}</p>
                    </div>
                )}
            </div>
        </div>
    )
}