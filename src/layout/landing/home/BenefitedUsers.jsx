import businessIcon from "../../../assets/cooperation.png";
import freelancerIcon from "../../../assets/self-employed.png";
import studentIcon from "../../../assets/freelancer.png";
import goalIcon from "../../../assets/goal.png";
import teamsIcon from "../../../assets/cooperation.png";
import busyIcon from "../../../assets/fast.png";

const benefitedData = [
	{
		id: "1",
		icon: businessIcon,
		title: "Entrepreneurs & Business Owners",
		description: "Maximize your efficiency, streamline operations, and propel your business to new heights with TaskSwift's intuitive task management.",
	},
	{
		id: "2",
		icon: freelancerIcon,
		title: "Freelancers & Creatives",
		description: "Organize your projects, meet deadlines, and unleash your creativity without the hassle. TaskSwift is your go-to for seamless task handling.",
	},
	{
		id: "3",
		icon: studentIcon,
		title: "Students & Educators",
		description: "Stay on top of assignments, projects, and educational tasks. TaskSwift makes learning a breeze by helping you manage your academic responsibilities effortlessly.",
	},
	{
		id: "4",
		icon: teamsIcon,
		title: "Teams & Collaborators",
		description: "Enhance team collaboration, communication, and project coordination. TaskSwift fosters a collaborative environment for teams aiming for success.",
	},
	{
		id: "5",
		icon: busyIcon,
		title: "Busy Professionals",
		description: "For those with hectic schedules, TaskSwift is the solution to maintaining order and achieving a work-life balance. Effortlessly manage your tasks and reclaim your time.",
	},
	{
		id: "6",
		icon: goalIcon,
		title: "Goal Setters & Achievers",
		description: "Fuel your ambition by setting, tracking, and conquering your goals. TaskSwift empowers you to turn aspirations into accomplishments.",
	}
]

export default function BenefitedUsers() {
	return <div className="py-14 space-y-8">
		{/* Heading */}
		<div className="text-3xl font-bold text-center text-primary md:text-4xl">Who are benefited?</div>
		
		{/* Contents */}
		<div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3">
			{
				benefitedData.map(({ id, title, description, icon }) => <div 
					key={ id }
					className="p-8 text-center space-y-4"
				>
					{/* Icon */}
					<img src={ icon } className="w-12 h-12 mx-auto md:w-16 md:h-16"/>
					
					{/* Contents */}
					<div className="space-y-2">
						<h3 className="text-xl font-medium">{ title }</h3>
						<p className="text-gray-1">{ description }</p>
					</div>
				</div>)
			}
		</div>
	</div>
}
