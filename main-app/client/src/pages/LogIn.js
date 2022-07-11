import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function App() {
  const [idnum, setIDNum] = useState('')
  const [pass, setPass] = useState('')
  const navigate = useNavigate()

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
      navigate('/home')
    }else{
      alert('Wrong credentials')
    }
    console.log(data)
  }
  return (
    <body>
      {/* <div class="logo">
          <img src="../assets/images/logo.png" alt="" />
      </div> */}

      <div class="main">

          <div class="login-container">
              
              <div class="login-wrap">
                  <div class="branding">
                      <h1>SIGN-IN</h1>
                      <p> PLEASE ENTER YOUR CREDENTIALS</p>
                  </div>
                  <form onSubmit={loginUser}>                  
                    <div class="inputs-cont">
                        <div class="inputs">
                            <label for="fname">User ID</label>
                            <input
                            value = {idnum}
                            onChange = {(e) => setIDNum(e.target.value)}
                            type="text"
                            placeholder="ID Number" />
                            <br />
                        </div>
            
                        <div class="inputs">
                            <label for="fname">Password</label>
                            <input
                            value = {pass}
                            onChange = {(e) => setPass(e.target.value)}
                            type="password"
                            placeholder="Password" />
                            <br />
                        </div>
                  </div>
                  </form>
                      <input type="submit" class="button" value="SIGN IN" />
              </div>

          </div>

      </div>
    </body>
  );
}

export default App;
