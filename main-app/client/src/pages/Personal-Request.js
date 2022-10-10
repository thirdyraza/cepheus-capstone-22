import TableHead from './TableHeading';
import UserTable from './TableContent';
import '../assets/scss/Table.scss';


function PersonalReq() {
  return (        

    <div className="app">
    <div id="home">
    <div class='container'>
  <div class='title' id='personal-req'>
      YOUR <div class='yellow'>REQUESTS</div>
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

export default PersonalReq