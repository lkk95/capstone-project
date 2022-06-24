import styled from 'styled-components';

const MealCardContainer = styled.article`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 20em;
	height: 8em;
	margin: 1em auto;
	border: solid 0.1em #eaeded;
	border-radius: 1em;
	background-color: #eaeded;

	h3 {
		margin: 0em;
		color: #f1c40f;
	}
`;

export default MealCardContainer;
