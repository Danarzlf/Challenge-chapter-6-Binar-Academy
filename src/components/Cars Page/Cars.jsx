import "../Landing Page/Landing.css";
import { getCars } from "../actions/carsAction";
import React from "react";
import { useDispatch } from "react-redux";
import { DatePicker } from "antd";
const useState = React.useState;
const useEffect = React.useEffect;

function CarsPage() {
  const [available, setAvailable] = useState(null);
  const [year, setYear] = useState(null);
  const [capacity, setCapacity] = useState(null);

  const handleSetAvailable = (e) => {
    setAvailable(e.target.value);
  };

  const handleSetCapacity = (e) => {
    setCapacity(e.target.value);
  };

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    console.log(
      "tes",
      available,
      typeof available,
      year,
      typeof year,
      capacity,
      typeof capacity
    );
    dispatch(getCars(available, year, capacity));
    e.preventDefault();
  };

  return (
    <div>
      {/* Navbar */}
      <header>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <a className="navbar-brand" href="#">
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
                    href="#our-services"
                  >
                    Our Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#section-why-us">
                    Why Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#section-testimonial">
                    Testimonial
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#section-faq">
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
          <h2 className="mb-5 font-weight-bold">
            Sewa &amp; Rental Mobil Terbaik di kawasan Ciledug
          </h2>
          <p className="mb-5">
            Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
            terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
            untuk sewa mobil selama 24 jam.
          </p>
        </div>
        <img className="col-md-auto p-0" src="img/img_car.png" alt />
      </article>
      {/* Search Car */}
      <form
        id="search"
        className="container p-3 rounded pe-4"
        onSubmit={handleSubmit}
      >
        <div className="row align-items-end">
          <div className="col-3">
            <p>Tipe Driver</p>
            <select
              className="btn-select form-select"
              aria-label="Default select example"
              onChange={handleSetAvailable}
            >
              <option selected>Pilih Tipe Driver</option>
              <option value={true}>Dengan Sopir</option>
              <option value={false}>Tanpa Sopir (Lepas Kunci)</option>
            </select>
          </div>
          <div className="col-3">
            <p>Tanggal</p>
            <div className="dropdown">
              <DatePicker
                picker="year"
                className="btn-select rounded"
                onChange={(date, dateString) => {
                  const year = dateString.split("-")[0];
                  setYear(year);
                }}
              />
            </div>
          </div>

          <div className="col-3">
            <p>Waktu Jemput/Ambil</p>
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="waktu-jemput"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Pilih Waktu
                <img src="./img/fi_clock.png" />
              </button>
              <ul
                id="waktu-jemput-list"
                className="dropdown-menu"
                aria-labelledby="waktu-jemput"
              >
                <li>
                  <a className="dropdown-item waktu-jemput-item">-none-</a>
                </li>
                <li>
                  <a className="dropdown-item waktu-jemput-item">8.00</a>
                </li>
                <li>
                  <a className="dropdown-item waktu-jemput-item">9.00</a>
                </li>
                <li>
                  <a className="dropdown-item waktu-jemput-item">10.00</a>
                </li>
                <li>
                  <a className="dropdown-item waktu-jemput-item">11.00</a>
                </li>
                <li>
                  <a className="dropdown-item waktu-jemput-item">12.00</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-3">
            <p>Jumlah Penumpang (optional)</p>
            <select
              className="btn-select form-select"
              aria-label="Default select example"
              onChange={handleSetCapacity}
            >
              <option selected>Jumlah Penumpang</option>
              <option value="2">2</option>
              <option value="4">4</option>
              <option value="6">6</option>
            </select>
            {/* <input id="jumlahPenumpang" className="btn btn-secondary dropdown-toggle" placeholder="Jumlah Penumpang" type="text" /> */}
          </div>
          <div className="col-lg text-end mt-4">
            <button id="search-btn" type="submit" className="btn">
              Cari Mobil
            </button>
          </div>
        </div>
      </form>

      {/* script */}
      {/*  */}
    </div>
  );
}

export default CarsPage;
