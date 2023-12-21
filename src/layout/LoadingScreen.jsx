import { BarLoader } from "react-spinners";

const loaderProps = {
	color: "#0066CC",
	number: 1,
}

const barLoader = <BarLoader 
	{ ...loaderProps }
	width={ 300 }
	speedMultiplier={ 2 }
/>



const loaderArr = [ barLoader ];


export default function LoadingScreen() {
	let random = Math.floor((Math.random() * loaderArr.length));
	const currLoader = loaderArr[random];
	
	return <div className="fixed top-0 z-[1] w-screen h-screen">
	<div className="fixed z-[0] top-0 w-screen h-screen bg-base-100"></div>
		<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
			{ currLoader }
		</div>
	</div>
}
