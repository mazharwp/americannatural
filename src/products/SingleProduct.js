import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCart } from "./CartContext";
import { products } from "./productsData";

function SingleProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === parseInt(id));

  const [mainImage, setMainImage] = useState(product?.image);

  if (!product) return <h2 className="text-center mt-5">Product Not Found</h2>;

  const handleAddToCart = () => {
    addToCart(product);
    navigate("/cart");
  };

  const relatedProducts = products.filter((p) => p.id !== product.id);

  return (
    <>
      {/* PRODUCT DETAIL SECTION */}
      <section
        className="productDetails"
        style={{ marginTop: "30px", marginBottom: "30px" }}
      >
        <div className="container">
          <div className="row g-4">

            {/* LEFT SIDE - IMAGE GALLERY */}
            <div className="col-md-5">
              <div className="mb-3">
                <img
                  src={mainImage}
                  className="img-fluid rounded shadow-sm"
                  alt={product.title}
                />
              </div>

              <div className="d-flex gap-3">
                {[product.image, ...relatedProducts.map(p => p.image)].map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt="thumb"
                    className="img-thumbnail"
                    style={{ width: "80px", cursor: "pointer" }}
                    onClick={() => setMainImage(img)}
                  />
                ))}
              </div>
            </div>

            {/* RIGHT SIDE - PRODUCT INFO */}
            <div className="col-md-7">
              <h2 className="fw-bold">{product.title}</h2>
              <hr className="w-25" />
              <p className="text-muted">{product.desc}</p>
              <h4 className="my-3">${product.price}</h4>

              <button onClick={handleAddToCart} className="btn btn-dark px-4">
                Add To Cart
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* PRODUCT TABS */}
      <div className="container mb-5">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <button
              className="nav-link active"
              data-bs-toggle="tab"
              data-bs-target="#description"
            >
              Description
            </button>
          </li>
          <li className="nav-item">
            <button
              className="nav-link"
              data-bs-toggle="tab"
              data-bs-target="#additional"
            >
              Additional Info
            </button>
          </li>
          <li className="nav-item">
            <button
              className="nav-link"
              data-bs-toggle="tab"
              data-bs-target="#reviews"
            >
              Reviews
            </button>
          </li>
        </ul>

        <div className="tab-content p-4 border border-top-0">
          <div className="tab-pane fade show active" id="description">
            <p>{product.desc}</p>
          </div>

          <div className="tab-pane fade" id="additional">
            <p>High quality premium product.</p>
            <p>Fast worldwide shipping available.</p>
          </div>

          <div className="tab-pane fade" id="reviews">
            <h5>Customer Reviews</h5>
            <p>⭐⭐⭐⭐⭐ Very good product!</p>
            <p>⭐⭐⭐⭐ Fast delivery.</p>
          </div>
        </div>
      </div>

      {/* RELATED PRODUCTS */}
      <section className="container mb-5">
        <h3 className="mb-4">Related Products</h3>
        <div className="row">
          {relatedProducts.map((item) => (
            <div key={item.id} className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm">
                <img
                  src={item.image}
                  className="card-img-top"
                  alt={item.title}
                />
                <div className="card-body text-center">
                  <h6>{item.title}</h6>
                  <p>${item.price}</p>
                  <button
                    className="btn btn-outline-dark btn-sm"
                    onClick={() => navigate(`/product/${item.id}`)}
                  >
                    View Product
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default SingleProduct;