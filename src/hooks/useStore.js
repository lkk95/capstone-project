import {nanoid} from 'nanoid';
import create from 'zustand';

const useStore = create(set => ({
	allMeals: [
		{
			id: nanoid(),
			title: 'Spaghetti Carbonara',
			category: 'C - Dinner',
			ingredients: ['ingredient1', 'ingredient2', 'ingredient3'],
			preparation: 'Cut ingredients and cook, fry and mix them.',
			servings: 4,
			time: 60,
			start: '2022-07-12',
			color: '#FFD18F',
		},
		{
			id: nanoid(),
			title: 'Blueberry Pancakes',
			category: 'A - Breakfast',
			ingredients: ['ingredient1', 'ingredient2', 'ingredient3'],
			preparation: 'Cut ingredients and cook, fry and mix them.',
			servings: 4,
			time: 60,
			start: '2022-07-12',
			color: '#99A146',
		},
		{
			id: nanoid(),
			title: 'Greek Salad',
			category: 'B - Lunch',
			ingredients: ['ingredient1', 'ingredient2', 'ingredient3'],
			preparation: 'Cut ingredients and cook, fry and mix them.',
			servings: 4,
			time: 60,
			start: '2022-07-12',
			color: '#EE8D4A',
		},
		{
			id: nanoid(),
			title: 'Pea Soup',
			category: 'B - Lunch',
			ingredients: ['ingredient1', 'ingredient2', 'ingredient3'],
			preparation: 'Cut ingredients and cook, fry and mix them.',
			servings: 4,
			time: 60,
			start: '2022-07-13',
			color: '#99A146',
		},
		{
			id: nanoid(),
			title: 'Enchiladas',
			category: 'C - Dinner',
			ingredients: ['ingredient1', 'ingredient2', 'ingredient3'],
			preparation: 'Cut ingredients and cook, fry and mix them.',
			servings: 4,
			time: 60,
			start: '2022-07-13',
			color: '#EE8D4A',
		},
		{
			id: nanoid(),
			title: 'French Toast',
			category: 'A - Breakfast',
			ingredients: ['ingredient1', 'ingredient2', 'ingredient3'],
			preparation: 'Cut ingredients and cook, fry and mix them.',
			servings: 4,
			time: 60,
			start: '2022-07-13',
			color: '#FFD18F',
		},
	],
	allIngredients: [
		{id: nanoid(), name: 'ingredient1', isChecked: false},
		{id: nanoid(), name: 'ingredient2', isChecked: false},
		{id: nanoid(), name: 'ingredient3', isChecked: false},
	],
	showModal: false,
	isEditing: false,
	setAllIngredients: ingredients => {
		set(state => {
			return {
				allIngredients: [...state.allIngredients, ingredients],
			};
		});
	},
	flatAllIngredients: () => {
		set(state => {
			return {
				allIngredients: state.allIngredients.flat(),
			};
		});
	},
	checkIngredient: id => {
		set(state => {
			return {
				allIngredients: state.allIngredients.map(ingredient =>
					ingredient.id === id
						? {...ingredient, isChecked: !ingredient.isChecked}
						: ingredient
				),
			};
		});
	},
	addMeal: meal => {
		set(state => {
			return {
				allMeals: [
					...state.allMeals,
					{
						...meal,
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
