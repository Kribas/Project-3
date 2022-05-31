import { Call, Email, LocationOn } from "@mui/icons-material";
import React from "react";
import "./Contact.css";

export default function Contact(props) {
  return (
    <div className="contact">
      <div className="container">
        <div className="contact__title text-center">
          <h3>{props.title}</h3>
          <p>{props.description}</p>
        </div>
        <div className="contact__body">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
              <div className="contact__address text-center">
                <LocationOn className="address__icon" />
                <h5>Our Address</h5>
                <p>A108 Adam Street, New York, NY 535022</p>
              </div>
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                  <div className="contact__email text-center">
                    <Email className="email__icon" />
                    <h5>Email Us</h5>
                    <p>info@example.com</p>
                    <p>contact@example.com</p>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                  <div className="contact__call text-center">
                    <Call className="call__icon" />
                    <h5>Call Us</h5>
                    <p>+1 5589 55488 55</p>
                    <p>+1 6678 254445 41</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
              <div className="contact__form text-center">
                <div className="name__email">
                  <div className="row">
                    <div className="col-md-6">
                      <input type="text" placeholder="Your Name" />
                    </div>
                    <div className="col-md-6">
                      <input type="email" placeholder="Your Email" />
                    </div>
                  </div>
                  <div class="message mt-3">
                    <textarea placeholder="Message" rows="5"></textarea>
                  </div>
                  <div class="send__btn text-center">
                    <button>Send Message</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
