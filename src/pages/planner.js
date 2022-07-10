import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import {Helmet} from 'react-helmet';

import {useState} from 'react';

import Layout from '../components/Layout/index.js';
import './fullcalendar.css';
import MealCard from '../components/MealCard/index.js';
import useStore from '../hooks/useStore.js';

export default function PlannerPage() {
	const allMeals = useStore(state => state.allMeals);
	const [currentMeal, setCurrentMeal] = useState('');
	const [showMeal, setShowMeal] = useState(false);

	const handleEventClick = clickInfo => {
		const selectedMeal = allMeals.find(meal => meal.id === clickInfo.event.id);
		setCurrentMeal(selectedMeal);
		setShowMeal(true);
	};

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
				editable={true}
				events={allMeals}
				eventOrder={'category'}
				eventClick={handleEventClick}
			/>
			{showMeal ? <MealCard currentMeal={currentMeal} /> : null}
		</Layout>
	);
}
