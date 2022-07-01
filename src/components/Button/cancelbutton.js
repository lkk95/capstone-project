import useStore from '../../hooks/useStore.js';

import StyledButton from './styledbutton.js';

export default function CancelButton() {
	const toggleModal = useStore(state => state.toggleModal);

	return <StyledButton onClick={() => toggleModal()}>Cancel</StyledButton>;
}
