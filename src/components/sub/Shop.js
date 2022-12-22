import Layout from '../common/Layout';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

function Shop() {
	// const [shops, setshops] = useState([]);
	const [isHover, setisHover] = useState(false);
	const Shops = useSelector((store) => store.product.data);

	const subtitle = {
		title: 'Made for Special Moment',
		p: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis, iste.',
	};

	console.log(Shops);

	// useEffect(() => {
	// 	axios.get(process.env.PUBLIC_URL + '/DB/shops.json').then((json) => {
	// 		setshops(json.data.shops);
	// 	});
	// }, []);
	return (
		<Layout name='shop' sub={subtitle}>
			{Shops.map((shop, i) => {
				function over(e) {
					e.currentTarget.src = `${process.env.PUBLIC_URL}/img/${shop.hover}`;
					// e.currentTarget.classList.add('on');
				}
				function out(e) {
					e.currentTarget.src = `${process.env.PUBLIC_URL}/img/${shop.img}`;
				}
				return (
					<article key={i} className='member-item'>
						<div className='member-thum'>
							<img
								src={`${process.env.PUBLIC_URL}/img/${shop.img}`}
								onMouseOver={over}
								onMouseOut={out}
								alt={shop.name}
							/>
						</div>
						<div className='member-info'>
							<strong className='name'>{shop.name}</strong>
							<span className='position'>{shop.tenure}</span>
							<p>{shop.comment}</p>
						</div>
					</article>
				);
			})}
		</Layout>
	);
}
export default Shop;
