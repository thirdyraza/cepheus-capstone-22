import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../assets/scss/home.scss';
import '../global.scss';
import bg from '../assets/images/bannerpic1.jpg';


function Home() {
 const navigate = useNavigate()

 async function onRegister(){
  navigate('/homepage/register')
 }
  return (
    <div class='content-container'>
      
      <div class='banner' style={{ backgroundImage: `url(${bg})` }}>
        <p >WELCOME</p>
        <p class='louisian'>LOUISIAN</p>
      </div>

      <div class='circles'>
        <div class='circle' id='active'></div>
        <div class='circle'></div>
        <div class='circle'></div>
        <div class='circle'></div>
      </div>
      {/* main func button */}
      <div class='main-cont'>
        <div class='mainbtn' onClick={onRegister}>
          <p>REGISTER A USER</p>
          <svg class="icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 368C269.3 368 280 357.3 280 344V280H344C357.3 280 368 269.3 368 256C368 242.7 357.3 232 344 232H280V168C280 154.7 269.3 144 256 144C242.7 144 232 154.7 232 168V232H168C154.7 232 144 242.7 144 256C144 269.3 154.7 280 168 280H232V344C232 357.3 242.7 368 256 368z"/></svg>
        </div>
      </div>

      {/* table */}
      <div class='requests'>
        <div className='request-title'>
          <p>Approved Schedule</p>
        </div>
        <div class="table-container">
          <div class="table">
            <div class="table-header">
              <div class="header__item"><a id="name" class="filter__link" href="#">Purpose</a></div>
              <div class="header__item"><a id="wins" class="filter__link filter__link--number" href="#">Date</a></div>
              <div class="header__item"><a id="draws" class="filter__link filter__link--number" href="#">Time</a></div>
              <div class="header__item"><a id="total" class="filter__link filter__link--number" href="#">Venue</a></div>
            </div>
            <div class="table-content">	
              <div class="table-row">		
                <div class="table-data">GDSC Seminar</div>
                <div class="table-data">05-07-22</div>
                <div class="table-data">3:00 pm - 4:30 pm</div>
                <div class="table-data">Computer Lab J-48</div>
              </div>
              <div class="table-row">
                <div class="table-data">LITES Competition</div>
                <div class="table-data">05-03-22</div>
                <div class="table-data">3:00 pm - 4:30 pm</div>
                <div class="table-data">Friendship Park</div>
              </div>
              <div class="table-row">
                <div class="table-data">Google Suites Seminar</div>
                <div class="table-data">04-30-22</div>
                <div class="table-data">3:00 pm - 4:30 pm</div>
                <div class="table-data">Computer Lab J-46</div>
              </div>
              <div class="table-row">
                <div class="table-data">GDSC Seminar</div>
                <div class="table-data">05-07-22</div>
                <div class="table-data">3:00 pm - 4:30 pm</div>
                <div class="table-data">Computer Lab J-48</div>
              </div>
              <div class="table-row">
                <div class="table-data">LITES Competition</div>
                <div class="table-data">05-03-22</div>
                <div class="table-data">3:00 pm - 4:30 pm</div>
                <div class="table-data">Friendship Park</div>
              </div>
            </div>	
          </div>
            <button class="button" role="button">See more ...</button>
        </div>
      </div>

      <div class='lvl2'>

        {/* contacts */}
        <link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet'></link>

        <div class='yourReqs'>
            <h2>Let's work together.</h2>
            <h3>Contact me for further queries or suggestions to improve our system. </h3>
            <div class="contact">
              <div class="contact-icon">
                <i class='bx bxs-envelope' ></i>
              </div>
              <div class="contact-info">
                <h3>TeamCepheus@usl.edu.ph</h3>
                <h6>Responds within 1-2 days</h6>
              </div>
          </div>

          <div class="contact">
              <div class="contact-icon">
                <i class='bx bxs-phone'></i>
              </div>
              <div class="contact-info">
                <h3>+63 9230824660</h3>
                <h6>Weekdays 7:00 AM to 7:00 PM,</h6>
                <h6>Weekends 9:00 AM to 6:00 PM</h6>
              </div>
          </div>

        </div>

        {/* Faqs */}
        <div className='nameCard-container'>
          <div class='nameCard'>
            <div className='faq-header'>
              <span>Q.</span>
              <p>How to Schedule a Facility?</p>
            </div>
            <div className='faq-content'>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
          </div>
          <div className='FAQS-button'>
            <p>VIEW ALL FAQS</p>
            <i class='bx bxs-message-square-detail' ></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home