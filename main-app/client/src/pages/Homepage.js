import SideNav from './Sidenav';
import Home from './Home';
import '../global.scss';


function Homepage() {
  return (
    <div class='app'>
      <div id='side'>
        <SideNav />
      </div>
      <div id='home'>      
         <Home />
      </div>
    </div>
  );
}//app end

export default Homepage;