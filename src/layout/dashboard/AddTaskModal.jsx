import { useForm } from "react-hook-form";
import useToast from "../../hooks/useToast";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useModalProps from "../../hooks/useModalProps";

export default function AddTaskModal() {
	const axiosSecure = useAxiosSecure();
	const { user } = useAuth();
	const { toggleModal, setToggleModal, editMode, id, setDoRefetch } = useModalProps();
	
	// Initializing toast functions
	const { successToast, errorToast } = useToast();

	
	// Initializing react-hook-form
	const { 
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm();
	
	// Triggered when submitting form
	const onSubmit = newTask => {
		// Converting deadline to iso string
		if(!editMode) {
			newTask.deadline = new Date(newTask.deadline).toISOString()
			newTask.status="todo";
		}
		newTask.email= user.email;
		
		if(editMode) {
			axiosSecure.patch(`/tasks/${id}`, newTask)
				.then(({ data }) => {
					if(data.acknowledged) successToast("Successfully updated task");
				})
		} else {
			// Post new task if edit mode is not enabled
			axiosSecure.post("/tasks", newTask)
				.then(({ data }) => {
					if(data.acknowledged) successToast("Successfully created task");
				})
		}
		
		setDoRefetch(true);
		setToggleModal(false);
		reset();
	}
	
	// Triggered when error while submitting form
	const onError = () => {
		errorToast("Please fill all the required fields")
	}
	
	return (<>
		{/* Overlay */}
		<div onClick={ () => setToggleModal(false) } className={`fixed top-0 left-0 w-screen h-screen bg-neutral/50 ${toggleModal ? "block" : "hidden"}`}></div>
		
		{/* Form */}
		<div className={`fixed top-1/2 max-[320px]:max-w-[300px] -translate-x-1/2 -translate-y-1/2 left-1/2`}>
			<div className={`flex-shrink-0 w-full max-w-sm pb-5 mx-auto font-montserrat card bg-base-100 ${toggleModal ? "block" : "hidden"}`}>
			<button onClick={() => setToggleModal(false)} className="absolute z-10 btn btn-sm btn-circle btn-ghost right-2 top-2">✕</button>
				<form className="card-body" onSubmit={handleSubmit(onSubmit, onError)}>
					<h1 className="mx-auto text-3xl font-semibold w-max font-playfair-display">
						{ editMode ? "Edit task" : "New Task" }
					</h1>
					<div className="form-control">
						<label className="label">
							<span className="label-text">Title</span>
						</label>
						<input
							{...register("title", {requried: !editMode})}
							type="text"
							placeholder="title"
							className="input input-bordered"
						/>
					</div>
					<div className="form-control">
						<label className="label">
							<span className="label-text">Description</span>
						</label>
						<textarea
							className="textarea textarea-bordered"
							placeholder="Description"
							{ ...register("description", { required: !editMode }) }
							rows={4}
						/>
					</div>
					<div className="form-control">
						<label className="label">
							<span className="label-text">Deadline</span>
						</label>
						<input
							{...register("deadline", {requried: !editMode})}
							type="date"
							placeholder="title"
							className="input input-bordered"
						/>
					</div>
					<div className="form-control">
						<label className="label">
							<span className="label-text">Priority</span>
						</label>
						<select 
							className="select select-bordered"
							{ ...register("priority", { required: !editMode }) }
							defaultValue="low"
						>
							<option value="low">Low</option>
							<option value="mid">Moderate</option>
							<option value="high">High</option>
						</select>
					</div>
					<div className="mt-6 form-control">
						<button className="btn btn-primary">
							{ editMode ? "Save Changes" : "Create Task" }
						</button>
					</div>
				</form>
			</div>
		</div>
	</>
	);
}

