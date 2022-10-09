import TableHead from '../TableHeading';
import UserTable from '../TableContent';
import '../../assets/scss/user-management.scss';
import Sidenav_Admin from '../Admin/Sidenav_Admin';

function Archived() {
    return (
        <div className="app">
        <div id="side">
            <Sidenav_Admin/>
        </div>
        <div id="home">
        <div class='container'>
            <div class='title'>
                ARCHIVED <div class='yellow'>MANAGEMENT</div>
            </div>

            

            <div class='search'>
                <input placeholder='Search By ID'></input>
                <div class='search-icon'></div>
            </div>

            <div class='table-heading'>
                <TableHead />
            </div>
            <div class='table-cell'>
                <UserTable />
                <UserTable />
                <UserTable />
                <UserTable />
                <UserTable />
            </div>
            <div class='buttons'>
                <a>RESTORE USER</a>
                <a>DELETE</a>
            </div>
        </div>
        </div>
      </div>
        
    );
}

export default Archived;