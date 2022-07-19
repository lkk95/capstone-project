import styled from 'styled-components';

const MealCardContainer = styled.article`
	display: flex;
	position: fixed;
	top: 25%;
	left: 10%;
	align-items: center;
	justify-content: center;
	width: 80vw;
	height: 15em;
	margin: 1em auto;
	border: solid 0.1em ${props => props.color};
	border-radius: 1em;
	background-color: ${props => props.color};

	@media only screen and (min-width: 992px) {
		width: 30vw;
		left: 35%;
	}
`;

export default MealCardContainer;
