import { Link } from "react-router-dom";
function CTASection() {
  return (
    <section className="cta-sec">
      <div className="container">
        <div className="row align-items-center">
          <div class="col-md-12">
            <div class="cta-content text-center">
              <h2>Have A Question About Oil Extraction? We Have Answers.</h2>
              <p>Let’s start a conversation about our contract manufacturing solutions.</p>
              <Link to="/about" className="btn-custom">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTASection;