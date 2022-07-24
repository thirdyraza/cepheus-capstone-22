import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import '../assets/scss/register.scss'
import logo from '../assets/images/logo.png'

function App() {
  // declaring all data to be caught in the form
  const [fname, setFName] = useState('')
  const [lname, setLName] = useState('')
  const [idnum, setIDNum] = useState('')
  const [midi, setMidI] = useState('')
  const [pass, setPass] = useState('')
  const [role, setRole] = useState('')
  const [cpass, setCPass] = useState('')
  const [dept, setDept] = useState('')
  const [org, setOrg] = useState('')
  const SEAITE = [ "- - -", "PICE", "IIEE", "LITES", "UAPSA", "JIEEP", "LTL", "SSC", "CCA", "LUSC" ]
  const SABH = [ "- - -", "HOST", "JFINEX", "JPIA", "JMAH", "LTL", "SSC", "CCA", "LUSC" ]
  const SEAS = [ "- - -", "LIFE", "JAPS", "PSS", "CRIM", "LTL", "SSC", "CCA", "LUSC" ]
  const SHAS = [ "- - -", "LPSO", "LNSO", "LMTO", "LTL", "SSC", "CCA", "LUSC" ]

  const navigate = useNavigate()
  const changeSelectOptionHandler = (event) => {
    setDept(event.target.value);
  }

  // setting up error catches
  const [errFname, setErrFname] = useState('')
  const [errLname, setErrLname] = useState('')
  const [errIdnum, setErrIdnum] = useState('')
  const [errMidi, setErrMidi] = useState('')
  const [errPass, setErrPass] = useState('')
  const [errRole, setErrRole] = useState('')
  const [errCpass, setErrCpass] = useState('')
  const [errDept, setErrDept] = useState('')
  const [errOrg, setErrOrg] = useState('')
  const [errForm, setErrForm] = useState('')

  let underDept = null
  let orgs = null

  if (dept === 'SEAITE') {
    underDept = SEAITE
  } else if (dept === 'SABH') {
    underDept = SABH
  } else if (dept === 'SEAS') {
    underDept = SEAS
  } else if (dept === 'SHAS') {
    underDept = SHAS
  }

  if(underDept){
    orgs = underDept.map((e) => <option key={e}>{e}</option>)
  }

  // inserting data through a route + setting what to insert
  async function registerUser(event){
    event.preventDefault()
    setErrIdnum('')
    setErrPass('')
    setErrCpass('')
    setErrRole('')
    setErrFname('')
    setErrMidi('')
    setErrLname('')
    setErrDept('')
    setErrOrg('')
    setErrForm('')

    if(pass === cpass){
      setErrCpass('')
      setErrPass('')
      const response = await fetch('http://localhost:2301/api/register', {
        method: 'POST',
        headers:{
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fname,
          lname,
          midi,
          dept,
          org,
          idnum,
          pass,
          cpass,
          role
        }),
      })
      const data = await response.json()

      if(data.status === 'sameID'){
        setErrIdnum("ID Number is already taken")
      }else if(data.status === 'unPure'){
        setErrIdnum("ID Number must only be numbers")
      }else if(data.status === 'more5'){
        setErrIdnum("ID Number must be at least 5 digits")
      }else if(data.status === 'less8'){
        setErrIdnum("ID Number must be less than 8 digits")
      }else if(data.status === 'errFname'){
        setErrFname("First name should only contain letter")
      }else if(data.status === 'errMidi'){
        setErrMidi("Middle Initial should only contain letters")
      }else if(data.status === 'errLname'){
        setErrLname("Last name should only contain letters")
      }else if(role === '- - -'){
        setErrRole("Role cannot be empty")
      }else if(underDept === null){
        setErrDept("Department cannot be empty")
      }else if(orgs === null){
        setErrOrg("Organization cannot be empty")
      }else if(data.status === 'success'){
        navigate('/')
      }else{
        setErrForm(data.error)
        return
      }
    } else if (pass === ''){
      setErrPass("Password cannot be empty")
      return
    } else if (cpass === ''){
      setErrCpass("Please re-type your password")
      return
    } else{
      setErrCpass("Password do not match")
      setErrPass("Password do not match")
      return
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
                      {errForm && <div className="form-error"> {errForm} </div>}
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
                            placeholder="Enter ID Number"
                            required
                            onInvalid={e => e.target.setCustomValidity('Please enter ID Number')}
                            onInput={e => e.target.setCustomValidity('')}
                            />
                            <br />
                            {errIdnum && <div className="error"> {errIdnum} </div>}
                        </div>

                        <div class="reg-inputs">
                            <label for="pass">Password</label>
                            <input
                            id='pass' name="Pass"
                            value = {pass}
                            onChange = {(e) => setPass(e.target.value)}
                            type="password"
                            placeholder="Enter Password"
                            min={6}
                            required                            
                            onInvalid={e => e.target.setCustomValidity('Please enter Password')}
                            onInput={e => e.target.setCustomValidity('')} />
                            <br />
                            {errPass && <div className="error"> {errPass} </div>}
                        </div>
                        <div class="reg-inputs">
                            <label for="pass">Confirm Password</label>
                            <input
                            id='pass' name="Pass"
                            value = {cpass}
                            onChange = {(e) => setCPass(e.target.value)}                 
                            type="password"
                            placeholder="Re-type Password"
                            required
                            onInvalid={e => e.target.setCustomValidity('Please re-type password')}
                            onInput={e => e.target.setCustomValidity('')}  />
                            <br />
                            {errCpass && <div className="error"> {errCpass} </div>}
                        </div>

                        <div class="reg-inputs">
                            <label for="Role">Role</label>
                            <select
                            id="role" name="Role"
                            value = {role}
                            onChange = {(e) => setRole(e.target.value)}
                            required
                            type="text">
                              <option>- - -</option>
                              <option>Faculty</option>
                              <option>Student</option>
                            </select>
                            <br />
                            {errRole && <div className="error"> {errRole} </div>}
                        </div>

                        <div class="reg-inputs">
                            <label for="fname" >First Name</label>
                            <input
                            id="fname" name="FName"
                            value = {fname}
                            onChange = {(e) => setFName(e.target.value)}
                            type="text"
                            placeholder="Enter First Name"
                            required
                            onInvalid={e => e.target.setCustomValidity('Please enter First Name')}
                            onInput={e => e.target.setCustomValidity('')}  />
                            <br />
                            {errFname && <div className="error"> {errFname} </div>}
                        </div>
                        <div class="reg-inputs">
                            <label for="MI">Middle Initial</label>
                            <input
                            id="midi" name="MiddleInitial"
                            value = {midi}
                            onChange = {(e) => setMidI(e.target.value)}
                            type="text"
                            required
                            onInvalid={e => e.target.setCustomValidity('Please enter Middle Initial')}
                            onInput={e => e.target.setCustomValidity('')}
                            placeholder="Enter Middle Initial"
                            maxLength={2}
                            />
                            <br />
                            {errMidi && <div className="error"> {errMidi} </div>}
                        </div>
                        <div class="reg-inputs">
                            <label for="lname">Last Name</label>
                            <input
                            id="lname" name="LName"
                            value = {lname}
                            onChange = {(e) => setLName(e.target.value)}
                            type="text"
                            placeholder="Enter Last Name"
                            required
                            onInvalid={e => e.target.setCustomValidity('Please enter Last Name')}
                            onInput={e => e.target.setCustomValidity('')}  />
                            <br />
                            {errLname && <div className="error"> {errLname} </div>}
                        </div>

                        <div className='reg-select'>           
                          <div class="reg-inputs">
                              <label for="Dept">Department</label>
                              <select
                              id="dept" name="Department"
                              value = {dept}
                              onChange={changeSelectOptionHandler}
                              type="text"
                              required
                              placeholder="Enter Department">
                                <option>- - -</option>
                                <option>SEAITE</option>
                                <option>SABH</option>
                                <option>SEAS</option>
                                <option>SHAS</option>
                              </select>
                              <br />
                              {errDept && <div className="error"> {errDept} </div>}
                          </div>

                          <div class="reg-inputs">
                              <label for="Org">Organization</label>
                              <select id="org" name="Organization"
                              onChange = {(e) => setOrg(e.target.value)}
                              type="text"
                              placeholder="Enter Organization">
                                {orgs}
                              </select>
                              {errOrg && <div className="error"> {errOrg} </div>}
                          </div>
                        </div>  

                    </div>
                      <input type="submit" class="reg-button" value="REGISTER"/>
                      {errForm && <div className="form-error"> {errForm} </div>}
                  </form>

            </div>
          </div>

      </div>
    </div>
  </body>
  );
}

export default App;
