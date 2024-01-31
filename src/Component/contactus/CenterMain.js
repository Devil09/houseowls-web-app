import React from 'react'
import  rectangle from  '../image/rectangle.png'
import phoneicon1 from '../image/phoneicon1.svg'
import bxlinstagramalt from '../image/bxlinstagramalt.svg'
import email1 from '../image/email1.svg'
import locationpin1 from '../image/locationpin1.svg'
import './centermain.css'

const CenterMain = () => {

  return (
    <div>

        <div className="upper-one">
            <img src={rectangle} alt="" />
        </div>
        <div className="down-one">
                <div className="box-one" >
                    <div className="box-one-half  box1">
                        .
<img src={phoneicon1} alt="" />
<p> +91 7999 095 132 </p>
                    </div>
                    <div className="box-one-full box1">
<img src={bxlinstagramalt} alt="" />
<p>@houseowls_official</p>
                    </div>
                </div>
                <div className="box-two box2 " >
                    <img src={email1} alt="" />
<p>team@houseowls.in</p>
                </div>
                <div className="box-three box3">
                    <img src={locationpin1} alt="" />
               <p>HD-033 at, WeWork Vi-John Tower,

393, Phase III, Udyog Vihar, Sector 19,

Gurugram, Haryana 122016</p> 
                </div>
        </div>
        </div>
  )
}

export default CenterMain