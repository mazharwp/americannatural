import { Link } from "react-router-dom";

import assetIcon from "../assets/images/Asset-4.png";
import innovativeIcon from "../assets/images/Innovative-icon.png";
import qualityIcon from "../assets/images/Quality-icon.png";

import strategicImg from "../assets/images/what-we-do-image-3 (1).jpg";
import whyImg from "../assets/images/why-anp-image-12.jpg";

import galvaImg from "../assets/images/Cherokee-image.jpg";
import cherokeeImg from "../assets/images/f0qEMb4A.jpg";
import siouxImg from "../assets/images/Sioux-City-image.jpg";


import nirImg from "../assets/images/NIR_Machine.jpg";
import labImg from "../assets/images/why-anp-image-11.jpg";

import ngmoImg from "../assets/images/NGP-Logo-150x111.jpg";
import kosherImg from "../assets/images/Orthodox-Union-Kosher-Certified.jpg";
import organicImg from "../assets/images/Where-Food-Comes-From-Logo.jpg";

function WhyAnp() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="weUnlock-sec weDo-sec">
        <div className="image-box d-flex align-items-center justify-content-center">
          <div className="image-box-content text-center">
            <h1 className="main-title">WHY ANP?</h1>
            <p>
              Your success in the marketplace is our success as your
              co-manufacturer
            </p>
          </div>
        </div>

        <div className="container weUnlock-content">
          <div className="value-card">
            <div className="row g-4 justify-content-center text-center">

              <div className="col-lg-4 col-sm-6">
                <div className="service-card">
                  <div className="icon-wrapper">
                    <img src={qualityIcon} alt="" className="img-fluid" />
                  </div>
                  <h4>Strategic Solutions</h4>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6">
                <div className="service-card">
                  <div className="icon-wrapper">
                    <img src={assetIcon} alt="" className="img-fluid" />
                  </div>
                  <h4>Quality</h4>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6">
                <div className="service-card">
                  <div className="icon-wrapper">
                    <img src={innovativeIcon} alt="" className="img-fluid" />
                  </div>
                  <h4>Innovation</h4>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* INNOVATION SECTION */}
      <section className="container feature-row py-5">
        <div className="row align-items-start">
          <div className="col-lg-7">
            <img src={whyImg} className="img-fluid img-layer" alt="R&D" />
          </div>
          <div className="col-lg-5">
            <div className="floating-content shadow-lg p-4">
              <h2 className="fw-bold text-danger mb-4">
                Research & Development
              </h2>
              <p>
                As your food development contract manufacturing partner, American Natural Processors is eager to assist our customers in creating new innovative processes.
                Our knowledgeable, experienced staff and our large variety of equipment can handle the numerous small batches and runs necessary for product development. We are enthusiastic to work with you by doing trial runs and adjusting inputs and processes to get your process just right. We will work hard for you and with you to get to full-scale quality runs helping to design your specific processing standards while assisting to validate the process and comply with regulations.
                Our R&D staff lead by Nicole Schuett Jennett, food scientist, will work with you and run as many trials as necessary to find the right solution for you. If we work with you to develop a specific process for your product, we will always safeguard your proprietary information.
                We are constantly looking for opportunities and new companies to partner with. All of our facilities are designed for expansion and scaled for growth so if you are looking for someone to help you develop a new product, give us a call today.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STRATEGIC SECTION */}
      <section className="container feature-row py-5">
        <div className="row flex-row-reverse align-items-start">
          <div className="col-lg-7">
            <img src={strategicImg} className="img-fluid img-layer" alt="" />
          </div>
          <div className="col-lg-5">
            <div
              className="floating-content shadow-lg p-4"
              style={{ marginRight: "-80px" }}
            >
              <h2 className="fw-bold text-danger mb-4">
                Co-Manufacturing / Toll Processing
              </h2>
              <p>
                Our primary focus is Contract Manufacturing and Toll Processing. With four separate processing facilities we have the right equipment to meet your needs. Our oilseed crush and oil refining facilities are state-of-the-art and designed for flexibility and reliability. All of our systems are organic, chemical free, identity preserved, and able to process a large variety of inputs. Our proven team consistently delivers quality product, and with pressing and refineries in separate locations, we can provide the redundancy needed to supply the most cautious customers.
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

            <div className="col-md-4">
              <div className="location-card">
                <img src={galvaImg} className="location-img" alt="" />
                <div className="p-4">
                  <h5 className="fw-bold m-0">ANP Galva</h5>
                  <p className="small text-muted">
                    6081 150th Street, Galva, IA
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="location-card">
                <img src={cherokeeImg} className="location-img" alt="" />
                <div className="p-4">
                  <h5 className="fw-bold m-0">ANP Cherokee</h5>
                  <p className="small text-muted">
                    1510 South 2nd St., Cherokee, IA
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="location-card">
                <img src={siouxImg} className="location-img" alt="" />
                <div className="p-4">
                  <h5 className="fw-bold m-0">ANP Sioux City</h5>
                  <p className="small text-muted">
                    2901 Floyd Blvd., Sioux City, IA
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* QUALITY */}
      <section className="container py-5">
        <div className="row g-0 border">

          <div className="col-md-4 d-none d-md-block">
            <img src={nirImg} className="w-100" alt="" />
            <img src={labImg} className="w-100" alt="" />
          </div>

          <div className="col-md-8 p-4">
            <h2 className="fw-bold text-danger mb-4">
              Quality is our Mission
            </h2>

            <p>
              Our goal is to achieve excellence in every aspect of service we provide to our valuable customers. We are committed to listening to our customers, meeting their demands and deadlines while working together to accomplish every objective. We manufacture your products with strict quality controls.
              American Natural Processors, Inc. seeks to operate within the highest standards of integrity establishing strong customer relationships built on trust, excellent communication and accountability. Providing the highest quality custom processing according to our customers’ specifications is job one. We listen to you and respond promptly. Your products will always be processed precisely for you. Our experienced knowledgeable employees are dedicated to meeting your deadlines and specifications.
              We diligently protect information about your product and your customers or input sources. Because we implement exceptional food manufacturing training and certification programs, our staff is highly qualified to serve your needs by adhering to our strict quality controls.
            </p>

            <h4 className="fw-bold mt-4">Certifications</h4>

            <div className="d-flex justify-content-around mt-4">
              <img src={kosherImg} alt="" />
              <img src={organicImg} alt="" />
              <img src={ngmoImg} alt="" />
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="cta-sec text-center py-5">
        <div className="cta-overlay"></div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-12">
              <div className="cta-content text-center">
                <h2 className="cta-title">Have A Question About Oil Extraction? We Have Answers.</h2>
                <div className="title-divider mx-auto"></div>
                    <p className="cta-text">We continue to develop new methods and products for the ever-expanding specialty food marketplace. Let's start a conversation about our contract manufacturing solutions.</p>
                    <Link to="/contact-us" className="btn-custom">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WhyAnp;

