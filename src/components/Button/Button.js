import {useNavigate} from 'react-router-dom';

import useStore from '../../hooks/useStore.js';

import StyledButton from './styledbutton.js';
import StyledIcon from './styledicon';

export default function Button({
	children,
	functionToClick,
	parameterToClick,
	buttonMode = 'default',
	closeModal,
	isIcon,
	modalIcon,
}) {
	const setShowModal = useStore(state => state.setShowModal);
	const navigate = useNavigate();

	return (
		<>
			{isIcon ? (
				<StyledIcon
					modalIcon={modalIcon}
					onClick={() => {
						functionToClick(parameterToClick);
						buttonMode === 'delete' && navigate('/planner');
						closeModal && setShowModal();
					}}
				>
					{children}
				</StyledIcon>
			) : (
				<StyledButton
					onClick={() => {
						buttonMode !== 'submit' && functionToClick(parameterToClick);
						closeModal && setShowModal();
					}}
				>
					{children}
				</StyledButton>
			)}
		</>
	);
}
