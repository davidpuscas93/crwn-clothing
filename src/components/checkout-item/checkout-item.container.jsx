import { connect } from "react-redux";
import { compose } from "redux";

import {
  addItem,
  decrementItem,
  removeItem,
} from "../../redux/cart/cart.actions";

import CheckoutItemComponent from "./checkout-item.component";

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  decrementItem: (item) => dispatch(decrementItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

const CheckoutItem = compose(
  connect(null, mapDispatchToProps)
)(CheckoutItemComponent);

export default CheckoutItem;
