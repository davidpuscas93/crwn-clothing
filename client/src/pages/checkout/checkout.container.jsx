import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import {
  selectCartItems,
  selectTotalCartPrice,
} from "../../redux/cart/cart.selectors";

import CheckoutComponent from "./checkout.component";

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalCartPrice: selectTotalCartPrice,
});

const Checkout = compose(
  connect(mapStateToProps)
)(CheckoutComponent);

export default Checkout;
