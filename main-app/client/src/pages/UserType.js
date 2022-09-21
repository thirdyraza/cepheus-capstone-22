import React, { useState } from "react";
import { useNavigate } from "react-router";

const UserType = () => {
    const [role, setRole] = useState('')
    const navigate = useNavigate()

    function setFacuType(event){
        setRole(event.target.value)
        navigate('/user')
    }
    function setStudType(event){
        setRole(event.target.value)
        navigate('/user')
    }
    function setAdminType(event){
        setRole(event.target.value)
        navigate('/admin')
    }
    return(
        <div className="type-cont">
            <div>
                <div className="type-btns">
                    <button id="facu" onClick={setFacuType} value="Faculty">faculty</button>
                    <h1>FACULTY</h1>
                </div>
                <div className="type-btns">
                    <button id="stoff" onClick={setStudType} value="StudOff">officer</button>
                    <h1>STUDENT OFFICER</h1>
                </div>
                <div className="type-btns">
                    <button id="admin" onClick={setAdminType} value="Admin">admin</button>
                    <h1>ADMIN</h1>
                </div>

                <div>
                    Role: {role}
                </div>
            </div>
        </div>
    )
}

export default UserType