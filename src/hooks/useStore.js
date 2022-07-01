import {nanoid} from 'nanoid';
import create from 'zustand';

const useStore = create(set => ({
	allMeals: [
		{
			id: nanoid(),
			title: 'Spaghetti Carbonara',
			category: 'Dinner',
			ingredients: [],
			preparation: '',
			servings: 4,
			time: 1.5,
		},
		{
			id: nanoid(),
			title: 'Blueberry Pancakes',
			category: 'Breakfast',
			ingredients: [],
			preparation: '',
			servings: 4,
			time: 1.5,
		},
		{
			id: nanoid(),
			title: 'Greek Salad',
			category: 'Lunch',
			ingredients: [],
			preparation: '',
			servings: 4,
			time: 1.5,
		},
		{
			id: nanoid(),
			title: 'Pea Soup',
			category: 'Lunch',
			ingredients: [],
			preparation: '',
			servings: 4,
			time: 1.5,
		},
		{
			id: nanoid(),
			title: 'Enchiladas',
			category: 'Dinner',
			ingredients: [],
			preparation: '',
			servings: 4,
			time: 1.5,
		},
	],
	showModal: false,
	addMeal: newMeal => {
		set(state => {
			return {
				allMeals: [
					...state.allMeals,
					{
						...newMeal,
						id: nanoid(),
					},
				],
			};
		});
	},
	editMeal: (newMeal, id) => {
		set(state => {
			return {
				allMeals: state.allMeals.map(meal => (meal.id === id ? {id, newMeal} : meal)),
			};
		});
	},
}));

export default useStore;
