import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useToast from "../../../../hooks/useToast";
import useAuth from "../../../../hooks/useAuth";

export default function RegisterForm() {
	// const axiosSecure = useAxiosSecure();
	
	// Initializing toast functions
	const { successToast, warnToast, errorToast } = useToast();
	
	// Getting customized firebase functions from context
	const { 
		registerUser,
		logoutUser,
		loginUser,
		updateProfile,
		setLoading,
		setUser
	} = useAuth();
	const navigate = useNavigate();
	
	// Initializing react-hook-form
	const { 
		register,
		handleSubmit,
		formState: { errors }
	} = useForm();
	
	const validatePassword = (password) => {
		const minLength = 6;
		const lengthExp = new RegExp(`^.{1,${minLength}}$`);
		const capitalExp = /[A-Z]/;
		const specialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/;
		
		if (lengthExp.test(password)) {
			warnToast("Password length must be more than 6 characters")
			return false;
		}
		if (!capitalExp.test(password)) {
			warnToast("Password must contain at least 1 capital letter")
			return false;
		}
		if (!specialChar.test(password)) {
			warnToast("Password must contain at least 1 special character")
			return false;
		}
		return true;
	};
	
	// Triggered when submitting form
	const onSubmit = newUser => {
		const { name, email, password, image } = newUser;
		
		if(!validatePassword(password)) return;
		const userProfile = {
			displayName: name,
			photoURL: image,
		};
		
		registerUser(email, password)
			.then((userCredential) => {
				updateProfile(userCredential.user, userProfile).then(() => {
					const user = userCredential.user;
					const userData = {
						name: user.displayName,
						image: user.photoURL,
						email: user.email,
						role: "user",
						creationTime: user?.metadata?.creationTime,
						lastSignInTime: user?.metadata?.lastSignInTime,
					}
					setUser(userCredential.user);
					console.log(user);
					// axiosSecure.post(`/users`, userData)
					
					logoutUser();
					loginUser(email, password)
				});
				
				successToast("Successfully registerd user");
				navigate("/");
				
				setLoading(false);
			})
			.catch((err) => {
				if (err.code === "auth/email-already-in-use")
					errorToast("Email is already in use")
				setLoading(false);
			});
	}
	
	// Triggered when error while submitting form
	const onError = () => {
		errorToast("Please fill all the required fields")
	}
	
	return (
		<div>
			<div className="flex-shrink-0 w-full max-w-sm pb-5 mx-auto shadow-2xl font-montserrat card bg-base-100">
				<form className="card-body" onSubmit={handleSubmit(onSubmit, onError)}>
					<h1 className="mx-auto text-3xl font-semibold w-max font-playfair-display">
						Register
					</h1>
					<div className="form-control">
						<label className="label">
							<span className="label-text">
								Name{" "}
								<span className="relative text-red-500 top-[3.5px]">
									*
								</span>
							</span>
						</label>
						<input
							{...register("name", {requried: true})}
							type="text"
							placeholder="name"
							className="input input-bordered"
						/>
					</div>
					<div className="form-control">
						<label className="label">
							<span className="label-text">Photo URL</span>
						</label>
						<input
							{...register("image")}
							type="text"
							placeholder="url"
							className="input input-bordered"
						/>
					</div>
					<div className="form-control">
						<label className="label">
							<span className="label-text">
								Email{" "}
								<span className="relative text-red-500 top-[3.5px]">
									*
								</span>
							</span>
						</label>
						<input
							{...register("email", { required: true })}
							type="email"
							placeholder="email"
							className="input input-bordered"
						/>
					</div>
					<div className="form-control">
						<label className="label">
							<span className="label-text">
								Password{" "}
								<span className="relative text-red-500 top-[3.5px]">
									*
								</span>
							</span>
						</label>
						<input
							{...register("password", { required: true })}
							type="password"
							placeholder="password"
							className="input input-bordered"
						/>
					</div>
					<div className="mt-6 form-control">
						<button className="btn btn-primary">Sign Up</button>
					</div>
				</form>
				<div className="mx-auto text-sm text-center md:text-base">
					<p>
						Already registered?{" "}
						<Link
							className="text-blue-600 underline hover:text-blue-500"
							to="/login"
						>
							Login
						</Link>{" "}
						here
					</p>
				</div>
			</div>
		</div>
	);
}
