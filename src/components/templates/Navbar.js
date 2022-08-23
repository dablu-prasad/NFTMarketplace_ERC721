

import { ethers } from 'ethers';
import {useState} from 'react';

const Navbar=()=>{
  const[accounts,setaccount]=useState();

  async function getAddress()
    {
      console.log("Hello")
      const [account]= await window.ethereum.request({ method: 'eth_requestAccounts' })
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      setaccount(account)
      //setbalance(balance.toString())
      disableBtn()
    }

    function disableBtn() {
      document.getElementById('btn').style.visibility = 'hidden';
  }

  return(
      <div>
     <nav className="navbar navbar-dark bg-dark">
   <div className="container-fluid">
     <a className="navbar-brand">Event Ticket Sell</a>
<div>

    <button class="btn btn-primary" id="btn" onClick={getAddress}>
    Connect Wallet
  </button>   
   
  </div>
 
      {/* <h5 className="navbar-brand">balance: {props.balance} {props.symbol}</h5>  */}
     <form className="d-flex"> 
       <h4 className="navbar-brand">account:{accounts}</h4>
     </form>
   </div>
 </nav>
      </div>
  )
 }
 
 export default Navbar;