import TaskCard from "../../components/TaskCard";

export default function Tasks() {
	return <div className="p-5 grid grid-cols-1 gap-5 md:grid-cols-3">
		<TaskCard 
			title="Project X dashboard UI design"
			description="Dashboard UI design is a visually engaging and intuitively structured interface tailored to streamline project management"
			priority="high"
			status="ongoing"
			deadline="Not specified"
		/>
	</div>
}
