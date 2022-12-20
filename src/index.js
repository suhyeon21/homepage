import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import youtubeSlice from './redux/youtubeSlice';
import flickrSlice from './redux/flickrSlice';

const store = configureStore({
	reducer: {
		youtube: youtubeSlice.reducer,
		flickr: flickrSlice.reducer,
	},
});

ReactDOM.render(
	<HashRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</HashRouter>,
	document.getElementById('root')
);
