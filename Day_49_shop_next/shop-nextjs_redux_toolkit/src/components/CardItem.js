import Image from 'next/image';
import React from 'react';

function CardItem() {
	return (
		<div>
			<div className="card" style={{ width: '18rem' }}>
				<Image
					src="https://picsum.photos/200"
					width={500}
					height={500}
					alt="Picture of the author"
				/>

				<div className="card-body">
					<h5 className="card-title">Sydney</h5>

					<p className="card-text">Paris-Kinh Đô Thời Trang Và Thành Phố Về Đêm</p>

					<p name="card-text">Chuyến Đi Dành Cho Gia Đình 5N/6Đ</p>

					<div className='d-flex cart-item-vote'>
						<i className="fa-solid fa-star btn-secondary"></i>
						<i className="fa-solid fa-star btn-secondary"></i>
						<i className="fa-solid fa-star btn-secondary"></i>
						<i className="fa-solid fa-star btn-secondary"></i>
						<i className="fa-solid fa-star btn-secondary"></i>
					</div>

					<a href="#" className="btn btn-primary mt-2">Đặt ngay</a>
				</div>
			</div>
		</div>
	);
}

export default CardItem;
