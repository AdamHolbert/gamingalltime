import React from 'react';
import { graphql, gql, compose } from 'react-apollo'

class CreateGame_Select extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            gameid: '', 
            userid: '', 
            score: ''
        }
    };

    // _addScores = async (gameid, groupID, score, userid) => {
    //     await this.props.addScore({
    //         variables: {
    //             gameType: gameid,
    //             group: groupID,
    //             points: score,
    //             userId: userid
    //         }
    //     })
    // };
    
    render(){
        if(this.props.getGames && this.props.getGames.loading )
        {
            return <div>Loading...</div>
        }
        
        if(this.props.getGames && this.props.getGames.error)
        {
            return <div>Error...</div>
        }
        
        const playableGames = this.props.getGames.allGameTypes || [];
        const selectableUsers = this.props.getUsers.allUsers || [];
        
        return(
            <div>
                <div>Select A Game</div>
                <select>
                    {playableGames.map(GameType => (
                        populateMenu(GameType)
                    ))}
                </select>
                <br/>
                <br/>
                <form onSubmit={e => {
                        console.log(e);
                        alert("a")
                    }}>
                    <p>
                        <select>
                            <option value='N/A'/>{selectableUsers.map(UserName => (populatePlayers(UserName)))}
                        </select>
                        <input type="Text" name="Score1" />
                    </p>
                    <p>
                        <select>
                            <option value='N/A'/>{selectableUsers.map(UserName => (populatePlayers(UserName)))}
                        </select>
                        <input type="Text" name="Score2" />
                    </p>
                    <p>
                        <input type='Submit' />
                    </p>
                </form>
            </div> 
        )
    }
    
}


const populatePlayers = (UserName) => {
    if(UserName){
        return(
            <option key={UserName.id} name="SelectedUser" value={UserName.id}>{UserName.name}</option>
        )
    }
    return <option>Error</option>
};

const populateMenu = (GameType) => {
    if(GameType){
        return(
            <option key={GameType.id} name="SelectedGame" value={GameType.id}>{GameType.gameName} - {GameType.subGenre}</option>
        )    
    }
    return <option>Error</option>
};

const GET_USERS = gql`
query getUsers{
  allUsers{
    id,
    name
  }
}
`;

const GET_GAMES = gql`
query getGames{
  allGameTypes{
    id,
    gameName,
    subGenre
  }
}
`;

const ADD_SCORE = gql`
mutation AddScore($gameType : ScoregameTypeGameType!, $group : ScoregroupIdGroup!, $points : Int!, $userId : ID!){
  createScore(gameType : $gameType, groupId : $group, points : $points, userIdId : $userId){
    id
  }
}`;

export default compose(
    graphql(GET_GAMES, {name:'getGames'}),
    graphql(GET_USERS, {name:'getUsers'}),
    graphql(ADD_SCORE, {name:'addScore'})
)(CreateGame_Select)