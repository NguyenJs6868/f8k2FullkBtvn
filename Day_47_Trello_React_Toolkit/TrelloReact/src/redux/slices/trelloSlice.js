import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
const initialState = {
	trelloList: [],
	trelloList2: [],
	status: 'idle',
	apiKey: '',
	email: '',
}
export const trelloSlice = createSlice({
	name: 'trello',
	initialState,
	reducers: {
		addtrello: (state, action) => {
			state.trelloList.push(action.payload);
		},
		// updatetrello: (state, action) => {
		//   state.trelloList2 = action.payload;
		// },
		// updateStatus: (state) => {
		//   state.status = "success";
		// },
		saveApiKey: (state, action) => {
			state.apiKey = action.payload;
		},
		saveEmail: (state, action) => {
			state.email = action.payload;
		}
	},
	extraReducers: builder => {
		builder.addCase(fetchTrellos.pending, state => {
			state.status = 'pending';
		});

		builder.addCase(fetchTrellos.fulfilled, (state, action) => {
			state.trelloList2 = action.payload;
			state.status = 'success';
		});

		builder.addCase(fetchTrellos.rejected, state => {
			state.status = 'error';
		});
	}
});

//Redux Thunk

export const fetchTrellos = createAsyncThunk('fetchTrellos', async () => {
	const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
	const data = await response.json();
	return data;
});

// export const fetchTrellos = () => {
//   return async (dispatch) => {
//     const response = await fetch(`https://jsonplaceholder.typicode.com/trellos`);
//     const data = await response.json();
//     dispatch(trelloSlice.actions.updatetrello(data));
//     dispatch(trelloSlice.actions.updateStatus());
//   };
// };
