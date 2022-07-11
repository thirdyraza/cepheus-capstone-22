import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import '../assets/scss/register.scss'
import logo from '../assets/images/logo.png'

function App() {
  const [fname, setFName] = useState('')
  const [lname, setLName] = useState('')
  const [idnum, setIDNum] = useState('')
  const [midi, setMidI] = useState('')
  const [pass, setPass] = useState('')
  const [dept, setDept] = useState('')
  const [org, setOrg] = useState('')
  const navigate = useNavigate()

  // inserting data through a route + setting what to insert
  async function registerUser(event){
    event.preventDefault()
    const response = await fetch('http://localhost:2301/api/register', {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fname,
        lname,
        dept,
        org,
        idnum,
        pass,
      }),
    })

    const data = await response.json()

    if(data.status === 'success'){
      navigate('/login')
    }
  }

  return (
  <body>
    <div>
      <div class="logo">
          <img src={logo} alt="" />
      </div>
      <div class="main-reg">
          <div class="reg-container">
            <div class="reg-wrap">
                  <div class="reg-branding">
                      <h1>ACCOUNT</h1>
                      <h1>REGISTRATION</h1>
                      <p> PLEASE ENTER USER CREDENTIALS</p>
                  </div>
                  <form onSubmit={registerUser}>
                    <div class="reg-inputs-cont">
                        <div class="reg-inputs">
                            <label for="idnum">ID Number</label>                        
                            <input
                            id='idnum' name="IDNum"
                            value = {idnum}
                            onChange = {(e) => setIDNum(e.target.value)}
                            type="text"
                            placeholder="Enter ID Number" />
                            <br />
                        </div>
                        <div class="reg-inputs">
                            <label for="pass">Password</label>
                            <input
                            id='pass' name="Pass"
                            value = {pass}
                            onChange = {(e) => setPass(e.target.value)}
                            type="password"
                            placeholder="Enter Password" />
                            <br />
                        </div>
                        <div class="reg-inputs">
                            <label for="fname" >First Name</label>
                            <input
                            id="fname" name="FName"
                            value = {fname}
                            onChange = {(e) => setFName(e.target.value)}
                            type="text"
                            placeholder="Enter First Name" />
                            <br />
                        </div>
                        <div class="reg-inputs">
                            <label for="MI">Middle Initial</label>
                            <input
                            id="midi" name="MiddleInitial"
                            value = {midi}
                            onChange = {(e) => setMidI(e.target.value)}
                            type="text"
                            placeholder="Enter Middle Initial" />
                            <br />
                        </div>
                        <div class="reg-inputs">
                            <label for="lname">Last Name</label>
                            <input
                            id="lname" name="LName"
                            value = {lname}
                            onChange = {(e) => setLName(e.target.value)}
                            type="text"
                            placeholder="Enter Last Name" />
                            <br />
                        </div>                        
                        <div class="reg-inputs">
                            <label for="Dept">Department</label>
                            <input
                            id="dept" name="Department"
                            value = {dept}
                            onChange = {(e) => setDept(e.target.value)}
                            type="text"
                            placeholder="Enter Department" />
                            <br />
                        </div>
                        <div class="reg-inputs">
                            <label for="Org">Organization</label>
                            <input
                            id="org" name="Organization"
                            value = {org}
                            onChange = {(e) => setOrg(e.target.value)}
                            type="text"
                            placeholder="Enter Organization" />
                            <br />
                        </div>

                        {/* <div class="dropdowns">
                            <label for="Org">Organization</label>
                            <select name="org" id="org">
                                <option value="default">SELECT ORGANIZATION</option>
                                <option value = {org="LITES"}
                                onChange = {(e) => setOrg(e.target.value)}
                                >LITES</option>
                                <option value = {org="HOSTS"}
                                onChange = {(e) => setOrg(e.target.value)}
                                >PICE</option>
                                <option value = {org="SSC"}
                                onChange = {(e) => setOrg(e.target.value)}
                                >SSC</option>
                            </select>
                            
                            <label for="MI">Department</label>
                            <select name="dept" id="dept">
                            <option value="default">SELECT DEPARTMENT</option>
                              <option value = {dept="SEAITE"}
                              onChange = {(e) => setDept(e.target.value)}
                              >SEAITE</option>
                              <option value = {dept="SABH"}
                              onChange = {(e) => setDept(e.target.value)}
                              >SABH</option>
                              <option value = {dept="SEAS"}
                              onChange = {(e) => setDept(e.target.value)}
                              >SEAS</option>
                            </select>
                          </div> */}

                    </div>
                      <input type="submit" class="reg-button" value="REGISTER"/>
                  </form>

            </div>
          </div>

      </div>
    </div>
  </body>
  );
}

export default App;
