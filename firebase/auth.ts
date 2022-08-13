import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import app from "./config";
import { addUser, getUser } from "./db";

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const { uid, displayName, email, photoURL } = user;

    const u = await getUser(uid);
    console.log(u);

    if (!u) {
      await addUser({
        uid: uid,
        name: displayName,
        email: email,
        picture: photoURL,
      });
    }
  } catch (err) {
    console.log(err);
  }
};

export { auth, signInWithGoogle };
