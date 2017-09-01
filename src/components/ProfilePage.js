import React from "react";
import { graphql, gql } from 'react-apollo';
import { GC_USER_ID } from '../constants';
import { Link } from 'react-router-dom';

class ProfilePage extends React.Component {

  state = {
    updateBio : false,
    bioText : ""
  }

  render() {

    if (this.props.getInfo && this.props.getInfo.loading) {
      return <div>Loading...</div>
    }

    if (this.props.getInfo && this.props.getInfo.error) {
      return <div>Error...</div>
    }

    const userInfo = this.props.getInfo.User
    console.log(userInfo)

    return (

      <div>
        <div>Profile</div>
        <Link to="/create"></Link>
        <div id="pageContent">
          <div>
            <header />
            <nav></nav>
          </div>

          <div id="userInfo">
            <img src={userInfo.avatar} alt="Unable to fetch avatar!" />

            <h2>User Information:</h2>
            <p>
              {this.getUserInfo(userInfo)}
            </p>
            <button onClick={this.setUserPassword()}>Change Password</button>

            <h2>Bio:</h2>
            <div id="bioSection">
              {this.getUserBio(userInfo)}
            </div>

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

  getUserInfo(userInfo) {
    return (
      <div>
        <p>
          Name: {userInfo.name}
        </p>
        <p>        
          E-Mail: {userInfo.email}
        </p>
      </div>

    )

  }

  getUserBio(userInfo) {
    if (userInfo) {

      return (
        <div>
           {this.state.updateBio ? 
          <div>
            <textarea rows="6" cols="70" id="userBio" onInput={e => {
                console.log(e)
              }}>
              {userInfo.bio ? userInfo.bio : "Empty"}
            </textarea> 
          </div>
          :
          <p id="userBio">
            {userInfo.bio ? userInfo.bio : "Empty"}
          </p>
           }
          <button className="btnUpdateBio"
            onClick={() => {
              if (this.state.updateBio) {
                this.setUserBio()
              }
              this.setState({ updateBio: !this.state.updateBio })
              
            }}>
            {this.state.updateBio ? 'Save Bio1' : 'Update Bio1'}
            {/* {this.state.updateBio && this.setUserBio(userInfo)} */}
          </button>
        </div>
      )
    }
    return (
      <div>
        "error"
      </div>
    )
  }

  // *** SET DATA ***

  manageFriendList() {
    console.log("Manage user's Friend List");
  }

  updateUserBio(userInfo) {
    return (
      <div>
        <textarea rows="6" cols="70" id="userBio">
          {userInfo.bio ? userInfo.bio : "Empty"}
        </textarea>
        <button id="btnChangeBio" onClick={this.setUserBio(userInfo)}>Save Bio</button>
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



const GET_INFO_QUERY = gql`
  query getInfo($id: ID!) {
    User(id: $id) {
      id
      avatar
      name
      email
      bio

    }
  }`


export default graphql(GET_INFO_QUERY, { name: 'getInfo', options: { variables: { id: localStorage.getItem(GC_USER_ID) } } })(ProfilePage);
