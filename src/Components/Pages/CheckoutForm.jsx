import {
  PaymentElement,
  useStripe,
  useElements,
  // CardElement,
  // Elements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";

const stripePromise = loadStripe(
  "pk_test_51NuVVMSETVVSeBmukevgzRTRRI1HG4v8HljYm3PDFR6WSnviUfk9UjA50Lb3sbmLxRp1zEmXGsSbjGJrlDSwQVxS00rCDEwgnt"
);

const CheckoutForm = ({state}) => {
  const [isLoading, setIsLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);
    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // return_url: `${window.location.origin}`,
        return_url :`http://localhost:3000/success`
      },
    });

    if (error) {
      console.log(error.message);
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-[60vh]">
      {stripePromise && (
        <form
          className="w-96 rounded-md shadow-md bg-white p-5"
          onSubmit={handleSubmit}
        >
          <h1 className="text-center text-lg font-semibold mb-5">
            Card details
          </h1>
          <PaymentElement />
          <div className="flex justify-center">
            <button
              disabled={!stripe}
              className="bg-blue-600 text-white py-2 px-8 rounded mt-2  justify-center"
            >
              {isLoading ? "Processing..." : `Pay  ${state}`}
            </button>
            
          </div>
        </form>
      )}
    </div>
  );
};

export default CheckoutForm;
