import MealCardContainer from './styled.js';

export default function MealCard({title, category}) {
	return (
		<MealCardContainer>
			<h2>{title}</h2>
			<p>{category}</p>
		</MealCardContainer>
	);
}
