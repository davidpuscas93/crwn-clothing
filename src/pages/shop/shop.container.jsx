import { connect } from "react-redux";
import { compose } from "redux";

import { fetchCollectionsStart } from "../../redux/shop/shop.actions";

import ShopComponent from "./shop.component";

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

const Shop = compose(
  connect(null, mapDispatchToProps)
)(ShopComponent);

export default Shop;