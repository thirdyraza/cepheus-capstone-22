import ADMIN from '../assets/images/ADMIN.png';
import FACULTY from '../assets/images/FACULTY.png';
import STUDENT from '../assets/images/STUDENT.png';

import '../assets/scss/popup.scss'

function closePopup(){
    document.getElementById('popup_container').style.cssText = 'display:none';
    document.getElementById('close').style.cssText = 'display:none';
    document.getElementById('open_popup').style.cssText = 'opacity: 100%';
}
function openPopup(){
    document.getElementById('popup_container').style.cssText = 'display:flex';
    document.getElementById('close').style.cssText = 'display:flex';
    document.getElementById('open_popup').style.cssText = 'display:hidden';
}

const User_Popup = () => {
    return ( 
    <div class="testing-popup">
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'/>

        <div id='open_popup'class='open' onClick={openPopup}>
           <h3>Login</h3>
        </div>


        <div id='popup_container' onClick={closePopup}>
            <div id="User_Popup">
                <div id='close' class='p_close' onClick={closePopup}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/></svg>
                </div>
                    <h1>SELECT USER TYPE</h1>
                    <div className="UserType">
                        <div className="UserAdmin">
                            <img src={ADMIN}/>
                            <h2>ADMIN</h2>
                        </div>

                        <div className="UserStudent">
                            <img src={STUDENT}/>
                            <h2>STUDENT</h2>
                        </div>

                        <div className="UserFaculty">
                            <img src={FACULTY}/>
                            <h2>FACULTY</h2>    
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default User_Popup;