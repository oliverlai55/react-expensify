import { firebase, googleAuthProvider } from '../firebase/firebase';

export const startLogin = () => {
	// sign in google account using pop up system
	return () => {
		return firebase.auth().signInWithPopup(googleAuthProvider);
	};
};
