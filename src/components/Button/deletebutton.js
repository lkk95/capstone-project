import StyledIcon from './styledicon';

export default function DeleteButton({onClick}) {
	return (
		<StyledIcon onClick={onClick}>
			<i className="fa-solid fa-trash"></i>
		</StyledIcon>
	);
}
