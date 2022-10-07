import React from 'react'

function Main() {

  return (
    <div className='main-1' >
        <h1 className='main-name' >Burger Punks NFT</h1>
        <h1 className='main-name-des' >
            Celebrate 81 years of Carl's Junior with 8,881 deliciously uniquely generated NFTs. 
            Gain levels and upgrade your NFT each time you dine. If your NFT reaches level 10, you
            might want to keep a lookout. There might be surprises.
        </h1>
        <div  className='main-2' >
            <img  className='main-logo' src="burger.png" alt="" />
            <div className='main-steps' >
                <h1 className='main-des' >Step 1: Dine at any Carl's Jr. outlet.</h1>
                <h1 className='main-des' >Step 2: Connect your polygon wallet.</h1>
                <h1 className='main-des' >Step 3: Enter the code on your reciept.</h1>
                <h1 className='main-des' >Step 4: Mint/upgrade NFT.</h1>
            </div>
        </div>

    </div>
  )
}

export default Main