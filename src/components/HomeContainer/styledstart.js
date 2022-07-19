import styled from 'styled-components';

const StyledContainer = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1em;
	height: fit-content;
	font-size: 1em;
	font-weight: 200;
	margin-top: 0em;

	@media only screen and (max-width: 600px) {
		margin-bottom: 15em;
		margin-top: 0%;
		font-size: 0.8rem;
	}
`;

export default StyledContainer;
