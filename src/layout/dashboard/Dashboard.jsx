import AddButton from "../../components/AddButton"
import Navbar from "./Navbar"
import Tasks from "./Tasks"

export default function Dashboard() {
	return <div>
		<Navbar/>
		<Tasks/>
		
		{/* Add button for small devices */}
		<div className="fixed md:hidden bottom-4 right-4">
			<AddButton/>
		</div>
	</div>
}
