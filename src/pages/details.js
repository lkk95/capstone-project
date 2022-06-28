import {Helmet} from 'react-helmet';

import Details from '../components/Details/index.js';
import Layout from '../components/Layout/index.js';

export default function Detailpage() {
	return (
		<Layout>
			<Helmet>
				<title key="title">Details</title>
				<meta key="description" name="description" content="This is my project" />
			</Helmet>
			<Details />
		</Layout>
	);
}
