import { Inter } from 'next/font/google'
import { Providers } from '../providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Profile | Portfolio',
  description: 'Nguyen Profile',
}
export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'vi' }, { lang: 'ja' }]
}

export default function RootLayout({ children,params }) {
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
