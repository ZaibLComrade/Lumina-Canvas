import PropTypes from "prop-types";
import {useEffect, useState} from "react";
import TaskCard from "../../components/TaskCard";

export default function TaskSection({ title, color, filterTaskType }) {
	// Color is applied only to border-color
	
	// Tasks data
	const [ tasks, setTasks ] = useState([]);
	
	// To fetch tasks data
	useEffect(() => {
		const fetchData = async() => {
			const response = await fetch("/tasks.json");
			const result = await response.json();
			const data = result.filter(task => task.status === filterTaskType);
			setTasks(data);
		}; fetchData();
	}, [filterTaskType])
	
	return <div>
		<h2 style={{ borderColor: `${color}` }} className={`pb-3 mb-5 text-xl font-medium text-center border-b`}>{ title }</h2>
		
		{/* Cards */}
		<div className="space-y-5">
			{ tasks.map(task => <TaskCard
				key={ task.id }
				title={ task.title }
				description={ task.description }
				status={ task.status }
				priority={ task.priority }
				deadline={ task.deadline }
			/>) }
		</div>
	</div>
}

TaskSection.propTypes = {
	title: PropTypes.string,
	color: PropTypes.string,
	filterTaskType: PropTypes.string,
}
