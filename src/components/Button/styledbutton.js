import styled from 'styled-components';

const StyledButton = styled.button`
	width: 6em;
	height: 2.5em;
	border: solid 0 black;
	border-radius: 2em;
	background-color: ${props => (props.buttonStyle === 'cardbutton' ? '#fefae0' : '#e37f44')};
	color: ${props => (props.buttonStyle === 'cardbutton' ? '#000' : '#fefae0')};
	cursor: pointer;
`;

export default StyledButton;
