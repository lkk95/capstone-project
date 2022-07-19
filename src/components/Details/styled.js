import styled from 'styled-components';

const StyledDetails = styled.article`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 3em;
	h2 {
		color: ${props => props.color};
		font-size: 1rem;
		font-weight: bold;
	}
	div {
		display: flex;
		gap: 1em;
		margin-top: 1.5em;
	}
	section {
		margin: 3em 0;
		border-bottom: solid 0.1em black;
		text-align: center;
		font-weight: 300;
		line-height: 180%;
		@media only screen and (min-width: 992px) {
			margin: 3em 20em 3em 20em;
		}
	}
`;

export default StyledDetails;
