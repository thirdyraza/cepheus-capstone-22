import FACULTY from '../assets/images/FACULTY.png'
import '../assets/scss/popup.scss'
import { Link } from 'react-router-dom';

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

const Setting_Popup = () => {
    return ( 
        <div className='testing-popup'>

            <div id='popup_container' onClick={closePopup}>
                <div className='settings_popup'>
                    <div id='close' class='p_close' onClick={closePopup}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/></svg>
                    </div>
                    <div className='settings_header'>
                        <img src={FACULTY}/>
                        <span className='bold'>User Name</span>
                        <p>User Type</p>
                    </div>
                    <div className='settings_body'>
                        <Link id='btnChange' className='btnSettings'>
                            <div>Account Settings</div>
                        </Link>
                        <Link to="/login" id='btnLogout' className='btnSettings'>
                            <div>Log-out</div>
                        </Link>
                    </div>
                </div>
            </div>
            </div>

     );
}
 
export default Setting_Popup;