import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

function App() {
  const [fname, setFName] = useState('')
  const [lname, setLName] = useState('')
  const [idnum, setIDNum] = useState('')
  const [pass, setPass] = useState('')
  const navigate = useNavigate()

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
    <div>
      <h1>REGISTER</h1>
      <form onSubmit={registerUser}>
        <input
        value = {fname}
        onChange = {(e) => setFName(e.target.value)}
        type="text"
        placeholder="First Name" />
        <br />
        <input
        value = {lname}
        onChange = {(e) => setLName(e.target.value)}
        type="text"
        placeholder="Last Name" />
        <br />
        <input
        value = {idnum}
        onChange = {(e) => setIDNum(e.target.value)}
        type="text"
        placeholder="ID Number" />
        <br />
        <input
        value = {pass}
        onChange = {(e) => setPass(e.target.value)}
        type="password"
        placeholder="Password" />
        <br />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
}

export default App;
