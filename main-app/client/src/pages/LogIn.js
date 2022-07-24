import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../assets/scss/login.scss'
import logo from '../assets/images/logo.png'

function App() {
  const [idnum, setIDNum] = useState('')
  const [pass, setPass] = useState('')
  const navigate = useNavigate()

  const [errIdnum, setErrIdnum] = useState('')
  const [errPass, setErrPass] = useState('')
  const [errForm, setErrForm] = useState('')

  // user authentication
  async function loginUser(event){
    event.preventDefault()
    setErrIdnum('')
    setErrPass('')
    const response = await fetch('http://localhost:2301/api/login', {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        idnum,
        pass,
      }),
    })

    const data = await response.json()
    if(data.status === 'success'){ // user id is existing
      if(data.user){ // user credentials correct
        localStorage.setItem('token', data.user)
        navigate('/homepage')
      }
    }else if(data.status === 'unknownID'){
      setErrIdnum('User not Found')
    }else if(data.status === 'invalPass'){
      setErrPass('Incorrect Password')
    }
    else {
      setErrForm('Please Enter Your Credentials')
    }
  }

  return (
    <body>
      <div class="logo">
        <img src={logo} alt="" />
      </div>
      <div class="main-login">
        <div class="titling">
              <div class="biglogo">
                <img src={logo} alt="" />
              </div>

              <div class="texts">
                  <div class="bigtext">
                      <p>UNIVERSITY OF</p>
                      <p class="saint">SAINT LOUIS</p>
                  </div>
                  <div class="smalltext">
                      <p>Facility Reservation System</p>
                  </div>
              </div>
          </div>
        <div class="login-container">
          <div class="login-wrap">
            <div class="branding">
              <h1>SIGN-IN</h1>
              <p>PLEASE ENTER YOUR CREDENTIALS</p>
              {errForm && <div className="form-error"> {errForm} </div>}              
            </div>
            <form onSubmit={loginUser}>                  
              <div class="inputs-cont">
                <div class="login-inputs">
                  <label for="idnumber">ID Number</label>
                  <input
                  value = {idnum}
                  onChange = {(e) => setIDNum(e.target.value)}
                  type="text"
                  placeholder="Enter ID Number"
                  required
                  onInvalid={e => e.target.setCustomValidity('Please enter ID Number')}
                  onInput={e => e.target.setCustomValidity('')} />
                  <br />
                  {errIdnum && <div className="error"> {errIdnum} </div>}
                </div>
            
                <div class="login-inputs">
                  <label for="password">Password</label>
                  <input
                  value = {pass}
                  onChange = {(e) => setPass(e.target.value)}
                  type="password"
                  placeholder="Enter Password"
                  required
                  onInvalid={e => e.target.setCustomValidity('Please enter Password')}
                  onInput={e => e.target.setCustomValidity('')} />
                  <br />
                  {errPass && <div className="error"> {errPass} </div>}
                  <a href="/login">FORGOT PASSWORD?</a>
                </div>                
              </div>
              <input type="submit" class="login-button" value="SIGN IN" />
            </form>
                  
            </div>
          </div>
      </div>
    </body>
  );
}

export default App;
