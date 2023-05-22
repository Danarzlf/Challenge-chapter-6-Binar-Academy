import "./Landing.css";
import React from "react";

function Landing() {
  return (
    <div>
      {/* <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css" />
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossOrigin="anonymous" />
  <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
  <link rel="stylesheet" href="owlcarousel/owl.carousel.min.css" />
  <link rel="stylesheet" href="owlcarousel/owl.theme.default.min.css" />
  <link rel="stylesheet" href="./css/style.css" /> */}
      {/* Navbar */}
      <header>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <a className="navbar-brand" href="#home">
              Danar<span>Rental</span>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              style={{ backgroundColor: "#f1f3ff" }}
              id="navbarNav"
            >
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="#our-service"
                  >
                    Our Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#why-us">
                    Why Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#testimonial">
                    Testimonial
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#faq">
                    FAQ
                  </a>
                </li>
                <li>
                  <button
                    type="button"
                    className="btn btn-success fw-bold ms-4"
                  >
                    Register
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      {/* Home */}
      <article id="home" className="row align-items-end">
        <div className="col home-content align-self-center">
          <h2 className="font-weight-bold">
            Sewa &amp; Rental Mobil Terbaik di kawasan Ciledug
          </h2>
          <p className="">
            Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
            terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
            untuk sewa mobil selama 24 jam.
          </p>
          {/* <button class="btn">Mulai Sewa Mobil</button> */}
          <a href="/cars" className="btn">
            Mulai Sewa Mobil
          </a>
        </div>
        <img className="col-md-auto p-0" src="img/img_car.png" alt />
      </article>

      {/* Our Service */}
      <article id="our-service" class="pxc-7">
        <div class="container">
          <div class="text-center">
            <h3 class="fw-bold">Our Services</h3>
          </div>
          <div class="row align-items-center">
            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <img class="w-100" src="img/img_service.png" alt="" />
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <h3 class="font-weight-bold mb-4">
                Best Car Rental for any kind of trip in Ciledug!
              </h3>
              <p class="mb-4">
                Sewa mobil di Ciledug bersama Binar Car Rental jaminan harga
                lebih murah dibandingkan yang lain, kondisi mobil baru, serta
                kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
                wedding, meeting, dll.
              </p>
              <ul>
                <li>Sewa Mobil Dengan Supir di Bali 12 Jam</li>
                <li>Sewa Mobil Lepas Kunci di Bali 24 Jam</li>
                <li>Sewa Mobil Jangka Panjang Bulanan</li>
                <li>Gratis Antar - Jemput Mobil di Bandara</li>
                <li>Layanan Airport Transfer / Drop In Out</li>
              </ul>
            </div>
          </div>
        </div>
      </article>

      {/* Why Us */}
      <article
        id="why-us"
        className="d-flex flex-column justify-content-center pxc-7"
      >
        <div class="container">
          <h3 className="font-weight-bold mb-3">Why Us?</h3>
          <p className="mb-5">Mengapa harus pilih Binar Car Rental?</p>
          <div className="card-deck">
            <div className="card d-flex flex-column justify-content-between">
              <img className="icon-card" src="img/icon_complete.svg" alt="" />
              <h5 className="font-weight-bold">Mobil Lengkap</h5>
              <p>
                Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
                terawat
              </p>
            </div>
            <div className="card d-flex flex-column justify-content-between">
              <img className="icon-card" src="img/icon_price.svg" alt="" />
              <h5 className="font-weight-bold">Harga Murah</h5>
              <p>
                Harga murah dan bersaing, bisa bandingkan harga kami dengan
                rental mobil lain
              </p>
            </div>
            <div className="card d-flex flex-column justify-content-between">
              <img className="icon-card" src="img/icon_24hrs.svg" alt="" />
              <h5 className="font-weight-bold">Layanan 24 Jam</h5>
              <p>
                Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
                tersedia di akhir minggu
              </p>
            </div>
            <div className="card d-flex flex-column justify-content-between">
              <img
                className="icon-card"
                src="img/icon_professional.svg"
                alt=""
              />
              <h5 className="font-weight-bold">Sopir Profesional</h5>
              <p>
                Sopir yang profesional, berpengalaman, jujur, ramah dan selalu
                tepat waktu
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* Testimonial */}
      <article id="testimonial">
        <section id="section-testimonial">
          <div className="row">
            <div className="col-md-12 text-center">
              <h3 className="fw-bold mb-4">Testimonial</h3>
              <p className="mb-5">
                Berbagai review positif dari para pelanggan kami
              </p>
            </div>
          </div>
          <div className="row">
            <div id="carouselExample" className="carousel slide">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row justify-content-center">
                    <div className="col-sm-8">
                      <div className="card card-carousel">
                        <div className="row">
                          <div className="col-md-4">
                            <img
                              src="img/fotoorang.png"
                              alt="man-image"
                              style={{ width: "150px", height: "150px" }}
                            />
                          </div>
                          <div className="col-md-8">
                            <div className="card-body">
                              <img src="img/Rate.png" alt="icon-rate" />
                              <p className="card-text mt-2">
                                “Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod lorem ipsum
                                dolor sit amet, consectetur adipiscing elit, sed
                                do eiusmod lorem ipsum dolor sit amet,
                                consectetur adipiscing elit, sed do eiusmod”
                              </p>
                              <p className="card-text fw-bold">
                                John Dee 32, Bromo
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row justify-content-center">
                    <div className="col-sm-8">
                      <div className="card card-carousel">
                        <div className="row">
                          <div className="col-md-4">
                            <img
                              src="img/fotoorang.png"
                              alt="man-image"
                              style={{ width: "150px", height: "150px" }}
                            />
                          </div>
                          <div className="col-md-8">
                            <div className="card-body">
                              <img src="img/Rate.png" alt="icon-rate" />
                              <p className="card-text mt-2">
                                “Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod lorem ipsum
                                dolor sit amet, consectetur adipiscing elit, sed
                                do eiusmod lorem ipsum dolor sit amet,
                                consectetur adipiscing elit, sed do eiusmod”
                              </p>
                              <p className="card-text fw-bold">
                                John Dee 32, Bromo
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row justify-content-center">
                    <div className="col-sm-8">
                      <div className="card card-carousel">
                        <div className="row">
                          <div className="col-md-4">
                            <img
                              src="img/fotoorang.png"
                              alt="man-image"
                              style={{ width: "150px", height: "150px" }}
                            />
                          </div>
                          <div className="col-md-8">
                            <div className="card-body">
                              <img src="img/Rate.png" alt="icon-rate" />
                              <p className="card-text mt-2">
                                “Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod lorem ipsum
                                dolor sit amet, consectetur adipiscing elit, sed
                                do eiusmod lorem ipsum dolor sit amet,
                                consectetur adipiscing elit, sed do eiusmod”
                              </p>
                              <p className="card-text fw-bold">
                                John Dee 32, Bromo
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true">
                  <img src="img/Left-button.png" alt="prev-button" />
                </span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true">
                  <img src="img/Right button.svg" alt="next-button" />
                </span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </section>
      </article>

      <section id="section-offer">
        <div className="container-fluid text-center">
          <div className="row">
            <div className="col-md-12">
              <p className="fw-bold">Sewa Mobil di Ciledug Sekarang</p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
                eum soluta nihil adipisci facere recusandae, at numquam enim
                dolorum voluptates.
              </p>
              <a href="/cars" className="btn mt-4">
                Mulai Sewa Mobil
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <article id="faq" className="row">
        <div className="col-md-auto">
          <h3 className="font-weight-bold">Frequently Asked Question</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
        <div className="col faq-accordion">
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                >
                  Apa saja syarat yang dibutuhkan?
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>This is the first item's accordion body.</strong> It
                  is shown by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Berapa hari minimal sewa mobil lepas kunci?
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>This is the second item's accordion body.</strong> It
                  is hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Berapa hari sebelumnya sabaiknya booking sewa mobil?
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>This is the third item's accordion body.</strong> It
                  is hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFour">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  Apakah Ada biaya antar-jemput?
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>This is the third item's accordion body.</strong> It
                  is hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFive">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                >
                  Bagaimana jika terjadi kecelakaan
                </button>
              </h2>
              <div
                id="collapseFive"
                className="accordion-collapse collapse"
                aria-labelledby="headingFive"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>This is the third item's accordion body.</strong> It
                  is hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
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
    </div>
  );
}

export default Landing;
