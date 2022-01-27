import { connect } from "react-redux";
import { compose } from "redux";

import { signUpStart } from "../../redux/user/user.actions";

import SignUpComponent from "./sign-up.component";

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (email, password, displayName) =>
    dispatch(signUpStart({ email, password, displayName })),
});

const SignUp = compose(
  connect(null, mapDispatchToProps)
)(SignUpComponent);

export default SignUp;
