import MealCardContainer from './styled.js';

export default function MealCard({title, category}) {
	return (
		<MealCardContainer>
			<h3>{title}</h3>
			<p>{category}</p>
		</MealCardContainer>
	);
}
