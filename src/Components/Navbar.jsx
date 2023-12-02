import React, { useState } from 'react';
import logo from "../Assets/images/g10.png"
import { Link } from "react-router-dom"
import logo2 from "../Assets/images/SEM NOME 6.png"
function Navbar() {
  const [menuClicked, setMenuClicked] = useState(false);

  const handleMenuClick = () => {
    setMenuClicked(!menuClicked);
  };

  const navbarStyle = {
    backgroundColor: menuClicked ? 'white' : '#011121',
    color: menuClicked ? "black" : "white"
  };

  const linkStyle = {
    color: menuClicked ? 'black' : 'white',
    marginTop: menuClicked ? '20px' : '0px',
  };

  const dropdownstyle = {
    border: menuClicked ? "none" : ""
  }

  const buttonstyle = {
    width: menuClicked ? "100%" : "",
    border: menuClicked ? "2px solid black" : "2px solid white",
    fontSize: menuClicked ? "12px" : "small",
    backgroundColor: menuClicked ? "" : "black",
    fontWeight: menuClicked ? "bold" : "bold",
    color: menuClicked ? "black" : "white"
  }
  const quotesytle = {
    width: menuClicked ? "100%" : "",
    border: menuClicked ? "2px solid white" : "2px solid black",
    fontSize: menuClicked ? "12px" : "small",
    fontWeight: menuClicked ? "bold" : "bold",
    backgroundColor: menuClicked ? "black" : "white",
    color: menuClicked ? "white" : "black"
  }
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg mt-3" style={navbarStyle}>
        <div className="container-fluid">
          <Link className="navbar-brand text-light" to="/">
            {
              menuClicked ? (<img src={logo2} alt="logo" width="100px" />) : (<img src={logo} alt="logo" width="100px" />)
            }

          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ backgroundColor: "white" }}
            onClick={handleMenuClick}
          >
            {
              menuClicked ? (
                <i class="fa-solid fa-xmark"></i>
              ) : (
                <i class="fa-solid fa-bars"></i>
              )
            }
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto ">
              <li className="nav-item mx-2">
                <Link className="nav-link " style={linkStyle} to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item mx-3 dropdown">
                <Link
                  className="nav-link dropdown-toggle "
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={linkStyle}
                >
                  Product & Service
                </Link>
                <ul className="dropdown-menu insurence" style={dropdownstyle}>
                  <li>
                    <Link className="dropdown-item" to="/autoliability">
                      Auto liability insurance
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/generalinsurance">
                      General liability insurance
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Motorinsurance">
                      Motor truck cargo insurance
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Physicalinsurance">
                      Physical damage insurance
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item mx-3">
                <Link className="nav-link " style={linkStyle} to="/contactus">
                  FAQ & Resources
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link className="nav-link " style={linkStyle} to="/aboutus">
                  About us
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link className="nav-link " style={linkStyle} to="signup">
                  Sign up
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-auto">
              <li className="nav-item ">
                <Link className="nav-link " to="/login">
                  <button className="btn px-4   " style={buttonstyle}  > Login </button>

                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link " to="/login">
                  <button className="btn btn-light border border-dark p-2 " style={quotesytle}>
                    Get a quote
                  </button>
                </Link>
              </li>
            </ul>

          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
