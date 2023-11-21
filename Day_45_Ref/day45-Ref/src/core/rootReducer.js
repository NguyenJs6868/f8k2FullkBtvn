import { RANGE_NUMBER } from "../config/const";
import calcTurn from "../helper/calcNumber";

export const initialState = {
	rangeNumber: RANGE_NUMBER,
	timeTurn: calcTurn(RANGE_NUMBER),
};

export const rootReducer = (state, action) => {
	switch (action.type) {
		case 'range/change': {
			return { ...state, rangeNumber: action.payload };
		}
		default: {
			return state;
		}
	}
};
