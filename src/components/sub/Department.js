import Layout from '../common/Layout';

function Department() {
	const subtitle = {
		title: 'About FIFA',
		p: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis, iste.',
	};

	return <Layout name='department' sub={subtitle}></Layout>;
}

export default Department;
