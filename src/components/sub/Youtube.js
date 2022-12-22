import Layout from '../common/Layout';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Popup from '../common/Popup';
import { useSelector } from 'react-redux';

function Youtube() {
	// const [Videos, setVideos] = useState([]);
	// const [Open, setOpen] = useState(false);
	const [Index, setIndex] = useState(0);
	const Vids = useSelector((state) => state.youtube.data);

	// console.log(Vids);

	const subtitle = {
		title: "Let's Learn",
		p: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas quos hic suscipit reiciendis debitis repellendus cupiditate corrupti ipsam magni qui!',
	};

	return (
		<>
			<Layout name='youtube' sub={subtitle}>
				{Vids.map((item, i) => {
					return (
						<article
							key={i}
							onClick={() => {
								// setOpen(true);
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
				{/* 보류 코드 */}
				{/* {Open && (
					<Popup close={setOpen}>
						<div className='video'>
							<iframe
								src={`https://www.youtube.com/embed/${Videos[Index].snippet.resourceId.videoId}`}
								frameBorder='0'></iframe>
						</div>
					</Popup>
				)} */}
			</Layout>
		</>
	);
}

export default Youtube;
