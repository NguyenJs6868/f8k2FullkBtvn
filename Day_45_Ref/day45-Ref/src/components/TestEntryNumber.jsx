// import React from 'react'

import { useState } from 'react';
import { useSelector } from '../core/hook';

function TestEntryNumber() {
	const [stateEntryNumber, setStateEntryNumber] = useState('');

	const state = useSelector();

	const regexInputEntryNumber = value => {
		const lengthRangeNumber = state.rangeNumber.toString().length;
		const lengthValue = value.toString().length;

		const regex = new RegExp(`^[0-9]{0,${lengthRangeNumber}}$`);

		if (regex.test(value) && lengthValue <= lengthRangeNumber) {
			// console.log('value: ', value);
			setStateEntryNumber(value);
		}
	};


	// function calcNumber () {
	// 	const MAX_TIME = Math.ceil(Math.log2(RANGE_NUMBER));
	// }
	// export default calcNumber;


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
			<label htmlFor="choose-number">Hã thử nhập một số</label>
			<input
				name="choose-number"
				id="choose-number"
				placeholder="Thử một số"
				value={stateEntryNumber}
				onChange={event => regexInputEntryNumber(event.target.value)}
			/>
		</div>
	);
}
export default TestEntryNumber;
