import StyledModal from './styled.js';

export default function Modal({children, handleClose}) {
	return (
		<StyledModal>
			<i onClick={handleClose} className="fa-solid fa-xmark"></i>
			{children}
		</StyledModal>
	);
}
