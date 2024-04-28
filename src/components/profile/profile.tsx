import Image from 'next/image'

export const Profile = ({ name, user, avatar }: { name: string, user: string, avatar: string }) => {
    return (
        <div className='flex'>
            <div className='relative'>
                <span className='absolute inline-block top-8 left-10 w-3 h-3 bg-green-400 border rounded-full' />
                <Image className='rounded-full' src={avatar} width={50} height={50} alt='User Profile' />
            </div>

            <div className='flex flex-col h-full items-start justify-center ml-3'>
                <h1 className='text-black dark:text-white text-base font-semibold'>{name}</h1>
                <p className='text-sm'>@{user}</p>
            </div>
        </div>
    )
}