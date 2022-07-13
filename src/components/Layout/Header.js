import logo from '../../imgs/logo.svg';

import StyledHeader from './styledheader.js';

export default function Header() {
	return (
		<StyledHeader>
			<img src={logo} />
		</StyledHeader>
	);
}
