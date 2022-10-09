import TableHead from '../TableHeading';
import UserTable from '../TableContent';
import '../../assets/scss/Table.scss';
import Sidenav_Admin from '../Admin/Sidenav_Admin';

function AdminsManagement() {
    return (
        <div className="app">
        <div id="side">
            <Sidenav_Admin/>
        </div>
        <div id="home">
        <div class='container'>
            <div class='title'>
                APPROVING <div class='yellow'>ADMINS</div>
            </div>

            <div class='search'>
                <input placeholder='Search By ID'></input>
                <div class='search-icon'></div>
            </div>

            <div class='table-heading'>
                <TableHead/>
            </div>
            <div class='table-cell'>
                <UserTable/>
                <UserTable/>
                <UserTable/>
                <UserTable/>
                <UserTable/>
            </div>
            <div class='buttons'>
                <div>ARCHIVE</div>
                <div>UPDATE USER</div>
                <div>ADD USER</div>
            </div>
        </div>
        </div>
      </div>
        
    );
}


export default AdminsManagement;