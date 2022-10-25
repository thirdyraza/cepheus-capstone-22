import TableHead from '../TableHeading';
import UserTable from '../TableContent';
import '../../assets/scss/Table.scss';


function ReqTable() {
  return (        

    <div className="app">
    <div id="home">
    <div class='container'>
  <div class='title'>
      USER <div class='yellow'>REQUESTS</div>
  </div>
  <div class='switches'>
      <a href='/admin-home/personal-req' id='requestlink'>Your Requests</a>
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
      <UserTable/>
  </div>

</div>
    </div>
  </div>
  
  )
}   

export default ReqTable