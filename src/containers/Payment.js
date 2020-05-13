import React from "react";
import "./App.css";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe("pk_test_W9qqB71vT6AwbY37qUhS3RJR002oZLccX3");

function App() {
  return <Elements stripe={stripePromise}></Elements>;
}

export default Payment;
