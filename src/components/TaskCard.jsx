import PropTypes from "prop-types";
import highPri from "../assets/highPri.svg";
import midPri from "../assets/midPri.svg";
import lowPri from "../assets/lowPri.svg";
import { FaClock } from "react-icons/fa";
import Status from "./Status";

const getPriority = (priority) => {
	if(priority === "high") return <img className="w-10 h-10" src={ highPri }/>
	if(priority === "mid") return <img className="w-10 h-10" src={ midPri }/>
	if(priority === "low") return <img className="w-10 h-10" src={ lowPri }/>
}

export default function TaskCard({ title, description, priority, deadline, status }) {
	return <div className="p-4 bg-white border rounded-2xl space-y-3 border-gray-2">
		{/* Header */}
		<div className="flex align-center gap-4">
			<div className="flex align-center grow gap-2">
				{/* Priority */}
				<div className="flex items-center">{ getPriority(priority) }</div>
				
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
			<p><span className="text-accent">Deadline:</span> { deadline }</p>
		</div>
	</div>
}

TaskCard.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	priority: PropTypes.string,
	deadline: PropTypes.string,
	status: PropTypes.string,
}
