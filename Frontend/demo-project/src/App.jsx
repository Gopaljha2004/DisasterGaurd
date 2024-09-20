import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from "./Components/Navbar"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Disaster from "./Pages/Disaster"

import Contact from './Pages/Contact'
import Blogs from './Pages/Blogs'
import Signup from './Pages/Signup'
import Login from './Pages/Login'


function App() {
  
  return (
    <>
    <div>
      <Navbar></Navbar>

      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/about' element={<About></About>} />
       <Route path='/contact' element={<Contact />} / >
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/disaster' element={<Disaster />} />
        <Route path='/signup' element={<Signup></Signup>} />
        <Route path='/login' element={<Login></Login>}  />
      </Routes>
    </div>
    </>
  )
}

export default App
