import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBu_mPmwrTzkRDSUDeF1-R-43JRChmhBo4",
  authDomain: "hello-msgr.firebaseapp.com",
  projectId: "hello-msgr",
  storageBucket: "hello-msgr.appspot.com",
  messagingSenderId: "950148001099",
  appId: "1:950148001099:web:f084a420ca599e68b54cce"
};

const app = initializeApp(firebaseConfig);

export default app