import { useEffect } from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/LogIn'

import UserType from './pages/UserType';
import UserHome from './pages/Home-User';
import Landing from './pages/Landing';
import SettingPopup from './pages/SettingPopup';



// Admin Pages
import Main from './pages/Admin/Main';
import MainForm from './pages/Admin/MainForm';
import Register from './pages/Admin/Register'
import AdminHome from './pages/Admin/Home-Admin';
import Notification from './pages/Admin/Notifications';
import DetailedNotifications from './pages/Admin/Detailed-Notification';
import UserManagement from './pages/Admin/User-Management';
import Archived from './pages/Admin/archived';
import AdminsManagement from './pages/Admin/admins';
import RequestorManagement from './pages/Admin/requestor';
import ReqTable from './pages/Admin/user-req-table';


function App() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false), 3000)
  }, []) 

  return (
    <div>
        <Router>
            <Routes>
              <Route path='/' element={<Landing />}></Route>
                {/* public routes */} 
                <Route path='login' element={ <Login /> }></Route>
                <Route path='user-type' element={ <UserType /> }></Route>
                <Route path='register' element={ <Register /> }></Route>  

                {/* private routes */}
                  <Route path='home' element={ <Main /> }>
                    <Route path='request-details' element={ <DetailedNotifications /> }></Route>
                    <Route path='user' element={<UserHome />}></Route>
                    <Route path='admin' element={<AdminHome />}></Route>   
                    <Route path='user-manage' element={<UserManagement />}></Route> 
                    <Route path='archived' element={<Archived/>}></Route>  
                    <Route path='admins' element={<AdminsManagement/>}></Route> 
                    <Route path='requestor' element={<RequestorManagement/>}></Route> 
                    <Route path='request-list' element={<ReqTable />}></Route>
                  </Route>
                  <Route path='notifications' element={<Notification />}></Route>
                  <Route path='reserve' element={<MainForm />}></Route>
                  <Route path='settings' element={ <SettingPopup/> }></Route>  

                <Route path='/' element={ <Login/> }></Route>                
                <Route path='/homepage/register' element={ <Register/> }></Route>
            </Routes>
        </Router>
    </div>
  );
}

export default App