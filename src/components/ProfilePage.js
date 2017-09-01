import React from "react";
import { graphql, gql, compose } from 'react-apollo';
import { GC_USER_ID } from '../constants';
import { Link } from 'react-router-dom';

class ProfilePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {updateBio: false, bioText: '', valuesLoaded : false};
        this.handleBioChange = this.handleBioChange.bind(this)
    }
    
    handleBioChange(event) {
        this.setState({bioText: event.target.value});
    }
    
    _changeBio = async () => {
        const BioText = this.state.bioText
        const UserId = localStorage.getItem(GC_USER_ID)
        await this.props.ChangeBio({
            variables: {
                id : UserId,
                bio : BioText
            }
        })
    }

  render() {

    if (this.props.getInfo && this.props.getInfo.loading) {
      return <div>Loading...</div>
    }

    if (this.props.getInfo && this.props.getInfo.error) {
      return <div>Error...</div>
    }
      
      if(!this.props.getInfo.User){
          return <div>User Not Loaded</div>
      }

    const userInfo = this.props.getInfo.User
    console.log(userInfo)

    return (
      <div>
        <div>Profile</div>
        <Link to="/create"></Link>
        <div id="pageContent">

          <div id="userInfo">
            <img src={userInfo.avatar} alt="Unable to fetch avatar!" />

            <h2>User Information:</h2>
            {this.getUserInfo(userInfo)}
            
            <button onClick={this.setUserPassword()}>Change Password</button>

            <h2>Bio:</h2>
            <div id="bioSection">
              {this.getUserBio(userInfo, this.state.valuesLoaded)}
            </div>

            <div id="userCP">
              <button onClick={this.getUserStats()}>Show Game Stats</button>
            </div>
          </div>
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
        <p>
          Name: {userInfo.name} <br/>
          E-Mail: {userInfo.email}
        </p>
    )

  }

  getUserBio(userInfo, valuesLoaded) {
    if (userInfo) {
        if(!valuesLoaded){
            this.setState({bioText : userInfo.bio, valuesLoaded : true})
        }
      return (
        <div>
           {this.state.updateBio ? 
          <div>
            <textarea rows="6" cols="70" id="userBio" onChange={this.handleBioChange}>
              {userInfo.bio ? this.state.bioText : "Empty"}
            </textarea> 
          </div>
          :
          <p id="userBio">
            {userInfo.bio ? this.state.bioText : "Empty"}
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
        <textarea rows="6" cols="70" id="userBio" onChange={this.handleBioChange}>
          {userInfo.bio ? this.state.textBio : "Empty"}
        </textarea>
        <button id="btnChangeBio" onClick={this.setUserBio(userInfo)}>Save Bio</button>
      </div>
    )
  }

  setUserBio() {
      alert(this.state.bioText);
      this._changeBio()
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

const CHANGE_BIO = gql`
mutation ChangeBio($id : ID!, $bio : String!){
  updateUser(id : $id, bio : $bio){
    id
  }
}
`


export default compose(
    graphql(GET_INFO_QUERY, { name: 'getInfo', options: { variables: { id: localStorage.getItem(GC_USER_ID) } } }),
    graphql(CHANGE_BIO, { name: 'ChangeBio' })
) (ProfilePage)
