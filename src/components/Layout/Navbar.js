import StyledNav from './stylednav.js';
import StyledNavLink from './stylednavlink.js';

export default function Navbar() {
	return (
		<StyledNav>
			<StyledNavLink to="/">
				<i className="fa-solid fa-house"></i>
			</StyledNavLink>
			<StyledNavLink to="/planner">
				<i className="fa-solid fa-calendar-days"></i>
			</StyledNavLink>
		</StyledNav>
	);
}
