import Layout from '../common/Layout';

function Community() {
	const subtitle = {
		title: 'FIFA Community',
		p: 'Explore, discuss, and co-create the products and practices that will take you and your team to the next level with Atlassian Community.',
	};

	return <Layout name='community' sub={subtitle}></Layout>;
}

export default Community;
