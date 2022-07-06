import {useNavigate} from 'react-router-dom';

import useStore from '../../hooks/useStore.js';

import StyledEdit from './styledicon';

export default function DeleteButton({id}) {
	const deleteMeal = useStore(state => state.deleteMeal);
	const navigate = useNavigate();

	return (
		<StyledEdit
			onClick={() => {
				deleteMeal(id);
				navigate('/');
			}}
		>
			<i className="fa-solid fa-trash"></i>
		</StyledEdit>
	);
}
