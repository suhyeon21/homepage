import { Link, NavLink } from 'react-router-dom';

function Header() {
	const active = { color: 'aqua' };
	return (
		<header>
			<h1>
				<Link to='/'>LOGO</Link>
			</h1>
			<nav>
				<ul id='gnb'>
					<li>
						<NavLink to='/department' activeStyle={active}>
							DEPARTMEN
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
						<NavLink to='/department' activeStyle={active}>
							MEMBERS
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
