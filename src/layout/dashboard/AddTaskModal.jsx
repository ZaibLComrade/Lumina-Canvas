import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useToast from "../../hooks/useToast";

export default function AddTaskModal({ toggleModal, setToggleModal }) {
	// const axiosSecure = useAxiosSecure();
	
	
	// Initializing toast functions
	const { successToast, warnToast, errorToast } = useToast();

	
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
		newTask.deadline = new Date(newTask.deadline).toISOString()
		console.log(newTask);
		
		reset();
		setToggleModal(false);
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
						New Task
					</h1>
					<div className="form-control">
						<label className="label">
							<span className="label-text">Title</span>
						</label>
						<input
							{...register("title", {requried: true})}
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
							{ ...register("description", { required: true }) }
							rows={4}
						/>
					</div>
					<div className="form-control">
						<label className="label">
							<span className="label-text">Deadline</span>
						</label>
						<input
							{...register("deadline", {requried: true})}
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
							{ ...register("priority", { required: true }) }
							defaultValue="low"
						>
							<option value="low">Low</option>
							<option value="mid">Moderate</option>
							<option value="high">High</option>
						</select>
					</div>
					<div className="mt-6 form-control">
						<button className="btn btn-primary">Create Task</button>
					</div>
				</form>
			</div>
		</div>
	</>
	);
}
