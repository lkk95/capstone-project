import styled from 'styled-components';

const StyledTextInput = styled.fieldset`
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
		width: 30%;
		margin: 0 auto;
		padding: 0.5em;
		border: 0;
		border-radius: 0.4em;
		text-align: center;
	}
`;

export default StyledTextInput;
