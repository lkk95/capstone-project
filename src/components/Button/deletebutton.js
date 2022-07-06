import useStore from '../../hooks/useStore.js';

import StyledEdit from './styledicon';

export default function DeleteButton({id}) {
	const deleteMeal = useStore(state => state.deleteMeal);

	return (
		<StyledEdit onClick={() => deleteMeal(id)}>
			<i className="fa-solid fa-trash"></i>
		</StyledEdit>
	);
}
