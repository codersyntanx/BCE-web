import { Link } from "react-router-dom";
import rectangal from "../Assets/images/Rectangle 34627069.png"
import group from "../Assets/images/Group 1171278547 (1).png";
import smile from "../Assets/images/smile.png"
import "./Motortruckcargoinsurance.css"
import varify from "../Assets/images/CircleWavyCheck.png"
function PhysicalDemagaeInsurance() {
    const isSmallScreen = window.innerWidth <= 600;

    return (
        <>
            <div className="maintopmotor">
                <div className="container text-light mainheadsec" style={{ width: "85%", height: "130px" }}>
                    <span className="location" >
                        <Link style={{ textDecoration: "none", color: "white", fontSize: "10px" }} to="/">   <svg xmlns="http://www.w3.org/2000/svg" width="17" height="19" viewBox="0 0 17 19" fill="none">
                            <path d="M10.625 14.9298L5.3125 9.18755L10.625 3.44531" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg> Home/ <span className="my-4" style={{ fontWeight: "550" }}>Physical damage insurance</span></Link>
                        <h4 className="maintitle">Physical damage insurance</h4>

                    </span>
                </div>
            </div>

            <div className="mainbody ">
                <div className="container widthset" style={{ paddingTop: "24px" }}>
                    <div className="row mt-5 firstmainsection">
                        <div className="col-md-5 customtext">
                            <span className="smalltext">We help you at any time</span>
                            <p className="mainheading">What Is Motor Truck Cargo Insurance?</p>
                            <img className="mb-3" src={rectangal} alt="image" />
                            <p className="firstsectionpara">
                                Motor Truck Cargo Insurance safeguards trucking companies from financial losses resulting from damage or loss of transported goods. This policy covers cargo against accidents, theft, and unforeseen events. Typically, freight brokers mandate a minimum of $100,000 MTC coverage.
                            </p>
                            <div className="buttoninsure">
                                <button className="insurancebutton btn btn-dark">Get a Quote</button><button className="btn btn-outline-dark insurancebutton "><b>Contact us</b></button>

                            </div>

                        </div>
                        <div className="col-md-6 p-4 pt-0">
                            <img style={{ width: "100%" }} src={group} alt="trucimage" />
                        </div>
                    </div>
                    <div className="text-center mt-5">
                        <span className="smalltext">Do the same as thousands of customers</span>
                        <h4><b>3 Reasons for Getting Physical Damage Insurance</b></h4>
                        <img className="mb-3" src={rectangal} alt="image" />

                    </div> </div>

                {
                    isSmallScreen ? (
                        <div className="row pb-5" style={{ width: "100%", margin: "auto" }}>

                            <div className="col-md-6 listitem">
                                <ul>
                                    <li className="d-flex border-bottom ">
                                        <img src={varify} alt="dollar" width="40px" height="30px" /> &nbsp;&nbsp;&nbsp;
                                        <div>
                                            <b style={{ fontSize: "20px" }}>Protects against financial loss in the event of an accident</b>
                                            <p className="smalltext">Physical damage insurance can assist in covering the expenses for repairing or replacing a truck damaged in an accident.</p>
                                        </div>


                                    </li>
                                    <li className="d-flex border-bottom mt-5">
                                        <img src={varify} alt="dollar" width="40px" height="30px" /> &nbsp;&nbsp;&nbsp;
                                        <div>
                                            <b style={{ fontSize: "20px" }}>Provides coverage for non-collision events</b>
                                            <p className="smalltext">Physical damage insurance extends coverage to damage resulting from events like theft, vandalism, or natural disasters.</p>
                                        </div>


                                    </li>
                                    <li className="d-flex  mt-5">
                                        <img src={varify} alt="dollar" width="40px" height="30px" /> &nbsp;&nbsp;&nbsp;
                                        <div>
                                            <b style={{ fontSize: "20px" }}>Offers peace of mind by ensuring your truck is protected.</b>
                                            <p className="smalltext">Physical damage insurance provides commercial truckers with the peace of mind that they are financially protected in case of vehicle damage.</p>
                                        </div>


                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-5">
                                <img width="100%" src={smile} alt="care" />
                            </div>
                        </div>
                    ) : (
                        <div className="row mt-5 pb-5 reasonssection container" style={{ width: "85%", margin: "auto", justifyContent: "center" }}>
                            <div className="col-md-5">
                                <img width="100%" src={smile} alt="care" />
                            </div>
                            <div className="col-md-6 p-4 pt-0 listitem">
                                <ul>
                                    <li className="d-flex border-bottom ">
                                        <img src={varify} alt="dollar" width="40px" height="30px" /> &nbsp;&nbsp;&nbsp;
                                        <div>
                                            <b style={{ fontSize: "16px" }}>Protects against financial loss in the event of an accident</b>
                                            <p className="smalltext">Physical damage insurance can assist in covering the expenses for repairing or replacing a truck damaged in an accident.</p>
                                        </div>


                                    </li>
                                    <li className="d-flex border-bottom mt-5">
                                        <img src={varify} alt="dollar" width="40px" height="30px" /> &nbsp;&nbsp;&nbsp;
                                        <div>
                                            <b style={{ fontSize: "16px" }}>Provides coverage for non-collision events</b>
                                            <p className="smalltext">Physical damage insurance extends coverage to damage resulting from events like theft, vandalism, or natural disasters.</p>
                                        </div>


                                    </li>
                                    <li className="d-flex  mt-5">
                                        <img src={varify} alt="dollar" width="40px" height="30px" /> &nbsp;&nbsp;&nbsp;
                                        <div>
                                            <b style={{ fontSize: "16px" }}>Offers peace of mind by ensuring your truck is protected.</b>
                                            <p className="smalltext">Physical damage insurance provides commercial truckers with the peace of mind that they are financially protected in case of vehicle damage.</p>
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
export default PhysicalDemagaeInsurance;