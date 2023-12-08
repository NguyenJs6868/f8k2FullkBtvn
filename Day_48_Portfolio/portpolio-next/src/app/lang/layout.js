import { Inter } from 'next/font/google'

import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Nguyen Trung Nguyen | Portfolio',
  description: 'Portfolio',
}
export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'vi' }]
}

export default function RootLayout({ children, params }) {
  console.log('lang children', children);
  console.log('lang params', params);
  
  return (
    <html lang={params.lang}>
      <body className={inter.className} suppressHydrationWarning={true}>
        <Providers>
          {children}
        </Providers>
        </body>
    </html>
  )
}
