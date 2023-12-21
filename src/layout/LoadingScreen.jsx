import { BarLoader } from "react-spinners";

// Initializing bar loader from react-spinners
const barLoader = <BarLoader 
	width={ 300 }
	speedMultiplier={ 2 }
	color={ "#0066CC" }
	number= { 1 }
/>

export default function LoadingScreen() {
	return <div className="fixed top-0 z-[1] w-screen h-screen">
	<div className="fixed z-[0] top-0 w-screen h-screen bg-base-100"></div>
		<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
			{ barLoader }
		</div>
	</div>
}
