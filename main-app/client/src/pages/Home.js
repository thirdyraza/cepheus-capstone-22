import React, { useEffect, useState } from "react"
import jwt from 'jsonwebtoken'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
    const [dept, setDept] = useState('')

    async function populateData(){
        const req = await fetch('http://localhost:2301/api/home', {
            headers: {
                'x-access-token': localStorage.getItem('token'),
            },
        })

        const data = req.json()
        if(data.status === 'success'){
            setDept(data.dept)
        }else {
            alert(data.error)
        }
    }
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
    return(
        <div>
            <h1> department: {dept || 'No department found'} </h1>
        </div>
    )
}

export default Home