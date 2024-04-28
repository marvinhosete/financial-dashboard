'use client'

import { useTheme } from 'next-themes'
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

export const MyBalance = ({ data }: { data: { name: string, income: number, spend: number }[] }) => {
    const { theme } = useTheme()

    return (
        <ResponsiveContainer width="99%" height="100%">
            <AreaChart
                data={data}
                margin={{ bottom: 0 }}
            >
                <defs>
                    <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#54E0A5" stopOpacity={0.9} />
                        <stop offset="95%" stopColor="#13231C" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorSpend" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#5D2AC9" stopOpacity={0.9} />
                        <stop offset="95%" stopColor="#1C0A24" stopOpacity={0} />
                    </linearGradient>
                </defs>
                <XAxis
                    dataKey="name"
                    tickLine={false}
                    axisLine={false}
                    padding={{ left: 24 }}
                />
                <YAxis tickLine={false} axisLine={false} />
                <CartesianGrid
                    stroke={theme === 'dark' ? '#222222' : '#EEEEEE'}
                    horizontal={true}
                />{' '}
                <Tooltip
                    contentStyle={{
                        backgroundColor: theme === 'dark' ? '#25253475' : '#EEEEEE',
                        borderRadius: '8px',
                        border: `1px solid ${theme === 'dark' ? '#373755' : '#FFFFFF'}`,
                        backdropFilter: 'blur(3px)',
                        textTransform: 'capitalize',
                    }}
                />
                AreatoolTipBackground
                <Area
                    type="monotone"
                    dataKey="income"
                    stroke={theme === 'dark' ? '#41FFC6' : '#2CC798'}
                    fillOpacity={1}
                    strokeWidth={2}
                    fill="url(#colorIncome)"
                />
                <Area
                    type="monotone"
                    dataKey="spend"
                    stroke={theme === 'dark' ? '#864CFF' : '#864CFF'}
                    strokeWidth={2}
                    fill="url(#colorSpend)"
                />
            </AreaChart>
        </ResponsiveContainer>
    )
}