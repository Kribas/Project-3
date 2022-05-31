import React, { useState, useEffect } from "react";
import './Header.css';

function Header() {

  const [show,setShow] = useState(false);

  const handleShow = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleShow);
    return () => window.removeEventListener("scroll", handleShow);
  }, []);


  return (
    <div className={`header ${show && "header__scroll"}`}>
      <div className="container d-flex justify-content-between align-items-center">
            <div className="header__left">
              <h1 className="logo">
                <a className="text-decoration-none" href="#">
                  Baker
                </a>
              </h1>
            </div>
          <div className="header__right">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container-fluid">
                
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        href="#"
                      >
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        About
                      </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            Services
                        </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Portfolio</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Team</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Pricing</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Dropdown</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Contact</a>
                    </li>
                  </ul>
                  
                </div>
              </div>
            </nav>
          </div>

        
    </div>
    </div>
  );
}

export default Header;
