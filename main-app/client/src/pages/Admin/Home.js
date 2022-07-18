import React from "react";
import { ReactDOM } from "react";
import AnchorBar from "../../Components/AnchorBar";



const HomeAdmin = () => 
{
    return(
            <div class="container">
                <AnchorBar/>
                <div class="image_header">
                </div>
                <div class="btn_container">
                    <button class="button-58" role="button">RESERVE A FACILITY </button>
                    <div class="btnreserve"><i class="fa-solid fa-circle-plus"></i></div>
                </div>
                <div class="schedule">
                    <div class="header">
                        <p>Schedule Requests</p>
                    </div>
                    <div class="content">
                        <table class="styled-table">
                            <thead>
                                <tr>
                                    <th>Activity</th>
                                    <th>Date</th>
                                    <th>Time</th>
                                    <th>Venue</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Dummy</td>
                                    <td>Dummy</td>
                                    <td>Dummy</td>
                                    <td>Dummy</td>
                                </tr>
                                <tr >
                                    <td>Dummy</td>
                                    <td>Dummy</td>
                                    <td>Dummy</td>
                                    <td>Dummy</td>
                                </tr>
                                <tr>
                                    <td>Dummy</td>
                                    <td>Dummy</td>
                                    <td>Dummy</td>
                                    <td>Dummy</td>
                                </tr>
                                <tr >
                                    <td>Dummy</td>
                                    <td>Dummy</td>
                                    <td>Dummy</td>
                                    <td>Dummy</td>
                                </tr>
                                <tr class>
                                    <td>See more ...</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="bldg_container">
                    <div>
                    <h1>BUILDING INFORMATION</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                    <div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <button>See more</button>
                    </div>
                    <img src="#"/>
                </div>
                    <div class="contact_container">
                    <h1>Let's work together</h1>
                    <p>Contact me for further queries or suggestions to improve our system.</p>
                    <div class="email_container">
                        <i class="fa-solid fa-messages"></i>
                        <h3>TeamCepheus@usl.edu.ph</h3>
                        <p>Responds within 1-2 days</p>
                    </div>
                    <div class="phone_container">
                        <i class="fa-solid fa-phone"></i>
                        <h3>+63 9230824660</h3>
                        <p>Weekdays 7:00 AM to 7:00 PM,</p>
                        <p>Weekends 9:00 AM to 6:00 PM</p>
                    </div>
                </div>
                <div class="faq_container">
                    <div class="faq_header">
                        <div class="Q">Q.</div>
                        <h2>How to  schedule a facility?</h2>
                    </div>
                    <div class="faq_content">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
        
                    <div class="btnfaqs">
                        <p>VIEW ALL FAQS</p>
                        <i class="fa-solid fa-comments-question-check"></i>
                    </div>
                </div>
        
                {/*  footer  */}
                <div class="footer">
                    <div class="footer_links">
                        <a>ABOUT US</a>
                        <a>CONTACT US</a>
                        <a>SUPPORT</a>
                        <a>RESOURCES</a>
                    </div>
                    <div class="icons">
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-youtube"></i>
                        <i class="fa-brands fa-linkein"></i>
                    </div>
                    <div class="footer_info">
                        <div class="info1">
                            <a>Terms of Use</a>
                        </div>
                        <div class="info2">
                            <p>© 2022 University of Saint Louis Tuguegarao. All Rights Reserved.</p>
                        </div>
        
                    </div>
                </div>
            </div>
    )
}

export default HomeAdmin