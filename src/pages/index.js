import {Helmet} from 'react-helmet';

import CreateForm from '../components/CreateForm/CreateForm.js';
import Layout from '../components/Layout';

export default function HomePage() {
	return (
		<Layout>
			<Helmet>
				<title key="title">My Project</title>
				<meta key="description" name="description" content="This is my project" />
			</Helmet>
			<h1>Home</h1>
			<CreateForm />
		</Layout>
	);
}
