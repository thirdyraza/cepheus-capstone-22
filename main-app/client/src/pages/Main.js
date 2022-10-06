import { Outlet } from "react-router";
import Sidenav from './Sidenav_User'

const Main = () => {
  return (

    <div className="app">
      <div id="side">
        <Sidenav />
      </div>
      <div id="home">
        <Outlet />
      </div>
    </div>
    
  );
}

export default Main;