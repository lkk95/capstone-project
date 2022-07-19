import {nanoid} from 'nanoid';
import create from 'zustand';

const useStore = create(set => ({
	allMeals: [
		{
			id: nanoid(),
			title: 'Spaghetti Carbonara',
			category: 'C - Dinner',
			ingredients: [
				'500 g Spaghetti',
				'200 g pickled bacon',
				'4 yolks',
				'100 g Pecorino',
				'100 ml water',
				'Salt, Pepper',
			],
			preparation:
				'In a pot bring the water to boil and cook pasta al dente. Grate pecorino and put 20 g aside. Mix the rest of pecorino with yolks. Fry bacon in a pan and add cooked pasta. Add cheese-yolk-mixture and water and mix everything. Season with spices and serve with rest of pecorino.',
			servings: 4,
			time: 30,
			start: '2022-07-18',
			color: '#EE8D4A',
			image: 'https://images.unsplash.com/photo-1588338529744-4d5b9b55579b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
		},
		{
			id: nanoid(),
			title: 'Blueberry Pancakes',
			category: 'A - Breakfast',
			ingredients: [
				'1 egg',
				'1 sachet vanilla sugar',
				'200 g flour',
				'1 tbsp baking soda',
				'1 pinch of salt',
				'milk',
				'butter for frying',
				'handful of blueberries',
				'maple syrup',
			],
			preparation:
				'Separate egg white from yolk and put egg white aside. Mix yolk with vanilla sugar. Mix flour with baking soda and salz. Then add to yolk mixture. Pour milk in little portions until mixture is creamy. Whisk egg white until stiff and fold in mixture. Add blueberries to dough. Pour a portion into pan, fry until golden and repeat with rest of dough. Serve with maple syrup.',
			servings: 8,
			time: 15,
			start: '2022-07-18',
			color: '#FFD18F',
			image: 'https://images.unsplash.com/photo-1558401391-34ef38f87ed2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80',
		},
		{
			id: nanoid(),
			title: 'Greek Salad',
			category: 'B - Lunch',
			ingredients: [
				'500 g tomatoes',
				'1 cucumber',
				'1 red pepper',
				'1 green pepper',
				'2 red onions',
				'200 g feta',
				'80 g black olives',
				'oregano',
				'80 ml olive oil',
				'juice of 1 lemon',
				'salt, pepper',
			],
			preparation:
				'Cut vegetables and feta into pieces. Then mix ingredients for the dressing. Mix cut vegetables and dressing in a large bowl. Sprinkle oregano over salad.',
			servings: 6,
			time: 20,
			start: '2022-07-18',
			color: '#99A146',
			image: 'https://images.unsplash.com/photo-1625944230945-1b7dd3b949ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
		},
		{
			id: nanoid(),
			title: 'Pea Soup',
			category: 'B - Lunch',
			ingredients: [
				'750 g frozen peas',
				'100 g sugar',
				'1 tbsp salt',
				'120 g Crème fraîche',
				'juice of 1 lemon',
				'olive oil',
			],
			preparation:
				'Give water, sugar and salt in a pan and cook peas for 4-5 minutes. Pour off peas and give them with 100 ml of cooking water into a mixer. When creamy season with salt and pepper. Serve with crème fraîche mixed with lemon juice.',
			servings: 2,
			time: 20,
			start: '2022-07-19',
			color: '#99A146',
			image: 'https://images.unsplash.com/photo-1620256114757-322387444c16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
		},
		{
			id: nanoid(),
			title: 'Enchiladas',
			category: 'C - Dinner',
			ingredients: [
				'2 chicken breast filet',
				'200 ml chicken broth',
				'1 onion',
				'3 green chilis',
				'250 g ricotta',
				'100 g cream cheese',
				'250 g grated cheese',
				'100 g corn',
				'1 tsp oregano',
				'salt, pepper',
				'200 ml enchilada sauce',
				'8 tortillas',
			],
			preparation:
				'Preheat oven to 190°C. Cook chicken for 10 minutes in broth and cut into little pieces. Mince onions and chilis. Fry until soft and add chicken and corn. Mix ricotta, cream cheese and oregano and fold into chicken mixture. Let it cool for a while then add 50 g of cheese and season. Fill the tortillas with mixture, put them in a baking dish with cheese on top and bake for 20 minutes.',
			servings: 8,
			time: 55,
			start: '2022-07-19',
			color: '#EE8D4A',
			image: 'https://images.unsplash.com/photo-1534352956036-cd81e27dd615?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=701&q=80',
		},
		{
			id: nanoid(),
			title: 'French Toast',
			category: 'A - Breakfast',
			ingredients: [
				'8 toast slices',
				'4 eggs',
				'90 ml milk',
				'90 ml cream',
				'3 tbsp sugar',
				'2 tsp cinammon',
				'1 tsp vanilla flavour',
				'1 pinch of salt',
				'butter',
			],
			preparation:
				'Toast bread slices. Whisk other ingredients in bowl. Put slices in a baking dish, pour mixture and let them soak. Fry the slices in a pan until golden and serve with powdered sugar.',
			servings: 8,
			time: 20,
			start: '2022-07-19',
			color: '#FFD18F',
			image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80',
		},
	],
	allIngredients: [
		{id: nanoid(), name: '1 egg', isChecked: false},
		{id: nanoid(), name: '1 sachet vanilla sugar', isChecked: false},
		{id: nanoid(), name: '200 g flour', isChecked: false},
		{id: nanoid(), name: '1 tbsp baking soda', isChecked: false},
		{id: nanoid(), name: '1 pinch of salt', isChecked: false},
		{id: nanoid(), name: 'milk', isChecked: false},
		{id: nanoid(), name: 'butter for frying', isChecked: false},
		{id: nanoid(), name: 'handful of blueberries', isChecked: false},
		{id: nanoid(), name: 'maple syrup', isChecked: false},
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
	editMeal: (meal, idFromUrl) => {
		set(state => {
			return {
				allMeals: state.allMeals.map(_meal => (_meal.id === idFromUrl ? {...meal} : _meal)),
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
