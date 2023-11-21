import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	cartListLocal: JSON.parse(localStorage.getItem('cart')) || [],
	// cartListLocal: [],
	status: 'idle'
};
export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addCart: (state, action) => {
      console.log('reducers state.cartListLocal: ', state.cartListLocal);
      console.log('reducers action.payload: ', action.payload);
      console.log('initialState', initialState);

      let localCart = JSON.parse(JSON.stringify(state.cartListLocal))
      const index = localCart.findIndex(
				item => item._id === action.payload._id
			);
      if (index !== -1) {
				localCart[index].amount = localCart[index].amount + 1;
				localCart[index].quantity = localCart[index].quantity - 1;
			} else {
				localCart = localCart.concat(action.payload);
			}
      // if (localCart.length === 0) {
      //   localCart.push(action.payload);
      // }
			// state.cartListLocal.push(action.payload);
      localStorage.setItem('cart', JSON.stringify(localCart));


      // localStorage.setItem("cart", JSON.stringify([...state.cartListLocal], action.payload));
		}
	}
	//   extraReducers: (builder) => {
	//     builder.addCase(fetchTodos.pending, (state) => {
	//       state.status = "pending";
	//     });
	//
	//     builder.addCase(fetchTodos.fulfilled, (state, action) => {
	//       state.products = action.payload;
	//       state.status = "success";
	//     });
	//
	//     builder.addCase(fetchTodos.rejected, (state) => {
	//       state.status = "error";
	//     });
	//   },
});

//Redux Thunk

// export const fetchTodos = createAsyncThunk("fetchTodos", async () => {
//   const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
//   const data = await response.json();
//   return data;
// });

// export const fetchTodos = () => {
//   return async (dispatch) => {
//     const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
//     const data = await response.json();
//     dispatch(todoSlice.actions.updateTodo(data));
//     dispatch(todoSlice.actions.updateStatus());
//   };
// };
