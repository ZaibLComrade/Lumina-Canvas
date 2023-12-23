import axios from "axios"
import baseURL from "../baseURL";

export default function useAxiosSecure() {
	const axiosSecure = axios.create({
		baseURL,
		withCredentials: true,
	})
	
	return axiosSecure
}
