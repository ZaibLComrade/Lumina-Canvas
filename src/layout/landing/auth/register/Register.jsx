import RegisterForm from "./RegisterForm";
// import balloons from "../assets/balloons.jpg"

// Register Page
export default function Register() {
	return (
		<div className="relative top-0 h-[calc(100vh-68px)]">
			
			{/* Overlays */}
			<div className="absolute z-[3] w-full h-full top-0 bg-black/10"></div>
			<div className="absolute z-[2] w-full h-full top-0 bg-primary/10"></div>
			
			{/* Register Form */}
			<div className="absolute z-[4] w-full top-1/2 -translate-y-1/2">
				<RegisterForm/>
			</div>
		</div>
	);
}
