import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCurrentUser } from "./redux/user/user.selectors";

import "./App.css";

/**
 * Pages
 */
import Shop from "./pages/shop/shop.container";
import Checkout from "./pages/checkout/checkout.container";
import Home from "./pages/home/home.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

/**
 * Components
 */
import Header from "./components/header/header.component";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    // this.unsubscribeFromAuth = auth.onAuthStateChanged(
    //   async (userAuth) => {
    //     if (userAuth) {
    //       const userRef = await createUserProfileDocument(userAuth);

    //       userRef.onSnapshot((snapshot) => {
    //         setCurrentUser({
    //           id: snapshot.id,
    //           ...snapshot.data(),
    //         });
    //       });
    //     } else {
    //       setCurrentUser(null);
    //     }

    //     /**
    //      * Adds data to firebase (should be used only manually)
    //      */
    //     // addCollectionAndDocuments(
    //     //   "collections",
    //     //   collectionsPreview.map(({ title, items }) => ({ title, items }))
    //     // );
    //   },
    //   (error) => console.error(error)
    // );
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/shop" component={Shop} />
          <Route exact path="/checkout" component={Checkout} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(App);
