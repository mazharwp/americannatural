import { Link } from "react-router-dom";
import icon2 from "../../assets/images/2-quality@2x.png";
import icon3 from "../../assets/images/3-strategic@2x.png";
import icon1 from "../../assets/images/Innovative_Processing-_Icon.png";

function Services() {
  return (
    <section className="services-section moreSer-con py-md-5 py-3">
        <div className="container">
          <div className="row g-4">


            <div className="col-lg-4 col-sm-6">
              <div className="service-card">
                  <div class="icon-wrapper">
                    <img src={icon1} alt="" className="img-fluid mb-3" />
                  </div>
                  <h3>Innovative Processing</h3>
                  <p>We have an established history as an innovator in developing unique processes for niche markets.</p>
                  <Link to="/why-anp" className="learn-more">Learn more
                    <i className="fas fa-arrow-right ms-2"></i>
                  </Link>
              </div>
            </div>


 
            <div className="col-lg-4 col-sm-6">
              <div className="service-card">
                <div class="icon-wrapper">
                  <img src={icon2} alt="" className="img-fluid mb-3" />
                </div>
                <h3>Unsurpassed Quality</h3>
                <p>We are committed to providing the highest quality products along with services that meet or exceed expectations.</p>
                <Link to="/why-anp" className="learn-more">Learn more
                    <i className="fas fa-arrow-right ms-2"></i>
                  </Link>
              </div>
            </div>



            <div className="col-lg-4 col-sm-6">
              <div className="service-card">
                <div class="icon-wrapper">
                   <img src={icon3} alt="" className="img-fluid mb-3" />
                </div>
                 <h3>Strategic Solutions</h3>
                  <p>We have strategic partnerships in many different forms, from strict toll process, to product specific exclusive partnerships.</p>
                  <Link to="/why-anp" className="learn-more">Learn more
                    <i className="fas fa-arrow-right ms-2"></i>
                  </Link>
              </div>
            </div>


        </div>
      </div>
    </section>
  );
}

export default Services;