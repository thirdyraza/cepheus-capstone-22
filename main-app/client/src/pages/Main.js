import { Outlet } from "react-router";
import Sidenav from './Sidenav'

const Main = () => {
  return (
    <>
      <div className="app">
        <div id="side">
          <Sidenav />
        </div>
        <div id="home">
          <Outlet />
        </div>
      </div>
    </>
    
  );
}

export default Main;