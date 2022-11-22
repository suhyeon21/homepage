import React, { useEffect } from 'react';

function Popup({ children, close }) {
	// useEffect(() => {
	// 	document.body.style.overflowY = 'hidden';

	// 	document.body.style.overflowX = 'hidden';

	// 	return () => {
	// 		document.body.style.overflowY = 'auto';
	// 	};
	// }, []);

	return (
		<aside className='pop'>
			{children}
			<button
				className='btn-close'
				onClick={() => {
					close(false);
				}}>
				<span>CLOSE</span>
			</button>
		</aside>
	);
}

export default Popup;
