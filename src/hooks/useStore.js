import create from 'zustand';
import {nanoid} from 'nanoid';

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
		{
			id: nanoid(),
			title: 'Chocolate Porridge',
			category: 'Breakfast',
		},
	],
}));

export default useStore;
