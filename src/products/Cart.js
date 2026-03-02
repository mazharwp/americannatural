import { Link } from "react-router-dom";
import { useCart } from "./CartContext";

function Cart() {
  const { cartItems, increaseQty, decreaseQty, removeFromCart } = useCart();

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="container" style={{ marginTop: "8rem", marginBottom: "6rem" }}>
      <div className="row">

        {/* LEFT SIDE - CART ITEMS */}
        <div className="col-lg-8">
          <h2 className="mb-4">Shopping Cart</h2>

          {cartItems.length === 0 ? (
            <div className="alert alert-light text-center">
              Your cart is empty
            </div>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="card mb-3 shadow-sm border-0"
              >
                <div className="row g-0 align-items-center p-3">

                  <div className="col-md-3">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="img-fluid rounded"
                    />
                  </div>

                  <div className="col-md-5" style={{ paddingLeft: "20px" }}>
                    <h5>{item.title}</h5>
                    <p className="text-muted mb-1">
                      ${item.price}
                    </p>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="btn btn-sm btn-outline-danger"
                    >
                      Remove
                    </button>
                  </div>

                  <div className="col-md-4 text-end">
                    <div className="d-flex justify-content-end align-items-center mb-2">
                      <button
                        className="btn btn-outline-secondary btn-sm"
                        onClick={() => decreaseQty(item.id)}
                      >
                        −
                      </button>

                      <span className="mx-3 fw-bold">
                        {item.quantity}
                      </span>

                      <button
                        className="btn btn-outline-secondary btn-sm"
                        onClick={() => increaseQty(item.id)}
                      >
                        +
                      </button>
                    </div>

                    <h6>
                      ${(item.price * item.quantity).toFixed(2)}
                    </h6>
                  </div>

                </div>
              </div>
            ))
          )}
        </div>

        {/* RIGHT SIDE - SUMMARY */}
        <div className="col-lg-4">
          <div className="card shadow-sm border-0 p-4" style={{ marginTop: "3.9rem" }}>
            <h4 className="mb-3">Order Summary</h4>

            <div className="d-flex justify-content-between">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <div className="d-flex justify-content-between">
              <span>Shipping</span>
              <span>Free</span>
            </div>

            <hr />

            <div className="d-flex justify-content-between fw-bold">
              <span>Total</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <Link
              to="/checkout"
              className="btn btn-dark w-100 mt-4"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Cart;