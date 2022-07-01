import useStore from '../../hooks/useStore.js';

import StyledEdit from './stylededit';

export default function EditButton() {
	const toggleModal = useStore(state => state.toggleModal);

	return (
		<StyledEdit onClick={() => toggleModal()}>
			<i className="fa-solid fa-pen"></i>
		</StyledEdit>
	);
}
