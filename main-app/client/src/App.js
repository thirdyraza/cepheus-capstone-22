import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoadingScreen from './Loading'
import Login from './pages/LogIn'
import Register from './pages/Register'
import Home from './pages/Home'


function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000)
  }, [])

  return (
    <>
    {loading === false ? (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <Login/> }></Route>
                <Route path='/register' element={ <Register/> }></Route>
                <Route path='/home' element={ <Home/> }></Route>
            </Routes>
        </BrowserRouter>
    </div>
      ) : (
        <LoadingScreen />
      )}
      </>
  );
}

export default App