// import React from 'react'

function GamesHistoryItem() {
		return (
			<div className="statistics-games-history-slider-item">

			<button className="btn-del-all-history">
				<span>Delete</span>
			</button>

			<div className="statistics-games-history-table">

				<div className="statistics-games-table__head">
					<div><span>Số lần nhập</span></div>
					<div><span>Số nhập vào</span></div>
				</div>

				<div className="statistics-games-table__row-item">
					<div><span>1</span></div>
					<div><span>3</span></div>
				</div>

				<div className="statistics-games-table__row-item">
					<div><span>1</span></div>
					<div><span>3</span></div>
				</div>

			</div>


			<div className="statistics-games-prev-details">
				<div className="second-play">
					<span>Lần chơi thứ:</span>
					<span>4/4</span>
				</div>
				<div className="maximum-number-of-entries">
					<span>Số lần nhập tối đa: </span>
					<span>3</span>
				</div>
				<div className="correct-ratio">
					<span>Tỷ lệ đúng: </span>
					<span>33.33%</span>
				</div>
			</div>

		</div>
		)
}
export default GamesHistoryItem;