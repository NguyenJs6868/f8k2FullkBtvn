import React, { Fragment } from 'react'
import Image from 'next/image'
import Button from '@/components/button/Button';

async function Category() {

	const arr = Array.from({ length: 8 });

	return (
		<div className="category-component container">
			<span className="shop-title">T H Ư V I Ệ N</span>
			<div className="category-list">
					{arr.map((_item, index) => {
							return (
							<Fragment key={index + 1}>
								<div className="category-item">
									<Image
										src="https://picsum.photos/200"
										width={500}
										height={500}
										alt="Picture of the author"
									/>

									<div className="category-outlay">
										<div className="category-outlay__title">Ảnh Chụp</div>
											<div className="category-outlay_desription">
												Những Bức Ảnh Đẹp nhất Về Chuyến Du Lịch Của Bạn Sẽ Được Chia Sẻ Lên Đây
											</div>
											<Button text="Xem Thêm" className="mt-4" />
									</div>
								</div>

							</Fragment>)
						})
					}
			</div>
		</div>
	)
}
// Category
export default Category