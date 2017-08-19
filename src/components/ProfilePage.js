import React from "react";
import { ApolloClient } from "react-apollo";
import { Link } from "react-router-dom";

class ProfilePage extends React.Component {
  render() {
    return (
      <div>
        <div>Profile</div>
        <Link to="/create"></Link>
        <div id="pageContent">
          <div>
            <header />
            <nav>Nav Panel</nav>
          </div>

          <div id="userInfo">
            <img src={this.getUserAvatar()} alt="Unable to fetch avatar!" />

            <h2>User Information:</h2>
            <p>
              {this.getUserInfo()}
            </p>
            <button onClick={this.setUserPassword()}>Change Password</button>

            <h2>Bio:</h2>
              

            <h2>Friend List:</h2>
            <p id="userFriends">
              {this.getUserFriendList()}
            </p>
            <button id="btnEditFriendList" onClick={this.manageFriendList()}>
              Edit Friend List
            </button>

            <div id="userCP">
              <button onClick={this.getUserStats()}>Show Game Stats</button>
            </div>
          </div>
          <footer />
        </div>
      </div>
    );
  }





  // *** GET DATA ***

  getUserFriendList() {
    // Query to fetch user's friend list
    console.log("Getting user's friend list");
  }

  getUserStats() {
    // Query to fetch/find user's stats
    // Take user to new page? popup? or insert the data into this page
    console.log("Show user's stats");
  }

  getUserAvatar() {
    //Query to fetch user's avatar

    console.log("Fetched user avatar");
  }

  getUserInfo() {
    //Queries to fetch user's information EXCEPT BIO

    console.log("Fetched user info");
  }

  getUserBio() {
    return (
      <div>
        <p id="userBio">
          // Query to fetch user's bio only
        </p>
        <button id="btnChangeBio" onClick={this.updateUserBio()}>Update Bio</button>
      </div>
    )
  }

  // *** SET DATA ***

  manageFriendList() {
    console.log("Manage user's Friend List");
  }

  updateUserBio() {
    return (
      <div>
        <textarea rows="6" cols="70" id="userBio">
          //Query to fetch user's bio only
        </textarea>
        <button id="btnChangeBio" onClick={this.setUserBio()}>Save Bio</button>
      </div>
    )
  }

  setUserBio() {
    // Save new bio to DB
    return (
      this.getUserBio()
    )
  }

  setUserPassword() {
    // Show popup to change password
    // Push new password to user db info upon form 'OK'
    console.log("Change user's Password");
  }
}
export default ProfilePage;
