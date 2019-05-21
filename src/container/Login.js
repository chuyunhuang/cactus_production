import React from "react";
import firebase from "../firebase";
import AuthContext from "../context/auth";
import { Redirect } from "react-router-dom";

import "./style/login.css";
import Background from "./image/yellowbg2.png";

const bgStyle = {
  height: "100%",
  backgroundImage: `url(${Background})`
};

class Login extends React.Component {
  state = {
    email: "",
    password: "",
    error: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        console.log("login success", response);
      })
      .catch(err => {
        const { message } = err;
        this.setState({ error: message });
      });
  };

  render() {
    const { email, password, error } = this.state;
    const displayError =
      error === "" ? (
        ""
      ) : (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      );

    return (
      <AuthContext.Consumer>
        {user => {
          if (user) {
            return <Redirect to="/" />;
          } else {
            return (
              <>
                {displayError}
                <div style={{ height: "95vh" }}>
                  <div style={bgStyle}>
                    <div className="login-page">
                      <div className="form-wrapper">
                        <form>
                          <div className="form-group">
                            <label htmlFor="exampleInputEmail1">
                              Email address
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              id="exampleInputEmail1"
                              aria-describedby="emailHelp"
                              placeholder="Enter email"
                              name="email"
                              value={email}
                              onChange={this.handleChange}
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="exampleInputPassword1">
                              Password
                            </label>
                            <input
                              type="password"
                              className="form-control"
                              id="exampleInputPassword1"
                              placeholder="Password"
                              name="password"
                              value={password}
                              onChange={this.handleChange}
                            />
                          </div>
                          <button
                            type="submit"
                            className="btn btn-primary"
                            onClick={this.handleSubmit}
                          >
                            Log In
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          }
        }}
      </AuthContext.Consumer>
    );
  }
}

export default Login;
