import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { AppProvider } from '@/components/app-provider'
import '@/styles/app.css'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: 'Financial Dashboard',
    description: 'Developed by marvinho',
    favicon: '/icon.png'
} as Metadata

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html suppressHydrationWarning>
            <body className={`${inter.className} `}>
                <AppProvider
                    attribute='class'
                    defaultTheme='system'
                    enableSystem
                    disableTransitionOnChange
                    storageKey='application-theme'
                >
                    {children}
                </AppProvider>
            </body>
        </html>
    )
}