import TableHead from './TableHeading';
import UserTable from './TableContent';
import '../assets/scss/Table.scss';
import Sidenav_Admin from './Sidenav_Admin';


function ReqTable() {
  return (        

    <div className="app">
    <div id="side">
      <Sidenav_Admin/>
    </div>
    <div id="home">

    <div class='container'>
  <div class='title'>
      USER <div class='yellow'>REQUESTS</div>
  </div>
  <div class='switches'>
      <a href=''>Your Requests</a>
  </div>
  <div class='table-heading'>
      <TableHead/>
  </div>
  <div class='table-cell'>
      <req />
      <UserTable/>
      <UserTable/>
      <UserTable/>
      <UserTable/>
      <UserTable/>
  </div>
  <div class='buttons'>
      <a>Dummy</a>
      <a>Dummy</a>
      <a>Dummy</a>
  </div>
</div>
    </div>
  </div>
  
  )
}   

export default ReqTable