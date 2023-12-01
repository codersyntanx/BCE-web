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
      <div className="container herosection pt-5 " style={{width:"85%"}}>
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
           
            <h2 className="mt-4">
              <b>The Easiest Way To Buy<br></br> And Manage Trucking Insurance</b>
             
            </h2>
            <p className="herotext" style={{ fontSize: "small", color: "grey" }}>Talk to our experts and get all your questions<br></br> answered and get a no-obligation quote</p>
            <img src={rectangal} alt="image" width="50px" />


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
         
          <div className="col-md-5 contactfoamer col-sm-12">
                  <div class="p-3 px-4 rounded"style={{backgroundColor:"white",position:"relative",top:"5%", boxShadow:"0 2px 4px rgba(0,0,0,.1)"}} >
    <h5 className="text-dark"><b>Get a quote right now</b></h5>
    <span style={{color:"grey"}}>Sign up and our team will contact you to provide your quote</span>
 
  <div className="form mt-4 maincard2 mx-auto border-bottom" style={{width:"98%" }}>
                 <input className="form-control mb-3 signupinputs" type="text" placeholder="Your Name" aria-label="Your Name"/>
                 <input className="form-control mb-3 signupinputs" type="text" placeholder="E-mail" aria-label="E-mail"/>
                 <input className="form-control mb-3 signupinputs" type="number" placeholder="Phone number" aria-label="default input example"/>

                 <button className="btn btn-dark" style={{width:"100%"}}>I want to be a customer</button>
                 <p className=" mt-3 smalltext">By submitting your data, you authorize us to contact you, To find out more, see our <u>Privacy policy</u></p>

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
          <h3><b>Get Instant Quotes Online Today!</b></h3>
          <img src={rectangal} alt="image" />

          <p style={{fontSize:"small",color:"grey"}}>Get in touch with an expert who can guide you through the intricacies<br></br> of trucking insurance and leverage a contemporary platform to<br></br> increase the efficiency of your business.</p>
        </div>

        <div className="container">
         <ScrollAble/>
        </div>

        <div className="trucking">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-4 imgcontainer" style={{ height:"350px"}}>
                {/* <img src={truckdrive} width="100%" height="350px" alt="trucsite" /> */}
              </div>
              <div className="col-md-8 px-5">
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
                <div className="mt-5 d-flex align-items-center">
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


      {/* <div className="container-fluid mx-auto "  style={{width:"95%"}}>
        <div className="row justify-content-center mt-3" style={{gap:"20px"}}>
          <div className="col-md-3 p-3 educate"  >
         <h1 style={{fontWeight:"700"}}>1</h1>
         <b>Educate</b>
         <div className="mt-3">
<span  style={{fontSize:"small",color:"grey"}}>
         Access valuable educational resources<br></br> shared by industry veterans who are<br></br> former trucking company owners.
         </span>

         </div>
         
         <div className="d-flex mt-5 align-items-center ">
          <img src={greencheck} width="30px" alt="check"/> &nbsp; <span style={{fontWeight:"bold",fontSize:"small"}}>Implement top safety measures</span>
         </div>
         <div className="d-flex mt-3  align-items-center">
         <img src={greencheck} width="30px" alt="check"/> &nbsp; <span style={{fontWeight:"bold",fontSize:"small"}}>Implement top safety measures</span>
         </div>
         <div className="d-flex mt-3  align-items-center">
         <img src={greencheck} width="30px" alt="check"/> &nbsp; <span style={{fontWeight:"bold",fontSize:"small"}}>Implement top safety measures</span>
         </div>
          </div>
          <div className="col-md-3 p-3 educate "  >
         <h1 style={{fontWeight:"700"}}>2</h1>
         <b>Quote</b>
         <div className="mt-3">
<span  style={{fontSize:"small",color:"grey"}}>
Have it on hand  the best quotes shared by industry veterans who are former trucking company owners.         </span>

         </div>
         
         <div className="d-flex mt-5 align-items-center">
          <img src={greencheck} width="30px" alt="check"/> &nbsp; <span style={{fontWeight:"bold",fontSize:"small"}}>Get a quote within 5 minutes</span>
         </div>
         <div className="d-flex mt-3  align-items-center">
         <img src={greencheck} width="30px" alt="check"/> &nbsp; <span style={{fontWeight:"bold",fontSize:"small"}}>Explore options with numerous carriers</span>
         </div>
         <div className="d-flex mt-3  align-items-center">
         <img src={greencheck} width="30px" alt="check"/> &nbsp; <span style={{fontWeight:"bold",fontSize:"small"}}>Buy only what’s essential for your needs</span>
         </div>
          </div>
          <div className="col-md-3 p-3 educate align-items-center"  >
         <h1 style={{fontWeight:"700"}}>3</h1>
         <b>Purchase</b>
         <div className="mt-3">
<span  style={{fontSize:"small",color:"grey"}}>
Acquire insurance that offers top-notch coverage at the most competitive rate, and you can always reach out to our knowledgeable agents         </span>

         </div>
         
         <div className="d-flex mt-5 align-items-center">
          <img src={greencheck} width="30px" alt="check"/> &nbsp; <span style={{fontWeight:"bold",fontSize:"small"}}>Purchase coverage using our flexible payment choices</span>
         </div>
         <div className="d-flex mt-3  align-items-center">
         <img src={greencheck} width="30px" alt="check"/> &nbsp; <span style={{fontWeight:"bold",fontSize:"small"}}>Obtain competitive rates tailored to your situation</span>
         </div>
         <div className="d-flex mt-3  align-items-center">
         <img src={greencheck} width="30px" alt="check"/> &nbsp; <span style={{fontWeight:"bold",fontSize:"small"}}>Secure coverage that permits you to collaborate with any broketr.</span>
         </div>
          </div>
        </div>
        <div className="justify-content-center align-items-center d-flex mt-4"style={{fontSize:"small"}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
  <path d="M16 22.5C21.5228 22.5 26 18.0228 26 12.5C26 6.97715 21.5228 2.5 16 2.5C10.4772 2.5 6 6.97715 6 12.5C6 18.0228 10.4772 22.5 16 22.5Z" stroke="#002244" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M16 18.5C19.3137 18.5 22 15.8137 22 12.5C22 9.18629 19.3137 6.5 16 6.5C12.6863 6.5 10 9.18629 10 12.5C10 15.8137 12.6863 18.5 16 18.5Z" stroke="#002244" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M22 20.5V30.5L16 27.5L10 30.5V20.5" stroke="#002244" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg><span> Have the best insurance in your hands right now,<b>Get your quote <i class="fa-solid fa-arrow-right"></i></b> </span>

        </div>

      </div> */}
    
    
    <Testonomials/>
      </div>
    </>
  )
}
export default Home