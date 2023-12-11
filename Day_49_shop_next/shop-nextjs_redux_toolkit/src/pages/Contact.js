import React from 'react'
import Nation from '../components/Nation'

function Contact() {
	return (
		<>
			{/* bg-blue-200  */}
			<div className="flex items-center py-5">
				<div className="w-full">
					<h2 className="text-center text-blue-400 font-bold text-2xl uppercase mb-10">T Ì M Ư U Đ Ã I	</h2>
					<div className="bg-white p-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2">

						<form action="">

							<div className="mb-3">
								<label	htmlFor="name" 	className="block mb-2 font-bold text-gray-600" 	>
									Hãy Liên Hệ Với Tôi Bằng :
								</label>
								<input
									type="text"
									id="name"
									name="name"
									placeholder="Email hoặc số điện thoại"
									className="border border-gray-300 shadow p-3 w-full rounded mb-"
								/>
							</div>

							{/* 2 */}
							<div className="mb-3">
								<label	htmlFor="name" 	className="block mb-2 font-bold text-gray-600" 	>
									Tôi Muốn Đến :
								</label>
								<p>Hà Nội</p>
								<Nation />
							</div>
							{/*3*/}

							<div className="mb-3">
								<label htmlFor="exampleInputEmail1" className="form-label">
									Chúng tôi có
								</label>
								<input
									type="text"
									className="form-control border border-gray-300 shadow p-3 w-full rounded mb-"
									id="exampleInputEmail1"
									aria-describedby="emailHelp"
								/>
								{/* <div id="emailHelp" className="form-text">
									We'll never share your email with anyone else.
								</div> */}
							</div>

							<div className="mb-3">
								<label htmlFor="exampleInputPassword1" className="form-label">
									Bắt đầu từ
								</label>
								<input
									type="time"
									className="form-control border border-gray-300 shadow p-3 w-full rounded mb-"
									id="exampleInputPassword1"
								/>
							</div>

							<div className="mb-3">
								<label htmlFor="exampleInputPassword1" className="form-label">
									Kết thúc vào
								</label>
								<input
									type="time"
									className="form-control border border-gray-300 shadow p-3 w-full rounded mb-"
									id="exampleInputPassword1"
								/>
							</div>

							<button type="submit" className="btn btn-primary">
								Tìm ngay
							</button>

						</form>


					</div>
				</div>
			</div>
		</>

	)
}

export default Contact;