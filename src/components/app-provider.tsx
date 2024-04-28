'use client'

import { message } from '@/locale/locale'
import { NextIntlClientProvider } from 'next-intl'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { type ThemeProviderProps } from 'next-themes/dist/types'
import { useEffect, useState } from 'react'
import { PreLoader } from './pre-loader/pre-loader'

export const AppProvider = ({ children, ...props }: ThemeProviderProps) => {
    const [loaded, setLoaded] = useState(false)
    const [language, setLanguage] = useState<string>()

    const handleLanguageChange = () => setLanguage(navigator.language)

    useEffect(() => {
        handleLanguageChange()
        setTimeout(() => setLoaded(true), 800)
        window.addEventListener('languagechange', handleLanguageChange)
        return () => window.removeEventListener('languagechange', handleLanguageChange)
    }, [])

    return (
        <NextThemesProvider {...props}>
            {language && loaded ? (
                <NextIntlClientProvider
                    locale={language}
                    timeZone={Intl.DateTimeFormat().resolvedOptions().timeZone}
                    messages={message(language)}
                >
                    {children}
                </NextIntlClientProvider>
            ) : <PreLoader language={language} />}
        </NextThemesProvider>
    )
}