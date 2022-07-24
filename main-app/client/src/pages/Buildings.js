import React from 'react'
import '../global.scss';
import SideNav from './Sidenav';
import bannerpic1 from '../assets/images/bannerpic1.jpg'
import BuildingCard from './BuildingCard';

function Buildings() {
  return (
        <div className='app'>
            <link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet'></link>
            <div id='side'>
                <SideNav />
            </div>
            <div className='bldgcontent-container'>
                <div class='banner' style={{ backgroundImage: `url(${bannerpic1})` }}>
                    <p >FACILITIES</p>
                    <p class='louisian'>INFORMATION</p>
                </div>

            {/* Main Building */}

            <div className="bldg">
                    <div className="bldg-title">
                    <p id="bldg-title">Main Buildings</p>
                    <i class='bx bxs-circle' ></i>
                    <i class='bx bxs-circle' ></i>
                    <i class='bx bxs-circle' ></i>
                    </div>
                    <div className="bldg-row1">
                        <BuildingCard/>
                        <BuildingCard/>
                        <BuildingCard/>
                    </div>
                    <div className="bldg-row2">
                        <BuildingCard/>
                        <BuildingCard/>
                        <BuildingCard/>
                    </div>
            </div>

            {/* Misc */}
            <div className="bldg">
                    <div className="bldg-title">
                    <p id="bldg-title">Miscellaneous</p>
                    <i class='bx bxs-circle' ></i>
                    <i class='bx bxs-circle' ></i>
                    <i class='bx bxs-circle' ></i>
                    </div>
                    <div className="bldg-row1">
                        <BuildingCard/>
                        <BuildingCard/>
                        <BuildingCard/>
                    </div>
            </div>
            </div>
        </div>
    );
}

export default Buildings;