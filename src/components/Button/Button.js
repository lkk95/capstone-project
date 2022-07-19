import {useNavigate} from 'react-router-dom';

import useStore from '../../hooks/useStore.js';

import IconButton from './iconbutton';
import StyledButton from './styledbutton.js';

export default function Button({
	children,
	functionToClick,
	parameterToClick,
	buttonMode = 'default',
	closeModal,
	isIcon,
	iconStyle,
	resetHandler,
}) {
	const setShowModal = useStore(state => state.setShowModal);
	const navigate = useNavigate();

	return (
		<>
			{isIcon ? (
				<IconButton
					iconStyle={iconStyle}
					onClick={() => {
						functionToClick(parameterToClick);
						buttonMode === 'delete' && navigate('/planner');
						closeModal && setShowModal();
					}}
				>
					{children}
				</IconButton>
			) : (
				<StyledButton
					onClick={() => {
						buttonMode !== 'submit' && functionToClick(parameterToClick);
						closeModal && setShowModal();
						resetHandler();
					}}
				>
					{children}
				</StyledButton>
			)}
		</>
	);
}
