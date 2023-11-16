// import React from 'react'

function TestEntryNumber() {
	return (
		<div className="test-entry-number">
			<label htmlFor="choose-number">Hãy thử nhập một số</label>
			<input
				type="number"
				name="choose-number"
				id="choose-number"
				placeholder="Thử một số"
				maxLength="2"
			/>
		</div>
	);
}
export default TestEntryNumber;
