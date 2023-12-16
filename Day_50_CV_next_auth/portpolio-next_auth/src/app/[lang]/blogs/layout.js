import { Inter } from 'next/font/google'
import { Providers } from '../providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blog | Portfolio',
  description: 'Nguyen Blogs',
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
