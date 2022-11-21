import Layout from '../common/Layout';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Community() {
	const subtitle = {
		title: 'FIFA Community',
		p: 'Explore, discuss, and co-create the products and practices that will take you and your team to the next level with Atlassian Community.',
	};

	return (
		<Layout name='community' sub={subtitle}>
			<div className='board-input'>
				<div className='board-input-top'>
					<div className='title'>
						<h1>
							Send <br />
							comments
						</h1>
					</div>
				</div>
				<div className='input-list'>
					<div className='input-item'>
						<input type='text' placeholder='title' name='Title' />
						<textarea name='content' placeholder='Content'></textarea>
					</div>
				</div>

				<div className='btns-community-input'>
					<button type='button'>Cancel</button>
					<button type='button'>Registration</button>
				</div>
			</div>

			<div className='board-ouput'>
				<ul className='board-list'>
					<li className='board-item'>
						<h2>ddd</h2>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

						<div className='btns-community-ouput'>
							<button type='button'>
								<FontAwesomeIcon icon={faPenToSquare}></FontAwesomeIcon>
							</button>
							<button type='button'>
								<FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
							</button>
						</div>
					</li>
				</ul>
			</div>
		</Layout>
	);
}

export default Community;
