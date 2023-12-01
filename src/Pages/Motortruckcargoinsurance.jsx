import { Link } from "react-router-dom";
import rectangal from "../Assets/images/Rectangle 34627069.png"
import Truck from "../Assets/images/Group 1171278547.png";
import lady from "../Assets/images/ladydaina.png"
import dollar from "../Assets/images/CurrencyDollar.png"

import "./Motortruckcargoinsurance.css"
function Motortruckcargoinsurance() {
    const isSmallScreen = window.innerWidth <= 600;
    return (
        <>
              
              <div className="maintopmotor" style={{height:"130px"}}>
                <div className="container   text-light " style={{width:"85%"}}>
                    <span className="location  mt-2 pb-4" >
                    <Link  style={{textDecoration:"none",color:"white"}} to="/">   <svg xmlns="http://www.w3.org/2000/svg" width="17" height="19" viewBox="0 0 17 19" fill="none">
  <path d="M10.625 14.9298L5.3125 9.18755L10.625 3.44531" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg> Home/ <span  style={{ fontWeight:"550" }}>Motor truck cargo insurance</span></Link>
                        <h4  className="motortruck">Motor truck cargo insurance</h4>

                    </span>
                </div>
               
            </div>

            <div className="mainbody ">
                <div className="container pt-5 pb-5" style={{width:"85%"}}>
                    <div className="row mt-5 customtext">
                        <div className="col-md-5 ">
                            <span className="smalltext">We help you at any time</span>
                            <h5><b>What Is Motor Truck Cargo Insurance?</b></h5>
                            <img className="mb-3" src={rectangal} alt="image" />
                            <p className=" p-2 px-0" style={{fontSize:"small"}}>
                                Motor Truck Cargo Insurance safeguards trucking companies from financial losses resulting from damage or loss of transported goods. This policy covers cargo against accidents, theft, and unforeseen events. Typically, freight brokers mandate a minimum of $100,000 MTC coverage.
                            </p>
                            <div className="buttoninsure">
                            <button  className="insurancebutton btn btn-dark">Get a Quote</button><button  className="btn btn-outline-dark insurancebutton "><b>Contact us</b></button>

                            </div>

                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-6 p-4 pt-0">
                            <img style={{ width: "100%" ,height:"100%"}} src={Truck} alt="trucimage" />
                        </div>
                    </div>
                    <div className="text-center mt-5"> 
                        <span className="smalltext">Do the same as thousands of customers</span>
<h4><b>Secure Motor Truck Cargo Insurance quickly and effortlessly.</b></h4>
<img className="mb-3" src={rectangal} alt="image" />

<p style={{fontSize:"small"}}>Get in touch with an expert who can guide you through the intricacies<br></br> of trucking insurance and leverage a contemporary platform to <br></br>increase the efficiency of your business.</p>
                    </div> </div>



{
    isSmallScreen?(<div className="row mt-1 pb-5" style={{width:"100%"}}>
    <div className="col-md-1"></div>
    
    <div className="col-md-6 p-4 pt-0 listitem">
        <ul>
        <li className="d-flex border-bottom ">
<i className="fa-regular fa-clock mt-1"></i> &nbsp;&nbsp;&nbsp;
<div>
<b>Complete in minutes, all online</b>
<p className="smalltext">Acquire coverage within minutes, not days, through our online platform.</p>
</div>

                
            </li>
            <li className="d-flex border-bottom mt-5">
            <i class="fa-solid fa-globe mt-1"></i> &nbsp;&nbsp;&nbsp;
<div>
<b>Trucking industry especialists</b>
<p  className="smalltext">Access coverage 24/7, day or night. With instant access to certificates of insurance once the policy is purchased. </p>
</div>

                
            </li>
            <li className="d-flex border-bottom mt-5">
           <img src={dollar} alt="dollar" width="50px" height="30px"/> &nbsp;&nbsp;&nbsp;
<div>
<b>Competitive rates</b>
<p  className="smalltext">We offer competitive rates for all your products and services. Our commitment is to provide the best protection for our customers without compromising quality or value.</p>
</div>

                
            </li>
        </ul>
    </div>
    <div className="col-md-5">
        <img width="100%" src={lady} alt="care"/>
    </div>
</div>):(
    <div className="row mt-3 pb-5" style={{width:"85%"}}>
    <div className="col-md-1"></div>
    <div className="col-md-5">
        <img width="100%" src={lady} alt="care"/>
    </div>
    <div className="col-md-6 p-4 pt-0 listitem">
        <ul>
        <li className="d-flex border-bottom ">
<i className="fa-regular fa-clock mt-1"></i> &nbsp;&nbsp;&nbsp;
<div>
<b>Complete in minutes, all online</b>
<p className="smalltext">Acquire coverage within minutes, not days, through our online platform.</p>
</div>

                
            </li>
            <li className="d-flex border-bottom mt-5">
            <i class="fa-solid fa-globe mt-1"></i> &nbsp;&nbsp;&nbsp;
<div>
<b>Trucking industry especialists</b>
<p  className="smalltext">Access coverage 24/7, day or night. With instant access to certificates of insurance once the policy is purchased. </p>
</div>

                
            </li>
            <li className="d-flex border-bottom mt-5">
           <img src={dollar} alt="dollar" width="50px" height="30px"/> &nbsp;&nbsp;&nbsp;
<div>
<b>Competitive rates</b>
<p  className="smalltext">We offer competitive rates for all your products and services. Our commitment is to provide the best protection for our customers without compromising quality or value.</p>
</div>

                
            </li>
        </ul>
    </div>
</div>
)
}

                    

               
            </div>
        </>
    )
}
export default Motortruckcargoinsurance;