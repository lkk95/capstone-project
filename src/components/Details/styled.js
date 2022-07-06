import styled from 'styled-components';

const StyledDetails = styled.article`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 4em;
	border: solid 0 #f2eae3;
	border-radius: 0.5em;
	background-color: #f2eae3;

	h2 {
		color: #d4ac0d;
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
	}
`;

export default StyledDetails;
