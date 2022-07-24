import SideNav from './Sidenav';
import '../global.scss';
import '../assets/scss/buildings.scss'
import bannerpic1 from '../assets/images/bannerpic1.jpg'


function BuildingCard() {
  return (
    <div className="bldgcard-container">
    {/* import css icon */}
    <link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet'></link>

    <div className="bldg-image">
        <img src="https://images.unsplash.com/photo-1584791097929-aa825fe8e1e1?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ"></img>
    </div>
    <div className="bldgcard-bottom">
        <div className="bldgcard-title">
            <div className="bldg-name">
                <p>#-BUILDING</p>
            </div>
            <div className="bldg-totalroom">
                <p># rooms</p>
            </div>

            <div className="btnSeeMore">
                <p>See more</p>
                <i class='bx bxs-right-arrow'></i>
            </div>
        </div>
        <div className="bottom-status">
            <div className="floors">
                <i class='bx bxs-circle' ></i>
                <p># floors</p>
            </div>

            <div className="available">
                <p># available</p>
                <i class='bx bxs-circle' ></i>
            </div>
        </div>
    </div>

</div>
  )
}


export default BuildingCard;