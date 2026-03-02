import { Link } from "react-router-dom";
import { products } from "../../products/productsData";

function FeaturedProducts() {
  return (
    <section className="product-section pb-5" style={{ marginTop: "50px" }}>
      <div className="container">
        <h1 className="main-heading">Featured Products</h1>

        <div className="row g-4" style={{ marginTop: "5px" }}>
          {products.map((product) => (
            <div className="col-md-4" key={product.id}>
              <div className="card product-card">

                <Link to={`/product/${product.id}`}>
                  <img
                    src={product.image}
                    className="card-img-top product-img"
                    alt={product.title}
                  />
                </Link>

                <div className="card-body">
                  <h5>{product.title}</h5>
                  <p>${product.price}</p>

                  <Link
                    to={`/product/${product.id}`}
                    className="btn btn-add-cart w-100"
                  >
                    Add to cart
                  </Link>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;