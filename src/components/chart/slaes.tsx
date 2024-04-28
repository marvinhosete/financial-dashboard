'use client'

import { useTheme } from 'next-themes'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'

export const Sales = () => {
    const { theme } = useTheme()

    return (
        <div className='flex flex-col space-y-2'>
            <CircularProgressbar
                className='w-32 h-32'
                value={77}
                text={`${77}%`}
                styles={buildStyles({
                    rotation: 0.22,
                    pathColor: theme === 'dark' ? '#41FFC6' : '#2CC798',
                    textColor: theme === 'dark' ? '#41FFC6' : '#2CC798',
                    trailColor: theme === 'dark' ? '#222222' : '#EEEEEE',
                    backgroundColor: '#41FFC6',
                })}
                strokeWidth={15}
            />
            <span className='text-[#AAAAAA] text-sm'>More than last week</span>
        </div>
    )
}