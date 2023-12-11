// 'use client';
import '@fortawesome/fontawesome-free/css/all.min.css';

import ForYou from '@/components/ForYou';
import Advantages from '@/pages/Advantages';
import Category from '@/pages/Category';
import Contact from '@/pages/Contact';
import Evaluate from '@/pages/Evaluate';
import FindDeals from '@/pages/FindDeals';
import Footer from '@/pages/Footer';
import Header from '@/pages/Header';
import Service from '@/pages/Service';
import 'bootstrap/dist/css/bootstrap.css';
// import { useTheme } from 'next-themes';

const Home = async () => {
	// const projectDir = process.cwd();


	return (
		<main className='dark:bg-black'>
			<Header />
			{/* <FindDeals /> */}
			<ForYou />
			{/* <Advantages /> */}
			{/* <Service />/ */}
			<Category />

			{/* <Evaluate /> */}
			<Contact />

			{/* <Hero /> */}
			{/* <Testimonials /> */}

			<Footer />

			{/* <Auth /> */}
		</main>
	);
};

export default Home;
