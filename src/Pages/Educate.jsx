import React, { useState } from "react";
import Slider from "react-slick";
import greencheck from "../Assets/images/CircleWavyCheck (1).png";
import "./Home.css";


const CustomSlide = ({ number, title, description, checks }) => (
  <div className="col-md-3 p-3 educate">
    <h1 style={{ fontWeight: "700" }}>{number}</h1>
    <b>{title}</b>
    <div className="mt-3">
      <span style={{ fontSize: "small", color: "grey" }}>{description}</span>
    </div>

    {checks.map((check, index) => (
      <div key={index} className="d-flex mt-3 align-items-center">
        <img src={greencheck} width="30px" alt="check" /> &nbsp;
        <span style={{ fontWeight: "bold", fontSize: "small" }}>{check}</span>
      </div>
    ))}
  </div>
);


const NewCustom = ({ number, title, description, checks }) => (
    <div className="col-md-3 p-3 smallscreen">
      <h1 style={{ fontWeight: "700" }}>{number}</h1>
      <b>{title}</b>
      <div className="mt-3">
        <span style={{ fontSize: "small", color: "grey" }}>{description}</span>
      </div>
  
      {checks.map((check, index) => (
        <div key={index} className="d-flex mt-3 align-items-center">
          <img src={greencheck} width="30px" alt="check" /> &nbsp;
          <span style={{ fontWeight: "bold", fontSize: "small" }}>{check}</span>
        </div>
      ))}
    </div>
  );


const LargeScreenContent = () => (
  <div className="container-fluid mx-auto" >
    <div className="row justify-content-center mt-3" style={{ gap: "20px" }}>
      <CustomSlide
        number="1"
        title="Educate"
        description="Access valuable educational resources shared by industry veterans who are former trucking company owners."
        checks={[
          "Implement top safety measures",
          "Implement top safety measures",
          "Implement top safety measures",
        ]}
      />
      <CustomSlide
        number="2"
        title="Quote"
        description="Have it on hand the best quotes shared by industry veterans who are former trucking company owners."
        checks={[
          "Get a quote within 5 minutes",
          "Explore options with numerous carriers",
          "Buy only what’s essential for your needs",
        ]}
      />
      <CustomSlide
        number="3"
        title="Purchase"
        description="Acquire insurance that offers top-notch coverage at the most competitive rate, and you can always reach out to our knowledgeable agents."
        checks={[
          "Purchase coverage using our flexible payment choices",
          "Obtain competitive rates tailored to your situation",
          "Secure coverage that permits you to collaborate with any broker",
        ]}
      />
    </div>
    <div
      className="justify-content-center align-items-center d-flex mt-4"
      style={{ fontSize: "small" }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="33"
        viewBox="0 0 32 33"
        fill="none"
      >
        <path
          d="M16 22.5C21.5228 22.5 26 18.0228 26 12.5C26 6.97715 21.5228 2.5 16 2.5C10.4772 2.5 6 6.97715 6 12.5C6 18.0228 10.4772 22.5 16 22.5Z"
          stroke="#002244"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M16 18.5C19.3137 18.5 22 15.8137 22 12.5C22 9.18629 19.3137 6.5 16 6.5C12.6863 6.5 10 9.18629 10 12.5C10 15.8137 12.6863 18.5 16 18.5Z"
          stroke="#002244"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M22 20.5V30.5L16 27.5L10 30.5V20.5"
          stroke="#002244"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <span>
        Have the best insurance in your hands right now,
        <b>Get your quote</b>
      </span>
    </div>
  </div>
);

const Educate = () => {
  const isSmallScreen = window.innerWidth <= 600;
  
    const [activeDot, setActiveDot] = useState(0);
  
    const handleBeforeChange = (oldIndex, newIndex) => {
      setActiveDot(newIndex);
    };
  if (isSmallScreen) {
    const slides = [
      {
        number:"1",
        title: "Educate",
        description:
          "Access valuable educational resources shared by industry veterans who are former trucking company owners.",
        checks: [
          "Implement top safety measures",
          "Ensuring DOT compliance",
          "Collaborating with freight borkers",
        ],
      },
      {
        number:"2",
        title: "Quote",
        description:
          "Have it on hand the best quotes shared by industry veterans who are former trucking company owners.",
        checks: [
          "Get a quote within 5 minutes",
          "Explore options with numerous carriers",
          "Buy only what’s essential for your needs",
        ],
      },
      {
        number:"3",
        title: "Purchase",
        description:
          "Acquire insurance that offers top-notch coverage at the most competitive rate, and you can always reach out to our knowledgeable agents.",
        checks: [
          "Purchase coverage using our flexible payment choices",
          "Obtain competitive rates tailored to your situation",
          "Secure coverage that permits you to collaborate with any broker",
        ],
      },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: (dots) => (
          <div style={{ bottom: "-40px", left: "50%", transform: "translateX(-50%)" }}>
            <ul style={{ margin: "0px" }}> {dots} </ul>
          </div>
        ),
        customPaging: (i) => (
          <div
            style={{
              width: "10px",
              height: "10px",
              background: i === activeDot ? "#002244" : "#ddd",
              borderRadius: "50%",
            }}
          ></div>
        ),
        beforeChange: handleBeforeChange,
      };
  

    return (
        <div className="container-fluid mx-auto">
         <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="slider-item">
              <NewCustom {...slide} />
            </div>
          ))}
        </Slider>
        
        <div
          className="justify-content-center align-items-center mt-5 d-flex mt-4"
          style={{ fontSize: "small" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="33"
            viewBox="0 0 32 33"
            fill="none"
          >
            <path
              d="M16 22.5C21.5228 22.5 26 18.0228 26 12.5C26 6.97715 21.5228 2.5 16 2.5C10.4772 2.5 6 6.97715 6 12.5C6 18.0228 10.4772 22.5 16 22.5Z"
              stroke="#002244"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16 18.5C19.3137 18.5 22 15.8137 22 12.5C22 9.18629 19.3137 6.5 16 6.5C12.6863 6.5 10 9.18629 10 12.5C10 15.8137 12.6863 18.5 16 18.5Z"
              stroke="#002244"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M22 20.5V30.5L16 27.5L10 30.5V20.5"
              stroke="#002244"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span>
            Have the best insurance in your hands right now,
            <b>Get your quote</b>
          </span>
        </div>
      </div>
    );
  }

  return <LargeScreenContent />;
};

export default Educate;
