import { useEffect, useRef } from 'react';

import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Layout({ name, children, sub }) {
	let title = name;
	const section = useRef(null);
	const titleBox = useRef(null);
	const contentWrap = useRef(null);

	if (title === 'location') {
		title = 'contact us';
	} else if (title === 'members') {
		title = 'join';
	}

	useEffect(() => {
		section.current.classList.add('on');
	}, []);

	const hideBox = () => {
		section.current.classList.add('out');
	};

	return (
		<section className={`container ${name}`} ref={section}>
			<div className='title-box' ref={titleBox}>
				<button type='button' onClick={hideBox}>
					<FontAwesomeIcon icon={faArrowLeft} />
				</button>
				<h1>{title}</h1>
				<h2>{sub.title}</h2>
				<p>{sub.p}</p>
			</div>

			<div className='content-wrap'>
				<div className='content'>{children}</div>
			</div>
		</section>
	);
}

export default Layout;
