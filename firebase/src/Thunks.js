import { createUserWithEmailAndPassword, updateProfile, GoogleAuthProvider, getAuth, signInWithRedirect, signOut } from "firebase/auth";
import {auth} from "./firebase/config.js";

export const registerAuth = (email, password) => {
    return async (dispatch) => {
        const response = await createUserWithEmailAndPassword(auth, email, password);
        if (response){
            await updateProfile(auth.currentUser, {
                displayName: 'Jonathan',
                photoURL: ''
            })
        
            const {email} = response.user;
        }else{
            throw new Error('login failed');
        }
    }
}

export const signInWithGoogle = () => async dispatch => {
    const provider = new GoogleAuthProvider();
    try {
        await signInWithRedirect(auth, provider);
    } catch (error) {
        dispatch({ type: 'AUTH_ERROR', error });
    }
    }

    export const signOutUser = () => async dispatch => {
    const auth = getAuth();
    signOut(auth)
        .then(() => {
            dispatch({ type: 'LOGOUT' });
        })
        .catch((error) => {
            console.error('Error signing out: ', error);
        });
};