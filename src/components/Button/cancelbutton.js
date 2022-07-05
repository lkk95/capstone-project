import useStore from '../../hooks/useStore.js';

import StyledButton from './styledbutton.js';

export default function CancelButton() {
	const setEditing = useStore(state => state.setEditing);

	return (
		<StyledButton type="button" onClick={() => setEditing(false)}>
			Cancel
		</StyledButton>
	);
}
