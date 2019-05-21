import React from "react";
import firebase from "../firebase";
import "./style/logout.css";

class Logout extends React.Component {
  componentDidMount() {
    firebase.auth().signOut();
  }

  render() {
    return (
      <>
        <div className="logout-wrapper">
          <div>OH NO! You're not logged in!</div>
        </div>
      </>
    );
  }
}

export default Logout;
