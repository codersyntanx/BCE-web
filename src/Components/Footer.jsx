import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/images/Footerlogo.png';
import frame1 from "../Assets/images/Frames/Frame 6748.png";
import frame2 from "../Assets/images/Frames/Frame 6749.png";
import frame3 from "../Assets/images/Frames/Frame 6750.png";

import './Footer.css';

function Footer() {
  return (
    <>
     <div className='container'>
      <div className="row   maincontainer">
        <div className="col-md-3 footerlogo smalltext text-light">
          <img className="img-fluid"  style={{  filter: 'brightness(0) invert(1)' }} width="90px" src={logo} alt="logo" />
          <br></br><br></br>
          <p className="text" style={{fontSize:"10px"}}>
            Where we drive your <br /> insurance needs forward!
          </p>
        </div>

        <div className="col-md-2 services smalltext text-light" >
          <b className="" style={{fontSize:"12px",marginBottom:"12px"}}>Home</b>
          <ul className="list-unstyled " style={{fontSize:"10px",color:"3D3D3D"}}>
            <li className="mt-3 topmar">Services</li>
            <Link class="linking" to="/aboutus">
              <li className="mt-3 topmar">About us</li>
            </Link>
            
            <li className="mt-3 topmar">Blog</li>
            <Link className="linking"  to="/contactus" >
            <li className="mt-3 topmar">Contact us</li>

            </Link>
           
          </ul>
        </div>
        <div className="col-md-2  smalltext text-light">
          <b className=" "style={{fontSize:"12px"}}>About Us</b>
          <ul className="list-unstyled "style={{fontSize:"10px",color:"3D3D3D"}}>
            <li className="mt-4">Term & Condition</li>
            <li className="mt-4">Privacy Policy</li>
          </ul>
        </div>
        <div className="col-md-4  smalltext text-light">
          <b className=" " style={{ fontSize:"12px"}}>Contact</b>
         <ul className="list-unstyled "style={{fontSize:"10px",color:"3D3D3D"}}>
            <li className="mt-3">
              <i className="fa-solid fa-location-dot " style={{ color: "#f9fafa" }}></i> &nbsp;&nbsp;&nbsp;66 Waverley Dr. Ste 630, Frederick, MD 21702
            </li>
            <li className="mt-3">
              <i className="fa-regular fa-envelope-open " style={{ color: "#f9fafa" }}></i> &nbsp;&nbsp;&nbsp;Operations@bceins.com
            </li>
            <li className="mt-3">
              <i className="fa-solid fa-phone " style={{ color: "#f9fafa" }}></i> &nbsp;&nbsp;&nbsp;301-591-6550
            </li>
          </ul>
        </div>
        <div className='col-md-1 signupcol'>
          <button className='btn btn-light px-3'><b>Signup</b></button>
        </div>
      </div>
      
      </div>
      <div className='container'>
      <div className='row mb-3 bolanoscomercial'>
          <div className='col-md-3'></div>
          <div className='col-md-2 col-sm-6 mt-4 text-light smalltext'>
          <i class="fa-brands fa-instagram"></i>/bolanoscommercial
          </div>
          <div className='col-md-2 col-sm-6 mt-4 text-light smalltext'>
          <i class="fa-brands fa-facebook"></i>/bolanoscommercial
          </div>
          <div className='col-md-2  col-sm-6 mt-4 text-light smalltext '>
          <i class="fa-brands fa-youtube"></i>/bolanoscommercial
          </div>
        </div>
      </div>

      <div className='p-2 text-light text-center container' style={{ fontSize: "9px",position:"relative",bottom:"0px" }}>
        <i className="fa-regular fa-copyright" style={{ color: "#f9fafa" }}></i>2023 All Rights Reserved.Bolanas Commercial Enterprise, LLC
      </div>
    </>
   
  );
}

export default Footer;
