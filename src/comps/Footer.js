import React from 'react'

function Footer() {
  return (
    <div className='footer' >
      <a href='/main' className='footer-tags' >Home</a>
      <a href='/about' className='footer-tags'>About</a>
      <img className='footer-logo' src="cj-logo-white.png" alt="" />
      <a href='/roadmap' className='footer-tags'>Roadmap</a>
      <a href='/utility' className='footer-tags'>Utility</a>
    </div>
  )
}

export default Footer