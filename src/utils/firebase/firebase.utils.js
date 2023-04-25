// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtBrpV8e1O1_jcMe60zYJB6aYipQRlCak",
  authDomain: "crwn-clothing-db-d4e16.firebaseapp.com",
  projectId: "crwn-clothing-db-d4e16",
  storageBucket: "crwn-clothing-db-d4e16.appspot.com",
  messagingSenderId: "900104678347",
  appId: "1:900104678347:web:0d3eaeb9f9b8b67e3d244e",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  console.log(userDocRef);

  // The snapshot allows us to check whether or not there is an
  // instance of it that exists inside of our database and it allows
  // us to access the data.
  const userSnapshot = await getDoc(userDocRef);

  // if user data doesn't exists
  // create / set the document with the data from userAuth in my collection
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  // if user data exists
  // return userDocRef
  return userDocRef;
};
