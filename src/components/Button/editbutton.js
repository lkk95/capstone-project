import useStore from '../../hooks/useStore.js';

import StyledIcon from './styledicon';

export default function EditButton() {
	const setEditing = useStore(state => state.setEditing);

	return (
		<StyledIcon onClick={() => setEditing(true)}>
			<i className="fa-solid fa-pen"></i>
		</StyledIcon>
	);
}
