import PropTypes from "prop-types";
import TaskCard from "../../components/TaskCard";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";

export default function TaskSection({ title, color, filterTaskType }) {
	// Color is applied only to border-color
	
	const{ user } = useAuth();
	const axiosSecure = useAxiosSecure();
	
	// To fetch tasks data
	const { data: tasks=[], isPending, refetch } = useQuery({
		queryKey: ["tasks", filterTaskType],
		queryFn: async() => {
			const { data } = await axiosSecure.get(`/tasks?type=${filterTaskType}&email=${ user.email }`)
			return data
		}
	})
	
	return <div>
		<h2 style={{ borderColor: `${color}` }} className={`pb-3 mb-5 text-xl font-medium text-center border-b`}>{ title }</h2>
		
		{/* Cards */}
		<div className="space-y-5">
			{ tasks.map(task => <TaskCard
				key={ task._id }
				_id={ task._id }
				title={ task.title }
				description={ task.description }
				status={ task.status }
				priority={ task.priority }
				deadline={ task.deadline }
				refetch={ refetch }
			/>) }
		</div>
	</div>
}

TaskSection.propTypes = {
	title: PropTypes.string,
	color: PropTypes.string,
	filterTaskType: PropTypes.string,
}
