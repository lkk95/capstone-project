import StyledNav from './stylednav.js';
import StyledNavLink from './stylednavlink.js';

export default function Navbar() {
	return (
		<StyledNav role="navigation" aria-label="Main">
			<StyledNavLink role="link" aria-label="Home" to="/">
				<i className="fa-solid fa-house"></i>
			</StyledNavLink>
			<StyledNavLink role="link" aria-label="Planner" to="/planner">
				<i className="fa-solid fa-calendar-days"></i>
			</StyledNavLink>
		</StyledNav>
	);
}
