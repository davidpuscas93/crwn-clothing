import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { selectIsCollectionsFetching } from "../../redux/shop/shop.selectors";
import withSpinner from "../with-spinner/with-spinner.component";

import CollectionsOverviewComponent from "./collections-overview.component";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionsFetching,
});

const CollectionsOverview = compose(
  connect(mapStateToProps),
  withSpinner
)(CollectionsOverviewComponent);

export default CollectionsOverview;
