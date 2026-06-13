'use client'

import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'

interface RecaptchaProviderProps {
  children: React.ReactNode
  lang?: string
}

export default function RecaptchaProvider({ children, lang = 'pl' }: RecaptchaProviderProps) {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? ''}
      language={lang}
    >
      {children}
    </GoogleReCaptchaProvider>
  )
}
