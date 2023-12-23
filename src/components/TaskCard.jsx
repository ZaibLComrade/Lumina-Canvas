import PropTypes from "prop-types";
import highPri from "../assets/highPri.svg";
import midPri from "../assets/midPri.svg";
import lowPri from "../assets/lowPri.svg";
import deadlineIcon from "../assets/deadline.svg"
import Status from "./Status";

const getPriority = (priority) => {
	if(priority === "high") return <img src={ highPri }/>
	if(priority === "mid") return <img src={ midPri }/>
	if(priority === "low") return <img src={ lowPri }/>
}

export default function TaskCard({ title, description, priority, deadline, status }) {
	return <div className="p-4 bg-white border rounded-2xl space-y-3 border-gray-2">
		{/* Header */}
		<div className="flex align-center gap-4">
			<div className="flex align-center gap-2">
				{/* Priority */}
				<div className="flex items-center">{ getPriority(priority) }</div>
				
				{/* Headline */}
				<div className="text-lg font-medium text-black-1">{ title }</div>
			</div>
			
			{/* Status */}
			<div className="flex items-center"><Status state={ status }/></div>
		</div>
		
		{/* Description */}
		<div>
			<p className="text-gray-1">{ description }</p>
		</div>
		
		{/* Deadline */}
		<div className="flex items-center gap-1">
			<img className="font-medium text-accent" src={ deadlineIcon }/>
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
