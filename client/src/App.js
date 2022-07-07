import React from 'react'
import {BrowserRouter as Router, Routes,Route, Switch} from 'react-router-dom'
import Intro from './components/intro'
import ViewNumber from './components/viewNumber'
import AddNumber from './components/addNumber'
export default function App() {
  return (
    <>
    <Router>

<Routes>
<Route path="/addNumber" element={<AddNumber/>}/>    
<Route path="/viewNumber" element={<ViewNumber/>}/>    
<Route path="/" element={<Intro/>}/>    
</Routes>
    </Router>
    </>
  )
}
