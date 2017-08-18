import React from "react";
import { ApolloClient } from "react-apollo";
import { Link } from "react-router-dom";

class ProfilePage extends React.Component {
  render() {
    return (
      <div>
        <div>Profile</div>
        <Link to="/create">lok</Link>
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
            <p id="userBio">
              {this.getUserBio()}
            </p>
            <button id="btnChangeBio" onClick={this.setUserBio()}>
              Update Bio
            </button>

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
    //Query to fetch user's bio only

    console.log("Fetched user bio");
  }

  // *** SET DATA ***

  manageFriendList() {
    console.log("Manage user's Friend List");
  }

  setUserBio() {
    //update bio area to text area instead of immutable paragraph
    <div>
      <textarea rows="6" cols="70">
        {this.getUserBio()}
      </textarea>
      {/* change the button to onClick=saveUserBio and button text to "Save" */}
      {/* <button id="btnChangeBio" onClick={this.updateUserBio()}>Update Bio</button> */}
    </div>;
    console.log("Update user's Bio");
  }

  setUserPassword() {
    // Show popup to change password
    // Push new password to user db info upon form 'OK'
    console.log("Change user's Password");
  }
}
export default ProfilePage;
