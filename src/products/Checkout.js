import { useState } from "react";
import {
  CountrySelect,
  StateSelect,
} from "react-country-state-city";
import { useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";

function Checkout() {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();

  const [country, setCountry] = useState(null);
  const [state, setState] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
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

              <div className="mb-3">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  required
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label>Phone</label>
                <input
                  type="text"
                  name="phone"
                  className="form-control"
                  required
                  onChange={handleChange}
                />
              </div>

              {/* COUNTRY */}
              <div className="mb-3">
                <label>Country</label>
                <CountrySelect
                  onChange={(e) => setCountry(e)}
                  placeHolder="Select Country"
                />
              </div>

              {/* STATE */}
              <div className="mb-3">
                <label>State</label>
                <StateSelect
                  countryid={country?.id}
                  onChange={(e) => setState(e)}
                  placeHolder="Select State"
                />
              </div>

              {/* CITY */}
              <div className="mb-3">
                <label>City</label>
                <input
                  type="text"
                  name="city"
                  className="form-control"
                  required
                  onChange={handleChange}
                />
              </div>

              {/* POSTAL */}
              <div className="mb-3">
                <label>Postal Code</label>
                <input
                  type="text"
                  name="postalCode"
                  className="form-control"
                  required
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="btn btn-dark w-100 mt-3">
                Place Order
              </button>

            </form>
          </div>
        </div>

        {/* ORDER SUMMARY */}
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