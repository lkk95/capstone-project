import styled from 'styled-components';

const MealCardContainer = styled.article`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 20em;
	height: 15em;
	margin: 1em auto;
	border: solid 0.1em #eaeded;
	border-radius: 1em;
	background-color: #f2eae3;

	h2 {
		margin: 0;
		color: #d4ac0d;
	}
`;

export default MealCardContainer;
