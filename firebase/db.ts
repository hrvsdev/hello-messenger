import { addDoc, collection, getFirestore } from "firebase/firestore";
import app from "./config";

// Firestore database reference
const db = getFirestore(app);

// Users collection
const users = collection(db, "users");

// Add user function
const addUser = async (data) => {
  try {
    await addDoc(users, data);
  } catch (err) {
    console.log(err);
  }
};

export { db };
