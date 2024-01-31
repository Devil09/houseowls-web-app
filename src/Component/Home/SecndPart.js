import React from 'react'
import img19 from '../image/image19.png'
import whyUs from './whyUs.css'
const SecndPart = () => {
    return (
        <div>
            <div className="second">
                <div className="right-prt-one">
                    <img src={img19} alt="" />
                </div>
                <div className="left-prt-one">
                    <h2>
                        Shortlist Your Favourite Properties
                    </h2>
                    <ul>
                        <li> <span style={{ color: 'black', fontWeight: 'bolder' }}><i>Time-Saving:</i></span> Saves users’ time by eliminating the need
                            to repeatedly search for the same properties</li>
                        <li><span style={{ color: 'black', fontWeight: 'bolder' }}><i>Personalized Experience:</i></span> Enhances user experience by
                            allowing the creation of customized lists based on preferences

                            or specific locations.</li>
                        <li><span style={{ color: 'black', fontWeight: 'bolder' }}> <i>Access to Last Viewed Properties:</i></span> Users can swiftly
                            resume their search, picking up right where they left off</li>

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SecndPart