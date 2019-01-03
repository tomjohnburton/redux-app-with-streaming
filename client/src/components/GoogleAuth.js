import React, { Component } from "react";

export default class GoogleAuth extends Component {
  state = { isSignedIn: null };

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return <div>Not Sure if we are signed in</div>;
    } else if (this.state.isSignedIn === true) {
      return <div>We are signed in</div>;
    } else if (this.state.isSignedIn === false) {
      return <div>We are signed out</div>;
    }
  }
  componentDidMount = () => {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "1028869475575-gg01ivc82ttbfvmcht4112rfh3pu0mli.apps.googleusercontent.com",
          scope: "email"
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({
            isSignedIn: this.auth.isSignedIn.get()
          });
        });
    });
  };

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}
