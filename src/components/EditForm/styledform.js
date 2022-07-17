import styled from 'styled-components';

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 2em;
	padding: 2em;
	border: #d4efdf solid 0;
	border-radius: 0.4em;
	background-color: #e0e0e0;
	font-weight: 300;

	h2 {
		font-size: 1.2rem;
	}

	label {
		margin: 1em 0;
		text-align: center;
	}
`;

export default StyledForm;
