import '../../assets/scss/Detailed-Notifications.scss'
import { Link } from 'react-router-dom';
import Sidenav_Admin from './Sidenav_Admin';

const DetailedNotifications = () => {
    return ( 
        <div class='app'>
            <div id="side">
                <Sidenav_Admin/>
            </div>
            <div id='home' class="RD-Container">
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Reem+Kufi+Ink&display=swap');
                </style>

                <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'/>
                
                <Link to="/notifications" id="btnBack" className="RD-Btns">
                    <i class='bx bx-arrow-back' ></i>
                    <p>Back</p>
                </Link>

                {/* RD Heading */}
                <div className="RD-Header">
                    <h3>REQUEST DETAILS</h3>
                    <div id='RStatus1' className="RStatus">
                        <p className="pending">PENDING</p> 0/2
                    </div>
                    <div id='RStatus2' className="RStatus">
                        <p className="pending">PENDING</p> 1/2
                    </div>
                    <div id='RStatus3' className="RStatus">
                        <p className="pending">REQUEST APPROVED</p>
                    </div>
                </div>

                {/* Divider */}
                <hr class="solid"/>

                {/* RD Content */}
                <div classname="Status">
                    <div className="RDC-Header">
                        <div className="RDC-Details">
                            <i id="Request_Icon"class='bx bxs-universal-access'/>
                            
                            <div className="r_name">
                                <div>
                                    <p>Andrei Louis C. Pagalilauan</p>  
                                    <p id="r_deptrole">SEAITE Department | Student Officer</p>
                                </div>
                                <div className="r_email">
                                    <i class='bx bx-envelope'/>
                                    <p>1302281@usl.edu.ph</p>
                                </div>

                            </div>
                        </div>

                        <div className="r_right">
                            <p>September 27, 2022</p>
                            <i class='bx bxs-info-square'></i>
                        </div>
                    </div>

                    <div className="RDC-Body">
                        <div>
                            <p>SUBJECT: Facility Request for Remedial Class</p>
                        </div>
                        <div>
                            <p className="b_title">PURPOSE:</p>
                            <p>To whom it may concern, <br/>

                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                            The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. 
                            Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web 
                            sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>        
                        </div>
                    </div>
                </div>

                
                {/* RD Additional Content */}
                <div>
                    <div className="RDA-Header">
                        <div>REQUEST OVERVIEW</div>
                        <div id="btnAttached" class="RD-Btns">Attached Files<i class='bx bx-download'/></div>
                    </div>
                    <div className="RDA-Body">
                        <p>Building: J-Building</p>
                        <p>Room: J-28</p>
                        <p>Requested Date: November 10, 2022</p>
                        <p>Time: 9:00-10:30 AM</p>
                    </div>
                </div>
                
                {/* RD Buttons */}
                <div id="btnCancel" class="RD-Btns">
                    <p>Cancel Request</p>
                    <i class='bx bxs-x-circle'/>
                </div>
            </div>
        </div>
     );
}
 
export default DetailedNotifications;