import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import PrivateRoutes from '../util/PrivateRoutes';

const UserType = () => {
    const [role, setRole] = useState('')
    const { auth } = useAuth()

    function setFacuType(event){
        setRole(event.target.value)
        return (
            auth?.user ? <PrivateRoutes/> : <Navigate to="/login" />
        );
    }
    function setStudType(event){
        setRole(event.target.value)
        return (
            auth?.user ? <PrivateRoutes/> : <Navigate to="/login" />
        );
    }
    function setAdminType(event){
        setRole(event.target.value)
        return (
            auth?.user ? <PrivateRoutes/> : <Navigate to="/login" />
        );
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