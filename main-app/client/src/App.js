import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoadingScreen from './util/Loading'
import Login from './pages/LogIn'
import Register from './pages/Register'
import UserType from './pages/UserType';
import Main from './pages/Main';
import UserHome from './pages/Home-User';
import AdminHome from './pages/Home-Admin';
import Backbone from './util/Backbone';
import RequireAuth from './util/RequireAuth';

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000)
  }, [])

  return (
    <>
    {loading === false ? (
    <div>
        <Router>
            <Routes>
              <Route path='/' element={<Backbone />}>

                {/* private routes */}
                <Route element={<RequireAuth/>}>
                  <Route path='/' element={ <Main/> }>
                    <Route path='home:user' element={<UserHome />}></Route>
                    <Route path='home:admin' element={<AdminHome />}></Route>                  
                  </Route>
                </Route>            

                {/* public routes */} 
                <Route path='login' element={ <Login/> }></Route>
                <Route path='user-type' element={ <UserType/> }></Route>
                <Route path='register' element={ <Register/> }></Route>
              
              </Route>
            </Routes>
        </Router>
    </div>
      ) : (
        <LoadingScreen />
      )}
      </>
  );
}

export default App