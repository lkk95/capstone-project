import styled from 'styled-components';

const StyledModal = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.6);
	z-index: 1;

	i {
		font-size: 2em;
		color: white;
		position: absolute;
		top: 1em;
		right: 1em;
	}
`;

export default StyledModal;
