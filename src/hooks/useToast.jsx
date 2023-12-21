import { toast } from "react-toastify";

const toastProps = {
	hideProgressBar: false,
	closeOnClick: true,
	pauseOnHover: true,
	draggable: true,
	progress: undefined,
	theme: "colored",
	position: "bottom-center",
	autoClose: 1000,
}

// Initializing toasts
const successToast = (statement) => toast.success(statement, toastProps);
const warnToast = (statement) => toast.warn(statement, toastProps);
const errorToast = (statement) => toast.error(statement, toastProps);

export default function useToast() {
	return {
		successToast,
		warnToast,
		errorToast,
	}
} 
