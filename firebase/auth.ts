import { getAuth, signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider, sendSignInLinkToEmail } from "firebase/auth";

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
  try {
    await sendSignInLinkToEmail(auth, email, {
      url: "http://localhost:3000/login/email-sent",
      handleCodeInApp: true,
    });
    window.localStorage.setItem("signInEmail", email);
  } catch (err) {
    console.log(err);
  }
};

export { auth, signInWithGoogle, signInWithEmail };
