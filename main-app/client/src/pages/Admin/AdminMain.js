import { Outlet } from "react-router";
import Sidenav_Admin from "./Sidenav_Admin";


const AdminMain = () => {
  return (

    <div className="app">
      <div id="side">
        <Sidenav_Admin/>
      </div>
      <div id="home">
        <Outlet/>
      </div>
    </div>
    
  );
}

export default AdminMain;