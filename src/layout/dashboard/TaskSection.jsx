import PropTypes from "prop-types";
import TaskCard from "../../components/TaskCard";

export default function TaskSection({ title, color, filterTaskType }) {
	// Color is applied only to border-color
	return <div>
		<h2 style={{ borderColor: `${color}` }} className={`pb-3 mb-5 text-xl font-medium text-center border-b`}>{ title }</h2>
		
		{/* Cards */}
		<div>
			<TaskCard 
				title="Project X dashboard UI design"
				description="Dashboard UI design is a visually engaging and intuitively structured interface tailored to streamline project management"
				priority="high"
				status="todo"
				deadline="Not specified"
			/>
		</div>
	</div>
}

TaskSection.propTypes = {
	title: PropTypes.string,
	color: PropTypes.string,
	filterTaskType: PropTypes.string,
}
