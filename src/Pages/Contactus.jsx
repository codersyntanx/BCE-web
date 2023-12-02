import { Link } from "react-router-dom";
import rectangal from "../Assets/images/Rectangle 34627069.png"
import truckdrive from "../Assets/images/last.png"

import checkshield from "../Assets/images/ShieldCheck.png"
import "./Motortruckcargoinsurance.css"
import { useState } from "react";
function Contactus() {
    const [activeIndex, setActiveIndex] = useState(null);

 
    return (
        <>
            <div className="container   text-light " style={{width:"85%",height:"120px"}}>
                    <span className="location  mt-2 pb-4" >
                    <Link  style={{textDecoration:"none",color:"white",fontSize:"10px"}} to="/">   <svg xmlns="http://www.w3.org/2000/svg" width="17" height="19" viewBox="0 0 17 19" fill="none">
  <path d="M10.625 14.9298L5.3125 9.18755L10.625 3.44531" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg> Home/ <span className="my-4" style={{ fontWeight:"550" }}>Contact us</span></Link>
                        <h4  className="maintitles">Contact us</h4>

                    </span>
                </div>

            <div className="mainbody ">
            <div className="contactusbody p-5 ">
                    <div className=" contactfoam " >
                 <div className="row">
                  <div className="col-md-6">
                     <h1 style={{fontWeight:"bold",fontSize:"35px"}}>Get in touch<br></br> with us</h1>
<div className="mt-5">
                    <span style={{fontWeight:"bold"}}>Find us at</span><br></br>
                    <span className="smalltext" style={{color:"white"}}><i class="fa-solid fa-location-dot"></i> 66 Waverley Dr. Ste 630, Frederick, MD 21702</span>
                 </div>
                 <div className="mt-5">
                    <span style={{fontWeight:"bold"}}>Reach out to us at</span>
                    <p className="smalltext mt-2" style={{color:"white"}}><i class="fa-regular fa-envelope-open"></i> Operations@bceins.com</p>
                    <p className="smalltext" style={{color:"white"}}><i class="fa-solid fa-phone"></i> 301-591-6550</p>

                 </div>

                  </div>
                  <div className="col-md-6">
                  <div class="contactusfor rounded"style={{backgroundColor:"white",position:"relative",top:"60px"}} >

    <h5 className="text-dark"><b>Contact us</b></h5>

 
  <div className="form mt-4 maincard mx-3 border-bottom" style={{width:"90%"}}>
                 <input className="form-control mb-3 signupinputs" style={{height:"40px"}} type="text" placeholder="Your Name" aria-label="Your Name"/>
                 <input className="form-control mb-3 signupinputs" style={{height:"40px"}} type="text" placeholder="E-mail" aria-label="E-mail"/>
                 <input className="form-control mb-3 signupinputs" style={{height:"40px"}} type="number" placeholder="Phone number" aria-label="default input example"/>
                 <textarea className="form-control mb-3 signupinputs" style={{height:"40px"}} type="number" placeholder="Message" aria-label="default input example"></textarea>

                 <button className="btn btn-dark p-3" style={{width:"100%"}}>I want to be a customer</button>
                 <p className=" mt-3 smalltext">By submitting your data, you authorize us to contact you, To find out more, see our <u>Privacy policy</u></p>

                 </div>
                 <div className="d-flex align-items-center mt-2">
                  <img src={checkshield} width="25px" alt="check"/> &nbsp; 
                  <b style={{fontSize:"small",color:"black"}}>Your data is safe with us</b>
                 </div>
 
</div>
                  </div>
                 
                 </div>
                 
                    </div>
                </div>

                <div className="text-center mt-5">
                        <span className="smalltext">Got questions? We have answers!</span>
<h3><b>Frequently asked questions</b></h3>
<img src={rectangal} alt="line"/>
                    </div>
                    <div >
                        
                    </div >


  <div className="container" style={{width:"85%"}}>
    <div className="row mt-5 mb-5">
        <div className="col-md-6">
        <ul className="accordion">
          <Link className="insurelink" to="/autoliability">
        <li  className={activeIndex === 0 ? 'active' : ''}>
       <span style={{ width: '90%', display: 'inline-block' }}>What is auto liability insurance
        </span>  <i class="fa-solid fa-arrow-right float-end justify-content-center"></i>
            
      </li></Link>
      <Link className="insurelink" to="/Physicalinsurance">
      <li  className={activeIndex === 0 ? 'active' : ''}>
        <span style={{ width: '90%', display: 'inline-block' }}>What is physical damage insurance </span>
      <i class="fa-solid fa-arrow-right float-end justify-content-center"></i>
            
      </li></Link>
      <Link className="insurelink" to="/generalinsurance">
      <li className={activeIndex === 1 ? 'active' : ''}>
  <span style={{ width: '90%', display: 'inline-block' }}>
    What is general liability insurance
  </span>
  <i className="fa-solid fa-arrow-right float-end justify-content-center"></i>
</li>
</Link>
      <Link className="insurelink" to="/Motorinsurance">
      <li className={activeIndex === 2 ? 'active' : ''}>
     <span style={{ width: '90%', display: 'inline-block' }}>What is motor truck cargo insurance 
      </span>  <i class="fa-solid fa-arrow-right float-end justify-content-center"></i>
       
      </li></Link>
      <Link className="insurelink" to="/autoliability">
      <li  className={activeIndex === 3 ? 'active' : ''}>
     <span style={{ width: '90%', display: 'inline-block' }}> What is trailer interchange insurance
      </span>  <i class="fa-solid fa-arrow-right float-end justify-content-center"></i>
       
      </li> </Link>
      <Link className="insurelink text-dark" to="/aboutus">
      <li  className={activeIndex === 4 ? 'active' : ''}>
     <span style={{ width: '90%', display: 'inline-block' }}>Why should i shop insurance with BCE
      </span>   <i class="fa-solid fa-arrow-right float-end justify-content-center align=items-center"></i>
        
      </li></Link>
    </ul>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-5 quatationimage mt-5">
<img src={truckdrive} width="110%" alt="picture"/>
        </div>
    </div>
  </div>


                    <div style={{width:"100%"}}>
                          <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3082.079637932393!2d-77.46117960347341!3d39.42232357082419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c9db142eefd27f%3A0x93fc0d4bfdd7bdca!2sBolanos%20Commercial%20Enterprise!5e0!3m2!1sen!2s!4v1701381318019!5m2!1sen!2s"
        width="100%"
        height="300px"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="My Google Map"
        ></iframe>  
                    </div>
                            </div>
        </>
    )
}
export default Contactus;