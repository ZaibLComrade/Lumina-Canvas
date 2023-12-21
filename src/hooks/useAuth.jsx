import {useContext} from "react";
import { AuthContext } from "../components/AuthProvider";

export default function useAuth() {
	const authInfo = useContext(AuthContext);
	return authInfo;
}
