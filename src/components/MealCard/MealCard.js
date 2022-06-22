import MealCardContainer from './styled.js';

export default function MealCard({title, category}) {
	return (
		<MealCardContainer>
			<h2 role="heading">{title}</h2>
			<p role="category-element">{category}</p>
		</MealCardContainer>
	);
}
