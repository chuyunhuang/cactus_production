import React from "react";
import axios from "axios";
import firebase from "../firebase";
import AuthContext from "../context/auth";
import { Redirect } from "react-router-dom";
import ImageService from "../service/image";
import "./style/signup.css";

import Background from "./image/yellowbg2.png";

const bgStyle = {
  height: "100%",
  backgroundImage: `url(${Background})`
};

class Signup extends React.Component {
  state = {
    user: "",
    email: "",
    password: "",
    avatar: "",
    userId: "",
    error: ""
  };

  //for username, email, password
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  //for profile image upload

  saveImage = url => {
    const date = Date();
    ImageService.saveImage(url, date);
  };

  handleFileInput = e => {
    const firstFile = e.target.files[0];
    const root = firebase.storage().ref();
    const newImage = root.child(firstFile.name);

    newImage
      .put(firstFile)
      .then(snapshot => {
        return snapshot.ref.getDownloadURL();
      })
      .then(url => {
        this.saveImage(url);
        this.setState({
          avatar: url
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { email, password } = this.state;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(response => {
        console.log("before setstate", response.user.uid);
        this.setState({ userId: response.user.uid });
      })
      .then(() => {
        axios.post("https://cactusapi.herokuapp.com/user", {
          username: this.state.user,
          email: this.state.email,
          avatar: this.state.avatar,
          useruid: this.state.userId
        });
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
                            <label htmlFor="exampleInputEmail1">Username</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Username"
                              name="user"
                              value={user}
                              onChange={this.handleChange}
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="exampleInputEmail1">
                              Email address
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              placeholder="Email"
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
                              placeholder="Password"
                              name="password"
                              value={password}
                              onChange={this.handleChange}
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="exampleInputPassword1">
                              Profile Image
                            </label>
                            <input
                              type="file"
                              className="form-control"
                              placeholder="My Picture"
                              onChange={this.handleFileInput}
                            />
                          </div>
                          <button
                            type="submit"
                            className="btn btn-primary"
                            onClick={this.handleSubmit}
                          >
                            Sign Up
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

export default Signup;
