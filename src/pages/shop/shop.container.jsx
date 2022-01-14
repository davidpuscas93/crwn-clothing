import { connect } from "react-redux";
import { compose } from "redux";

import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";

import ShopComponent from "./shop.component";

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

const Shop = compose(
  connect(null, mapDispatchToProps)
)(ShopComponent);

export default Shop;