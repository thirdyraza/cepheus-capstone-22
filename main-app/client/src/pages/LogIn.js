import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../assets/scss/login.scss'
import logo from '../assets/images/logo.png'

function App() {
  const [idnum, setIDNum] = useState('')
  const [pass, setPass] = useState('')
  const navigate = useNavigate()

  // user authentication
  async function loginUser(event){
    event.preventDefault()
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
    if(data.user){
      localStorage.setItem('token', data.user)
      navigate('/register')
    }else{
      alert('Wrong credentials')
    }
    console.log(data)
  }

  return (
    <body>
      <div class="logo">
        <img src={logo} alt="" />
      </div>
      <div class="main-login">
        <div class="login-container">
          <div class="login-wrap">
            <div class="branding">
              <h1>SIGN-IN</h1>
              <p> PLEASE ENTER YOUR CREDENTIALS</p>
            </div>
            <form onSubmit={loginUser}>                  
              <div class="inputs-cont">
                <div class="login-inputs">
                  <label for="fname">ID Number</label>
                  <input
                  value = {idnum}
                  onChange = {(e) => setIDNum(e.target.value)}
                  type="text"
                  placeholder="Enter ID Number" />
                  <br />
                </div>
            
                <div class="login-inputs">
                  <label for="password">Password</label>
                  <input
                  value = {pass}
                  onChange = {(e) => setPass(e.target.value)}
                  type="password"
                  placeholder="Enter Password" />
                  <br />
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
