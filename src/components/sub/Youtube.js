import Layout from '../common/Layout';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Popup from '../common/Popup';

function Youtube() {
	const [Videos, setVideos] = useState([]);
	const [Open, setOpen] = useState(false);
	const [Index, setIndex] = useState(0);

	const subtitle = {
		title: "Let's Learn",
		p: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas quos hic suscipit reiciendis debitis repellendus cupiditate corrupti ipsam magni qui!',
	};

	useEffect(() => {
		const key = 'AIzaSyAJsmJvvo5E6PUvVlACmHpekbahnzPULGg';
		const playList = 'PLUTOYlZjKt_a2OVuR7YXqSSFmwHQKL4cL';
		const num = 6;
		const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playList}&maxResults=${num}`;

		axios.get(url).then((json) => {
			setVideos(json.data.items);
		});
	}, []);

	return (
		<>
			<Layout name='youtube' sub={subtitle}>
				{Videos &&
					Videos.map((item, i) => {
						return (
							<article
								key={i}
								onClick={() => {
									setOpen(true);
									setIndex(i);
								}}>
								<div className='icon'>
									<FontAwesomeIcon
										icon={faYoutube}
										className='youtube'></FontAwesomeIcon>
								</div>
								<div className='img'>
									<img
										src={item.snippet.thumbnails.high.url}
										alt={item.snippet.title}></img>
								</div>
							</article>
						);
					})}

				{Open && (
					<Popup close={setOpen}>
						<div className='video'>
							<iframe
								src={`https://www.youtube.com/embed/${Videos[Index].snippet.resourceId.videoId}`}
								frameBorder='0'></iframe>
						</div>
					</Popup>
				)}
			</Layout>
		</>
	);
}

export default Youtube;
