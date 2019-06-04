import React from "react";
import AuthContext from "../context/auth";
import "./style/home.css";
//components
import SideNavBar from "./sideNavbar";
import MasonryLayout from "./mansory";

class Home extends React.Component {
  state = {
    userId: "",
    token: "",
    arrayofpostimage: [
      "https://firebasestorage.googleapis.com/v0/b/cactus-338da.appspot.com/o/cuteplants4.jpg?alt=media&token=fdc9c95a-03d4-467a-8ab7-478d85f2b1b9",
      "https://firebasestorage.googleapis.com/v0/b/cactus-338da.appspot.com/o/cuteplants4.jpg?alt=media&token=fdc9c95a-03d4-467a-8ab7-478d85f2b1b9",
      "https://firebasestorage.googleapis.com/v0/b/cactus-338da.appspot.com/o/cuteplants4.jpg?alt=media&token=fdc9c95a-03d4-467a-8ab7-478d85f2b1b9",
      "https://firebasestorage.googleapis.com/v0/b/cactus-338da.appspot.com/o/cuteplants4.jpg?alt=media&token=fdc9c95a-03d4-467a-8ab7-478d85f2b1b9"
    ]
  };

  // getFirebaseIdToken = () => {
  //   firebase.auth().currentUser.getIdToken(false).then((token) => {
  //     this.setState({ token })
  //   }).catch((error) => {
  //     // Handle error
  //   });
  // }

  render() {
    return (
      <AuthContext.Consumer>
        {user => {
          if (user) {
            return (
              <>
                <div className="homepage-wrapper">
                  <div className="sideNav-wrapper">
                    <SideNavBar />
                  </div>
                  <div className="post-wrapper">
                    <MasonryLayout columns={3} gap={25}>
                      {[...Array(6).keys()].map(key => {
                        const height = 200 + Math.ceil(Math.random() * 300);

                        return (
                          <div
                            style={{
                              height: `${height}px`,
                              border: "1px solid black"
                            }}
                          />
                        );
                      })}
                    </MasonryLayout>
                  </div>
                </div>
              </>
            );
          } else {
            return (
              <>
                <div className="logout-wrapper">
                  <div>OH NO! You're not logged in!</div>
                </div>
              </>
            );
          }
        }}
      </AuthContext.Consumer>
    );
  }
}

export default Home;
