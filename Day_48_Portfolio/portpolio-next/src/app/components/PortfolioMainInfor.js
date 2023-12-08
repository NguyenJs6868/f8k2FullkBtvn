import React from 'react';

function PortfolioMainInfor() {
	const mainInfor = [
		{
			id: 2,
			mainInforTitle: 'Thông tin liên hệ',
			mainInforContent: [
				{
					id: 1,
					title: 'Project Code snippet',
					description:
						'Một dự án nhỏ hoàn thành trong vòng một ngày <br /> Một trang web đơn giản cho phép tạo và chia sẻ các đoạn code. Sử dụng HTML, CSS, JS và custom elements.',
					linkPage: 'https://codefast.vercel.app/',
					linkCode:
						'https://github.com/duongnguyenf8/demo_custom-element'
				},
				{
					id: 2,
					title: 'Project blog',
					description:
						'Một dự án được thực hiện trong ba ngày <br /> Một trang web blog social với các bài viết về lập trình và học tập. Sử dụng React.js.',
					linkPage: 'https://codefast.vercel.app/',
					linkCode:
						'https://github.com/duongnguyenf8/demo_custom-element'
				},
				{
					id: 3,
					title: 'Project 20f8',
					description:
						'Một dự án game được làm trong một ngày <br /> Một trò chơi giải đố dựa trên trò chơi 2048. Sử dụng Next.js và Tailwind CSS.',
					linkPage: 'https://codefast.vercel.app/',
					linkCode:
						'https://github.com/duongnguyenf8/demo_custom-element'
				}
			],
			mainInforLink: 'https://github.com/duongnguyenf8'
		},
		{
			id: 3,
			mainInforTitle: 'Sở thích cá nhân',
			mainInforContent: [
				`<ul>
          <li>Thưởng Thức Nhạc Nhẹ, Nhạc Rap Của Đen Vâu Và Các Nghệ Sĩ Khác,… </li>
          <li>Đọc Sách, Học Hỏi Thêm Về Các Ngôn Ngữ Lập Trình Mới Mẻ. Hiện Tại, Tôi Đang Tự Học Python</li>
          <li>Theo Dõi Các Xu Hướng Công Nghệ, Tin Tức Về Các Sản Phẩm Nổi Tiếng Như Iphone, Huawei, GoogleAI,…</li>
        </ul>
      `
			]
		}
	];

	return (
		<>
			<div className="portfolio-main-infor">
				<div className="portfolio-categories">
					{mainInfor.map(item => {
						return (
							<div key={item.id} className="common-layout">
								<div className="category-item">
									<div className="category-item__title">
										{item.mainInforTitle}
									</div>

									<div className="category-item__contents">
										<div className="content-text">
											{item.mainInforContent &&
												item.type === 'contacts' &&
												item.mainInforContent.map(
													item => {
														console.log(item.type);
														return (
															<div key={item.id}>
																<div>
																	{item.title && (
																		<div className="content-text-title">
																			{
																				item.title
																			}
																		</div>
																	)}
																	{item.description && (
																		<div className="content-text-description">
																			{
																				item.description
																			}
																		</div>
																	)}
																	{/* <div className="content-text-description" dangerouslySetInnerHTML={{ __html: item.description }}></div> */}

																	<div className="content-actions">
																		{item.linkPage && (
																			<a
																				href={
																					item.linkPage
																				}
																				target="_blank"
																				rel="noreferrer"
																			>
																				Demo
																			</a>
																		)}
																		{item.linkCode && (
																			<a
																				href={
																					item.linkCode
																				}
																				target="_blank"
																				rel="noreferrer"
																			>
																				Code
																			</a>
																		)}
																	</div>
																</div>
															</div>
														);
													}
												)}
											{item.mainInforContent &&
												item.type === 'favorite' &&
												item.mainInforContent.map(
													item => {
														console.log(item.type);
														return (
															<div
																key={item.id}
																className="content-text-description border-none"
															>
																<li>
																	{
																		item?.description
																	}
																</li>
															</div>
														);
													}
												)}
											{/* {item.type === 'favorite' && item.mainInforContent.map(item => {
													return (
													<div key={item.id}>
															<ul>
																<li>{item.description}</li>
															</ul>
													</div>)
												})} */}
										</div>

										<div className="content-link">
											<a
												href={item.mainInforLink}
												target="_blank"
												rel="noreferrer"
											>
												{item.mainInforLink}
											</a>
										</div>
									</div>
								</div>
							</div>
						);
					})}

					{/*  */}
				</div>
			</div>
		</>
	);
}

export default PortfolioMainInfor;
