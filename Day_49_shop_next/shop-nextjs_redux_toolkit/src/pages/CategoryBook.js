import React from 'react';
import Button from '@/components/button/Button';

function CategoryDetailBook() {
	return (
		<div className="category-detail-page">

			<div className="category-detail-main-img">
				<img
					src="https://picsum.photos/200"
					alt="Picture of the author"
				/>

				<div className="category-detail-outlay">
					<div className="category-detail-outlay-wrap">
						<div className="category-detail-outlay__title">
							Thành Phố Có Tất Cả
						</div>
						<div className="category-detail-outlay__desctription">
							Mumbai Không Chỉ Là Trung Tâm Tài Chính – Kinh Tế, Kinh
							Đô Điện Ảnh – Thời Trang Của Ấn Độ, Mà Đây Còn Là Thành
							Phố Cảng Vừa Hiện Đại Nhưng Vẫn Mang Nhiều Nét Cổ Kính
							Với Những Công Trình Kiến Trúc, Quán Bar, Nhà Hàng, Viện
							Bảo Tàng Và Các Cửa Hàng Thời Trang Hấp Dẫn…
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
					<Button text="Đặt ngay" style={{width: "100%"}} />
				</div>
			</div>

		</div>
	)
}

export default CategoryDetailBook