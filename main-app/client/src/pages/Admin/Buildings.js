import React from "react";
import { ReactDOM } from "react";
import BldgCard from "../../Components/bldgCard";


const Buildings = () => 
{
    return(
            <div className="bldgcontent-container">
                <div className="bldgheader">
                    <img src="#"></img>
                </div>
                <h1>FACILITIES INFORMATION</h1>
                {/* Main Building */}
                <div className="bldg">
                    <div className="bldg-title">
                    <p id="bldg-title">Main Buildings</p>
                    <i class='bx bxs-circle' ></i>
                    <i class='bx bxs-circle' ></i>
                    <i class='bx bxs-circle' ></i>
                    </div>
                    <div className="bldg-row1">
                        <BldgCard/>
                        <BldgCard/>
                        <BldgCard/>
                    </div>
                    <div className="bldg-row2">
                        <BldgCard/>
                        <BldgCard/>
                        <BldgCard/>
                    </div>
                </div>

                {/* Miscellaneous Building */}
                <div className="bldg">
                    <div className="bldg-title">
                    <p id="bldg-title">Miscellaneous</p>
                    <i class='bx bxs-circle' ></i>
                    <i class='bx bxs-circle' ></i>
                    <i class='bx bxs-circle' ></i>
                    </div>
                    <div className="bldg-row1">
                        <BldgCard/>
                        <BldgCard/>
                        <BldgCard/>
                    </div>
                </div>
            </div>
    )
}

export default Buildings