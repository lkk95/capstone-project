import StyledButton from './styledbutton.js';

export default function Button({
	children,
	functionToClick,
	parameterToClick,
	buttonMode = 'default',
}) {
	return (
		<StyledButton
			onClick={() => {
				buttonMode !== 'submit' && functionToClick(parameterToClick);
			}}
		>
			{children}
		</StyledButton>
	);
}
