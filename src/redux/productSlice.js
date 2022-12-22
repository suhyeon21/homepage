import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProduct = createAsyncThunk(
	'product/requestProduct',
	async () => {
		const url = process.env.PUBLIC_URL + '/DB/shops.json';
		const response = await axios.get(url);
		return response.data.shops;
	}
);

const productSlice = createSlice({
	name: 'product',
	initialState: {
		data: [],
		isLoading: false,
	},
	extraReducers: {
		[fetchProduct.pending]: (state) => {
			state.isLoading = true;
		},
		[fetchProduct.fulfilled]: (state, action) => {
			state.data = action.payload;
			state.isLoading = false;
		},
		[fetchProduct.rejected]: (state) => {
			state.isLoading = true;
		},
	},
});

export default productSlice;
