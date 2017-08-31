import React from 'react';
import { Link } from 'react-router-dom'
import Dropdown from 'react-dropdown'
import { graphql, gql, compose } from 'react-apollo'
import { GC_USER_ID } from '../constants'

var $id = 'test'



class CreateGame_Select extends React.Component {
    constructor(props){
        super(props);
        this.state = {gameid: '', userid: '', score: ''}

        
    }
  
    
    _addScores = async () => {
            const userid = this.state.userid
            const gameid = this.state.gameid
            const score = this.state.score
            const groupID = "cj6wqfs27re480183ty7x46ob"
            await this.props.addScore({
                variables: {
                    gameType: gameid,
                    group: groupID,
                    points: score,
                    userId: userid
                }
            })
        }
    
    render(){
        console.log(this.props)
        if(this.props.getGames && this.props.getGames.loading )
        {
            return <div>Loading...</div>
        }
        if(this.props.getGames && this.props.getGames.error)
        {
            return <div>Error...</div>
        }
        
        const playableGames = this.props.getGames.allGameTypes || []
        const selectableUsers = this.props.getUsers.allUsers || []
        
        return(
            
            <div>
                <div>Select A Game</div>
                <select>
                    {playableGames.map(GameType => (
                        populateMenu(GameType)
                    ))}
                </select>

                <br></br>
                <br></br>
                <form onSubmit={() => this._addScores()}>
                    <select>
                        <option value='N/A'/>{selectableUsers.map(UserName => (populatePlayers(UserName)))}
                    </select>
                    <input type="Text" name="Score"></input>
                    <p></p>
                    <select>
                        <option value='N/A'/>{selectableUsers.map(UserName => (populatePlayers(UserName)))}
                    </select>
                    <input type="Text" name="Score"></input>
                    <p></p>
                    <select>
                        <option value='N/A'/>{selectableUsers.map(UserName => (populatePlayers(UserName)))}
                    </select>
                    <input type="Text" name="Score"></input>
                    <p></p>
                    <select>
                        <option value='N/A'/>{selectableUsers.map(UserName => (populatePlayers(UserName)))}
                    </select>
                    <input type="Text" name="Score"></input>
                    <p></p>
                    <select>
                        <option value='N/A'/>{selectableUsers.map(UserName => (populatePlayers(UserName)))}
                    </select>
                    <input type="Text" name="Score"></input>
                    <p></p>
                    <select>
                        <option value='N/A'/>{selectableUsers.map(UserName => (populatePlayers(UserName)))}
                    </select>
                    <input type="Text" name="Score"></input>
                    <p></p>
                    <select>
                        <option value='N/A'/>{selectableUsers.map(UserName => (populatePlayers(UserName)))}
                    </select>
                    <input type="Text" name="Score"></input>
                    <p></p>
                    <select>
                        <option value='N/A'/>{selectableUsers.map(UserName => (populatePlayers(UserName)))}
                    </select>
                    <input type="Text" name="Score"></input>
                    <p></p>
                    <label><input type='Submit'>Submit</input> </label>
                       
                </form>
            </div> 
        )
    }
    
}


const populatePlayers = (UserName) => {
    return(
        <option name="SelectedUser" value={UserName.id}>{UserName.name}</option>
    )
}

const populateMenu = (GameType) => {
    return(
        <option name="SelectedGame" value={GameType.id}>{GameType.gameName} - {GameType.subGenre}</option>
    )
}

const GET_USERS = gql`
query getUsers{
  allUsers{
    id,
    name
  }
}
`

const GET_GAMES = gql`
query getGames{
  allGameTypes{
    id,
    gameName,
    subGenre
  }
}
`

const ADD_SCORE = gql`
mutation AddScore($gameType : ScoregameTypeGameType!, $group : ScoregroupIdGroup!, $points : Int!, $userId : ID!){
  createScore(gameType : $gameType, groupId : $group, points : $points, userIdId : $userId){
    id
  }
}`

export default compose(
    graphql(GET_GAMES, {name:'getGames'}),
    graphql(GET_USERS, {name:'getUsers'}),
    graphql(ADD_SCORE, {name:'addScore'})
)(CreateGame_Select)