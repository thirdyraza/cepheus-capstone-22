import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/LogIn'
import Register from './pages/Register'
import Home from './pages/Admin/Buildings'
import RegisterAdmin from './pages/Admin/Register'
import Buildings from './pages/Admin/Buildings'



const App = () => {
    return (<div>
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={ <Login/> }></Route>
                <Route path='/register' element={ <Register/> }></Route>
                <Route path='/home-admin' element={ <Home/> }></Route>
                <Route path='/register-admin' element={ <RegisterAdmin/> }></Route>
                <Route path='/buildings-admin' element={ <Buildings/> }></Route>

            </Routes>            
        </BrowserRouter>
    </div>)
}

export default App