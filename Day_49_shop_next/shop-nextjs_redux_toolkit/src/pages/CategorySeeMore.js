import Button from '@/components/button/Button';
import Image from 'next/image';
import React, { Fragment } from 'react';

function CategorySeeMore() {
	const arr1 = Array.from({ length: 2 });
	const arr2 = Array.from({ length: 14 });

	return (
		<div className="category-component container">
			{arr1 &&
				arr1.map((_item, index) => {
					return (
						<div className="category-list-type">
							{/* <span className="shop-title">T H Ư V I Ệ N</span> */}
							<span className="shop-title-see-more">
								T Ổ N G H Ợ P {index+1}
							</span>
							<div className="category-list">
								{arr2.map((_item, index) => {
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
													<div className="category-outlay__title">
														Ảnh Chụp
													</div>
													<div className="category-outlay_desription">
														Những Bức Ảnh Đẹp nhất
														Về Chuyến Du Lịch Của
														Bạn Sẽ Được Chia Sẻ Lên
														Đây
													</div>
													<Button
														text="Xem Thêm"
														className="mt-4"
													/>
												</div>
											</div>
										</Fragment>
									);
								})}
							</div>
						</div>
					);
				})}
		</div>
	);
}

export default CategorySeeMore;
