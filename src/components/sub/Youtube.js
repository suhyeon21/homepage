import Layout from '../common/Layout';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Youtube() {
	const [Videos, setVideos] = useState();

	const subtitle = {
		title: 'fifa youtube',
		p: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas quos hic suscipit reiciendis debitis repellendus cupiditate corrupti ipsam magni qui!',
	};

	const getYoutube = async () => {
		const key = 'AIzaSyAJsmJvvo5E6PUvVlACmHpekbahnzPULGg';
		const playList = 'PLUTOYlZjKt_a2OVuR7YXqSSFmwHQKL4cL';
		const num = '4';
		const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playList}&maxResults=${num}`;

		await axios.get(url).then((json) => {
			setVideos(json.data.items);
			console.log(Videos);
		});
	};

	useEffect(() => {
		getYoutube();
	}, []);

	return (
		<Layout name='youtube' sub={subtitle}>
			{Videos &&
				Videos.map((item, i) => {
					return (
						<article>
							<img src={item.snippet.thumbnails.high.url}></img>
						</article>
					);
				})}
		</Layout>
	);
}

export default Youtube;
