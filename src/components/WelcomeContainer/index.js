import logo from '../../imgs/logo.svg';
import StyledContainer from '../WelcomeContainer/styled.js';

export default function WelcomeContainer() {
	return (
		<StyledContainer>
			<h1>Welcome to</h1>
			<img src={logo} alt="PlatePlan" />
		</StyledContainer>
	);
}
