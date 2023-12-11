import React from 'react';
import Button from '@/components/button/Button';
import Link from 'next/link';

// import Image from 'next/image';

function CategoryDetail({item}) {
	console.log('category in page', item);

	return (
		<div className="category-detail-page">

			<div className="category-detail-main-img">
				<img
					src="https://picsum.photos/200"
					alt="Picture of the author"
				/>

				<div className="category-detail-outlay">
					<div className="category-detail-outlay-wrap">
						<div className="category-detail-outlay__title-name">
							{item?.home?.name}
						</div>

						<div className="category-detail-outlay__title-content">
							{item?.home?.content}
						</div>

						<div className="category-detail-outlay__desctription">
							{item?.home?.textcontent}
						</div>

						<div className="category-detail-outlay__action">
							<Button text="Tìm hiểu thêm" />
						</div>
					</div>
				</div>
			</div>
			{/*  */}
			<div className="category-detail-book-now">
				<span>Ưu Đãi 30.000.000 Cho 5người/3ngày</span>
				<div className='category-detail-book-now-action'>
					<Link href="/category-detail-book" style={{width: "100%"}} >
						<Button text="Đặt ngay" style={{width: "100%"}} />
					</Link>
				</div>
			</div>

		</div>
	);
}

export default CategoryDetail;
