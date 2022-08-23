import React from 'react';
import { useNavigate } from "react-router-dom";
const Menu=()=>{
const navigate=useNavigate();
    const navSellAsset=()=>{navigate('/sell_digital_asset')}
    const navMyAsset=()=>{navigate('/my_digital_asset')}
    const navdashboard=()=>{navigate('/create_dashboard')}
    const navHome=()=>{navigate('/')}
    const navconnect=()=>{navigate('/walletconnect')}
    return(
      <div className='App'>
<div className="d-flex justify-content-center padding-top">

<button type="button" className="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top" onClick={navSellAsset}>
  Create Event
</button>
<button type="button" className="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top" onClick={navHome}>
  Events DashBoard
</button>
{/* <button type="button" className="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top" onClick={navMyAsset}>
  My Event Ticket
</button> */}
{/* <button type="button" className="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top" onClick={navdashboard}>
  Events DashBoard
</button> */}
</div>

</div>

    )
    
}

export default Menu;