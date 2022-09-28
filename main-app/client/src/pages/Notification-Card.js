const NotificationCard = (props) => {
    const select=props.select;

    return ( 
        <div>
        {select.map((select)=>(
        <div className="notif-content">
                <div value={select.value} className="notif-indicator">
                <i class='bx bxs-circle' ></i>
                </div>
            
                <div className='notif-container'>
                    <i class='bx bxs-user-pin' ></i>
                    <div>
                        <p className="notif-name">{select.name}</p>
                        <p className="notif-subject">Subject: {select.subject} <br/> {select.type}</p>
                    </div>
                </div>

                <div className="notif-role">  
                    <p>Requestor</p>
                </div>

                <div className='notif-dt'>
                    <p>{select.date}</p>
                    <p>{select.time}</p>
                </div>

                <div className="btnDetails">
                    <button id="btnDetails">Details</button>
                </div>
            </div>
        ))}   
    </div>

     );
}
 
export default NotificationCard;