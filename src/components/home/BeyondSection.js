import aboutImage from "../../assets/images/homepage-about-anp.jpg";

function BeyondSection() {
  return (
    <section className="beyond-sec comm-sec">
      <div className="container">
        <div className="ac-content-wrap">
            <div className="ac-content-col ac-right-col">
                <div className="ac-content-inner">
                    <div className="ac-content-desc">
                      <h4>Beyond Traditional Seed Processing</h4>
                      <p>We don’t just focus on processing mass quantities, instead, our goal is to meet our customers’ requests regardless of the size or scope of the production run.</p>
                      <h4>Flexible and Innovative </h4>
                      <p>As a family-owned company, we pride ourselves on being flexible and innovative with the ability to pivot and adjust quickly.</p>
                    </div>
                </div>
            </div>
            <div className="ac-content-col ac-left-col">
                <div className="ac-content-inner">
                  <img src={aboutImage} alt="" className="img-fluid img-layer" /> 
                </div>
            </div>

        </div>
    </div>
</section>
  );
}

export default BeyondSection;