import React, {useState} from 'react'
import { ethers } from 'ethers';


function NavBar() {

  const connectWallet = async() => {
    if(typeof window != "undefined" && typeof window.ethereum != "undefined")
      try{
        /* metamask is installed */
        const accounts = await window.ethereum.request({method: "eth_requestAccounts"});
        console.log(accounts[0]);
      } catch(err) {
        console.err(err.message);
      } else {
        /* metamask is not installed */
        console.log("Please install metamask");
      }
  }

  return (
    <div className='navbar' >
        <img  className='cj-logo' src="cj-logo.svg" alt="" />
        <div className='nav-links' >
            <h1>Home</h1>
            <h1>About</h1>
            <h1>Roadmap</h1>
            <h1>Utility</h1>
        </div>
        <button onClick={connectWallet} className='button-1' >Connect Wallet</button>
    </div>
  )
}

export default NavBar