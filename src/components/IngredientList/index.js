import useStore from '../../hooks/useStore.js';

import StyledList from './styled.js';

export default function IngredientList() {
	const allIngredients = useStore(state => state.allIngredients);
	const checkIngredient = useStore(state => state.checkIngredient);

	return (
		<StyledList>
			{allIngredients.map(ingredient => {
				return (
					<li key={ingredient.id}>
						<input
							type="checkbox"
							checked={ingredient.isChecked}
							onChange={() => {
								checkIngredient(ingredient.id);
							}}
						/>
						<span style={{textDecoration: ingredient.isChecked && 'line-through'}}>
							{ingredient.name.trim()}
						</span>
					</li>
				);
			})}
		</StyledList>
	);
}
