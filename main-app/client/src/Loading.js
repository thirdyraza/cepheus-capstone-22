import React from "react";
import logo from './assets/images/logo.png'
import './Loading.scss'

const Loading = () => {
    return(
        <div class="loading">
            <img src={logo} alt=""/>
            <h3>USL RESERVES</h3>
            <p>University of Saint Louis Tuguegarao</p>
        </div>
    )
}

export default Loading