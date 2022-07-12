import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import {Helmet} from 'react-helmet';

import {useState} from 'react';

import CreateForm from '../components/CreateForm/index.js';
import Layout from '../components/Layout/index.js';
import './fullcalendar.css';
import MealCard from '../components/MealCard/index.js';
import Modal from '../components/Modal/index.js';
import useStore from '../hooks/useStore.js';

export default function PlannerPage() {
	const allMeals = useStore(state => state.allMeals);
	const showModal = useStore(state => state.showModal);
	const setShowModal = useStore(state => state.setShowModal);
	const [modalContent, setModalContent] = useState('');
	const [currentMeal, setCurrentMeal] = useState('');

	const handleEventClick = clickInfo => {
		const selectedMeal = allMeals.find(meal => meal.id === clickInfo.event.id);
		setCurrentMeal(selectedMeal);
		setModalContent('mealcard');
		setShowModal();
	};

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
						click: function () {
							setModalContent('form');
							setShowModal();
						},
					},
				}}
				editable={true}
				events={allMeals}
				eventOrder={'category'}
				eventClick={handleEventClick}
			/>
			{showModal ? (
				<Modal handleClose={setShowModal}>
					{modalContent === 'mealcard' ? (
						<MealCard currentMeal={currentMeal} />
					) : (
						<CreateForm />
					)}
				</Modal>
			) : null}
		</Layout>
	);
}
