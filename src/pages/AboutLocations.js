import { Link } from "react-router-dom";

import assetIcon from "../assets/images/Asset-4.png";
import innovativeIcon from "../assets/images/Innovative-icon.png";
import qualityIcon from "../assets/images/Quality-icon.png";

import innovationImg from "../assets/images/why-anp-image-12.jpg";

import galvaImg from "../assets/images/Cherokee-image.jpg";
import cherokeeImg from "../assets/images/f0qEMb4A.jpg";
import siouxImg from "../assets/images/Sioux-City-image.jpg";

import partnerImg from "../assets/images/image22.png";



function WhyAnp() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="weUnlock-sec weDo-sec">
        <div className="image-box d-flex align-items-center justify-content-center">
          <div className="image-box-content text-center">
            <h1 className="main-title">About Us</h1>
            <p>
              Your success in the marketplace is our success as your
              co-manufacturer
            </p>
          </div>
        </div>

        <div className="container weUnlock-content">
          <div className="row g-4 justify-content-center text-center">

            <div className="col-lg-4 col-sm-6">
              <div className="service-card">
                <div className="icon-wrapper">
                  <img src={qualityIcon} className="img-fluid" alt="" />
                </div>
                <h4>Strategic Solutions</h4>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="service-card">
                <div className="icon-wrapper">
                  <img src={assetIcon} className="img-fluid" alt="" />
                </div>
                <h4>Quality</h4>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="service-card">
                <div className="icon-wrapper">
                  <img src={innovativeIcon} className="img-fluid" alt="" />
                </div>
                <h4>Innovation</h4>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* INNOVATION */}
      <section className="container feature-row py-5">
        <div className="row align-items-start">
          <div className="col-lg-7">
            <img src={innovationImg} className="img-fluid img-layer" alt="" />
          </div>
          <div className="col-lg-5">
            <div className="floating-content shadow-lg p-4">
              <h2 className="fw-bold text-danger mb-4">
                Research & Development
              </h2>
              <p>
                As your food development contract manufacturing partner,
                American Natural Processors assists customers in creating
                new innovative processes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LOCATIONS */}
      <section className="locations-Sec py-5">
        <div className="container">
          <h1 className="main-heading text-center mb-5">
            3 Processing Plant Locations
          </h1>

          <div className="row g-4 mb-5">

            {[{
              img: galvaImg,
              title: "ANP Galva",
              address: "6081 150th Street, Galva, IA 51020"
            },
            {
              img: cherokeeImg,
              title: "ANP Cherokee",
              address: "1510 South 2nd St., Cherokee, IA 51012"
            },
            {
              img: siouxImg,
              title: "ANP Sioux City",
              address: "2901 Floyd Blvd., Sioux City, IA 51108"
            }].map((loc, index) => (
              <div className="col-md-4" key={index}>
                <div className="location-card">
                  <img src={loc.img} className="location-img" alt="" />
                  <div className="p-4">
                    <h5 className="fw-bold m-0">{loc.title}</h5>
                    <p className="small text-muted mb-3">
                      {loc.address}
                    </p>
                    <Link to="#" className="map-overlay-btn">
                      View Map
                    </Link>
                  </div>
                </div>
              </div>
            ))}

          </div>

          {/* PARTNERSHIP */}
          <div className="row bg-light p-md-5 p-3 align-items-center mb-5 g-3">
            <div className="col-md-4">
              <img
                src={partnerImg}
                className="img-fluid rounded shadow"
                alt=""
              />
            </div>
            <div className="col-md-8">
              <h3 className="fw-bold text-dark">
                Exclusive Manufacturing Partnership
              </h3>
              <p>
                ANP offers exclusive manufacturing partnerships for
                customers with unique products and limited production
                capabilities.
              </p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

export default WhyAnp;