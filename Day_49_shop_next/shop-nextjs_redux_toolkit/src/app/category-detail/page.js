//   category-detail
import CategoryDetail from '@/pages/CategoryDetail';
import React, { Fragment } from 'react';

async function CategoryDetailPage() {
	const response = await fetch('https://api-pages.vercel.app/api/v1/pages/1');
	const categoryDetail = await response.json();
	// console.log('layout app', categoryDetail);

	return (
		<Fragment>
			<CategoryDetail  item= {categoryDetail} />
		</Fragment>
	);
}

export default CategoryDetailPage;
