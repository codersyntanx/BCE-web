import "./Home.css";
import React, { Component } from "react";
import medal from "../Assets/images/Medal.png"
import rectangal from "../Assets/images/Rectangle 34627069.png"

import checkshield from "../Assets/images/ShieldCheck.png"

import dollar from "../Assets/images/CurrencyDollar.png"
import jeep from "../Assets/images/Jeep.png"
import call from "../Assets/images/PhoneCall.png"
import trucker from "../Assets/images/this section.png"
import greencheck from "../Assets/images/CircleWavyCheck (1).png"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Sponsorslider from "./Sponsorslider"

import ScrollAble from "./ScrollAble";
import Testonomials from "./Testonomials";
import Educate from "./Educate";



function Home () {

 
  return (
    <>
      <div className="container herosection  " >
        <div className="row">
          <div className="col-md-5">
            <div className="homebuttons">
               <buton className="homebutton p-2  " >
              Complete Protrction
            </buton>
            <buton className="homebutton p-2 mx-2 " >
              24 hours Assistance
            </buton>
            </div>
           
            <h2 className="mt-4 headertext">
              <b>The Easiest Way To Buy And Manage Trucking Insurance</b>
             
            </h2>
            <p className="herotext" style={{ fontSize: "small", color: "grey" }}>Talk to our experts and get all your questions<br></br> answered and get a no-obligation quote</p>
            <img className="lineimage" src={rectangal} alt="image" width="50px" />


            <div className="container portfolio">
              <div className="row">
                <div className="col-md-4">
                  <span className="partner">+100</span>
                  <span className="newpart" style={{ fontSize: "small", color: "grey" }}><br></br>
                    Partner insurance companies
                  </span>
                </div>
                <div className="col-md-4">
                  <span className="partner">+200</span>
                  <span style={{ fontSize: "small", color: "grey" }}><br></br>
                    Satisfied customers
                  </span>
                </div>
                <div className="col-md-4">
                  <span className="partner">+500</span>
                  <span style={{ fontSize: "small", color: "grey" }}><br></br>
                    Positive reviews on Facebook      </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2"></div>
         
          <div className="col-md-5  col-sm-12">
                  <div class="p-3 px-4 contactfoamer" >
    <h5 className="text-dark"><b>Get a quote right now</b></h5>
    <span style={{color:"grey"}}>Sign up and our team will contact you to provide your quote</span>
 
  <div className="form mt-4 maincard2 mx-auto border-bottom" style={{width:"98%" }}>
                 <input className="form-control mb-3 signupinputs" type="text" placeholder="Your Name" aria-label="Your Name"/>
                 <input className="form-control mb-3 signupinputs" type="text" placeholder="E-mail" aria-label="E-mail"/>
                 <input className="form-control mb-3 signupinputs" type="number" placeholder="Phone number" aria-label="default input example"/>

                 <button className="btn btn-dark customerbutton" style={{width:"100%"}}>I want to be a customer</button>
                 <p className=" mt-3 conditiontext">By submitting your data, you authorize us to contact you, To find out more, see our <u>Privacy policy</u></p>

                 </div>
                 <div className="d-flex align-items-center mt-2 ">
                  <img src={checkshield} width="25px" alt="check"/> &nbsp; 
                  <b style={{fontSize:"small",color:"black"}}>Your data is safe with us</b>
                 </div>
 
</div>
                  </div>
          </div>
        </div>

   
      <div className="homebody ">
        <Sponsorslider />
        <div className="text-center mx-auto mt-5" style={{width:"85%"}}>
          <span className="smalltext">The best insurance companies are with us</span>
          <h3 className="heading"><b>Get Instant Quotes Online Today!</b></h3>
          <img src={rectangal} alt="image" />

          <p className="topicdescription">Get in touch with an expert who can guide you through the intricacies<br></br> of trucking insurance and leverage a contemporary platform to<br></br> increase the efficiency of your business.</p>
        </div>

        <div className="container">
         <ScrollAble/>
        </div>

        <div className="trucking">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-4 imgcontainer" >
              </div>
              <div className="col-md-8 px-5 ">
                <p className="mt-3" style={{ fontSize: "20px" }}>Talk to a trucking insurance specialist</p>
                <p style={{ fontSize: "small", color: "grey" }}>Our in-house team includes former truckers who understand the challenges of the industry.<br></br> Reach out today for dedicated support from an agent who specializes in truck insurance.</p>
                <div className=" phoneboxcon mt-4">
                  <div className="phonebox pb-0 mt-3">
                    <i class="fa-solid fa-phone"></i><br></br>
                    <span className="smalltext text-light">Talk to us by Phone</span><br></br>
                    <span>(301) 591 - 6550</span>
                  </div>
                  <div className=" phonebox2 mt-3">
                    <i class="fa-regular fa-envelope-open"></i><br></br>
                    <span className="smalltext text-light">Talk to us by Email</span><br></br>
                    <span>operations@bceins.com</span>
                  </div>
                </div>
                <div className="mt-5 d-flex align-items-center mb-3">
      <img src={medal} alt="medal" width="25px"/> &nbsp;&nbsp;      <span style={{fontSize:"small"}}>
        Have the best insurance in your hands right now,
        <b>Get your quote <i className="fa-solid fa-arrow-right"></i></b>
      </span>
    </div>


              </div>
            </div>
          </div>
        </div>
        <div className="container" style={{width:"85%"}}>
          <div className="row " style={{marginTop:"80px"}}>
            <div className="col-md-4 listitem">
              <div style={{ marginLeft: "40px" }}>
                <span style={{fontSize:"10px"}} className="customtexttag">The best insurance companies are with us</span>
                <h5 className="cente"><b>How our platform works</b></h5>
                <img className="customtextce" src={rectangal} alt="image" />

                <p style={{ fontSize: "small", color: "grey" }}>Watch the video and understand why<br></br> thousands of people are already using our<br></br> services and are protected</p>
              </div>
              <ul>
                <li className="d-flex align-items-center border-bottom mt-5 pb-3">
                  <img src={call} alt="checked" width="25px" height="25px" /> &nbsp; &nbsp;
                  <div className="mb-2">
                    <b>Connect with a live agent</b>
                  </div>


                </li>
                <li className="d-flex align-items-center border-bottom mt-4 pb-3">
                  <img src={jeep} alt="checked" width="25px" height="25px" />  &nbsp; &nbsp;
                  <div className="mb-2">
                    <b>Trucking industry especialists</b>
                  </div>


                </li>
                <li className="d-flex align-items-center mt-4 pb-3">
                  <img src={dollar} alt="checked" width="25px" height="25px" />  &nbsp;
                  <div className="mb-2">
                    <b>Competitive rates</b>
                  </div>


                </li>
              </ul>
            </div>
            <div className="col-md-7">
              <img width="100%" src={trucker} alt="care" />
            </div>

          </div>

        </div>
        <div className="text-center mx-auto mt-5" style={{width:"85%"}}>
                        <span style={{fontSize:"small",color:"grey"}}>Bolanos Commercial Enterprise Platform</span>
<h3 ><b>Quote. Purchase. Manage.</b></h3>
<img src={rectangal} alt="image" />

<p style={{fontSize:"small",color:"grey"}}>The BCE Trucking platform enhances your speed and efficiency when it comes to managing your trucking<br></br> insurance. It stands out as the sole digital trucking insurance platform that allows you to compare quotes, buy<br></br> policies, and stay connected with your agent, all within a single, convenient location.</p>
                    </div>
  
 

<div className="container">
  <Educate/>
</div>


      
    
    
    <Testonomials/>
      </div>
    </>
  )
}
export default Home