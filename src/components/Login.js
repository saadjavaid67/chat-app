import React from "react";
import Home from "./Home";
import Config from "../private/Config";
import firebase from "firebase/app";
import googleLogo from '../images/google-logo.png';
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
// import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp(Config);

const auth = firebase.auth();
function Login() {
    // const firestore = firebase.firestore();
    const [_user] = useAuthState(auth);
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    };
    let name;
    try {
        if (_user.displayName) name = _user;
    } catch (error) {
        // console.log(error)
    }
    return name ? (
        <Home user={name} />
    ) : (
        <div id="login-bg">
            {" "}
            <button id="login" onClick={signInWithGoogle}>
                <img src={googleLogo} />Sign-in with Google
      </button>
        </div>
    );
}
const SignOut = () => {
    return (
        auth.currentUser && (
            <button id="signout" onClick={() => auth.signOut()}>
                Sign Out
            </button>
        )
    );
};
let Session = { Login, SignOut };
export default Session;
