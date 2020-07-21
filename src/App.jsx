import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import "./App.css";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// loadStripe is initialized with your real test publishable API key.
const promise = loadStripe("pk_test_51H75YAC3gjtAGTUpoBByu8r0FC8Xf4QAwmDJzj4NcJbgixYTCdWJldUZG7jIjI7AdM4Lw2RxBdPXiIuZFCmDdDXh00Xs4NaKRt");

export default function App() {
  return (
    <div className="App">
      <h1 className="welcome-message">
        Earn your Stripes for just $14 USD
      </h1>
      <img
        src="https://ipcdn.freshop.com/resize?url=https://images.freshop.com/00038000576089/390ee356445a301b7661f11b34cd9cc2_large.png&width=512&type=webp&quality=40"
        alt="Frosted Flakes"
      />
      <Elements stripe={promise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
}
