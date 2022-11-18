import Layout from '../common/Layout';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Masonry from 'react-masonry-component';

function Gallery() {
	const [Items, setItems] = useState([]);
	const masonryOptions = {
		transitionDuration: '0.5s',
	};

	const getFlickr = async () => {
		const key = '5f93204b89f778b6700e782d390ca6ea';
		const user = '196184841@N06';
		const num = 200;
		// const extras = 'tags, description, views';
		const method_search = 'flickr.photos.search';
		const method_interest = 'flickr.interestingness.getList';
		const method_user = 'flickr.people.getPhotos';
		const method_favs = 'flickr.favorites.getList';
		const method_gallery = 'flickr.galleries.getList';
		const url = `https://www.flickr.com/services/rest/?method=${method_favs}&api_key=${key}&per_page=${num}&format=json&nojsoncallback=1&user_id=${user}`;

		await axios.get(url).then((json) => {
			console.log(json);
			if (json.data.photos.photo.length === 0)
				return alert('해당 검색어의 결과값이 없습니다.');
			setItems(json.data.photos.photo);
		});
	};

	useEffect(() => {
		getFlickr();
	}, []);

	const subtitle = {
		title: 'Work Life',
		p: 'Lorem ipsum dolor sit amet.',
	};

	return (
		<Layout name='gallery' sub={subtitle}>
			<div className='frame'>
				<Masonry
					elementType={'div'}
					options={masonryOptions}
					columns={2}
					spacing={0}>
					{Items.map((item, i) => {
						return (
							<article>
								<div className='inner'>
									<img
										src={`https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg`}
										alt={item.title}
									/>
								</div>
							</article>
						);
					})}
				</Masonry>
			</div>
		</Layout>
	);
}

export default Gallery;
