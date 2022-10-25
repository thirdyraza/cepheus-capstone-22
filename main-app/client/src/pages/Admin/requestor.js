import TableHead from '../TableHeading';
import UserTable from '../TableContent';
import '../../assets/scss/user-management.scss';

function RequestorManagement() {
    return (
        <div className="app">
        <div id="home">
        <div class='container'>
            <div class='title'>
                REQUESTOR <div class='yellow'>ACCOUNTS</div>
            </div>

            <div class='search'>
                <input placeholder='Search By ID'></input>
                <div class='search-icon'></div>
            </div>

            <div class='switches'>
                <a href='/admin-home/requestor'>Requestors</a>
                <a href='/admin-home/admins'>Admins</a>
                <a href='/admin-home/archived'>Archived</a>
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


export default RequestorManagement;