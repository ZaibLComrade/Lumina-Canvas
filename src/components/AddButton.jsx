import addIcon from "../assets/add.svg";
import PropTypes from "prop-types";

export default function AddButton({ addFn }) {
	return <button 
		onClick={ addFn }
		className="flex items-center px-4 py-4 font-medium text-white rounded-full md:py-2 gap-2 bg-secondary md:rounded-2xl"
	>
		<span><img src={ addIcon }/></span>
		<span className="hidden md:block">New Task</span>
	</button>
}

AddButton.propTypes = {
	addFn: PropTypes.func,
}
