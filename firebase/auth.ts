import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import app from "./config";

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const user = await signInWithPopup(auth, googleProvider);
    console.log(user.user);
  } catch (err) {
    console.log(err);
  }
};

export { auth, signInWithGoogle };
