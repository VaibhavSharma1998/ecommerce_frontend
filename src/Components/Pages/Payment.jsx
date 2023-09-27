import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";


const Payment = () => {
  const location = useLocation()
  const {state} = location
  console.log("Paisa",state)
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:4000/config")
      .then(async (res) => {
        const { publishableKey } = await res.data;
        console.log("Publickey:", res);
        setStripePromise(loadStripe(publishableKey));
      })
      .catch((err) => {
        console.log("Error:", err.msg);
      });
  }, []);

  useEffect(() => {
    axios
      .post("http://localhost:4000/create-payment-intent", {})
      .then(async (res) => {
        const { clientSecret } = await res.data;
        console.log("Secretkey:", clientSecret);
        setClientSecret(clientSecret);
      })
      .catch((err) => {
        console.log("Error:", err.msg);
      });
  }, []);
  console.log(stripePromise, "stripePromise");
  return (
    <>
      {stripePromise && clientSecret && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm  state={state}/>
        </Elements>
      )}
    </>
  );
};

export default Payment;
