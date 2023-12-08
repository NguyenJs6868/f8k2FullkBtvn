import React from 'react';

function PortfolioBasicInfor() {
	return (
		<>
			<div className="portfolio-basic-infor portfolio-main">
				<div className="portfolio-basic-infor-avata">
					<img
						src="https://code-fullstack-exercise48.vercel.app/f8.jpg"
						alt=""
					/>
				</div>

				<div className="specialize">
					<span>Front-end developer</span>
				</div>

				<div className="portfolio-basic-infor-details">
					<div className="portfolio-basic-infor-item">
						<div className="basic-infor-category-title">
							Các kỹ năng của tôi
						</div>

						<div className="item-infor">
							<div className="item-infor__title">
								Kỹ năng làm việc:
							</div>
							<div className="item-infor__contents">
								REST API, React.js, Next.js, Redux, Context,
								CSS3, HTML5, UI/UX, Figma, Photoshop...
							</div>
						</div>
					</div>

					<div className="portfolio-basic-infor-item">
						<div className="basic-infor-category-title">
							Lịch sử
						</div>

						<div className="item-infor">
							<div className="item-infor__title">2016: </div>
							<div className="item-infor__contents">
								Trường Trung học Cơ sở nào đó
							</div>
						</div>

						<div className="item-infor">
							<div className="item-infor__title">2019-2021: </div>
							<div className="item-infor__contents">
								{' '}
								Trường Trung học Phổ thông khác
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default PortfolioBasicInfor;
