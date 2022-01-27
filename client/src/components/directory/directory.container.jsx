import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { selectDirectorySections } from "../../redux/directory/directory.selectors";

import DirectoryComponent from "./directory.component";

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

const Directory = compose(
  connect(mapStateToProps)
)(DirectoryComponent);

export default Directory;