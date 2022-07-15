import {Helmet} from 'react-helmet';

import Layout from '../components/Layout/index.js';

export default function HomePage() {
	return (
		<Layout>
			<Helmet>
				<title key="title">Home</title>
				<meta key="description" name="description" content="This is my project" />
			</Helmet>
		</Layout>
	);
}
