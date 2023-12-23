import {useState} from "react"
import AddButton from "../../components/AddButton"
import AddTaskModal from "./AddTaskModal"
import Navbar from "./Navbar"
import Tasks from "./Tasks"

export default function Dashboard() {
	const [ toggleModal, setToggleModal ] = useState(false);
	
	return <div>
		<Navbar setToggleModal={setToggleModal}/>
		<Tasks/>
		
		{/* Add button for small devices */}
		<div className="fixed md:hidden bottom-4 right-4">
			<AddButton setToggleModal={setToggleModal}/>
		</div>
		
		<AddTaskModal toggleModal={toggleModal} setToggleModal={setToggleModal}/>
	</div>
}
