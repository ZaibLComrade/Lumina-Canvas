import {useContext} from "react";
import { AuthContext } from "../providers/AuthProvider";

export default function useAuth() {
	const authInfo = useContext(AuthContext);
	return authInfo;
}
