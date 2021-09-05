import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config ={
    apiKey: "AIzaSyB7cSAaO_4JizUaV6eVBVpphSLI_3s6-ys",
    authDomain: "robotics-club-ebd9c.firebaseapp.com",
    projectId: "robotics-club-ebd9c",
    storageBucket: "robotics-club-ebd9c.appspot.com",
    messagingSenderId: "319538340771",
    appId: "1:319538340771:web:364f0cb94915ab56227016",
    measurementId: "G-ZE3HWBF5X3"
};


export const createUserProfileDocument = async (userAuth, additionalData) =>{
  if(!userAuth)
    return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  //console.log(userRef);
  const snapShot = await userRef.get();
  if(!snapShot.exists){
    console.log('user : ',userAuth);
    const {displayName,photoURL,email} = userAuth;
    const createdAt = new Date();
    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        photoURL,
        ...additionalData
      })
    }
    catch(error){
      console.log('error creating user',error.message);
    }
  }
  return userRef;
}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;