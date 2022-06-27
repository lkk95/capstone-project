import styled from 'styled-components';

const FormContainer = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 2em;
	padding: 2em;
	border: #d4efdf solid 0;
	border-radius: 0.4em;
	background-color: #d4efdf;

	h2 {
		font-size: 1.2rem;
	}

	fieldset {
		display: flex;
		justify-content: space-evenly;
		border: 0;
	}

	label {
		margin-right: 1em;
	}

	input {
		border: 0;
		border-radius: 0.4em;
	}
`;

export default FormContainer;
