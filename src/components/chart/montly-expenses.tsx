'use client'

import { Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'

export const MonthlyExpenses = ({ data }: { data: { name: string, value: number, fill: string, stroke: string }[] }) => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <PieChart>
                <Tooltip
                    contentStyle={{
                        backgroundColor: 'transparent',
                        borderRadius: '8px',
                        border: 0,
                        backdropFilter: 'blur(3px)',
                        textTransform: 'capitalize',
                    }}
                    itemStyle={{
                        color: '#FFF',
                        backgroundColor: '#25253490',
                        border: '1px solid #373755',
                        borderRadius: '8px',
                        padding: '0.5rem 0',
                        textAlign: 'center',
                    }}
                />
                <Pie
                    data={data}
                    dataKey="value"
                    cx="41"
                    cy="50%"
                    nameKey="name"
                />
                <Legend align='right' layout="radial" height={140} content={
                    <ul className='flex flex-col h-full justify-center gap-1'>
                        {data.map((entry, index) => (
                            <li key={`item-${index}`} className='flex gap-4'>
                                <div className='flex items-center space-x-2'>
                                    <span
                                        className='inline-block w-2 h-2 rounded-full'
                                        style={{ backgroundColor: entry.stroke }}
                                    />
                                    <p className='text-sm'>${entry.value},00</p>
                                </div>
                                <span className='text-sm text-[#AAAAAA]'>{`${entry.name}`}</span>
                            </li>
                        ))}
                    </ul>
                } />
            </PieChart>
        </ResponsiveContainer>
    )
}