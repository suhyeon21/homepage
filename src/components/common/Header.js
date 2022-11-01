import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faDribbble } from '@fortawesome/free-brands-svg-icons';

function Header() {
	const active = { color: '#000' };
	return (
		<header>
			<h1>
				<Link to='/'>LOGO</Link>
			</h1>
			<nav>
				<ul id='gnb'>
					<li>
						<NavLink to='/department' activeStyle={active}>
							DEPARTMENT
						</NavLink>
					</li>
					<li>
						<NavLink to='/community' activeStyle={active}>
							COMMUNITY
						</NavLink>
					</li>
					<li>
						<NavLink to='/gallery' activeStyle={active}>
							GALLERY
						</NavLink>
					</li>
					<li>
						<NavLink to='/youtube' activeStyle={active}>
							YOUTUBE
						</NavLink>
					</li>
					<li>
						<NavLink to='/location' activeStyle={active}>
							LOCATION
						</NavLink>
					</li>
					<li>
						<NavLink to='/members' activeStyle={active}>
							MEMBERS
						</NavLink>
					</li>
				</ul>

				<ul className='etc'>
					<li>Privacy policy</li>
					<li>Terms</li>
					<li>Impressum</li>
				</ul>

				<ul className='sns'>
					<li>
						<FontAwesomeIcon icon={faTwitter} />
					</li>
					<li>
						<FontAwesomeIcon icon={faGithub} />
					</li>
					<li>
						<FontAwesomeIcon icon={faFacebook} />
					</li>
					<li>
						<FontAwesomeIcon icon={faDribbble} />
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
