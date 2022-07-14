import useStore from '../../hooks/useStore.js';

export default function IngredientList() {
	const allIngredients = useStore(state => state.allIngredients);

	const ingredientsList = allIngredients.flat();

	return (
		<ul>
			{ingredientsList.map((ingredient, index) => {
				return <li key={index}>{ingredient}</li>;
			})}
		</ul>
	);
}
