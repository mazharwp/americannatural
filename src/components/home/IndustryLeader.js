import aboutImage from "../../assets/images/homepage-about-anp.jpg";

function IndustryLeader() {
  return (
    <section className="industryLeader comm-sec">
      <div className="container">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
            <h2 className="display-5 fw-bold section-title">Your Partner and Industry Leader</h2>
            <div className="title-line"></div>
            <h4 className="section-subtitle mt-3">Organic Plant Proteins and Oils</h4>
          </div>
        </div>



        <div className="ac-content-wrap">
            <div className="ac-content-col ac-left-col">
                <div className="ac-content-inner">
                     <img src={aboutImage} alt="" className="img-fluid img-layer" />                      
                </div>
            </div>
            <div className="ac-content-col ac-right-col">
                <div className="ac-content-inner">
                    <div className="ac-content-desc">
                      <h4>Including soy, canola, sunflower, safflower, flax, hemp, chia, corn, organic soy lecithin &amp; algae.</h4>
                      <p>Over the years ANP has developed a multitude of organic processes and production lines to produce all types of food and feed products. With our custom-built expeller press plants, we mechanically squeeze the oil out of a large range of products including soy, canola, sunflower, safflower, flax, hemp, chia, corn, organic soy lecithin and even algae. And it’s all Chemical Free. Once the oil is removed it can either be sold as cold pressed oil, or we can run it through one of our custom built RBD refineries.</p>
                    </div>
                </div>
            </div>

        </div>


      </div>
    </section>
  );
}

export default IndustryLeader;