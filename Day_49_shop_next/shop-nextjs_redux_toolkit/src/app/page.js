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

const Home = () => {
	const projectDir = process.cwd();
	return (
		<div>
			<Header />
			<FindDeals />
			<ForYou />
			<Advantages />
			<Service />
			<Category />
      {/* <CategoryDetail /> */}
			<Evaluate />
			<Contact />

			{/* <Hero /> */}
			{/* <Testimonials /> */}
			<Footer />
			{/* <Auth /> */}
		</div>
	);
};

export default Home;
