import React from 'react';
import Blogs from '@/pages/Blogs';
// import Header from '@/components/Header';

function BlogsPages({ params: { lang } }) {
	return (
		<div>
			{/* <Header /> */}
			<Blogs />
		</div>
	)
}

export default BlogsPages