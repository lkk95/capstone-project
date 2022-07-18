import logo from '../../imgs/logo.svg';

import StyledHeading from './styledheading.js';
import StyledContainer from './styledwelcome.js';

export default function WelcomeContainer() {
	return (
		<StyledContainer>
			<StyledHeading>Welcome to</StyledHeading>
			<img src={logo} alt="PlatePlan" />
		</StyledContainer>
	);
}
