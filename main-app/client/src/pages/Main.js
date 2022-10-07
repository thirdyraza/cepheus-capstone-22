import { Outlet } from "react-router";
import Sidenav from './Sidenav_Admin'

const Main = () => {
  return (

    <div className="app">
      <div id="side">
      </div>
      <div id="home">
        <Outlet />
      </div>
    </div>
    
  );
}

export default Main;