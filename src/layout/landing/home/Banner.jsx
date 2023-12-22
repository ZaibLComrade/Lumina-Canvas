import { Link } from "react-router-dom";
import bannerImg from "../../../assets/banner.jpg";

export default function Banner() {
	return <div style={{
		backgroundImage: `url(${bannerImg})`,
		backgroundPosition: "center",
		backgroundAttachment: "fixed",
		backgroundRepeat: "no-repeat",
		position: "relative",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	}}
		className="md:h-[calc(100vh-68px)] h-[calc(100vh-64px)]"
	>
		{/* Overlay */}
		<div className="absolute w-full h-full bg-black/60"></div>
		<div className="absolute w-full h-full bg-primary/10"></div>
		
		{/* Content */}
		<div className="z-10 space-y-6 text-white text-center max-w-[600px]">
			{/* title */}
			<h1 className="text-4xl font-bold md:text-5xl">Master Your Day,<br/> Every Day!</h1>
			
			{/* subtitle */}
			<h1 className="text-md md:text-xl">Effortless Task Management for Peak Productivity</h1>
			
			<Link to="/login" className="btn btn-primary">Let's Explore</Link>
		</div>
	</div>
}
