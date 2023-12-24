import PropTypes from "prop-types";
import TaskCard from "../../components/TaskCard";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useModalProps from "../../hooks/useModalProps";
import { ItemTypes } from "../../main";
import {useDrop} from "react-dnd";
import {useEffect} from "react";
import useToast from "../../hooks/useToast";

export default function TaskSection({ title, color, filterTaskType }) {
	// Color is applied only to border-color
	
	// To fetch tasks data
	const { data: tasks=[], refetch, isPending } = useQuery({
		queryKey: ["tasks", filterTaskType],
		queryFn: async() => {
			const { data } = await axiosSecure.get(`/tasks?type=${filterTaskType}&email=${ user.email }`)
			return data
		}
	})
	
	const{ user } = useAuth();
	const axiosSecure = useAxiosSecure();
	const { doRefetch, setDoRefetch } = useModalProps();
	const { successToast } = useToast();
	const [ { isOver }, drop ] = useDrop(() => ({
		accept: ItemTypes.CARD,
		drop: monitor => {
			const statUpdate = { status: filterTaskType };
			axiosSecure.patch(`/tasks/${monitor._id}`, statUpdate)
				.then(({ data }) => {
					if(data.acknowledged) {
						setDoRefetch(true);
						successToast();
					}
				})
		},
		collect: (monitor) => ({ 
			isOver: !!monitor.isOver()
		})
	}))
	

	
	// Refetches data when necessary
	if(doRefetch) {
		refetch()
	}
	useEffect(() => {
		if(!isPending) setDoRefetch(false);
	}, [isPending, setDoRefetch, doRefetch])
	
	return <div ref={ drop } className={`${isOver && "bg-secondary/5 rounded-2xl"}`}>
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
