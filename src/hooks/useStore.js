import {nanoid} from 'nanoid';
import create from 'zustand';

const useStore = create(set => ({
	allMeals: [
		{
			id: nanoid(),
			title: 'Spaghetti Carbonara',
			category: 'Dinner',
			ingredients: 'ingredient1, ingredient2, ingredient3',
			preparation: 'Cut ingredients and cook, fry and mix them.',
			servings: 4,
			time: 60,
		},
		{
			id: nanoid(),
			title: 'Blueberry Pancakes',
			category: 'Breakfast',
			ingredients: 'ingredient1, ingredient2, ingredient3',
			preparation: 'Cut ingredients and cook, fry and mix them.',
			servings: 4,
			time: 60,
		},
		{
			id: nanoid(),
			title: 'Greek Salad',
			category: 'Lunch',
			ingredients: 'ingredient1, ingredient2, ingredient3',
			preparation: 'Cut ingredients and cook, fry and mix them.',
			servings: 4,
			time: 60,
		},
		{
			id: nanoid(),
			title: 'Pea Soup',
			category: 'Lunch',
			ingredients: 'ingredient1, ingredient2, ingredient3',
			preparation: 'Cut ingredients and cook, fry and mix them.',
			servings: 4,
			time: 60,
		},
		{
			id: nanoid(),
			title: 'Enchiladas',
			category: 'Dinner',
			ingredients: 'ingredient1, ingredient2, ingredient3',
			preparation: 'Cut ingredients and cook, fry and mix them.',
			servings: 4,
			time: 60,
		},
	],
	isEditing: false,
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
	editMeal: (editedMeal, idFromUrl) => {
		set(state => {
			return {
				allMeals: state.allMeals.map(meal =>
					meal.id === idFromUrl ? {...editedMeal} : meal
				),
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
}));

export default useStore;
