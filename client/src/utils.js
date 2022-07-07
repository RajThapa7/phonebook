import {app} from './firebase'
import {signInWithPopup, GoogleAuthProvider, getAuth  } from "firebase/auth";

const auth = getAuth(app);

  const signInWithGoogle= async ()=>{
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider).then(()=>{
        console.log('success');
    })
    
  }

 




  export {signInWithGoogle}