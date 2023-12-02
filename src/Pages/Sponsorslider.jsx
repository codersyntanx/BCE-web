import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import partner2 from '../Assets/images/partner2.png'; // Update the path for your images
import partner3 from '../Assets/images/partner3.png';
import partner4 from '../Assets/images/partner4.png';
import partner5 from '../Assets/images/partner5.png';
import partner6 from '../Assets/images/partner6.png';
import partner7 from "../Assets/images/lastlogo.png"
import "./Home.css"
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



class Sponsorslider extends React.Component {
  render() {
    const isSmallScreen = window.innerWidth < 600;

    const settings = {
      infinite: true,
      autoplay: true,
      autoplaySpeed: 0,
      speed: 1000,
      slidesToShow: isSmallScreen ? 1.5 : 6,
      slidesToScroll: 1,
      cssEase: "ease", // Experiment with different easing functions
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    
    
    

    return (
      <div className=" border-bottom ">
        <div className="container-fluid sponsor">
          <div className="row d-flex p-5">
            <div
              className="col-md-3 text-center mb-4  "
             
            >
              <span className='security'  >
                The best security
                <br />
                <span className='mb-2' style={{ fontSize: "22px", lineHeight: "0.4" }}>
                  <b className='border-bottom pb-3'>Main partners</b>
                </span>
              </span>
            </div>
            {isSmallScreen ? (
              <Slider {...settings}>
                <div>
                  <img src={partner2} style={{ marginLeft: "50px" }} alt="partner" />
                </div>
                <div>
                  <img src={partner3} style={{ marginLeft: "50px" }} alt="partner" />
                </div>
                <div>
                  <img src={partner4} style={{ marginLeft: "50px" }} alt="partner" />
                </div>
                <div>
                  <img src={partner5} style={{ marginLeft: "50px" }} alt="partner" />
                </div>
                <div>
                  <img src={partner6} style={{ marginLeft: "50px" }} alt="partner" />
                </div>
                
              </Slider>
            ) : (
              <>
                <div className="col-md-9 justify-content-between align-items-center">
                  <Slider {...settings}>
                    <div style={{ width: "20%" }}>
                      <img src={partner2} width="80%"  style={{marginTop:"10px"}}   alt="partner" />
                    </div>
                    <div style={{ width: "20%" }}>
                      <img src={partner3} width="80%" style={{marginTop:"15px"}}  alt="partner" />
                    </div>
                    <div style={{ width: "20%" }}>
                      <img src={partner6} width="80%"  alt="partner" />
                    </div>
                    <div style={{ width: "20%" }}>
                      <img src={partner4} width="80%" style={{marginTop:"10px"}}   alt="partner" />
                    </div>
                    <div style={{ width: "20%" }}>
                      <img src={partner5} width="80%"  alt="partner" />
                    </div>
                    <div style={{ width: "20%" }}>
                      <img src={partner6} width="80%"  alt="partner" />
                    </div>
                    <div style={{ width: "20%" }}>
                      <img src={partner7} width="80%" style={{marginBottom:"15px"}}  alt="partner" />
                    </div>
                  </Slider>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Sponsorslider;
