// import React from 'react'
import BtnChangeTheme from './BtnChangeTheme';

function RefPlayHead() {
	

	return (
		<>

			<div className="ref-play-head">
				<div className="ref-play-head__time-process">
					<div className="time-process-timer"></div>
				</div>

				<div className="ref-play-head__conversation">
					Chào mừng bạn đến với trò chơi đoán số!
				</div>
				<div className="ref-play-head__number-of-times-played">
					Còn 1/3 lần
				</div>

				<div className="ref-play-head__notification">
					Bạn cần tìm kiếm một số từ 1 đến 5
				</div>

				<BtnChangeTheme />

			</div>
		</>
	);
}
export default RefPlayHead;
