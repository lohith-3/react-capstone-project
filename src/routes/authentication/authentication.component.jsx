// import {
//   signInWithGooglePopup,
//   createUserDocumentFromAuth,
// } from "../../utils/firebase/firebase.utils.js";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component.jsx";
import SignInForm from "../../components/sign-in-form/sign-in-form.component.jsx";

import "./authentication.styles.scss";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;

// const logGoogleUser = async () => {
//   const { user } = await signInWithGooglePopup();
//   const userDocRef = await createUserDocumentFromAuth(user);
//   console.log(userDocRef);
// };
/* <button onClick={logGoogleUser}>Sign in with Google Popup</button> */

// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";

// import {
//     auth,
//     signInWithGooglePopup,
//     createUserDocumentFromAuth,
//     signInWithGoogleRedirect,
//   } from "../../utils/firebase/firebase.utils.js";

//   useEffect(() => {
//     const getGoogleRedirectResult = async () => {
//       const response = await getRedirectResult(auth);
//       if (response) {
//         const { user } = response;
//         const userDocRef = await createUserDocumentFromAuth(user);
//         console.log(userDocRef);
//       }
//     };
//     getGoogleRedirectResult();
//   }, []);

//   const logGoogleRedirectUser = async () => {
//     const { user } = await signInWithGoogleRedirect();
//     console.log(user);
//   };

// <button onClick={signInWithGoogleRedirect}>
// Sign in with Google Redirect
// </button>
