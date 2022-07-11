import styled from 'styled-components';

const MealCardContainer = styled.article`
	display: flex;
	position: fixed;
	top: 25%;
	left: 10%;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 80%;
	height: 15em;
	margin: 1em auto;
	border: solid 0.1em ${props => props.color};
	border-radius: 1em;
	background-color: ${props => props.color};

	h2 {
		margin: 0 0 1em 0;
		color: #fefae0;
	}
`;

export default MealCardContainer;
