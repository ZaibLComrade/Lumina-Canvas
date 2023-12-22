import LoginForm from "./LoginForm";

// Login Page
export default function Login() {
	return (
		<div className="relative top-0 md:min-h-[calc(100vh-68px)] min-h-[calc(100vh-64px)]">
			
			{/* Overlays */}
			<div className="absolute z-[3] w-full h-full top-0 bg-black/10"></div>
			<div className="absolute z-[2] w-full h-full top-0 bg-primary/10"></div>
			
			{/* Login Form */}
			<div className="absolute z-[4] w-full top-1/2 -translate-y-1/2">
				<LoginForm/>
			</div>
		</div>
	);
}
