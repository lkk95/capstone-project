import useStore from '../../hooks/useStore.js';
import StyledText from '../PlannerInfo/styledtext.js';

import StyledList from './styled.js';

export default function IngredientList() {
	const allIngredients = useStore(state => state.allIngredients);
	const checkIngredient = useStore(state => state.checkIngredient);

	return (
		<StyledList>
			{allIngredients.length > 0 ? (
				allIngredients.map(ingredient => {
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
								{ingredient.name}
							</span>
						</li>
					);
				})
			) : (
				<StyledText>Your ingredients will be added here.</StyledText>
			)}
		</StyledList>
	);
}
