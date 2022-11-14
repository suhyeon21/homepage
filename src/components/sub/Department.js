import Layout from '../common/Layout';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Department() {
	const [Presidents, setPresidents] = useState([]);

	const subtitle = {
		title: 'About FIFA',
		p: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis, iste.',
	};

	useEffect(() => {
		axios.get(process.env.PUBLIC_URL + '/DB/presidents.json').then((json) => {
			setPresidents(json.data.presidents);
		});
	}, []);
	return (
		<Layout name='department' sub={subtitle}>
			{Presidents.map((president, i) => {
				return (
					<article key={i} className='member-item'>
						<div className='member-thum'>
							<img
								src={`${process.env.PUBLIC_URL}/img/${president.img}`}
								alt={president.name}
							/>
						</div>
						<div className='member-info'>
							<strong className='name'>{president.name}</strong>
							<span className='position'>{president.tenure}</span>
							<p>{president.comment}</p>
						</div>
					</article>
				);
			})}
		</Layout>
	);
}
export default Department;
