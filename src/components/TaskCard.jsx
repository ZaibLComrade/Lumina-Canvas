import PropTypes from "prop-types";
import highPri from "../assets/highPri.svg";
import midPri from "../assets/midPri.svg";
import lowPri from "../assets/lowPri.svg";
import { FaClock } from "react-icons/fa";
import Status from "./Status";
import { format } from "date-fns";
import { FaTrash } from "react-icons/fa6";
import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useToast from "../hooks/useToast";
import { FaEdit } from "react-icons/fa";
import useModalProps from "../hooks/useModalProps";

const getPriority = (priority) => {
	if(priority === "high") return <img className="w-10 h-10" src={ highPri }/>
	if(priority === "mid") return <img className="w-10 h-10" src={ midPri }/>
	if(priority === "low") return <img className="w-10 h-10" src={ lowPri }/>
}



export default function TaskCard({ _id, title, description, priority, deadline, status, refetch }) {
	const { successToast } = useToast()
	const axiosSecure = useAxiosSecure();
	const { setEditMode, setId, setToggleModal } = useModalProps();
	
	// Handles delete operation
	const handleDelete = () => {
		Swal.fire({
			title: "Are you sure?",
			text: "Changes cannot be reverted",
			icon: "warning",
			confirmButtonText: "Cancel",
			showDenyButton: true,
			denyButtonText: "Proceed",
		}).then((res) => {
			if(res.isDenied) {
				axiosSecure.delete(`/tasks/${_id}`)
					.then(({ data }) => {
						if(data.deletedCount) {
							refetch();
							successToast("Deleted task successfully");
						}
					})
			}
		})
	}
	
	// Handles edit operation
	const handleEdit = () => {
		setToggleModal(true);
		setEditMode(true);
		setId(_id);
	}
	
	const date = format(new Date(deadline), "PPP")
	return <div className="relative p-4 bg-white border rounded-2xl space-y-3 border-gray-2">
		{/* Header */}
		<div className="flex md:max-lg:flex-col align-center gap-4">
			<div className="flex align-center grow gap-2">
				{/* Priority */}
				<div className="flex items-center w-10 h-10">{ getPriority(priority) }</div>
				
				{/* Headline */}
				<div className="flex items-center w-full text-sm font-medium lg:text-lg text-black-1">{ title }</div>
			</div>
			
			{/* Status */}
			<div className="flex items-center"><Status state={ status }/></div>
		</div>
		
		{/* Description */}
		<div>
			<p className="text-xs text-gray-1 lg:text-base">{ description }</p>
		</div>
		
		{/* Deadline */}
		<div className="flex text-xs lg:text-base">
			<p><span className="flex items-center text-accent gap-1">
				<FaClock className="font-medium text-accent"/>
				Deadline:
			</span> { date }</p>
		</div>
		
		<div className="absolute flex items-center gap-4 bottom-5 right-5">
			<button onClick={handleEdit}>
				<FaEdit className="text-xl lg:text-2xl text-neutral"/>
			</button>
			<button onClick={handleDelete}>
				<FaTrash className="text-lg text-red-800 lg:text-xl"/>
			</button>
		</div>
	</div>
}

TaskCard.propTypes = {
	_id: PropTypes.string,
	title: PropTypes.string,
	description: PropTypes.string,
	priority: PropTypes.string,
	deadline: PropTypes.string,
	status: PropTypes.string,
	refetch: PropTypes.func,
}
