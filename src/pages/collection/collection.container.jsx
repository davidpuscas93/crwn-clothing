import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import {
  selectIsCollectionsLoaded,
  selectCollection,
} from "../../redux/shop/shop.selectors";
import withSpinner from "../../components/with-spinner/with-spinner.component";

import CollectionComponent from "./collection.component";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionsLoaded(state),
  collection: (state, ownProps) =>
    selectCollection(ownProps.match.params.collectionId)(state),
});

const Collection = compose(
  connect(mapStateToProps),
  withSpinner
)(CollectionComponent);

export default Collection;
