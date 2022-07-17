import {Helmet} from 'react-helmet';

import HomeGraphic from '../components/HomeContainer/graphic.js';
import StartContainer from '../components/HomeContainer/start.js';
import StyledHomeContainer from '../components/HomeContainer/styledhomecontainer.js';
import WelcomeContainer from '../components/HomeContainer/welcome.js';

export default function HomePage() {
	return (
		<>
			<Helmet>
				<title key="title">Home</title>
				<meta key="description" name="description" content="This is my project" />
			</Helmet>
			<StyledHomeContainer>
				<WelcomeContainer />
				<StartContainer />
				<HomeGraphic />
			</StyledHomeContainer>
		</>
	);
}
