import TaskCard from "../../components/TaskCard";
import TaskSection from "./TaskSection";

export default function Tasks() {
	return <div className="p-5 grid grid-cols-1 gap-5 md:grid-cols-3">
		<TaskSection title="To Do" color="#FFA726"/>
		<TaskSection title="Ongoing" color="#0066CC"/>
		<TaskSection title="Completed" color="#00B894"/>
		

		<TaskCard 
			title="Project X dashboard UI design"
			description="Dashboard UI design is a visually engaging and intuitively structured interface tailored to streamline project management"
			priority="mid"
			status="ongoing"
			deadline="Not specified"
		/>
		<TaskCard 
			title="Project X dashboard UI design"
			description="Dashboard UI design is a visually engaging and intuitively structured interface tailored to streamline project management"
			priority="low"
			status="completed"
			deadline="Not specified"
		/>
	</div>
}
