// import React from 'react'
import { useSelector } from '../core/hook';
import BtnChangeTheme from './BtnChangeTheme';
import calcTurn from '../helper/calcNumber';

function RefPlayHead() {
	const state = useSelector();



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
					Còn {calcTurn(state.timeTurn)}/{calcTurn(state.rangeNumber)} lần
				</div>

				<div className="ref-play-head__notification">
					Bạn cần tìm kiếm một số từ 1 đến {state.rangeNumber}
				</div>

				<BtnChangeTheme />

			</div>
		</>
	);
}
export default RefPlayHead;
