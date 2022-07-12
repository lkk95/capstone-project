import styled from 'styled-components';

const StyledModal = styled.div`
	position: fixed;
	z-index: 1;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.6);
	overflow: scroll;

	i {
		position: absolute;
		top: 1em;
		right: 1em;
		color: white;
		font-size: 2em;
	}
`;

export default StyledModal;
