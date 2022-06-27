import {nanoid} from 'nanoid';
import create from 'zustand';

const useStore = create(set => ({
	allMeals: [
		{
			id: nanoid(),
			title: 'Spaghetti Carbonara',
			category: 'Dinner',
		},
		{
			id: nanoid(),
			title: 'Blueberry Pancakes',
			category: 'Breakfast',
		},
		{
			id: nanoid(),
			title: 'Greek Salad',
			category: 'Lunch',
		},
		{
			id: nanoid(),
			title: 'Pea Soup',
			category: 'Lunch',
		},
		{
			id: nanoid(),
			title: 'Enchiladas',
			category: 'Dinner',
		},
	],
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
}));

export default useStore;
