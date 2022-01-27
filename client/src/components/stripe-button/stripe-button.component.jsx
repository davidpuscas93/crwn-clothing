import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51IxXA8DxILp69uXU9xJE3KeWcgbZjkFIzY7H4tWHou6M8F4vqngCqDbjUeDYfZa9SHn2A6DuIjwJ3sLklrGcN2YW00NxMfZggk";

  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        token,
        amount: priceForStripe,
      },
    })
      .then((_) => {
        alert("Payment succesful!");
      })
      .catch((error) => {
        console.log("Payment error: ", JSON.parse(error));
        alert(
          "There was an issue with your payment. Please make sure you use the provided credit card."
        );
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://www.seekpng.com/png/detail/7-73755_black-crown-png-black-crown-transparent-background.png"
      description={`Your total is $${price}.`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
