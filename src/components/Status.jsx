import PropTypes from "prop-types";

export default function Status({ state }) {
	const commonStyle = "rounded-2xl px-2 py-1 text-xs font-medium"
	if(state === "todo") return <div className={`text-neutral bg-neutral/10 ${commonStyle}`}>
		<span>To Do</span>
	</div>
	
	if(state === "ongoing") return <div className={`text-blue-1 bg-blue-1/10 ${commonStyle}`}>
		<span>Ongoing</span>
	</div>
	
	if(state === "completed") return <div className={`text-green-1 bg-green-1/10 ${commonStyle}`}>
		<span>Done</span>
	</div>
}

Status.propTypes = {
	state: PropTypes.string.isRequired,
}
