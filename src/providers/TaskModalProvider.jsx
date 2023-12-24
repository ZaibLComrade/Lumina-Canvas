import {createContext, useState} from "react";
import PropTypes from "prop-types";

export const ModalContext = createContext({})

export default function TaskModalProvider({ children }) {
	const [ toggleModal, setToggleModal ] = useState(false);
	const [ doRefetch, setDoRefetch ] = useState(false);
	
	// To Edit tasks
	const [ editMode, setEditMode ] = useState(false);
	const [ id, setId ] = useState("")
	
	const modalProps = { 
		id,
		setId,
		editMode,
		doRefetch,
		setEditMode,
		toggleModal,
		setDoRefetch,
		setToggleModal
	}
	return <ModalContext.Provider value={ modalProps }>
		{ children }
	</ModalContext.Provider>
}

TaskModalProvider.propTypes = {
	children: PropTypes.node
}
