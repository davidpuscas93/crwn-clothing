import React from "react";

import CheckoutItem from "../../components/checkout-item/checkout-item.container";
import StripeButton from "../../components/stripe-button/stripe-button.component";

import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  CheckoutHeaderBlock,
  TotalPriceContainer,
  TestWarningContainer,
} from "./checkout.styles";

const CheckoutComponent = ({ cartItems, totalCartPrice }) => (
  <CheckoutPageContainer>
    <CheckoutHeaderContainer>
      <CheckoutHeaderBlock>
        <span>Product</span>
      </CheckoutHeaderBlock>
      <CheckoutHeaderBlock>
        <span>Description</span>
      </CheckoutHeaderBlock>
      <CheckoutHeaderBlock>
        <span>Quantity</span>
      </CheckoutHeaderBlock>
      <CheckoutHeaderBlock>
        <span>Price</span>
      </CheckoutHeaderBlock>
      <CheckoutHeaderBlock>
        <span>Remove</span>
      </CheckoutHeaderBlock>
    </CheckoutHeaderContainer>
    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem}></CheckoutItem>
    ))}
    <TotalPriceContainer>
      <span>TOTAL: ${totalCartPrice}</span>
    </TotalPriceContainer>
    <TestWarningContainer>
      *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp: 01/22 - CVV: 123
    </TestWarningContainer>
    <StripeButton price={totalCartPrice} />
  </CheckoutPageContainer>
);

export default CheckoutComponent;
