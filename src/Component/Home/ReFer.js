import React from 'react'
import './refer.css'
import img22 from '../image/image22.png'
import group11 from '../image/group11.svg'


const ReFer = () => {
  return (
    <div>
      <div className="refers">
        <div className="left-prt-two">

          <h2>
            Refer & Earn with Houseowls: Your Path to Prosperity </h2>
          <p >Unlock rewards with Houseowls’ Refer & Earn program, offering a generous</p>
          {/* <img src={group11} alt="" /> */}
          <p className='group11'> <span style={{ color: 'white', fontWeight: '600', marginRight: '10px', paddingLeft: '15px', }}>₹ 20,000</span>   for each successful referral. Share the joy of finding the perfect
            home, and track the progress of your referrals with complete transparency.
            With Houseowls, turning connections into cash has never been easier or
            more rewarding

          </p>
        </div>
        <div className="right-prt-two">
          <img src={img22} alt="" />
        </div>
      </div>
    </div >
  )
}

export default ReFer