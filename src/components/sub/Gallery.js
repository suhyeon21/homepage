import Layout from '../common/Layout';

function Gallery() {
	const subtitle = {
		title: 'Work Life',
		p: 'Lorem ipsum dolor sit amet.',
	};
	return <Layout name='gallery' sub={subtitle}></Layout>;
}

export default Gallery;
