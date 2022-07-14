import styled, {css} from 'styled-components';

const IconButton = styled.button`
	${props =>
		props.modalIcon &&
		css`
			position: absolute;
			top: 13em;
			left: 16em;
		`}
	border: 0;
	background-color: #f2eae3;
	color: #882d17;
	font-size: 1.3rem;
	cursor: pointer;
`;

export default IconButton;
