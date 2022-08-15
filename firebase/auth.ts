import { getAuth } from "firebase/auth";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { sendSignInLinkToEmail, isSignInWithEmailLink, signInWithEmailLink } from "firebase/auth";
import { AuthError } from "firebase/auth";

import app from "./config";
import { setUser } from "./db";

// Auth instance
const auth = getAuth(app);

// Google auth provider
const googleProvider = new GoogleAuthProvider();

// Signing in with Google and saving it to database
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const { uid, displayName, email, photoURL } = user;

    await setUser({
      uid: uid,
      name: displayName,
      email: email,
      picture: photoURL,
    });
  } catch (err) {
    console.log(err);
  }
};

// Sending link to email for signing in
const signInWithEmail = async (email: string) => {
  const actionCodeSettings = {
    url: "https://hello-msgr.vercel.app/login/email-sent",
    handleCodeInApp: true,
  };

  try {
    console.log(email);
    await sendSignInLinkToEmail(auth, email, actionCodeSettings);
    window.localStorage.setItem("signInEmail", email);
  } catch (error: any) {
    const err: AuthError = error;
    alert(err.message);
  }
};

// Confirming sign in email link
const confirmEmailSignIn = async (url: string) => {
  try {
    if (isSignInWithEmailLink(auth, url)) {
      let email = window.localStorage.getItem("signInEmail");
      if (email) {
        await signInWithEmailLink(auth, email, url);
        window.localStorage.removeItem("signInEmail");
      } else throw { message: "Please login on same device" };
    }
  } catch (error: any) {
    const err: AuthError = error;
    alert(err.message);
  }
};

export { auth, signInWithGoogle, signInWithEmail, confirmEmailSignIn };
