import React, { useState } from 'react';
import dollar from "../Assets/images/CurrencyDollar.png"
import jeep from "../Assets/images/Jeep.png"
import call from "../Assets/images/PhoneCall.png"
import note from "../Assets/images/Note.png"
import Browser from "../Assets/images/Browsers.png"
import varify from "../Assets/images/CircleWavyCheck.png"
import smile from "../Assets/images/lady for home2.png"
import finall from "../Assets/images/finally.png"
import rightarrow from "../Assets/images/uparrow.png"
import downarrow from "../Assets/images/downarrow.png"
import leftarrow from "../Assets/images/leftarrow.png"
import righarrow from "../Assets/images/rightarrow.png"
import "./Home.css";

const ScrollAble = () => {
  const [showFirstContent, setShowFirstContent] = useState(true);
  const [mainPositionClass, setMainPositionClass] = useState('mainpositiontop');
  const isSmallScreen = window.innerWidth <= 600;
  const handleButtonClick = () => {
    setShowFirstContent(!showFirstContent);
    setMainPositionClass(mainPositionClass === 'mainpositiontop' ? 'mainpositionbottom' : 'mainpositiontop');

  };


  return (
    <div className="scrollercontainer" >
      <div className="row mt-5">
        <div className="col-md-1 scroller   ">
          <div className='mainscroll' >
            <div className={mainPositionClass} >

            </div>
          </div>

          <button className="btn rightbutton1 mt-1 " onClick={handleButtonClick} style={{ borderRadius: "50%", backgroundColor: "black" }}>


            {
              isSmallScreen ? (
                mainPositionClass === "mainpositiontop" ? (
                  <img style={{  marginBottom: "10px" }} src={righarrow} alt="leftarrow" width="20px" />
                ) : (
                  <img style={{marginBottom: "10px" }} src={leftarrow} alt="downarrow" width="20px" />
                )
              ) : (
                mainPositionClass === "mainpositiontop" ? (
                  <img style={{ marginLeft: "-6px", marginBottom: "10px" }} src={downarrow} alt="leftarrow" width="20px" />
                ) : (
                  <img style={{ marginLeft: "-6px", marginBottom: "10px" }} src={rightarrow} alt="rightarrow" width="20px" />
                )
              )
            }



          </button>
        </div>
        <div className="col-md-6">
          <ul>
            {showFirstContent ? (
              <>
                <li className="d-flex border-bottom ">
                  <img src={note} alt="checked" width="25px" height="25px" /> &nbsp;&nbsp;&nbsp;
                  <div>
                    <span className="pointsheading2">Instante certificates of insurance</span>
                    <p className="smalltext2">We offer instant certificates of insurance for all your products and services. This means you can get the insurance coverage you need quickly and easily, without having to wait days or weeks to receive your certificate.</p>
                  </div>
                </li>
                <li className="d-flex border-bottom mt-2">
                  <img src={Browser} alt="checked" width="25px" height="25px" />  &nbsp;&nbsp;&nbsp;
                  <div>
                    <span className="pointsheading2">Shop with multiple insurance companies and 24/7 policy management</span>
                    <p className="smalltext2">We offer you the ability to purchase insurance with multiple insurance companies. This means you can compare offers from different insurers to find the best coverage and price for your needs.</p>
                  </div>
                </li>
                <li className="d-flex border-bottom mt-2">
                  <img src={varify} alt="checked" width="25px" height="25px" />  &nbsp;&nbsp;&nbsp;
                  <div>
                    <span className="pointsheading2">DOT Compliance assistance</span>
                    <p className="smalltext2">We offer DOT compliance assistance to help businesses comply with DOT regulations. Our team of experts can help you in the best way possible</p>
                  </div>
                </li>
              </>
            ) : (
              <>
                <li className="d-flex border-bottom ">
                  <img src={call} alt="checked" width="25px" height="25px" /> &nbsp;&nbsp;&nbsp;
                  <div>
                    <span className="pointsheading2">Connect with a live agent</span>
                    <p className="smalltext2">We offer the option to connect with a live agent 24/7.Our agents are experienced and qualified and are ready to help you with any questions or problems you may have.</p>
                  </div>
                </li>
                <li className="d-flex border-bottom mt-4">
                  <img src={jeep} alt="checked" width="25px" height="25px" />  &nbsp;&nbsp;&nbsp;
                  <div>
                    <span className="pointsheading2">Trucking industry especialists</span>
                    <p className="smalltext2">We have a team of experts with extensive experience in the sector, who are prepared to offer the best solutions to their customers' needs.</p>
                  </div>
                </li>
                <li className="d-flex border-bottom mt-4">
                  <img src={dollar} alt="checked" width="25px" height="25px" />  &nbsp;&nbsp;&nbsp;
                  <div>
                    <span className="pointsheading2">Competitive rates</span>
                    <p className="smalltext2">We offer competitive rates for all your products and services. Our commitment is to provide the best protection for our customers without compromising quality or value.</p>
                  </div>
                </li>
              </>
            )}
          </ul>
        </div>
        <div className="col-md-5" style={{ height: "" }}>
          {showFirstContent ? (
            <img width="100%" src={finall} alt="care" />
          ) : (
            <img width="100%" height="100%" src={smile} alt="care" />
          )}
        </div>

      </div>
    </div>
  );
};

export default ScrollAble;
