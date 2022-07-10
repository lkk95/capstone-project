import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import {Helmet} from 'react-helmet';

import Layout from '../components/Layout/index.js';
import './fullcalendar.css';
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
				initialView="dayGridMonth"
				headerToolbar={{
					left: 'today',
					center: 'title',
					right: 'newMeal',
				}}
				footerToolbar={{
					left: 'dayGridWeek,dayGridDay',
					right: 'prev,next',
				}}
				customButtons={{
					newMeal: {
						text: 'New',
					},
				}}
				events={allMeals}
				eventOrder={'category'}
			/>
		</Layout>
	);
}
