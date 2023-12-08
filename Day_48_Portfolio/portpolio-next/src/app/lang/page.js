import PortfolioHead from "../components/PortfolioHead";
import PortfolioBasicInfor from "../components/PortfolioBasicInfor";
import PortfolioMainInfor from "../components/PortfolioMainInfor";

export default function PortPolioPgae(props) {
	console.log('props', props);
	// {params: {lang}}
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

  return (
  	<main>
				<div className="portfolio-page">
					<div className="portfolio-container container">
						<div className="portfolio-wrap">
							<PortfolioHead />
							{/* lang={lang} */}

							<div className="portfolio-main">
								<div className="portfolio-title" title="title">
									Fullstack.edu.vn
								</div>

								<div className="portfolio-main-layouts">

									<PortfolioBasicInfor data={basicInfor} />

									<PortfolioMainInfor data={mainInfor} />
								</div>

								<div className="portfolio-main-foot">
									@2023 All rights reserved.
								</div>
							</div>

						</div>
					</div>
				</div>
			</main>
  )
}
