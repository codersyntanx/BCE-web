import React, { Component } from "react";
import "./Testonomials.css"
import rectangal from "../Assets/images/Rectangle 34627069.png"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import leftarrow from "../Assets/images/CaretDown.png"
import rightarrow from "../Assets/images/CaretDown (1).png"
import quotes from "../Assets/images/“.png"
import profile from "../Assets/images/Ellipse 10574.png"

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  );
}

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


const sliderContent = [
  {
    id: 1,
    name: 'Alessandro Daluiz',
    text: 'I highly recommend this agency, they’re extremely knowledgeable regarding all our truck insurance needs! We have all our accounts with them, and we couldn’t be happier!',
  },
  {
    id: 1,
    name: 'Alessandro Daluiz',
    text: 'I highly recommend this agency, they’re extremely knowledgeable regarding all our truck insurance needs! We have all our accounts with them, and we couldn’t be happier!',
  }, {
    id: 1,
    name: 'Alessandro Daluiz',
    text: 'I highly recommend this agency, they’re extremely knowledgeable regarding all our truck insurance needs! We have all our accounts with them, and we couldn’t be happier!',
  }, {
    id: 1,
    name: 'Alessandro Daluiz',
    text: 'I highly recommend this agency, they’re extremely knowledgeable regarding all our truck insurance needs! We have all our accounts with them, and we couldn’t be happier!',
  }, {
    id: 1,
    name: 'Alessandro Daluiz',
    text: 'I highly recommend this agency, they’re extremely knowledgeable regarding all our truck insurance needs! We have all our accounts with them, and we couldn’t be happier!',
  }, {
    id: 1,
    name: 'Alessandro Daluiz',
    text: 'I highly recommend this agency, they’re extremely knowledgeable regarding all our truck insurance needs! We have all our accounts with them, and we couldn’t be happier!',
  }, {
    id: 1,
    name: 'Alessandro Daluiz',
    text: 'I highly recommend this agency, they’re extremely knowledgeable regarding all our truck insurance needs! We have all our accounts with them, and we couldn’t be happier!',
  }, {
    id: 1,
    name: 'Alessandro Daluiz',
    text: 'I highly recommend this agency, they’re extremely knowledgeable regarding all our truck insurance needs! We have all our accounts with them, and we couldn’t be happier!',
  }, {
    id: 1,
    name: 'Alessandro Daluiz',
    text: 'I highly recommend this agency, they’re extremely knowledgeable regarding all our truck insurance needs! We have all our accounts with them, and we couldn’t be happier!',
  }, {
    id: 1,
    name: 'Alessandro Daluiz',
    text: 'I highly recommend this agency, they’re extremely knowledgeable regarding all our truck insurance needs! We have all our accounts with them, and we couldn’t be happier!',
  }, {
    id: 1,
    name: 'Alessandro Daluiz',
    text: 'I highly recommend this agency, they’re extremely knowledgeable regarding all our truck insurance needs! We have all our accounts with them, and we couldn’t be happier!',
  },
];
const isSmallScreen = window.innerWidth <= 600;

class Testonomials extends Component {

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
      slidesToShow: isSmallScreen ? 1 : 2.5,
      slidesToScroll: 1,
      centerMode: false,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            rtl: false, // Reset rtl for smaller screens
          }
        }
        // Add more breakpoints if needed
      ]
    };
    return (
      <>
        {
          isSmallScreen ? (
            <div className=" mt-5 mx-auto" style={{ width: "100%" }} >
              <div className="row "  >
                <div className="col-md-1"></div>
                <div className="col-md-3 pt-5 text-center ">
                  <span className="smalltext">See who is walking this path with us</span>
                  <h4><b>Google reviews</b></h4>
                  <img className="mb-3" src={rectangal} alt="image" />
                  <p style={{ fontSize: "14px" }}>Watch the video and understand why thousands of people are already using our services and are protected</p>


                </div>

                <div className="col-md-7">
                  <Slider ref={(c) => (this.slider = c)} {...settings}>
                    {sliderContent.map((slide) => (
                      <div key={slide.id} className="mainslidercon" >

                        <img src={quotes} className="clientimage" style={{ position: 'relative', top: '20px', width: '50px' }} alt="team" />
                        <div className="p-3 pt-4 mb-5 textareaslide" style={{ backgroundColor: 'white', borderRadius: '10px', width: '90%', boxShadow: '0px 10px 15px -3px rgba(0, 0, 0, 0.2)' }}>
                          <div className="d-flex pt-3 align-items-center">
                            <img src={profile} width="40px" alt="team" /> &nbsp; &nbsp;
                            <b style={{ fontSize: "small" }}>{slide.name}</b>
                          </div>
                          <p className="smalltext mt-2">{slide.text}</p>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
                <div className="col-md-1 mb-4 text-center">
                <button className="btn rightbutton " onClick={this.previous} style={{ borderRadius: "50%", border: "2px solid black" }}>
                  <i class="fa fa-angle-left leftbuttonarr" aria-hidden="true"></i>                  </button>


                  <button className="btn leftbutton mx-2 "  onClick={this.next} >
                  <i class="fa fa-angle-right rightbuttonarr" aria-hidden="true"></i>
                            </button>

                </div>
              </div>
            </div>
          ) : (
            <div className=" mt-5 ms-auto" style={{ width: "95%" }} >
              <div className="row "  >
                <div className="col-md-1"></div>
                <div className="col-md-3 pt-5  ">
                  <span className="smalltext">See who is walking this path with us</span>
                  <h4><b>Google reviews</b></h4>
                  <img className="mb-3" src={rectangal} alt="image" />
                  <p style={{ fontSize: "14px" }}>Watch the video and understand why thousands of people are already using our services and are protected</p>

                  <button className="btn rightbutton " onClick={this.previous} style={{ borderRadius: "50%", border: "2px solid black" }}>
                  <i class="fa fa-angle-left leftbuttonarr" aria-hidden="true"></i>                  </button>


                  <button className="btn leftbutton mx-2 "  onClick={this.next} >
                  <i class="fa fa-angle-right rightbuttonarr" aria-hidden="true"></i>
                            </button>

                </div>
                <div className="col-md-1"></div>
                <div className="col-md-7">
                  <Slider ref={(c) => (this.slider = c)} {...settings}>
                    {sliderContent.map((slide) => (
                      <div key={slide.id} className="mainslidercon" >

                        <img src={quotes} className="clientimage" style={{ position: 'relative', top: '20px', width: '50px' }} alt="team" />
                        <div className="p-3 pt-4 mb-5 textareaslide" style={{ backgroundColor: 'white', borderRadius: '10px', width: '90%', boxShadow: '0px 10px 15px -3px rgba(0, 0, 0, 0.2)' }}>
                          <div className="d-flex pt-3 align-items-center">
                            <img src={profile} width="40px" alt="team" /> &nbsp; &nbsp;
                            <b style={{ fontSize: "small" }}>{slide.name}</b>
                          </div>
                          <p className="smalltext mt-2">{slide.text}</p>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>

              </div>
            </div>
          )
        }

      </>
    )
  }
}
export default Testonomials