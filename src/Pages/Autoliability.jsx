import { Link } from "react-router-dom";
import rectangal from "../Assets/images/Rectangle 34627069.png"
import group from "../Assets/images/collector.png";
import smile from "../Assets/images/gentleman.png"
import "./Motortruckcargoinsurance.css"
import varify from "../Assets/images/CircleWavyCheck.png"

function Autoliability() {
    const isSmallScreen = window.innerWidth <= 600;

    return (
        <>
            <div className="maintopmotor">
                <div className="container text-light mainheadsec">
                    <span className="location" >
                    <Link  style={{textDecoration:"none",color:"white"}} to="/">
   <svg xmlns="http://www.w3.org/2000/svg" width="17" height="19" viewBox="0 0 17 19" fill="none">
  <path d="M10.625 14.9298L5.3125 9.18755L10.625 3.44531" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg> Home/ <span className="my-4" style={{ fontWeight:"550" }}>Auto liability insurance</span></Link>
                        <h4  className="maintitle">Auto liability insurance</h4>

                    </span>
                </div>
               
            </div>

            <div className="mainbody ">
                <div className="container widthset" style={{paddingTop:"24px"}}>
                <div className="row mt-5 firstmainsection">
                        <div className="col-md-5 customtext ">
                            <span className="smalltext">We help you at any time</span>
                            <p className="mainheading">What is auto liability insurance?</p>
                            <img className="mb-3" src={rectangal} alt="image" />
                            <p className="firstsectionpara">
                            Auto liability coverage is vital and required by law. It protects against accident-related injury or damage. Most freight brokers require at least $1,000,000 in coverage, ensuring compliance and peace of mind on the road.
                            </p>
                            <div className="buttoninsure">
                            <button  className="insurancebutton btn btn-dark">Get a Quote</button><button  className="btn btn-outline-dark insurancebutton "><b>Contact us</b></button>

                            </div>

                        </div>
                        <div className="col-md-6 p-4 pt-0">
                            <img style={{ width: "100%" }} src={group} alt="trucimage" />
                        </div>
                    </div>
                    <div className="text-center mt-5">
                        <span className="smalltext">Do the same as thousands of customers</span>
<p className="secondmainheading">3 Reasons for getting auto liability insurance</p>
<img className="mb-3" src={rectangal} alt="image" />

                    </div>  </div>

{
    isSmallScreen?(<div className="row pb-5" style={{width:"100%", margin: "auto"}}>
 
   
    <div className="col-md-6 listitem ">
        <ul>
        <li className="d-flex border-bottom ">
<img src={varify} alt="checked" width="25px" height="25px"/> &nbsp;&nbsp;&nbsp;
<div>
<b style={{fontSize:"20px"}}>Protects against financial loss in the event of an accident</b>
<p className="smalltext">Auto liability insurance covers property damage, medical bills, and legal fees when a trucker is at fault in an accident, providing financial protection and peace of mind.</p>
</div>

                
            </li>
            <li className="d-flex border-bottom mt-3">
            <img src={varify} alt="checked" width="25px" height="25px"/>  &nbsp;&nbsp;&nbsp;
<div>
<b  style={{fontSize:"20px"}}>Required by law</b>
<p className="smalltext">Commercial truckers are legally obliged to maintain auto liability insurance. If you possess an MC Authority, the law mandates a minimum if $750,000 Auto Liability Coverage</p>
</div>

                
            </li>
            <li className="d-flex  mt-3">
            <img src={varify} alt="checked" width="25px" height="25px"/>  &nbsp;&nbsp;&nbsp;
<div>
<b  style={{fontSize:"20px"}}>Protects against lawsuits</b>
<p className="smalltext">Auto liability insurance assists truckers facing lawsuits after accidents, covering legal fees and awarded damages, offering financial protection and peace of mind.</p>
</div>

                
            </li>
        </ul>
    </div>
    <div className="col-md-5">
        <img width="100%"  src={smile} alt="care"/>
    </div>
</div>):(
        <div className="row mt-5 pb-5 reasonssection container">
        <div className="col-md-5">
            <img width="100%"  src={smile} alt="care"/>
        </div>
        <div className="col-md-6 listitem ">
            <ul>
            <li className="d-flex border-bottom ">
<img src={varify} alt="checked" width="25px" height="25px"/> &nbsp;&nbsp;&nbsp;
<div>
    <b style={{fontSize:"16px"}}>Protects against financial loss in the event of an accident</b>
    <p className="smalltext">Auto liability insurance covers property damage, medical bills, and legal fees when a trucker is at fault in an accident, providing financial protection and peace of mind.</p>
</div>

                    
                </li>
                <li className="d-flex border-bottom mt-3">
                <img src={varify} alt="checked" width="25px" height="25px"/>  &nbsp;&nbsp;&nbsp;
<div>
    <b  style={{fontSize:"16px"}}>Required by law</b>
    <p className="smalltext">Commercial truckers are legally obliged to maintain auto liability insurance. If you possess an MC Authority, the law mandates a minimum if $750,000 Auto Liability Coverage</p>
</div>

                    
                </li>
                <li className="d-flex  mt-3">
                <img src={varify} alt="checked" width="25px" height="25px"/>  &nbsp;&nbsp;&nbsp;
<div>
    <b  style={{fontSize:"16px"}}>Protects against lawsuits</b>
    <p className="smalltext">Auto liability insurance assists truckers facing lawsuits after accidents, covering legal fees and awarded damages, offering financial protection and peace of mind.</p>
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
export default Autoliability;