import { ArrowBigLeft } from "lucide-react";
import { Link } from "react-router-dom";

function Checkout() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>Thank you for shopping with us!</h1>
      <p> We hope to see you again soon!!</p>
      <Link to="/">
        <div style={{ display: "flex", alignItems: "center", gap: 2 }}>
          <ArrowBigLeft /> <p>Continue Shopping</p>
        </div>
      </Link>
    </div>
  );
}

export default Checkout;
