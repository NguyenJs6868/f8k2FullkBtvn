// import React from 'react'

// import { Fragment } from 'react';

function App() {
	const basicInfor = [
		{
			id: 1,
			categoryTitle: 'Các kỹ năng của tôi',
			categoryItem: [
				{
					id: 1,
					inforTitle: 'Kỹ năng làm việc',
					inforContents:
						'REST API, React.js, Next.js, Redux, Context, CSS3, HTML5, UI/UX, Figma, Photoshop...'
				},
				{
					id: 2,
					inforTitle: 'Các kỹ năng khác',
					inforContents:
						'Kỹ năng nghiên cứu và tìm kiếm tương đối tốt. Tư duy làm việc, kỹ năng làm việc nhóm tốt so với độ tuổi.'
				}
			]
		},
		{
			id: 2,
			categoryTitle: 'Các kỹ năng của tôi',
			categoryItem: [
				{
					id: 3,
					inforTitle: '2016: ',
					inforContents: 'Trường Trung học Cơ sở nào đó'
				},
				{
					id: 4,
					inforTitle: '2017-2019: ',
					inforContents: 'Trường Trung học Cơ sở nào đó'
				},
				{
					id: 5,
					inforTitle: '2019-2021: ',
					inforContents: 'Trường Trung học Phổ thông khác'
				},
				{
					id: 6,
					inforTitle: '2022-2023: ',
					inforContents: 'Học đại học và làm trợ giảng tại F8'
				}
			]
		}
	];

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

	// console.log(basicInfor, mainInfor);

	return (
		<>
			<main>
				<div className="portfolio-page">
					<div className="portfolio-container container">
						<div className="portfolio-wrap">
							<div className="portfolio-head">
								<div className="left">
									<button>
										<img
											src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Apple_logo_grey.svg/1724px-Apple_logo_grey.svg.png"
											alt=""
										/>
									</button>
									<div className="website">
										Fullstack.edu.vn F8
									</div>
									<div className="tabs">Home</div>
								</div>

								<div className="right">
									<div className="social-networks">
										<button className="network-item">
											F8
										</button>
										<button className="network-item">
											FB
										</button>
										<button className="network-item">
											YT
										</button>
									</div>
									<div className="actions">
										<button className="change-theme">
											light/dark
										</button>
										<button className="change-language">
											en
										</button>
									</div>
								</div>
							</div>

							<div className="portfolio-main">
								<div className="portfolio-title" title="title">
									Fullstack.edu.vn
								</div>

								<div className="portfolio-main-layouts">
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
														REST API, React.js,
														Next.js, Redux, Context,
														CSS3, HTML5, UI/UX,
														Figma, Photoshop...
													</div>
												</div>
											</div>

											<div className="portfolio-basic-infor-item">
												<div className="basic-infor-category-title">
													Lịch sử
												</div>

												<div className="item-infor">
													<div className="item-infor__title">
														2016:{' '}
													</div>
													<div className="item-infor__contents">
														Trường Trung học Cơ sở
														nào đó
													</div>
												</div>

												<div className="item-infor">
													<div className="item-infor__title">
														2019-2021:{' '}
													</div>
													<div className="item-infor__contents">
														{' '}
														Trường Trung học Phổ
														thông khác
													</div>
												</div>
											</div>
										</div>
									</div>

									<div className="portfolio-main-infor">
										<div className="portfolio-categories">
											{mainInfor.map(item => {
												return (
													<div
														key={item.id}
														className="common-layout"
													>
														<div className="category-item">
															<div className="category-item__title">
																{
																	item.mainInforTitle
																}
															</div>

															<div className="category-item__contents">
																<div className="content-text">
																	{item.mainInforContent &&
																		item.type ===
																			'contacts' &&
																		item.mainInforContent.map(
																			item => {
																				console.log(
																					item.type
																				);
																				return (
																					<div
																						key={
																							item.id
																						}
																					>
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
																		item.type ===
																			'favorite' &&
																		item.mainInforContent.map(
																			item => {
																				console.log(
																					item.type
																				);
																				return (
																					<div
																						key={
																							item.id
																						}
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
																		href={
																			item.mainInforLink
																		}
																		target="_blank"
																		rel="noreferrer"
																	>
																		{
																			item.mainInforLink
																		}
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
								</div>

								<div className="portfolio-main-foot">
									@2023 All rights reserved.
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}

export default App;

{
	/* <div dangerouslySetInnerHTML={{ __html: itemChild }}></div> */
}
