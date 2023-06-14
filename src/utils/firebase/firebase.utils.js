//this file is just to use firebase library

import { initializeApp } from 'firebase/app';
import { getAuth, 
    signInWithRedirect ,
    signInWithPopup , 
    GoogleAuthProvider,
    createUserWithEmailAndPassword} 
from 'firebase/auth';

import { 
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore';

// initializeApp is an object which allow  to attach this firebase instance to the instance we have online

const firebaseConfig = {
    apiKey: "AIzaSyDsBaGGJ5KeDiZdJ2atv7DTKx85dHrXBtA",
    authDomain: "crwn-clothing-db-5d7d9.firebaseapp.com",
    projectId: "crwn-clothing-db-5d7d9",
    storageBucket: "crwn-clothing-db-5d7d9.appspot.com",
    messagingSenderId: "723154062674",
    appId: "1:723154062674:web:b3a6e7ac96156aeec0fe8b"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const googleProvider = new GoogleAuthProvider();
  googleProvider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth , googleProvider);
  export const signInWithGoogleRedirect = () => signInWithRedirect(auth , googleProvider); 

  export const db = getFirestore(); // instantiating database

  export const createUserDocumentFromAuth = async (userAuth, 
    additionalInformation = {}
    ) => {
    if(!userAuth) return;

    const userDocref = doc(db, 'users', userAuth.uid);


    const userSnapshot = await getDoc(userDocref);


    if(!userSnapshot.exists()){
        const { displayName , email} = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocref , {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            });
        } catch (error){
            console.log('error creating the user',error.message);
        }
    }
    return userDocref;
    // if user data does not exist
    // create / set the document with the data from userAuth in my collection

    //if user data exists
    // return userDocref
  };

  export const createAuthUserWithEmailAndPassword = async (email , password) => {
    if(!email || !password) return;
    
    return await createUserWithEmailAndPassword(auth,email,password);

  }
