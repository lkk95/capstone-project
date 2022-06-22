import MealCardContainer from './styled.js';

export default function MealCard({title, category}) {
	return (
		<MealCardContainer>
			<h2>{title}</h2>
			<p data-testid="category-element">{category}</p>
		</MealCardContainer>
	);
}
