import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51IxXA8DxILp69uXU9xJE3KeWcgbZjkFIzY7H4tWHou6M8F4vqngCqDbjUeDYfZa9SHn2A6DuIjwJ3sLklrGcN2YW00NxMfZggk";

    const onToken = (token) => {
        console.log(token);
        alert('Payment Successful!');
    }

    return (
        <StripeCheckout
            label="Pay Now"
            name="CRWN Clothing Ltd."
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}.`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeButton;