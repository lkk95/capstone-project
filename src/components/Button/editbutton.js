import useStore from '../../hooks/useStore.js';

import StyledEdit from './styledicon';

export default function EditButton() {
	const setEditing = useStore(state => state.setEditing);

	return (
		<StyledEdit onClick={() => setEditing(true)}>
			<i className="fa-solid fa-pen"></i>
		</StyledEdit>
	);
}
