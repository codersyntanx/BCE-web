import React, { Component } from "react";
import { Link } from "react-router-dom";
import rectangal from "../Assets/images/Rectangle 34627069.png"
import group from "../Assets/images/Laugh.png";
import smile from "../Assets/images/truckfront.png"
import "./Motortruckcargoinsurance.css"
import varify from "../Assets/images/CircleWavyCheck.png"
import thumbs from "../Assets/images/Thumbsup.png"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import team1 from "../Assets/team/Frame 1171278545 (1).png"
import team2 from "../Assets/team/Frame 1171278607.png"

function SampleNextArrow(props) {
  const isSmallScreen = window.innerWidth <= 600;
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  );
}
const isSmallScreen = window.innerWidth <= 600;
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  );
}
class About extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  next() {
    this.slider.slickNext();
  }

  previous() {
    this.slider.slickPrev();
  }

  render() {
    const isSmallScreen = window.innerWidth < 600;
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: isSmallScreen ? 1.5 : 3,
      slidesToScroll: 1,
      centerMode: false,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1.5,
            rtl: false, // Reset rtl for smaller screens
          }
        }
        // Add more breakpoints if needed
      ]
    };

    return (
      <>
 <div className="maintopmotor">
        <div className="container   text-light " style={{ width: "85%", height: "120px" }}>
          <span className="location  mt-2 pb-4" >
            <Link style={{ textDecoration: "none", color: "white", fontSize: "10px" }} to="/">   <svg xmlns="http://www.w3.org/2000/svg" width="17" height="19" viewBox="0 0 17 19" fill="none">
              <path d="M10.625 14.9298L5.3125 9.18755L10.625 3.44531" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg> Home/ <span className="my-4" style={{ fontWeight: "550" }}>About us</span></Link>
            <h4 className="maintitles">About us</h4>

          </span>
        </div></div>

        <div className="mainbody ">
          <div className="container pt-5 pb-5" style={{ width: "85%" }}>
            <div className="row">
              <div className="col-md-5 customtext">
                <span className="smalltext">Trusted insurer</span>
                <h5><b>Our mission</b></h5>
                <img className="mb-3" src={rectangal} alt="image" />
                <p className=" p-2 px-0" style={{ fontSize: "small" }}>
                  At BCE, our mission is to empower trucking businesses with tailored insurance solutions and expert guidance. We are committed to simplifying the complexities of the industry, ensuring compliance, and promoting success on the road. With a foundation built by truckers, for truckers, we stand by our clients every mile of the journey, providing peace of mind and unparalleled support.</p>
                <div className="buttoninsure">
                  <button className="insurancebutton btn btn-dark">Get a Quote</button><button className="btn btn-outline-dark insurancebutton "><b>Contact us</b></button>

                </div>

              </div>
              <div className="col-md-1"></div>

              <div className="col-md-6">
                <img style={{ width: "100%" }} src={group} alt="trucimage" />
              </div>
            </div>
            <div className="text-center customtext mt-5">
              <span className="smalltext">Connecting trucking challenges with needed solutions</span>
              <h4><b>Helping all truckers thrive</b></h4>
              <img className="mb-3" src={rectangal} alt="image" />
            </div>



          </div>
          {
            isSmallScreen ? (
              <div className="row mt-1" style={{ width: "100%" }}>

                <div className="col-md-6 listitem">
                  <ul>
                    <li className="d-flex border-bottom mt-3">
                      <img src={varify} alt="checked" width="25px" height="25px" /> &nbsp;
                      <div>
                        <b style={{ fontSize: "small" }}>Need help understanding trucking compliance?</b>
                        <p className="smalltext">We don't just provide insurance; we also assist with a range of DOT compliance issues.</p>
                      </div>


                    </li>
                    <li className="d-flex border-bottom mt-5">
                      <img src={varify} alt="checked" width="25px" height="25px" />  &nbsp;
                      <div>
                        <b style={{ fontSize: "small" }}>Having issues find competitive rates?</b>
                        <p className="smalltext">Fed up with multiple agencies not  finding affordable coverage for your business?</p>
                      </div>


                    </li>
                    <li className="d-flex border-bottom mt-5">
                      <img src={varify} alt="checked" width="25px" height="25px" />  &nbsp;
                      <div>
                        <b style={{ fontSize: "small" }}>Losing loads due to slow COI’s?</b>
                        <p className="smalltext">Frustrated by lost loads due to delayed COIs from your agent?</p>
                      </div>


                    </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <img width="90%" src={smile} alt="care" />
                </div>
              </div>
            ) : (
              <div className="row mt-5" style={{ width: "85%" }}>
                <div className="col-md-1"></div>
                <div className="col-md-5">
                  <img width="90%" src={smile} alt="care" />
                </div>
                <div className="col-md-6 listitem">
                  <ul>
                    <li className="d-flex border-bottom mt-3">
                      <img src={varify} alt="checked" width="25px" height="25px" /> &nbsp;
                      <div>
                        <b style={{ fontSize: "small" }}>Need help understanding trucking compliance?</b>
                        <p className="smalltext">We don't just provide insurance; we also assist with a range of DOT compliance issues.</p>
                      </div>


                    </li>
                    <li className="d-flex border-bottom mt-5">
                      <img src={varify} alt="checked" width="25px" height="25px" />  &nbsp;
                      <div>
                        <b style={{ fontSize: "small" }}>Having issues find competitive rates?</b>
                        <p className="smalltext">Fed up with multiple agencies not  finding affordable coverage for your business?</p>
                      </div>


                    </li>
                    <li className="d-flex border-bottom mt-5">
                      <img src={varify} alt="checked" width="25px" height="25px" />  &nbsp;
                      <div>
                        <b style={{ fontSize: "small" }}>Losing loads due to slow COI’s?</b>
                        <p className="smalltext">Frustrated by lost loads due to delayed COIs from your agent?</p>
                      </div>


                    </li>
                  </ul>
                </div>
              </div>
            )
          }



          {
            isSmallScreen ? (
              <div className="container mt-5">
                <div className="row" >


                  <div className="col-md-6 customtext">
                    <span >Trusted insurer</span>
                    <h3  ><b>We Are Built for Truckers</b></h3>
                    <img className="mb-3" src={rectangal} alt="image" />
                    <p style={{ fontSize: "small" }}>
                      At BCE, our mission is to empower trucking businesses with tailored insurance solutions and expert guidance. We are committed to simplifying the complexities of the industry, ensuring compliance, and promoting success on the road. With a foundation built by truckers, for truckers, we stand by our clients every mile of the journey, providing peace of mind and unparalleled support.</p>


                  </div>
                  <div className="col-md-6">
                    <img style={{ width: "100%" }} src={thumbs} alt="trucimage" />
                  </div>
                </div>
              </div>
            ) : (
              <div className="container mt-5" style={{ width: "85%" }}>
                <div className="row" >
                  <div className="col-md-6">
                    <img style={{ width: "100%" }} src={thumbs} alt="trucimage" />
                  </div>

                  <div className="col-md-6">
                    <span className="smalltext">Trusted insurer</span>
                    <h3  ><b>We Are Built for Truckers</b></h3>
                    <img className="mb-3" src={rectangal} alt="image" />
                    <p style={{ fontSize: "small" }}>
                      At BCE, our mission is to empower trucking businesses with tailored insurance solutions and expert guidance. We are committed to simplifying the complexities of the industry, ensuring compliance, and promoting success on the road. With a foundation built by truckers, for truckers, we stand by our clients every mile of the journey, providing peace of mind and unparalleled support.</p>


                  </div>

                </div>
              </div>
            )
          }




          {
            isSmallScreen ? (<div className="container mt-5 mx-auto" style={{ width: "85%" }}>
              <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-3 pt-3  customtext">
                  <span className="smalltext">Experienced team</span>
                  <h4><b>The leadership team behind BOLANOS</b></h4>
                  <img className="mb-3" src={rectangal} alt="image" />
                  <p>Get to know the people who make Bolanos happen</p>

                  <br></br>

                </div>
                <div className="col-md-6">
                  <Slider ref={(c) => (this.slider = c)} {...settings}>
                    <div key={1}>
                      <img src={team1} width="90%" alt="team" />
                    </div>
                    <div key={2}>
                      <img src={team2} width="90%" alt="team" />
                    </div>
                    <div key={3}>
                      <img src={team1} width="90%" alt="team" />
                    </div>
                    <div key={4}>
                      <img src={team2} width="90%" alt="team" />
                    </div>
                    <div key={5}>
                      <img src={team1} width="90%" alt="team" />
                    </div>
                    <div key={6}>
                      <img src={team1} width="90%" alt="team" />
                    </div>
                  </Slider>
                </div>
                <div className="col-md-1 text-center mt-3 mb-3">
                <button className="btn rightbutton " onClick={this.previous} style={{ borderRadius: "50%", border: "2px solid black" }}>
                  <i class="fa fa-angle-left leftbuttonarr" aria-hidden="true"></i>                  </button>


                  <button className="btn leftbutton mx-2 "  onClick={this.next} >
                  <i class="fa fa-angle-right rightbuttonarr" aria-hidden="true"></i>
                            </button>
                </div>
              </div>
            </div>) : (
              <div className="container mt-5">
                <div className="row">
                  <div className="col-md-1"></div>
                  <div className="col-md-3 pt-3 pb-5">
                    <span className="smalltext">Experienced team</span>
                    <h4><b>The leadership team behind BOLANOS</b></h4>
                    <img className="mb-3" src={rectangal} alt="image" />
                    <p style={{ fontSize: "small" }}>Get to know the people who make Bolanos happen</p>

                    <br></br>
                    <button className="btn rightbutton " onClick={this.previous} style={{ borderRadius: "50%", border: "2px solid black" }}>
                  <i class="fa fa-angle-left leftbuttonarr" aria-hidden="true"></i>                  </button>


                  <button className="btn leftbutton mx-2 "  onClick={this.next} >
                  <i class="fa fa-angle-right rightbuttonarr" aria-hidden="true"></i>
                            </button>
                  </div>
                  <div className="col-md-8">
                    <Slider ref={(c) => (this.slider = c)} {...settings}>
                      <div key={1}>
                        <img src={team1} width="90%" alt="team" />
                      </div>
                      <div key={2}>
                        <img src={team2} width="90%" alt="team" />
                      </div>
                      <div key={3}>
                        <img src={team1} width="90%" alt="team" />
                      </div>
                      <div key={4}>
                        <img src={team2} width="90%" alt="team" />
                      </div>
                      <div key={5}>
                        <img src={team1} width="90%" alt="team" />
                      </div>
                      <div key={6}>
                        <img src={team1} width="90%" alt="team" />
                      </div>
                    </Slider>
                  </div>

                </div>
              </div>
            )
          }









        </div>
      </>
    )
  }
}
export default About;
