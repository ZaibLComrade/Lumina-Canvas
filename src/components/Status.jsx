import PropTypes from "prop-types";
import { IoMdArrowDropdown } from "react-icons/io";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useModalProps from "../hooks/useModalProps";
import useToast from "../hooks/useToast";

export default function Status({ state, _id }) {
	const axiosSecure = useAxiosSecure();
	const { setDoRefetch } = useModalProps();
	const { successToast } = useToast();
	const handleStatChange = (newStat) => {
		const statUpdate = { status: newStat };
		axiosSecure.patch(`/tasks/${_id}`, statUpdate)
			.then(({ data }) => {
				if(data.acknowledged) {
					setDoRefetch(true);
					successToast("Changed status");
				}
			})
	}
	
	const stateStyle = {
		todo: "text-neutral bg-neutral/10 rounded-2xl",
		ongoing: "text-blue-1 bg-blue-1/10 rounded-2xl",
		completed: "text-green-1 bg-green-1/10 rounded-2xl"
	}
	
	return <button className={`${ stateStyle[state] } dropdown dropdown-end`}>
		<div tabIndex={0} role="button" className="flex items-center px-2 py-1 text-xs font-medium rounded-2xl w-max">
			{ (state === "todo") && <span>To Do</span> }
			{ (state === "ongoing") && <span>Ongoing</span> }
			{ (state === "completed") && <span>Completed</span> }
			<IoMdArrowDropdown/>
		</div>
		
		<ul tabIndex={0} className="dropdown-content text-black-1 z-[1] w-[128px] p-2 text-base shadow bg-base-100 rounded-box">
			<li onClick={ () => handleStatChange("todo") } className="p-2 w-max"><a>To Do</a></li>
			<li onClick={ () => handleStatChange("ongoing") } className="p-2 w-max"><a>Ongoing</a></li>
			<li onClick={ () => handleStatChange("completed") } className="p-2 w-max"><a>Completed</a></li>
		</ul>
	</button>
}

Status.propTypes = {
	state: PropTypes.string.isRequired,
	refetch: PropTypes.func,
	_id: PropTypes.string,
}
