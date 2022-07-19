import styled from 'styled-components';

const IconButton = styled.button`
	border: 0;
	background-color: white;
	color: #e37f44;
	font-size: ${props => (props.iconStyle === 'homeicon' ? '2.5rem' : '1.3rem')};
	cursor: pointer;
	&:hover {
		font-size: ${props => (props.iconStyle === 'homeicon' ? '3.5rem' : '2.3rem')};
		transition: ease 1s;
	}
`;

export default IconButton;
