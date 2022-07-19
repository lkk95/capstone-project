import styled from 'styled-components';

const StyledContainer = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1em;
	height: fit-content;
	margin-top: 0;
	font-size: 1em;
	font-weight: 200;

	@media only screen and (max-width: 600px) {
		margin-top: 0;
		font-size: 0.8rem;
	}
`;

export default StyledContainer;
