import logo from '../assets/images/logo.png'
import '../assets/scss/landing.scss'
import signin_img from '../assets/images/signin_img.svg';
import { useNavigate } from 'react-router-dom';

const Landing = () => {

    const navigate  = useNavigate()

    function Signin(){
        navigate('login')
    }

    return (
        <>
            <div className='landing-main'>
                <div>
                    <div className='landing-nav'>
                    <img src={logo}/>
                        <ul className='l-nav'>
                            <li>TERMS OF USE</li>
                            <li>FAQS</li>
                            <li>USL WEBSITE</li>
                        </ul>
                    </div>
                    <div className='landing-content'>
                        <div className='landing-left'>
                            <h1>SIGN-IN</h1>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                            <button onClick={Signin}>SIGN-IN</button>
                        </div>
                        <div className='landing-right'>
                            <img src={signin_img}/>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
        
    );
}
 
export default Landing;