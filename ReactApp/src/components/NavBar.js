import './NavBar.css';

function NavBar() {
	return (
		<div>
			<nav className='Nav_container'>
				<div className='Nav_title'>NETFLEX</div>
				<ul className='Nav_option'>
					<li>컨텐트1</li>
					<li>컨텐트2</li>
					<li>컨텐트3</li>
					<li>컨텐트4</li>
				</ul>
				<ul className='Nav_icon'>
					<li>인스타그램</li>
					<li>페이스북</li>
				</ul>
			</nav>
		</div>
	);
}

export default NavBar;
