import React, {useEffect, useState} from 'react'

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
            <h1>Home</h1>
            <h1>About</h1>
            <h1>Roadmap</h1>
            <h1>Utility</h1>
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