import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import React from 'react';
import axios from 'axios';

export const fetchFlickr = createAsyncThunk(
	'flickr/requestFlickr',
	async () => {
		const key = '5f93204b89f778b6700e782d390ca6ea';
		const user = '196184841@N06';
		const num = 200;
		const extras = 'tags, description, views';
		const method_search = 'flickr.photos.search';
		const method_interest = 'flickr.interestingness.getList';
		const method_user = 'flickr.people.getPhotos';
		const method_favs = 'flickr.favorites.getList';
		const method_gallery = 'flickr.galleries.getList';
		const url = `https://www.flickr.com/services/rest/?method=${method_favs}&api_key=${key}&per_page=${num}&format=json&nojsoncallback=1&user_id=${user}`;

		const response = await axios.get(url);
		return response.data.photos;
	}
);

const flickrSlice = createSlice({
	name: 'flickr',
	initialState: {
		data: [],
		isLoading: false,
	},
	extraReducers: {
		[fetchFlickr.pending]: (state) => {
			state.isLoading = true;
		},
		[fetchFlickr.fulfilled]: (state, action) => {
			state.data = action.payload;
			state.isLoading = false;
		},
		[fetchFlickr.rejected]: (state) => {
			state.isLoading = true;
		},
	},
});

export default flickrSlice;
