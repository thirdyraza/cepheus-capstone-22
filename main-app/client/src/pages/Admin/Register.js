import React from "react";
import FormInput from "../../Components/FormInputs";
import AnchorBar from "../../Components/AnchorBar";

const RegisterAdmin = () => {


    const handleSubmit=(e) =>{
        e.preventDefault();
        
        const data = new FormData(e.target)
        console.log(Object.fromEntries(data.entries()))
    }

    return(

        <div>
        <div className="reg_container">
            <div className="regform_title">
                <h1>ACCOUNT</h1>
                <h1>REGISTRATION</h1>
                <h4>PLEASE ENTER USER CREDENTIALS</h4>
            </div>
                <form onSubmit={handleSubmit}>
                    <FormInput name="username" placeholder="Enter ID Number"/>
                    <FormInput name="email" placeholder="Email"/>
                    <FormInput name="fullname" placeholder="Full Name"/>
                    <FormInput name="sth" placeholder="Sth Else"/>
                    <div className="RegButton">
                        <button className="reg-button">Submit</button>
                    </div>
                </form>
        </div>
        </div>
    )
}

export default RegisterAdmin