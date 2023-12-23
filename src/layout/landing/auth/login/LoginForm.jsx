import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";
import {useState} from "react";
import { FcGoogle } from "react-icons/fc";
import useToast from "../../../../hooks/useToast";
import { FaGithub } from "react-icons/fa";
// import useAxiosSecure from "../../hooks/useAxiosSecure";

export default function LoginForm() {
	// Initializing hooks
	const { loginUser, googleSignInUser, user, setLoading, githubSignInUser } = useAuth();
	const [tempEmail, setTempEmail] = useState("");
	const navigate = useNavigate();
	const location = useLocation();
	const { successToast, warnToast, errorToast } = useToast();
	// const axiosSecure = useAxiosSecure();
	
	const handleSubmit = (e) => {
		e.preventDefault(); 
		
		const form = new FormData(e.currentTarget);
		const email = form.get("email");
		const password = form.get("password");
		if (email === user?.email) {
				warnToast("User already logged in")
				navigate("/dashboard");
			return;
		}
		
		loginUser(email, password)
			.then((userCredential) => {
				const user = userCredential.user;
				const update = {lastSignInTime: user?.metadata?.lastSignInTime};
				// axiosSecure.put(`/users/${user.email}`, update);
				
				successToast("Successfully logged in")
				navigate(location?.state || "/dashboard");
				setLoading(false);
			})
			.catch((err) => {
					if(err.code === "auth/invalid-login-credentials") {
						errorToast("Invalid Credentials");
						setLoading(false);
					} else if(err.code === "auth/too-many-requests") {
						errorToast("Account has been temporarily disabled");
						setLoading(false);
					}
			});
	};
	
	const handleGoogleSignIn = e => {
		e.preventDefault();
		googleSignInUser()
			.then((result) => {
				const user = result.user;
				const userData = {
					name: user.displayName,
					image: user.photoURL,
					email: user.email,
					role: "user",
					creationTime: user?.metadata?.creationTime,
					lastSignInTime: user?.metadata?.lastSignInTime,
				}
				console.log(userData);
				
				// axiosSecure.put(`/users/${user.email}`, userData);
				
				successToast("Successfully logged in");
				navigate(location?.state || "/dashboard");
				setLoading(false);
			})
			.catch(err => console.error(err));
	}
	
	const handleGithubSignIn = e => {
		e.preventDefault();
		githubSignInUser()
			.then((result) => {
				const user = result.user;
				const userData = {
					name: user.displayName,
					image: user.photoURL,
					email: user.email,
					role: "user",
					creationTime: user?.metadata?.creationTime,
					lastSignInTime: user?.metadata?.lastSignInTime,
				}
				console.log(userData);
				
				// axiosSecure.put(`/users/${user.email}`, userData);
				
				successToast("Successfully logged in");
				navigate(location?.state || "/dashboard");
				setLoading(false);
			})
			.catch(err => console.error(err));
	}
	
	return (
		<div>
			{location.state && (
				<div className="mx-auto mb-6 h-max w-max">
					<h1 className="md:text-5xl font-montserrat font-semibold text-white text-2xl leading-[80px]">
						Login To Continue
					</h1>
				</div>
			)}
			<div className="flex-shrink-0 w-full max-w-sm pb-5 mx-auto border-red-500 shadow-2xl font-montserrat card bg-base-100">
				<form className="card-body" onSubmit={handleSubmit}>
					<h1 className="mx-auto text-3xl font-semibold w-max font-playfair-display">
						Login
					</h1>
					<div className="form-control">
						<label className="label">
							<span className="label-text">Email</span>
						</label>
						<input
							type="email"
							placeholder="email"
							name="email"
							className="input input-bordered"
							required
							onChange={ e => setTempEmail(e.target.value) }
						/>
					</div>
					<div className="form-control">
						<label className="label">
							<span className="label-text">Password</span>
						</label>
						<input
							type="password"
							placeholder="password"
							name="password"
							className="input input-bordered"
							required
						/>
						<label className="label">
							<a
								href="#"
								className="label-text-alt link link-hover"
							>
								Forgot password?
							</a>
						</label>
					</div>
					<div className="mt-6 form-control">
						<button className="btn btn-primary">Login</button>
					</div>
				</form>
				<div className="w-full px-8 mx-auto mb-4 text-center">
					<hr className="w-full border"/>
					<p className="relative w-8 mx-auto font-bold bg-base-100 -top-3"> Or</p>
					<div className="space-y-2">
					<button onClick={ handleGoogleSignIn } className="flex items-center w-full btn btn-accent gap-2"><FcGoogle className="text-xl"/><div>Login with Google</div></button>
					<button onClick={ handleGithubSignIn } className="flex items-center w-full text-white btn bg-[#171515] gap-2"><FaGithub className="text-xl"/><div>Login with Github</div></button>
					</div>
				</div>
				<div className="mx-auto text-sm text-center md:text-base">
					<p>
						Don&apos;t have an account?{" "}
						<Link
							className="text-blue-600 underline hover:text-blue-500"
							to="/register"
						>
							Register
						</Link>{" "}
						here
					</p>
				</div>
			</div>
		</div>
	);
}
