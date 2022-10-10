import { useEffect } from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/LogIn'

import UserType from './pages/UserType';
import Landing from './pages/Landing';
import SettingPopup from './pages/SettingPopup';
import DetailedNotifications from './pages/Detailed-Notification';
import MainForm from './pages/MainForm';
import NotificationsPage from './pages/Notifications';

// Admin Pages
import AdminMain from './pages/Admin/AdminMain';
import Register from './pages/Admin/Register'
import AdminHome from './pages/Admin/Home-Admin';
import UserManagement from './pages/Admin/User-Management';
import Archived from './pages/Admin/archived';
import AdminsManagement from './pages/Admin/admins';
import RequestorManagement from './pages/Admin/requestor';
import ReqTable from './pages/Admin/user-req-table';
import PersonalReq from './pages/Personal-Request';

// Requestor Pages
import UserHome from './pages/User/Home-User';
import UserMain from './pages/User/UserMain';



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
                  <Route path='reserve' element={<MainForm />}></Route>
                  <Route path='settings' element={ <SettingPopup/> }></Route>  


                {/* Admin Routes */}
                  <Route path='admin-home' element={ <AdminMain /> }>
                    <Route path='admin' element={<AdminHome />}></Route>   
                    <Route path='user-manage' element={<UserManagement />}></Route> 
                    <Route path='archived' element={<Archived/>}></Route>  
                    <Route path='admins' element={<AdminsManagement/>}></Route> 
                    <Route path='requestor' element={<RequestorManagement/>}></Route> 
                    <Route path='request-list' element={<ReqTable />}></Route>
                    <Route path='reserve' element={<MainForm />}></Route>
                    <Route path='request-details' element={ <DetailedNotifications /> }></Route>
                    <Route path='notifications' element={ <NotificationsPage/> }></Route>  
                    <Route path='personal-req' element={ <PersonalReq/> }></Route>  
                    <Route path='register' element={ <Register /> }></Route>  
                  </Route>

                {/* Requestor Routes */}
                  <Route path='user-home' element={ <UserMain /> }>
                    <Route path='user' element={<UserHome />}></Route>
                    <Route path='reserve' element={<MainForm />}></Route>
                    <Route path='request-list' element={<ReqTable />}></Route>
                    <Route path='request-details' element={ <DetailedNotifications /> }></Route>
                    <Route path='notifications' element={ <NotificationsPage/> }></Route>  
                    <Route path='personal-req' element={ <PersonalReq/> }></Route>  
                  </Route>
            </Routes>
        </Router>
    </div>
  );
}

export default App