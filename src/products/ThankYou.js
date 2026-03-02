import { Link } from "react-router-dom";

function ThankYou() {
  const orderId = Math.floor(100000 + Math.random() * 900000);

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "80vh", marginTop: "4rem", marginBottom: "4rem" }}
    >
      <div
        className="card shadow-lg border-0 text-center p-5"
        style={{ maxWidth: "600px", width: "100%", borderRadius: "20px" }}
      >
        <div
          className="mb-4 d-flex justify-content-center align-items-center"
          style={{
            width: "80px",
            height: "80px",
            backgroundColor: "#198754",
            borderRadius: "50%",
            margin: "0 auto",
            fontSize: "40px",
            color: "#fff",
          }}
        >
          ✓
        </div>

        <h2 className="fw-bold mb-3">Order Placed Successfully!</h2>

        <p className="text-muted mb-2">
          Thank you for your purchase.
        </p>

        <p className="mb-4">
          Your Order ID: <strong>#{orderId}</strong>
        </p>

        <div className="alert alert-light border">
          We’ve received your order and it is being processed.
          You will receive a confirmation email shortly.
        </div>

        <Link to="/" className="btn btn-dark mt-4 px-4">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}

export default ThankYou;