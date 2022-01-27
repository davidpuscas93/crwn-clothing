import { connect } from "react-redux";
import { compose } from "redux";

import {
  emailSignInStart,
  googleSignInStart,
} from "../../redux/user/user.actions";

import SignInComponent from "./sign-in.component";

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

const SignIn = compose(
  connect(null, mapDispatchToProps)
)(SignInComponent);

export default SignIn;
