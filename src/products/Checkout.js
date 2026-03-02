import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";

function Checkout() {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    state: "",
    city: "",
    postalCode: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleOrder = (e) => {
    e.preventDefault();
    clearCart();
    navigate("/thank-you");
  };

  return (
    <div
      className="container"
      style={{ marginTop: "8rem", marginBottom: "6rem" }}
    >
      <div className="row">

        {/* LEFT SIDE - FORM */}
        <div className="col-lg-7">
          <div className="card shadow-sm border-0 p-4">
            <h3 className="mb-4">Billing Details</h3>

            <form onSubmit={handleOrder}>

              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  required
                  onChange={handleChange}
                />
              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    required
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Phone</label>
                  <input
                    type="text"
                    name="phone"
                    className="form-control"
                    required
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">Country</label>
                <input
                  type="text"
                  name="country"
                  className="form-control"
                  required
                  onChange={handleChange}
                />
              </div>

              <div className="row">
                <div className="col-md-4 mb-3">
                  <label className="form-label">State</label>
                  <input
                    type="text"
                    name="state"
                    className="form-control"
                    required
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-4 mb-3">
                  <label className="form-label">City</label>
                  <input
                    type="text"
                    name="city"
                    className="form-control"
                    required
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-4 mb-3">
                  <label className="form-label">Postal Code</label>
                  <input
                    type="text"
                    name="postalCode"
                    className="form-control"
                    required
                    onChange={handleChange}
                  />
                </div>
              </div>

              <h5 className="mt-4">Payment Method</h5>
              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="radio"
                  checked
                  readOnly
                />
                <label className="form-check-label">
                  Cash On Delivery
                </label>
              </div>

              <button type="submit" className="btn btn-dark w-100 mt-3">
                Place Order
              </button>

            </form>
          </div>
        </div>

        {/* RIGHT SIDE - ORDER SUMMARY */}
        <div className="col-lg-5">
          <div className="card shadow-sm border-0 p-4">
            <h4 className="mb-3">Order Summary</h4>

            {cartItems.map((item) => (
              <div
                key={item.id}
                className="d-flex justify-content-between mb-2"
              >
                <span>
                  {item.title} × {item.quantity}
                </span>
                <span>
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            ))}

            <hr />

            <div className="d-flex justify-content-between fw-bold">
              <span>Total</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Checkout;