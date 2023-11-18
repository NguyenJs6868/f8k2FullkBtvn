// import React from 'react'

import { useState } from 'react';

function TestEntryNumber() {
	const [stateEntryNumber, setStateEntryNumber] = useState(null);
	let rangNumber = 10;

	const regexInputEntryNumber = value => {
		const lengthRangeNumber = rangNumber.toString().length;
		const lengthValue = value.toString().length;

		const parten = /^\d*$/;
		if (parten.test(value) && lengthValue <= lengthRangeNumber) {
			console.log('value: ', value);
			setStateEntryNumber(value);
		}
	};

	document.addEventListener('keydown', function (event) {
		// console.log('event key: ', event);
		if (
			event.key >= '0' &&
			event.key <= '9' &&
			event.key === 'Backspace'
		) {
			console.log('Phím được nhấn:', event.key);
		}
	});

	// useEffect(() => {
	// 	regexInputEntryNumber();
	// }, [stateEntryNumber]);

	// Xử lý sự kiện chỉ khi người dùng nhấn các phím số

	return (
		<div className="test-entry-number">
			<label htmlFor="choose-number">Hã tyhử nhập một số</label>
			{stateEntryNumber}
			<input
				name="choose-number"
				id="choose-number"
				placeholder="Thử một số"
				maxLength="2"
				value={stateEntryNumber}
				onChange={event => regexInputEntryNumber(event.target.value)}
			/>
		</div>
	);
}
export default TestEntryNumber;
