import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/LogIn'
import Register from './pages/Register'
import Home from './pages/Home'

const App = () => {
    return (<div>
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={ <Login/> }></Route>
                <Route path='/register' element={ <Register/> }></Route>
                <Route path='/home' element={ <Home/> }></Route>
            </Routes>            
        </BrowserRouter>
    </div>)
}

export default App