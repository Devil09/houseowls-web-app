import React from 'react'
import NavBar from './NavBar.js'
import BanNer from './BanNer.js'
import DownLoad from './DownLoad.js'
import FeatUre from './FeatUre.js';
import SecndPart from './SecndPart.js';
import ReFer from './ReFer.js';

const Main = () => {
  return (
    <div className='home'>
{/* <NavBar /> */}
    <BanNer />
    <DownLoad />
    {/* <WhyUs /> */}
    <FeatUre />
    <SecndPart />
    <ReFer />
  

    </div>
  )
}

export default Main