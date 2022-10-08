import React, {useState} from 'react'
import { ethers, BigNumber } from 'ethers';
import burgerPunksNFT from './BurgerPunksNFT.json'

const burgerPunksNFTAddress = "0x5c96B84199d7f91FD204c76917e249fCF2150f1a";

const Main = ({ accounts, setAccounts }) => {
  const [mintAmount, setMintAmount] =useState(1);
  const isConnected = Boolean(accounts[0]);



  async function handleMint() {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
          burgerPunksNFTAddress,
          burgerPunksNFT.abi,
          signer
      );
      try {
          const response = await contract.mint(BigNumber.from(mintAmount), {
              value: ethers.utils.parseEther((0.0001 * mintAmount).toString()),
          });
          console.log('response: ', response);
      }   catch (err) {
          console.log("error: ", err)
      }
    }
  }

  return (
    <div className='main-1' >
        <h1 className='main-name' >Burger Punks NFT</h1>
        <h1 className='main-name-des' >
            Celebrate 81 years of Carl's Junior with 8,881 deliciously uniquely generated NFTs. 
            Gain levels and upgrade your NFT each time you dine. If your NFT reaches level 10, you
            might want to keep a lookout. There will be surprises.
        </h1>
        <div  className='main-2' >
            <img  className='main-logo' src="burger.png" alt="" />
            {isConnected ? (
              <div className='main-code-box' >
                <h1 className='main-enter-code' >Enter unique code at the bottom of your reciept.</h1>
                <input className='main-input' />
                <button className='button-3' onClick={handleMint} >Mint / upgrade NFT</button>
                <h1 className='main-warning' >*Only one NFT is mintable per wallet</h1>
              </div>
             ) : (
              <div className='main-steps' >
                  <h1 className='main-des' >Step 1: Dine at any Carl's Jr. outlet.</h1>
                  <h1 className='main-des' >Step 2: Connect your polygon wallet.</h1>
                  <h1 className='main-des' >Step 3: Enter the code on your reciept.</h1>
                  <h1 className='main-des' >Step 4: Mint/upgrade NFT.</h1>
              </div>
            )}
        </div>
    </div>
  )
}

export default Main