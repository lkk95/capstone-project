import styled from 'styled-components';

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 2em;
	margin-bottom: 2em;
	padding: 2em;
	border: #d4efdf solid 0;
	border-radius: 0.4em;
	background-color: #d4efdf;

	h2 {
		font-size: 1.2rem;
	}

	.inputfieldset {
		display: flex;
		flex-direction: column;
		gap: 1em;
		border: 0;
		textarea {
			padding: 2em;
			border: 0;
			text-align: center;
		}
		input[type='text'] {
			padding: 1em;
			border: 0;
			border-radius: 0.4em;
			text-align: center;
		}
		input[type='number'] {
			padding: 0.5em;
			border: 0;
			border-radius: 0.4em;
			width: 30%;
			margin: 0 auto;
			text-align: center;
		}
	}

	.radiofieldset {
		display: flex;
		justify-content: space-evenly;
		border: 0;
	}

	label {
		margin-right: 1em;
	}
`;

export default StyledForm;
