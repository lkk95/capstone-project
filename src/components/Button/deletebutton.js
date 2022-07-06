import useStore from '../../hooks/useStore.js';

import StyledEdit from './styledicon';

export default function DeleteButton() {
	const deleteMeal = useStore(state => state.deleteMeal);

	return (
		<StyledEdit onClick={() => deleteMeal()}>
			<i className="fa-solid fa-trash"></i>
		</StyledEdit>
	);
}
