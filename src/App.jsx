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
      <Elements stripe={promise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
}
