import contactImg from "../assets/images/image21.png"; // apne path ke hisab se change karo

const Contact = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="weUnlock-sec contact-sec">
        <div className="image-box d-flex align-items-center justify-content-center">
          <div className="image-box-content">
            <h1 className="main-title">CONTACT US</h1>
          </div>
        </div>

        <div className="container weUnlock-content">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="value-card">
                <h2 className="section-heading">
                  American Natural Processors
                </h2>
                <div className="custom-line"></div>
                <h4>Your Partner in Organic & Natural Processing</h4>
                <p className="section-text">
                  Ready to elevate your product with cleaner, more sustainable
                  processing? At American Natural Processors, we combine
                  innovation, expertise, and integrity to deliver customized
                  solutions that meet your exact needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Details Section */}
      <section className="pb-5 bg-dark py-5 contact-detail" id="contact">
        <div className="container py-3">
          <div className="row g-4 text-center mb-5">
            {/* Location */}
            <div className="col-md-4">
              <div className="card p-4 contact-info-card h-100">
                <div className="contact-icon mx-auto">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <h5>Our Location</h5>
                <p className="text-muted">
                  600 Stevens Port Drive Suite 325 Dakota Dunes SD 57049
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="col-md-4">
              <div className="card p-4 contact-info-card h-100">
                <div className="contact-icon mx-auto">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <h5>Call Us</h5>
                <p className="text-muted">605-242-6074</p>
              </div>
            </div>

            {/* Email */}
            <div className="col-md-4">
              <div className="card p-4 contact-info-card h-100">
                <div className="contact-icon mx-auto">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <h5>Email Us</h5>
                <p className="text-muted">
                  sales@americannatural.us
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="shadow rounded overflow-hidden bg-white">
            <div className="row g-0">
              <div className="col-md-6 contact-form p-4">
                <h2 className="fw-bold mb-2">Get In Touch</h2>
                <p className="text-muted mb-4">
                  Feel free to drop us a message. Our team will get back to you
                  within 24 hours.
                </p>

                <form autoComplete="off">
                  <div className="mb-3">
                    <label className="form-label small fw-bold">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label small fw-bold">
                        Phone
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="+91- Phone"
                        required
                      />
                    </div>

                    <div className="col-md-6 mb-3">
                      <label className="form-label small fw-bold">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email Address"
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label small fw-bold">
                      Message
                    </label>
                    <textarea
                      className="form-control"
                      rows="4"
                      placeholder="How can we help you?"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary w-100 py-3 fw-bold"
                  >
                    <i className="fa-solid fa-paper-plane me-2"></i>
                    Submit Now
                  </button>
                </form>
              </div>

              {/* Image Side */}
              <div className="col-md-6 d-none d-md-block position-relative">
                <img
                  src={contactImg}
                  alt="Contact"
                  className="contact-img"
                />
                <div className="position-absolute bottom-0 start-0 p-4 text-white bg-dark bg-opacity-50 w-100">
                  <h5>American Natural Processors, LLC</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;