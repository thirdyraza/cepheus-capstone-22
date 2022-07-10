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
    <div>
      <h1>Log In </h1>
      <form onSubmit={loginUser}>
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
        <input type="submit" value="Log In" />
      </form>
    </div>
  );
}

export default App;
