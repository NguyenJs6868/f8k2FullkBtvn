

function calcTurn(RANGE_NUMBER) {
	const MAX_TIME = Math.ceil(Math.log2(RANGE_NUMBER));
	return MAX_TIME;
}

export default calcTurn;
