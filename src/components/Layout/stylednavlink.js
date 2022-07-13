import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

const StyledNavLink = styled(NavLink)`
	color: white;
	font-size: 1.5em;
	&.active {
		color: #ee8d4a;
	}
`;

export default StyledNavLink;
