import React from 'react'

function About() {
  return (
    <div className='about-1' >
      <div className='about-div' >
        <img className='about-img' src="about.png" alt="" />
        <div>
          <h1 className='about-text1' >Born in California over 75 years ago, Carl Karcher had a hot dog cart and a dream.
            The hot dog cart became Carl’s JR.® and Carl’s JR.® has become one of the premier burger brands in the 
            world, with over 3,800 restaurants in over 42 countries.
          </h1>

        </div>      
      </div>
        <div className='about-div'>
        <h1 className='about-text1' >We focus on fresh food made with only premium quality ingredients so that you can indulge in our big, 
            juicy burgers, hand-scooped real ice-cream shakes and hand-breaded chicken. All while you sit back and 
            relax as we bring food to your table with a smile as warm as the California sunshine.
          </h1>
          <img  className='about-img' src="about2.png" alt="" />
        </div>
    </div>
  )
}

export default About