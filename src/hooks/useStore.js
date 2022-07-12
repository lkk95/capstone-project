import {nanoid} from 'nanoid';
import create from 'zustand';

const useStore = create(set => ({
	allMeals: [
		{
			id: nanoid(),
			title: 'Spaghetti Carbonara',
			category: 'C - Dinner',
			ingredients: 'ingredient1, ingredient2, ingredient3',
			preparation: 'Cut ingredients and cook, fry and mix them.',
			servings: 4,
			time: 60,
			start: '2022-07-05',
			color: '#0B4870',
		},
		{
			id: nanoid(),
			title: 'Blueberry Pancakes',
			category: 'A - Breakfast',
			ingredients: 'ingredient1, ingredient2, ingredient3',
			preparation: 'Cut ingredients and cook, fry and mix them.',
			servings: 4,
			time: 60,
			start: '2022-07-06',
			color: '#DDA15E',
		},
		{
			id: nanoid(),
			title: 'Greek Salad',
			category: 'B - Lunch',
			ingredients: 'ingredient1, ingredient2, ingredient3',
			preparation: 'Cut ingredients and cook, fry and mix them.',
			servings: 4,
			time: 60,
			start: '2022-07-06',
			color: '#606C38',
		},
		{
			id: nanoid(),
			title: 'Pea Soup',
			category: 'B - Lunch',
			ingredients: 'ingredient1, ingredient2, ingredient3',
			preparation: 'Cut ingredients and cook, fry and mix them.',
			servings: 4,
			time: 60,
			start: '2022-07-08',
			color: '#606C38',
		},
		{
			id: nanoid(),
			title: 'Enchiladas',
			category: 'C - Dinner',
			ingredients: 'ingredient1, ingredient2, ingredient3',
			preparation: 'Cut ingredients and cook, fry and mix them.',
			servings: 4,
			time: 60,
			start: '2022-07-08',
			color: '#0B4870',
		},
		{
			id: nanoid(),
			title: 'Enchiladas',
			category: 'B- Lunch',
			ingredients: 'ingredient1, ingredient2, ingredient3',
			preparation: 'Cut ingredients and cook, fry and mix them.',
			servings: 4,
			time: 60,
			start: '2022-07-12',
			color: '#606C38',
		},
	],
	showModal: false,
	isEditing: false,
	addMeal: (newMeal, color) => {
		set(state => {
			return {
				allMeals: [
					...state.allMeals,
					{
						...newMeal,
						color: color,
						id: nanoid(),
					},
				],
			};
		});
	},
	editMeal: (editedMeal, idFromUrl) => {
		set(state => {
			return {
				allMeals: state.allMeals.map(meal =>
					meal.id === idFromUrl ? {...editedMeal} : meal
				),
			};
		});
	},
	deleteMeal: idFromUrl => {
		set(state => {
			return {
				allMeals: state.allMeals.filter(meal => meal.id !== idFromUrl),
			};
		});
	},
	setEditing: () => {
		set(state => {
			return {
				isEditing: !state.isEditing,
			};
		});
	},
	setShowModal: () => {
		set(state => {
			return {
				showModal: !state.showModal,
			};
		});
	},
}));

export default useStore;
