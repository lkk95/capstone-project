import {Helmet} from 'react-helmet';

import Header from '../components/Layout/Header.js';
import Navbar from '../components/Layout/Navbar.js';
import WelcomeContainer from '../components/WelcomeContainer/index.js';

export default function HomePage() {
	return (
		<>
			<Helmet>
				<title key="title">Home</title>
				<meta key="description" name="description" content="This is my project" />
			</Helmet>
			<WelcomeContainer />
			<Navbar />
		</>
	);
}
