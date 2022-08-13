import { collection, getFirestore } from "firebase/firestore";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { addUserType } from "./types";
import app from "./config";

// Firestore database reference
const db = getFirestore(app);

// Users collection
const usersRef = collection(db, "users");

// Checking if user exits and  adding data to database
const setUser = async (data: addUserType) => {
  try {
    const userRef = doc(db, "users", data.uid);
    await setDoc(userRef, data);
  } catch (err) {
    console.log(err);
  }
};

// Get user function
const getUser = async (uid: string) => {
  try {
    const userRef = doc(db, "users", uid);
    const user = await getDoc(userRef);
    return user.data();
  } catch (err) {
    console.log(err);
  }
};

export { db, setUser, getUser };
