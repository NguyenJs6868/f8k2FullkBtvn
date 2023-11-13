export const initialState = {
	profile: null,
	products: [],
	cart: JSON.parse(localStorage.getItem('cart') || '[]')
};

export const rootReducer = (state, action) => {
	switch (action.type) {
		case 'auth/profile': {
			return { ...state, profile: action.payload };
		}

		case 'add/cart': {

			let localCart = JSON.parse(JSON.stringify(state.cart));
			const index = localCart.findIndex(
				item => item._id === action.payload._id
			);

			if (index !== -1) {
				localCart[index].amount = localCart[index].amount + 1;
				localCart[index].quantity = localCart[index].quantity - 1;
			} else {
				localCart = localCart.concat(action.payload);
			}

			localStorage.setItem('cart', JSON.stringify(localCart));
			return { ...state, cart: localCart };
		}

		default: {
			return state;
		}
	}
};
