// "use client"
import { Inter } from 'next/font/google';

import './global.scss';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'STRAVEL', //title
	description: 'B49Shop Next Js ', //meta description
	robots: 'nofollow, noindex',
	openGraph: {
		title: 'STRAVEL 1',
		description: 'Booking your travle',
		images: [
			'https://fullstack.edu.vn/images/image01.jpg',
			'https://fullstack.edu.vn/images/image02.jpg'
		],
		url: 'https://fullstack.edu.vn',
		type: 'website'
	}
};


export async function generateStaticParams() {
	return [{ lang: 'en' }, { lang: 'vi' }];
}

export default function RootLayout({ children, params }) {
	return (
		//  style={{background: '#000'}}
		<html lang="en">
			<body className={inter.className} suppressHydrationWarning={true}>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
