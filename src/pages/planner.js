import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import FullCalendar from '@fullcalendar/react';
import {Helmet} from 'react-helmet';

import Layout from '../components/Layout/index.js';
import useStore from '../hooks/useStore.js';

export default function PlannerPage() {
	const allMeals = useStore(state => state.allMeals);

	return (
		<Layout>
			<Helmet>
				<title key="title">Planner</title>
				<meta key="description" name="description" content="This is my project" />
			</Helmet>
			<FullCalendar
				plugins={[dayGridPlugin, interactionPlugin]}
				initialView="dayGridWeek"
				headerToolbar={{
					left: 'prev,next today',
					center: 'title',
					right: 'dayGridWeek,dayGridDay',
				}}
			/>
		</Layout>
	);
}
