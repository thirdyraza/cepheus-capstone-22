import React from 'react'
import { Link } from 'react-router-dom';

import '../../assets/scss/home.scss';
import '../../global.scss';
import bg from '../../assets/images/bannerpic1.jpg';

import TableHead from '../TableHeading';
import UserTable from '../TableContent';

export default function userDashboard() {
  return (
    <div className="app">
      <div id="home">
        <div class='content-container'>
          <div class='home-banner' style={{ backgroundImage: `url(${bg})` }}>
            <p >WELCOME</p>
            <p class='louisian'>LOUISIAN</p>
          </div>

          {/* Dashboard button */}
          <div class='main-cont'>
            <Link to='/admin-home/reserve'class='mainbtn'>
              <p>RESERVE FACILITY</p>
              <svg class="icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 368C269.3 368 280 357.3 280 344V280H344C357.3 280 368 269.3 368 256C368 242.7 357.3 232 344 232H280V168C280 154.7 269.3 144 256 144C242.7 144 232 154.7 232 168V232H168C154.7 232 144 242.7 144 256C144 269.3 154.7 280 168 280H232V344C232 357.3 242.7 368 256 368z"/></svg>
            </Link>
            <Link to='/admin-home/register'class='mainbtn'>
              <p>REGISTER USER</p>
              <svg class="icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 368C269.3 368 280 357.3 280 344V280H344C357.3 280 368 269.3 368 256C368 242.7 357.3 232 344 232H280V168C280 154.7 269.3 144 256 144C242.7 144 232 154.7 232 168V232H168C154.7 232 144 242.7 144 256C144 269.3 154.7 280 168 280H232V344C232 357.3 242.7 368 256 368z"/></svg>
            </Link>
          </div>

        <div class='requests'>

          <div id='ownreq' class='user-req'>
            <h1>YOUR REQUESTS</h1>
              <TableHead />
              <UserTable/>
              <UserTable/>
              <UserTable/>
              <UserTable/>  
            <div class='more'>See more ...</div>
          </div>

          <div id='otherreq' class='user-req'>
            <h1>USER REQUESTS</h1>
              <TableHead />
              <UserTable/>
              <UserTable/>
              <UserTable/>
              <UserTable/> 
              <div class='more'>See more ...</div> 
          </div>


          </div>
        </div>
      </div>
    </div>

  );
}//app end
