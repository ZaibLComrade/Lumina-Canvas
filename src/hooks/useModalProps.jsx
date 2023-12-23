import {useContext} from "react"
import {ModalContext} from "../providers/TaskModalProvider"

export default function useModalProps() {
	const modalProps = useContext(ModalContext)
	return modalProps;
}
