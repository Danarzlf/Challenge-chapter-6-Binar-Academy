import React from "react";

function Footer() {
  return (
    <footer id="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <p>
              Jalan Suroyo No. 161 Mayangan Kota <br />
              Probolonggo 672000
            </p>
            <p>binarcarrental@gmail.com</p>
            <p>081-233-334-808</p>
          </div>
          <div className="col-md-2">
            <p className="fw-bold">Our services</p>
            <p className="fw-bold">Why Us</p>
            <p className="fw-bold">Testimonial</p>
            <p className="fw-bold">FAQ</p>
          </div>
          <div className="col-md-3">
            <p>Connect with us</p>
            <div className="d-flex">
              <a href>
                <img className="mr-3" src="img/icon_facebook.svg" alt />
              </a>
              <a href>
                <img className="mr-3" src="img/icon_instagram.svg" alt />
              </a>
              <a href>
                <img className="mr-3" src="img/icon_twitter.svg" alt />
              </a>
              <a href>
                <img className="mr-3" src="img/icon_mail.svg" alt />
              </a>
              <a href>
                <img src="img/icon_twitch.svg" alt />
              </a>
            </div>
          </div>
          <div className="col-md-3">
            <p className="copyright">Copyright</p>
            <p className="logo-brand">
              Danar<span>Rental</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
