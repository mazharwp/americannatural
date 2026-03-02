import { useNavigate, useParams } from "react-router-dom";
import { useCart } from "./CartContext";
import { products } from "./productsData";

function SingleProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <h2>Product Not Found</h2>;

  const handleAddToCart = () => {
    addToCart(product);
    navigate("/cart");
  };

  return (
  <div className="container mt-6" style={{ marginTop: "130px" }}>
      <div className="row" style={{ marginBottom: "60px" }}>

        <div className="col-md-6">
          <img
            src={product.image}
            alt={product.title}
            className="img-fluid"
          />
        </div>

        <div className="col-md-6">
          <h2>{product.title}</h2>
          <p>{product.desc}</p>
          <h4>${product.price}</h4>

          <button onClick={handleAddToCart} className="btn btn-dark">
            Add To Cart
          </button>
        </div>

      </div>
    </div>
  );
}

export default SingleProduct;