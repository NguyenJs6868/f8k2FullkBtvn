import { Fragment } from "react";

function Information({ skills, history }) {
	return (
		<div className="w-[100] flex flex-col items-start border border-solid border-[#ccc] p-4 rounded-lg shadow-medium">
			{/* skills */}
			<div className="mt-4 skills">
				<h3 className="heading">{skills.title}</h3>
				{skills.skill_list && skills.skill_list.map((item, index) => {
					return (
						<Fragment key={index+1}>
							<div className="education-item mt-2">
								<span className="education-item__time">{item.skill_title}: </span>
								<span className="education-item__action">{item.skill_detial}</span>
							</div>
						</Fragment>
					)
				})
				}
			</div>
      {/* history */}
			<div className="education-el mt-4 history">
				<h3 className="heading">{history.title}</h3>
				{history.time_line && history.time_line.map((item, index) => {
					return (
						<Fragment key={index+1}>
							<div className="education-item mt-2">
								<span className="education-item__time">{item.time}: </span>
								<span className="education-item__action">{item.action}</span>
							</div>
						</Fragment>
					)
				})
				}
			</div>

		</div>
	);
}

export default Information;
