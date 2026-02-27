import { Link } from "react-router-dom";
import certificates from "../assets/images/Layer-4-copy.png";
import catalog from "../assets/images/badge-view-our-catalog.png";
import logo from "../assets/images/logo-american.png";

function Footer() {
  return (
    <footer className="main-footer bg-dark text-white pt-5 pb-3">
      <div className="container">
        <div className="row gy-5">

          {/* Column 1 */}
          <div className="col-lg-4 col-md-6">
            <h5 className="footer-heading">American Natural Processors</h5>

            <div className="contact-info mt-4">
              <p>
                <i className="fa-solid fa-location-dot me-2"></i>
                <strong> Corporate Offices</strong>
              </p>

              <p className="ms-4 text-muted">
                600 Stevens Port Drive Suite 325 <br />
                Dakota Dunes SD 57049
              </p>

              <p className="mt-3">
                <i className="fa-solid fa-phone me-2"></i>
                <a href="tel:6052426074" className="text-white">
                  605-242-6074
                </a>
              </p>

              <p>
                <i className="fa-solid fa-envelope me-2"></i>
                <a
                  href="mailto:sales@americannatural.us"
                  className="text-white"
                >
                  sales@americannatural.us
                </a>
              </p>
            </div>

            {/* Social Links (External → use <a>) */}
            <div className="social-links mt-4">

              <a
                href="https://www.facebook.com/AmericanNaturalProcessors/"
                target="_blank"
                rel="noopener noreferrer"
                className="me-3 text-white"
              >
                <i className="fab fa-facebook"></i>
              </a>

              <a
                href="https://www.linkedin.com/company/american-natural-processors"
                target="_blank"
                rel="noopener noreferrer"
                className="me-3 text-white"
              >
                <i className="fab fa-linkedin"></i>
              </a>

              <a href="#" className="text-white">
                <i className="fab fa-twitter"></i>
              </a>

            </div>
          </div>

          {/* Column 2 */}
          <div className="col-lg-4 col-md-6">
            <h5 className="footer-heading">Quick Links</h5>
            <ul className="footer-nav-grid mt-4 list-unstyled">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/why-anp">Why ANP</Link></li>
              <li><Link to="/who-we-are">Who We Are</Link></li>
              <li><Link to="/what-we-do">What We Do</Link></li>
              <li><Link to="/career">Careers</Link></li>
              <li><Link to="/contact-us">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="col-lg-4 col-md-12 text-md-end text-center">
              {/* Footer Logo */}
              <div className="footer-logo-placeholder mb-4">
                <Link to="/">
                  <img src={logo} alt="Footer Logo" className="img-fluid" />
                </Link>
              </div>

              {/* Footer Certificates */}
              <div className="cert-placeholder mb-4 d-flex justify-content-center justify-content-md-end gap-3 flex-wrap">

                <div className="badge-box">
                  <Link to="/">
                    <img src={certificates} alt="Certificate" className="img-fluid" />
                  </Link>
                </div>

                <div className="badge-box">
                  <Link to="/">
                    <img  src={catalog} alt="Catalog"  className="img-fluid" />
                  </Link>
                </div>

              </div>
            </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center mt-3">
        <p className="mb-0">
          © {new Date().getFullYear()} American Natural Processors, Inc.
        </p>
      </div>
    </footer>
  );
}

export default Footer;