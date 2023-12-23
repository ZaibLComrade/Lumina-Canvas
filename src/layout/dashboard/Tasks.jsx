import TaskCard from "../../components/TaskCard";
import TaskSection from "./TaskSection";

export default function Tasks() {
	return <div className="p-5 grid grid-cols-1 gap-5 md:grid-cols-3">
		<TaskSection title="To Do" color="#FFA726" filterTaskType="todo"/>
		<TaskSection title="Ongoing" color="#0066CC" filterTaskType="ongoing"/>
		<TaskSection title="Completed" color="#00B894" filterTaskType="completed"/>
	</div>
}
