import {Helmet} from 'react-helmet';

import Details from '../components/Details/index.js';
import Form from '../components/Form/editform.js';
import Layout from '../components/Layout/index.js';
import useStore from '../hooks/useStore.js';

export default function Detailpage() {
	const showModal = useStore(state => state.showModal);

	return (
		<Layout>
			<Helmet>
				<title key="title">Details</title>
				<meta key="description" name="description" content="This is my project" />
			</Helmet>
			{showModal ? <Form /> : null}
			<Details />
		</Layout>
	);
}
