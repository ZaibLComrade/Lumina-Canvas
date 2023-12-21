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
		// Observer
		const unsubscribe = onAuthStateChanged(auth, loggedInUser => {
			setUser(loggedInUser);
			setLoading(false);
		})
		
		return () => {
			unsubscribe();
		}
	}, []);
	
	// Create user with email and password
	const registerUser = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	}
	
	// Sign in user with email and password
	const loginUser = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	}
	
	// Log out user
	const logoutUser = () => {
		setLoading(true);
		return signOut(auth);
	}
	
	// Google sign in
	const googleSignInUser = () => {
		setLoading(true);
		const provider = new GoogleAuthProvider;
		return signInWithPopup(auth, provider);
	}
	
	// Context data to be passed upon children components
	const authInfo = {
		user,
		registerUser,
		loginUser,
		logoutUser,
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
