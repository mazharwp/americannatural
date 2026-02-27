import videoFile from "../../assets/images/anp-clipped-for-webpg.mp4";

function Banner() {
  return (
    <section className="video-banner" id="home">
      <video autoPlay muted loop playsInline>
        <source src={videoFile} type="video/mp4" />
      </video>

      <div className="video-overlay">
        <div className="banner-content">
          <h1>Your Partner in Organic & Natural Processing</h1>
          <h5>Organic Plant Proteins and Oils</h5>
          <p>Certified Organic – Cold Pressed or RBD Refined</p>
          <a href="#about" className="btn-custom">Contact Us</a>
        </div>
      </div>

      <div className="scroll-indicator">
        <i className="fas fa-chevron-down"></i>
      </div>
    </section>
  );
}

export default Banner;