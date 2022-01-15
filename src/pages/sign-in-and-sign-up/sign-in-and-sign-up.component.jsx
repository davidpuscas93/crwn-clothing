import React from "react";

import SignIn from "../../components/sign-in/sign-in.container";
import SignUp from "../../components/sign-up/sign-up.container";

import { SignInAndSignUpContainer } from "./sign-in-and-sign-up.styles";

const SignInAndSignUp = () => (
  <SignInAndSignUpContainer>
    <SignIn />
    <SignUp />
  </SignInAndSignUpContainer>
);

export default SignInAndSignUp;
