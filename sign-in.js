import firebase from "firebase/compat/app";
import "firebasse/compact/firestore";
import"firebasse/compact/auth";

firebase.initializeApp({
    apiKey: "AIzaSyBYp6obxnscqK8E4DD-ACfnedT4O1INqCs",
    authDomain: "hackhardwarebu-8159b.firebaseapp.com",
    databaseURL: "https://hackhardwarebu-8159b-default-rtdb.firebaseio.com",
    projectId: "hackhardwarebu-8159b",
    storageBucket: "hackhardwarebu-8159b.appspot.com",
    messagingSenderId: "254650391814",
    appId: "1:254650391814:web:c1afa80c5656f92592d287",
    measurementId: "G-0DFM4EY9D2"

})

const auth = firebase.auth();
const firestore = firebase.firestore();

const signIn(){
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth.signInWithPopup(provider).then((userCredential) => {
        const user = userCredential.user;
        const isNewUser = userCredential.additionalUserInfo.isNewUser;
        if(isNewUser){
            setDefaultAutoSelectFamily(
                firestore.doc('users/' + user.uid),
                {
                    
                }
            )
        }
    })
}
