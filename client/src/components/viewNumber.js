// import { signout } from 'firebase/auth'
import {  getAuth } from 'firebase/auth'
import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import {app} from '../firebase'
export default function ViewNumber() {
  const [data, setData] = useState('');
  useEffect(()=>{
    async function fetchData(){
      try {
        const url = "http://localhost:5000/phone"
        await axios.get(url, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          }
        }).then((res)=> setData(res.data))
      } catch (error) {
        console.log(error);
      }
    } 
  }, [])
    const navigate = useNavigate();
    const auth =  getAuth(app)
    const signOut = async ()=>{
        await auth.signOut();
        navigate('/')
    }
    console.log(`data ${data}`);
  return (
    <>
    <h3>view number</h3>
    <button onClick={()=>navigate('/addNumber')}>Add number</button>
    <button onClick={signOut}>sign out</button>
    <p>{data}</p>
    </>
  )
}
