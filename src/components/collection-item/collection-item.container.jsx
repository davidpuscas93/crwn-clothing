import { connect } from "react-redux";
import { compose } from "redux";

import { addItem } from "../../redux/cart/cart.actions";

import CollectionItemComponent from "./collection-item.component";

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

const CollectionItem = compose(
  connect(null, mapDispatchToProps)
)(CollectionItemComponent);

export default CollectionItem;
