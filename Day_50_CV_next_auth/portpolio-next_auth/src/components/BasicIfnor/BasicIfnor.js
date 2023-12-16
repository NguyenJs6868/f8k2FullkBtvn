import { Avatar } from '@nextui-org/react';
import { Fragment } from 'react';

function BasicIfnor({ data }) {
	return (
		<div className="basic-infor-el border border-solid border-[#ccc] p-4 rounded-lg shadow-medium">
			<Avatar
				src="https://static.topcv.vn/avatars/pOkx6tgWfzDrNxHM9vyc_621dbd2f7d9fc_cvtpl.jpg?1702276706"
				className="w-[15rem] h-[15rem] text-large"
			/>

			<div className="infors">
				<div className="infor-block">
					{data?.contact && data?.contact.map((item, index) => {
						return (
							<Fragment key={index+1}>
								<div className='basic-ifnor-el'>
									<span className='education-item__tcontact-el__titleime'>{item?.title}: </span>
									<span className='education-item__action'>{item?.content}</span>
								</div>
							</Fragment>
						)
					})}
					{/* <span>{data?.contact?.date_of_brithday}</span>
					<span>{data?.contact?.sex}</span>
					<span>{data?.contact?.spanhone}</span>
					<span>{data?.contact?.email}</span>
					<span>{data?.contact?.address}</span>
					<span>{data?.contact?.associate}</span> */}
				</div>

				<div className="infor-block pt-5">
					<span className="contact-el__title">{data?.title}</span>
					<ul className="pl-5 list-disc">
						{data?.hobbies.map(item => (
							<li>{item}</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}

export default BasicIfnor;
