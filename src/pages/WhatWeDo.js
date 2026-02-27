import { Link } from "react-router-dom";

// 🔹 Import Images
import imgUnlock1 from "../assets/images/1-extracting-oil@2x.png";
import imgUnlock2 from "../assets/images/2-expeller-pressing@2x.png";
import imgUnlock3 from "../assets/images/3-RBD@2x.png";
import imgUnlock4 from "../assets/images/4-Milling@2x.png";
import imgUnlock5 from "../assets/images/5-Sterilizing@2x.png";
import imgUnlock6 from "../assets/images/6-packaging@2x.png";
import imgUnlock7 from "../assets/images/7-truck@2x-1.png";

import process4 from "../assets/images/milling-what-we-do.jpg";
import process5 from "../assets/images/sterilization-what-we-do.jpg";
import process2 from "../assets/images/what-we-do-image-2.jpg";
import process3 from "../assets/images/what-we-do-image-3.jpg";
import process1 from "../assets/images/what-we-do-image1.jpg";
import process6 from "../assets/images/what-we-do-transport-3.jpg";

import packaging1 from "../assets/images/what-we-do-transport-1.jpg";
import packaging3 from "../assets/images/what-we-do-transport-3.jpg";
import packaging4 from "../assets/images/what-we-do-transport-4.jpg";
import packaging2 from "../assets/images/whatwedo-railtrack.jpg";

import protein2 from "../assets/images/50lbsbags.jpg";
import protein1 from "../assets/images/what-we-do-transport-5.jpg";
import protein3 from "../assets/images/whatwedo-sack.jpg";

import warehouseImg from "../assets/images/Warehouse-sm.jpg";

function WhatWeDo() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="weUnlock-sec">
        <div className="image-box d-flex align-items-center justify-content-center">
          <h1 className="main-title">WHAT WE DO</h1>
        </div>

        <div className="container weUnlock-content">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="value-card">
                <div className="icon-wrapper">
                  <i className="fas fa-unlock-alt"></i>
                </div>
                <h2 className="section-heading">We Unlock Product Value</h2>
                <div className="custom-line"></div>
                <p className="section-text">
                  ANP has developed a multitude of processes to unlock hidden value in the unique products we produce.
                  We have developed these processes through partnerships, and through our own product development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="services-section py-md-5 py-3">
        <div className="container">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-8">
              <h2 className="display-5 fw-bold section-title">What We Do</h2>
              <div className="title-line"></div>
              <p className="section-subtitle mt-3">
                American Natural Processors has developed a multitude of organic processes and production lines to produce all types of food and feed products.
              </p>
            </div>
          </div>

          <div className="row g-4">
            {[
              { img: imgUnlock1, title: "Oil Extraction" },
              { img: imgUnlock2, title: "Expeller Cold Press" },
              { img: imgUnlock3, title: "RBD Oil Refining" },
              { img: imgUnlock4, title: "Milling" },
              { img: imgUnlock5, title: "Sterilization" },
              { img: imgUnlock6, title: "Packaging" },
              { img: imgUnlock7, title: "Warehousing & Distribution" },
            ].map((item, i) => (
              <div className="col-lg-3 col-sm-6" key={i}>
                <div className="service-card">
                  <div className="icon-wrapper">
                    <img src={item.img} alt={item.title} className="img-fluid" />
                  </div>
                  <h4>{item.title}</h4>
                  <Link to="/contact" className="learn-more">
                    Learn More <i className="fas fa-arrow-right ms-2"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="process-container py-5">
        <div className="container">

          {/* 01 */}
          <div className="row align-items-center justify-content-between mb-5 staggered-row">
            <div className="col-lg-6 position-relative">
              <img src={process1} className="img-fluid custom-img" alt="Oilseed Extraction" />
            </div>
            <div className="col-lg-5 offset-lg-1">
              <div className="info-card">
                <span className="step-label">01</span>
                <h3 className="title-red"><i className="fas fa-seedling me-2"></i>Oilseed Extraction</h3>
                <p className="text-muted">At American Natural Processors we use only chemical free, certified organic, expeller pressing...</p>
              </div>
            </div>
          </div>

          {/* 02 */}
          <div className="row align-items-center justify-content-between mb-5 staggered-row flex-lg-row-reverse">
            <div className="col-lg-6 position-relative">
              <img src={process2} className="img-fluid custom-img" alt="Expeller Cold Press" />
            </div>
            <div className="col-lg-5">
              <div className="info-card left-card">
                <span className="step-label">02</span>
                <h3 className="title-red"><i className="fas fa-snowflake me-2"></i>Expeller Cold Press</h3>
                <p className="text-muted">Using our cold press line is the best way to maximize the natural antioxidants...</p>
              </div>
            </div>
          </div>

          {/* 03 */}
          <div className="row align-items-center justify-content-between mb-5 staggered-row">
            <div className="col-lg-6 position-relative">
              <img src={process3} className="img-fluid custom-img" alt="RBD Oil Refining" />
            </div>
            <div className="col-lg-5 offset-lg-1">
              <div className="info-card">
                <span className="step-label">03</span>
                <h3 className="title-red"><i className="fas fa-filter me-2"></i>RBD Oil Refining</h3>
                <p className="text-muted">For cooking oils and oils that require high stability...</p>
              </div>
            </div>
          </div>

          {/* 04 */}
          <div className="row align-items-center justify-content-between mb-5 staggered-row flex-lg-row-reverse">
            <div className="col-lg-6 position-relative">
              <img src={process4} className="img-fluid custom-img" alt="Protein Powder Milling" />
            </div>
            <div className="col-lg-5">
              <div className="info-card left-card">
                <span className="step-label">04</span>
                <h3 className="title-red"><i className="fas fa-box-open me-2"></i>Protein Powder Milling</h3>
                <p className="text-muted">Our state-of-the-art milling line adds value...</p>
              </div>
            </div>
          </div>

          {/* 05 */}
          <div className="row align-items-center justify-content-between mb-5 staggered-row">
            <div className="col-lg-6 position-relative">
              <img src={process5} className="img-fluid custom-img" alt="Sterilization" />
            </div>
            <div className="col-lg-5 offset-lg-1">
              <div className="info-card">
                <span className="step-label">05</span>
                <h3 className="title-red"><i className="fas fa-microscope me-2"></i>Sterilization & Pasteurization</h3>
                <p className="text-muted">ANP offers custom Sterilization and Pasteurization...</p>
              </div>
            </div>
          </div>

          {/* 06 */}
          <div className="row align-items-center justify-content-between mb-5 staggered-row flex-lg-row-reverse">
            <div className="col-lg-6 position-relative">
              <img src={process6} className="img-fluid custom-img" alt="Packaging" />
            </div>
            <div className="col-lg-5">
              <div className="info-card left-card">
                <span className="step-label">06</span>
                <h3 className="title-red"><i className="fas fa-boxes me-2"></i>Packaging</h3>
                <p className="text-muted">As a small family owned company, we pride ourselves...</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* PACKAGING */}
      <section className="oil-packaging-sec py-5">
        <div className="container">
          <h2 className="display-6 text-center fw-bold section-title">Oil Packaging</h2>
          <div className="title-line"></div>

          <div className="row g-4 my-3">
            <div className="col-6 col-md-3">
              <div className="card packaging-card shadow-sm">
                <img src={packaging1} className="card-img-top" alt="Bulk Tanker" />
                <div className="card-body">
                  <h5 className="card-title">
                    <i className="fas fa-truck-moving me-2"></i>
                    Bulk Tanker
                  </h5>
                </div>
              </div>
            </div>

            <div className="col-6 col-md-3">
              <div className="card packaging-card shadow-sm">
                <img src={packaging2} className="card-img-top" alt="Rail Tanker" />
                <div className="card-body">
                  <h5 className="card-title">
                    <i className="fas fa-train me-2"></i>
                    Rail Tanker
                  </h5>
                </div>
              </div>
            </div>

            <div className="col-6 col-md-3">
              <div className="card packaging-card shadow-sm">
                <img src={packaging3} className="card-img-top" alt="Tote" />
                <div className="card-body">
                  <h5 className="card-title">
                    <i className="fas fa-box me-2"></i>
                    Tote
                  </h5>
                </div>
              </div>
            </div>

            <div className="col-6 col-md-3">
              <div className="card packaging-card shadow-sm">
                <img src={packaging4} className="card-img-top" alt="Drum" />
                <div className="card-body">
                  <h5 className="card-title">
                    <i className="fas fa-oil-can me-2"></i>
                    Drum
                  </h5>
                </div>
              </div>
            </div>

          </div>

          <h2 className="display-6 mt-5 text-center fw-bold section-title">Protein Packaging</h2>
          <div className="title-line"></div>

          <div className="row g-4 my-3 justify-content-center">
              <div className="col-6 col-md-3">
                <div className="card packaging-card shadow-sm">
                  <img src={protein1} className="card-img-top" alt="Truck" />
                  <div className="card-body">
                    <h5 className="card-title">Truck</h5>
                  </div>
                </div>
              </div>

              <div className="col-6 col-md-3">
                <div className="card packaging-card shadow-sm">
                  <img src={protein2} className="card-img-top" alt="50 LB Bag" />
                  <div className="card-body">
                    <h5 className="card-title">50 LB Bag</h5>
                  </div>
                </div>
              </div>

              <div className="col-6 col-md-3">
                <div className="card packaging-card shadow-sm">
                  <img src={protein3} className="card-img-top" alt="Super Sack" />
                  <div className="card-body">
                    <h5 className="card-title">Super Sack</h5>
                  </div>
                </div>
              </div>

            </div>
        </div>
      </section>

      {/* WAREHOUSE */}
      <section className="py-5 warehouse-sec">
        <div className="container">
          <div className="row warehouse-con shadow-sm align-items-center">
            <div className="col-lg-6 p-0">
              <img src={warehouseImg} className="img-fluid h-100" alt="Warehouse" />
            </div>
            <div className="col-lg-6">
              <div className="warehouse-text-content py-md-5 p-3">
                    <h2 className="section-title text-start mb-4">Safe &amp; Secure Warehousing</h2>
                    <p className="text-muted">Proper storage is vital. We take pride in every service we offer including warehousing. Each of our sites have storage but our largest facility in Sioux City, Iowa has 400,000 sq. ft. and is located near interstate 29.
                      Our facilities are secure with only authorized access. Our trained staff inspect trucks carefully, verify materials and quantities are accurate and properly loaded.
                      Our system can pinpoint exactly where your product is located and how long it has been warehoused. We provide you with monthly inventory reports of your product.</p>
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
     <section className="cta-sec text-center py-5">
        <div className="cta-overlay"></div>
          <div className="container">
            <div className="row align-items-center">
              <div claclassNamess="col-md-12">
                <div className="cta-content text-center">
                  <h2 className="cta-title">Have A Question About Oil Extraction? We Have Answers.</h2>
                  <div className="title-divider mx-auto"></div>
                  <p className="cta-text">We continue to develop new methods and products for the ever-expanding specialty food marketplace. Let's start a conversation about our contract manufacturing solutions.</p>
                  <Link to="/contact-us" className="btn btn-danger">Contact Us</Link>
                </div>
              </div>
            </div>
          </div>
      </section>

    </>
  );
}

export default WhatWeDo;