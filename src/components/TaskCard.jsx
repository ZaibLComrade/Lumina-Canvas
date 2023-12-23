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

const getPriority = (priority) => {
	if(priority === "high") return <img className="w-10 h-10" src={ highPri }/>
	if(priority === "mid") return <img className="w-10 h-10" src={ midPri }/>
	if(priority === "low") return <img className="w-10 h-10" src={ lowPri }/>
}



export default function TaskCard({ _id, title, description, priority, deadline, status }) {
	const { successToast } = useToast()
	const axiosSecure = useAxiosSecure();
	
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
						if(data.deletedCount) successToast("Deleted task successfully");
					})
			}
		})
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
		<div className="flex items-center text-xs gap-1 md:text-base">
			<FaClock className="font-medium text-accent"/>
			<p><span className="text-accent">Deadline:</span> { date }</p>
		</div>
		
		<button onClick={handleDelete} className="absolute bottom-5 right-5">
			<FaTrash className="text-xl text-red-800"/>
		</button>
	</div>
}

TaskCard.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	priority: PropTypes.string,
	deadline: PropTypes.string,
	status: PropTypes.string,
}
