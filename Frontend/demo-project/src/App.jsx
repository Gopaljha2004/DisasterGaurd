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
import Features from './Pages/Features'
import User from './Panels/User'
import Government from './Panels/Government'
import UserDashboard from './Components/Dashboard/UserDashboard'
import { useState } from 'react'
import GovernmentDasboard from './Components/Dashboard/GovernmentDasboard'


function App() {

  const [user, setUser] = useState(null);

  const saveUser = (userData) => {
    setUser(userData);
  };
  
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
        <Route path="/features" element={<Features></Features>} />
        <Route path='/government-panel' element={<Government></Government>} />
        <Route path="/user-panel" element={<User saveUser={saveUser}></User> } />
        {/* {user && <Route path="/user-dashboard" element={<UserDashboard user={user} />} />} */}
        <Route path='/user-dashboard' element={<UserDashboard user={user}></UserDashboard>} />
        <Route path='/government-dashboard' element={<GovernmentDasboard></GovernmentDasboard>} />
      </Routes>
    </div>
    </>
  )
}

export default App
