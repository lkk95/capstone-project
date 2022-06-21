import {Helmet} from 'react-helmet';

import Layout from '../components/Layout';

export default function HomePage() {
	return (
		<Layout>
			<Helmet>
				<title key="title">My Project</title>
				<meta key="description" name="description" content="This is my project" />
			</Helmet>
			<h1>Your planned meals</h1>
			<MealCard></MealCard>
		</Layout>
	);
}
