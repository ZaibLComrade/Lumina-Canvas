import PropTypes from "prop-types";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

export default function Status({ state }) {
	const commonStyle = "rounded-2xl px-2 py-1 text-xs font-medium"
	const stateStyle = {
		todo: "text-neutral bg-neutral/10",
		ongoing: "text-blue-1 bg-blue-1/10",
		completed: "text-green-1 bg-green-1/10"
	}
	
	return <button className={`${ commonStyle } ${ stateStyle[state] } dropdown dropdown-end`}>
		{ (state === "todo") && <span>To Do</span> }
		{ (state === "ongoing") && <span>Ongoing</span> }
		{ (state === "completed") && <span>Completed</span> }
	</button>
}

Status.propTypes = {
	state: PropTypes.string.isRequired,
}
