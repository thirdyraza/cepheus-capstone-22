import React, { useEffect, useState } from "react"
import jwt from 'jsonwebtoken'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
    const [fname, setFName] = useState('')
    const [lname, setLName] = useState('')
    const [idnum, setIDNum] = useState('')
    const [midi, setMidI] = useState('')
    const [dept, setDept] = useState('')
    const [org, setOrg] = useState('')

    // fetching data through a route + setting what to fetch
    async function populateData(){
        const req = await fetch('http://localhost:2301/api/home', {
            headers: {
                'x-access-token': localStorage.getItem('token'),
            },
        })
        const data = await req.json()
        if(data.status === 'success'){
            setIDNum(data.idnum)
            setFName(data.fname)
            setMidI(data.midi)
            setLName(data.lname)
            setOrg(data.org)
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

    return(
        <div>
            <h1> ID Number: {idnum || 'No ID Number found'} </h1>
            <h1> First Name: {fname || 'No First Name found'} </h1>
            <h1> Middle Initial: {midi || 'No Middle Initial found'} </h1>
            <h1> Last Name: {lname || 'No Last Name found'} </h1>
            <h1> Organization: {org || 'No Organization found'} </h1>
            <h1> Department: {dept || 'No Department found'} </h1>
        </div>
    )
}

export default Home