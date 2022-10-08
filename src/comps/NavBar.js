import React, {useEffect, useState} from 'react'
import About from './About';
import roadmap from './Roadmap'

const NavBar = ({ accounts, setAccounts}) => {
  const isConnected = Boolean(accounts[0]);

  async function connectAccount() {
      if (window.ethereum) {
          const accounts = await window.ethereum.request({
              method: "eth_requestAccounts",
          });
          setAccounts(accounts);
      }
  }

  const walletAddress = accounts[0]

  return (
    <div className='navbar' >
        <img  className='cj-logo' src="cj-logo.svg" alt="" />
        <div className='nav-links' >
            <a className="about-title" href="/main" >Home</a>
            <a className="about-title" href="/about" >About</a>
            <a className="about-title" href="/roadmap" >Roadmap</a>
            <a className="about-title" href="/utility" >Utility</a>
        </div>
        {isConnected ? (
          <button className='button-1'>Connected: {walletAddress.substring(
            0,
            4
          )}...{walletAddress.substring(38)}</button>
        ) : (
          <button onClick={connectAccount} className='button-1' >
            Connect MetaMask
          </button>
        )}
    </div>
  )
}

export default NavBar