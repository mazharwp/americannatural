import { Link } from "react-router-dom";

// 🔹 Import Icons
import icon1 from "../assets/images/icon1.png";
import icon3 from "../assets/images/icon3.png";
import icon4 from "../assets/images/icon4.png";
import icon5 from "../assets/images/icon5.png";
import icon6 from "../assets/images/icon6.png";
import icon7 from "../assets/images/icon7.png";
import icon8 from "../assets/images/icon8.png";

const CareerPage = () => {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="weUnlock-sec joinTeam-sec">
        <div className="image-box d-flex align-items-center justify-content-center">
          <div className="image-box-content">
            <h1 className="main-title">Career</h1>
          </div>
        </div>

        <div className="container weUnlock-content">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="value-card">
                <h2 className="section-heading">Join Our Growing Team</h2>
                <div className="custom-line"></div>
                <p className="section-text">
                  We’re growing and looking for employees to join our team. As a
                  small, family-owned company, we are proud of our ability to
                  pivot to capture new opportunities. Our benefits include
                  medical insurance for employees working 30-plus hours, a
                  flexible benefits plan, IRA, paid holidays, PTO, a Work-Life
                  Balance program, travel assistance, and more!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BENEFITS SECTION ================= */}
      <section className="services-section py-md-5 py-3 benefits-con">
        <div className="container">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-8">
              <h2 className="display-5 fw-bold section-title">Benefits</h2>
              <div className="title-line"></div>
            </div>
          </div>

          <div className="row g-4">

            {/* Card 1 */}
            <div className="col-lg-3 col-sm-6">
              <div className="service-card text-center">
                <div className="icon-wrapper">
                  <img src={icon6} alt="Flexible Benefits Plan" className="img-fluid" />
                </div>
                <h4>Flexible Benefits Plan</h4>
                <Link to="#" className="learn-more">
                  Learn More <i className="fas fa-arrow-right ms-2"></i>
                </Link>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-lg-3 col-sm-6">
              <div className="service-card text-center">
                <div className="icon-wrapper">
                  <img src={icon1} alt="Medical Insurance" className="img-fluid" />
                </div>
                <h4>Medical Insurance</h4>
                <Link to="#" className="learn-more">
                  Learn More <i className="fas fa-arrow-right ms-2"></i>
                </Link>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-lg-3 col-sm-6">
              <div className="service-card text-center">
                <div className="icon-wrapper">
                  <img src={icon5} alt="IRA" className="img-fluid" />
                </div>
                <h4>IRA</h4>
                <Link to="#" className="learn-more">
                  Learn More <i className="fas fa-arrow-right ms-2"></i>
                </Link>
              </div>
            </div>

            {/* Card 4 */}
            <div className="col-lg-3 col-sm-6">
              <div className="service-card text-center">
                <div className="icon-wrapper">
                  <img src={icon4} alt="Paid Holidays" className="img-fluid" />
                </div>
                <h4>Paid Holidays</h4>
                <Link to="#" className="learn-more">
                  Learn More <i className="fas fa-arrow-right ms-2"></i>
                </Link>
              </div>
            </div>

            {/* Card 5 */}
            <div className="col-lg-3 col-sm-6">
              <div className="service-card text-center">
                <div className="icon-wrapper">
                  <img src={icon3} alt="PTO" className="img-fluid" />
                </div>
                <h4>PTO</h4>
                <Link to="#" className="learn-more">
                  Learn More <i className="fas fa-arrow-right ms-2"></i>
                </Link>
              </div>
            </div>

            {/* Card 6 */}
            <div className="col-lg-3 col-sm-6">
              <div className="service-card text-center">
                <div className="icon-wrapper">
                  <img src={icon8} alt="Work-Life Balance Program" className="img-fluid" />
                </div>
                <h4>Work-Life Balance Program</h4>
                <Link to="#" className="learn-more">
                  Learn More <i className="fas fa-arrow-right ms-2"></i>
                </Link>
              </div>
            </div>

            {/* Card 7 */}
            <div className="col-lg-3 col-sm-6">
              <div className="service-card text-center">
                <div className="icon-wrapper">
                  <img src={icon7} alt="Travel Assistance" className="img-fluid" />
                </div>
                <h4>Travel Assistance</h4>
                <Link to="#" className="learn-more">
                  Learn More <i className="fas fa-arrow-right ms-2"></i>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="cta-sec">
        <div className="cta-overlay"></div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-12">
              <div className="cta-content text-center">
                <h2 className="cta-title">
                  Have A Question About Oil Extraction? We Have Answers.
                </h2>
                <div className="title-divider mx-auto"></div>
                <p className="cta-text">
                  We continue to develop new methods and products for the
                  ever-expanding specialty food marketplace. Let's start a
                  conversation about our contract manufacturing solutions.
                </p>
                <Link to="/contact" className="btn-custom">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CareerPage;