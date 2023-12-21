import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import { 
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	updateProfile,
	GoogleAuthProvider,
	onAuthStateChanged,
	signInWithPopup,
	signOut,
} from "firebase/auth";
import auth from "../config/firebase.config"
export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
	const [loading, setLoading] = useState(true);
	const [user, setUser] = useState({});
	
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, loggedInUser => {
			setUser(loggedInUser);
			setLoading(false);
		})
		
		return () => {
			unsubscribe();
		}
	}, []);
	
	const createUser = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	}
	const signInUser = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	}
	const signOutUser = () => {
		setLoading(true);
		return signOut(auth);
	}
	const googleSignInUser = () => {
		setLoading(true);
		const provider = new GoogleAuthProvider;
		return signInWithPopup(auth, provider);
	}
	
	// Context data to be passed upon children components
	const authInfo = {
		user,
		createUser,
		signInUser,
		signOutUser,
		googleSignInUser,
		updateProfile,
		loading,
		setLoading,
	};
	
	return <AuthContext.Provider value={ authInfo }>
		{ children }
	</AuthContext.Provider>
}

// Validate props
AuthProvider.propTypes = {
	children: PropTypes.node,
}
