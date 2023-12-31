import addIcon from "../assets/add.svg";
import PropTypes from "prop-types";
import useModalProps from "../hooks/useModalProps";

export default function AddButton() {
	const { setToggleModal, setEditMode, setId } = useModalProps();
	
	const handleAdd = () => {
		setEditMode(false);
		setId("");
		setToggleModal(true);
	}
	
	return <button 
		onClick={ handleAdd }
		className="flex items-center px-4 py-4 font-medium text-white rounded-full md:py-2 gap-2 bg-secondary md:rounded-2xl"
	>
		<span><img src={ addIcon }/></span>
		<span className="hidden md:block">New Task</span>
	</button>
}

AddButton.propTypes = {
	setToggleModal: PropTypes.func,
}
