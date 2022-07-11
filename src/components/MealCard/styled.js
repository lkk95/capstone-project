import styled from 'styled-components';

const MealCardContainer = styled.article`
	position: fixed;
	width: 80%;
	height: 15em;
	top: 25%;
	left: 10%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 1em auto;
	border: solid 0.1em #eaeded;
	border-radius: 1em;
	background-color: #f2eae3;

	h2 {
		margin: 0 0 1em 0;
		color: #d4ac0d;
	}
`;

export default MealCardContainer;
