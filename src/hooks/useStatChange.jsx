import useAxiosSecure from "./useAxiosSecure";
import useModalProps from "./useModalProps";
import useToast from "./useToast";

export default function useStatChange(stat, id) {
	const axiosSecure = useAxiosSecure();
	const { setDoRefetch } = useModalProps();
	const { successToast } = useToast();
	const handleStatChange = (stat) => {
		const statUpdate = { status: stat };
		axiosSecure.patch(`/tasks/${id}`, statUpdate)
			.then(({ data }) => {
				if(data.acknowledged) {
					setDoRefetch(true);
					successToast();
				}
			})
	}
	return handleStatChange;
}
