import { Link } from "react-router-dom";
import rectangal from "../Assets/images/Rectangle 34627069.png"
import group from "../Assets/images/GeneralRealibility.png";
import smile from "../Assets/images/oldman.png"
import "./Motortruckcargoinsurance.css"
import varify from "../Assets/images/CircleWavyCheck.png"

function GeneralRealability() {
    const isSmallScreen = window.innerWidth <= 600;
    return (
        <>
            <div className="maintopmotor">
                <div className="container text-light mainheadsec">
                    <span className="location" >
                        <Link style={{ textDecoration: "none", color: "white", }} to="/">   <svg xmlns="http://www.w3.org/2000/svg" width="17" height="19" viewBox="0 0 17 19" fill="none">
                            <path d="M10.625 14.9298L5.3125 9.18755L10.625 3.44531" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg> Home/ <span className="my-4" style={{ fontWeight: "550" }}>General liability insurance</span></Link>
                        <h4 className="maintitle">General liability insurance</h4>

                    </span>
                </div>

            </div>

            <div className="mainbody ">
                <div className="container widthset" style={{ paddingTop: "24px" }}>
                    <div className="row mt-5 firstmainsection">
                        <div className="col-md-5 customtext">
                            <span className="smalltext">We help you at any time</span>
                            <p className="mainheading">What is general liability insurance?</p>
                            <img className="mb-3" src={rectangal} alt="image" />
                            <p className="firstsectionpara">
                                This insurance shields businesses from financial losses resulting from lawsuits or claims related to property damage, bodily injury, or other harm caused by their operations. It covers expenses such as legal fees, settlements, and judgments.
                            </p>
                            <div className="buttoninsure">
                                <button className="insurancebutton btn btn-dark">Get a Quote</button><button className="btn btn-outline-dark insurancebutton "><b>Contact us</b></button>

                            </div>

                        </div>
                        <div className="col-md-6  p-4  pt-0">
                            <img style={{ width: "100%" }} className="maintikerimg" src={group} alt="trucimage" />
                        </div>
                    </div>
                    <div className="text-center mt-5">
                        <span className="smalltext">Do the same as thousands of customers</span>
                        <h4><b>3 Reasons for getting GL insurance</b></h4>
                        <img className="mb-3" src={rectangal} alt="image" />
                    </div>
                </div>
                {
                    isSmallScreen ? (
                        <div className="row pb-5" style={{ width: "100%", margin: "auto" }}>

                            <div className="col-md-6 listitem">
                                <ul>
                                    <li className="d-flex border-bottom ">
                                        <img src={varify} alt="dollar" width="50px" height="30px" /> &nbsp;&nbsp;&nbsp;
                                        <div>
                                            <b style={{ fontSize: "20px" }}>Protects against financial loss if the trucker is at fault of an accident</b>
                                            <p className="smalltext">General liability insurance can assist in covering property damage or medical expenses if a trucker is deemed at fault in an accident.</p>
                                        </div>


                                    </li>
                                    <li className="d-flex border-bottom mt-3">
                                        <img src={varify} alt="dollar" width="50px" height="30px" /> &nbsp;&nbsp;&nbsp;
                                        <div>
                                            <b style={{ fontSize: "20px" }}>Required by some brokers and shippers</b>
                                            <p className="smalltext">Depending on the broker or shipper's requirements, commercial truckers may need to have general liability insurance as a condition of their employment.</p>
                                        </div>


                                    </li>
                                    <li className="d-flex  mt-3">
                                        <img src={varify} alt="dollar" width="50px" height="30px" /> &nbsp;&nbsp;&nbsp;
                                        <div>
                                            <b style={{ fontSize: "20px" }}>Provides peace of mind</b>
                                            <p className="smalltext">General liability insurance provides commercial truckers with peace of mind, knowing they are financially protected in the event of an accident.</p>
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
                                        <img src={varify} alt="dollar" width="50px" height="30px" /> &nbsp;&nbsp;&nbsp;
                                        <div>
                                            <b style={{ fontSize: "16px" }}>Protects against financial loss if the trucker is at fault of an accident</b>
                                            <p className="smalltext">General liability insurance can assist in covering property damage or medical expenses if a trucker is deemed at fault in an accident.</p>
                                        </div>


                                    </li>
                                    <li className="d-flex border-bottom mt-3">
                                        <img src={varify} alt="dollar" width="50px" height="30px" /> &nbsp;&nbsp;&nbsp;
                                        <div>
                                            <b style={{ fontSize: "16px" }}>Required by some brokers and shippers</b>
                                            <p className="smalltext">Depending on the broker or shipper's requirements, commercial truckers may need to have general liability insurance as a condition of their employment.</p>
                                        </div>


                                    </li>
                                    <li className="d-flex  mt-3">
                                        <img src={varify} alt="dollar" width="50px" height="30px" /> &nbsp;&nbsp;&nbsp;
                                        <div>
                                            <b style={{ fontSize: "16px" }}>Provides peace of mind</b>
                                            <p className="smalltext">General liability insurance provides commercial truckers with peace of mind, knowing they are financially protected in the event of an accident.</p>
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
export default GeneralRealability;