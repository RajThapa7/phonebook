import { onAuthStateChanged, getAuth } from 'firebase/auth'
import React from 'react'
import {app} from '../firebase'
import { signInWithGoogle } from '../utils'
import { useNavigate } from 'react-router-dom'

export default function Intro() {


    const navigate = useNavigate();
    const auth = getAuth(app);
onAuthStateChanged(auth, (user)=>{
    if(user){
      localStorage.setItem("token", user.getIdToken(true))
        navigate('/viewNumber')
        console.log(user);
    }
} )
  return (
    <>
    <button onClick={()=>{
        signInWithGoogle()}}>Sign in with Google</button>
    </>
  )
}
