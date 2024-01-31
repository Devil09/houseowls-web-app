import React from 'react'
import img1 from '../image/img1.png'
import './footer.css'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'

const FooTer = () => {
  return (
    <div>
      <div className="footer-main">
        <div className="footer">
          <div className="footer-left-thr">
            <img src={img1} alt="" />
            <p>Houseowls is an upcoming and innovative player in the real estate technology sector. Positioned to stand out in a competitive market, Houseowls is poised to offer a fresh and unique approach to property buying. What sets Houseowls apart is their emphasis on leveraging video content to enhance the property search experience</p>
          </div>
          <div className="footer-right-thr">
            <p>
              DISCOVER HOUSEOWLS
            </p>
            <NavLink to='/' style={{ textDecoration: 'none' }}>
              <p>
                Home
              </p>
            </NavLink>
            <NavLink to='/contact-us' style={{ textDecoration: 'none' }}>
              <p>
                Contact Us
              </p>
            </NavLink>
          </div>

        </div>
        <hr />
        <div className="down-footer">
          <div className="left">
            <p>@ 2023 Houseowls. All rights reserved.</p>
          </div>
          <div className="right">
            <ul>

              <NavLink to='/privacy' style={{ textDecoration: 'none' }}>
                <li className='policy'>
                  Privacy Policy
                </li>
              </NavLink>
              <NavLink to='terms' style={{ textDecoration: 'none', }}>
                <li>
                  Term & Condition
                </li>
              </NavLink>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooTer;