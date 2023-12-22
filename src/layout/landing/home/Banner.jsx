import { Link } from "react-router-dom";
import bannerImg from "../../../assets/banner.jpg";

export default function Banner() {
	return <div style={{
		backgroundImage: `url(${bannerImg})`,
		height: "calc(100vh - 68px)",
		backgroundPosition: "center",
		backgroundAttachment: "fixed",
		backgroundRepeat: "no-repeat",
		position: "relative",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	}}>
		{/* Overlay */}
		<div className="absolute w-full h-full bg-black/60"></div>
		<div className="absolute w-full h-full bg-primary/10"></div>
		
		{/* Content */}
		<div className="z-10 space-y-6 text-white text-center max-w-[600px]">
			{/* title */}
			<h1 className="text-5xl">Master Your Day,<br/> Every Day!</h1>
			
			{/* subtitle */}
			<h1 className="text-xl">Effortless Task Management for Peak Productivity</h1>
			
			<Link to="/login" className="btn btn-primary">Let's Explore</Link>
		</div>
	</div>
}
