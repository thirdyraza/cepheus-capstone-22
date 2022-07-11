import React, { useEffect, useState } from "react"
import jwt from 'jsonwebtoken'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
    const [dept, setDept] = useState('')
    const [tempDept, setTempDept] = useState('')

    async function populateData(){
        const req = await fetch('http://localhost:2301/api/home', {
            headers: {
                'x-access-token': localStorage.getItem('token'),
            },
        })
        const data = await req.json()
        if(data.status === 'success'){
            setDept(data.dept)
        }else {
            alert(data.error)
        }
    }

    // verification of user token
    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            const user = jwt.decode(token)
            if (!user){
                localStorage.removeItem('token')
                navigate('/login')
            } else{
                populateData()
            }
        }
    })

    // update function
    async function updateDept(event) {        
        event.preventDefault()
        const req = await fetch('http://localhost:2301/api/home', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': localStorage.getItem('token'),
            },
            body: JSON.stringify({
                dept: tempDept,
            }),
        })
        const data = await req.json()
        if(data.status === 'success'){            
            setTempDept(data.dept) 
            setDept(data.dept)
                                   
        }else {
            alert(data.error)
        }
    }

    return(
        <div>
            <h1> department: {dept || 'No department found'} </h1>
            <form onSubmit={updateDept}>
                <input type= "text"
                placeholder="Department"
                value={tempDept}
                onChange = {e => setTempDept(e.target.value)} />
                <input type="submit" value="Department update" />
            </form>
        </div>
    )
}

export default Home