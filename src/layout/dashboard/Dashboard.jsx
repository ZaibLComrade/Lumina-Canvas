import {ToastContainer} from "react-toastify"
import AddButton from "../../components/AddButton"
import TaskModalProvider from "../../providers/TaskModalProvider"
import AddTaskModal from "./AddTaskModal"
import Navbar from "./Navbar"
import Tasks from "./Tasks"

export default function Dashboard() {
	return <TaskModalProvider> {/* Provider for modal toggle */}
		<Navbar/>
		<Tasks/>
		
		{/* Add button for small devices */}
		<div className="fixed md:hidden bottom-4 right-4">
			<AddButton/>
		</div>
		
		{/* Modals and notifications */}
		<AddTaskModal/>
		<ToastContainer/>
	</TaskModalProvider>
}
