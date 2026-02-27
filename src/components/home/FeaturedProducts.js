import { Link } from 'react-router-dom';
import airplaneImage from "../../assets/images/airplane-image.jpg";
import flexImage from "../../assets/images/flex-image.jpg";
import winImage from "../../assets/images/win-image.jpg";
function FeaturedProducts() {
  return (
    <section className="product-section pb-5">
      <div className="container">
        <div className="section-title-wrap">
          <h1 className="main-heading">Featured Products</h1>
          <span className="heading-accent"></span>
        </div>

        <div className="row g-4">

          <div className="col-md-4">
            <div className="card product-card">
              <div className="product-img-wrapper">
                <span className="badge badge-sale">SALE</span>
                <img src={winImage} className="card-img-top product-img" alt="" />
              </div>
              <div className="card-body">
                <h5>World’s 1st Organic Soy Lecithin</h5>
                <p>Estee Lauder’s brand, Origins, launched in 1990...</p>
                <Link to={`/`} className="btn btn-add-cart w-100">Add to Cart</Link>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card product-card">
              <img src={airplaneImage} className="card-img-top product-img" alt="" />
              <div className="card-body">
                <h5>ANP in a joint venture with Solazyme</h5>
                <p>San Francisco’s Solazyme provided algal biofuel...</p>
                <Link to={`/`} className="btn btn-add-cart w-100">Add to Cart</Link>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card product-card">
              <span className="badge badge-sale badge-new">NEW</span>
              <img src={flexImage} className="card-img-top product-img" alt="" />
              <div className="card-body">
                <h5>Iowa’s First Flax Processing Plant</h5>
                <p>Spectrum Organic Products made a commitment...</p>
                <Link to={`/`} className="btn btn-add-cart w-100">Add to Cart</Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;