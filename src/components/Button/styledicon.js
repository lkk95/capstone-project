import styled from 'styled-components';

const StyledIcon = styled.button`
	position: ${props => (props.modalIcon ? 'absolute' : '')};
	top: ${props => (props.modalIcon ? '13em' : '')};
	left: ${props => (props.modalIcon ? '16em' : '')};
	border: 0;
	background-color: #f2eae3;
	color: #882d17;
	font-size: 1.3rem;
	cursor: pointer;
`;

export default StyledIcon;
