import React from 'react';
import { Link } from 'react-router-dom'
import Dropdown from 'react-dropdown'
import { graphql, gql } from 'react-apollo'
import { GC_USER_ID } from '../constants'




class CreateGame_Select extends React.Component {
    
 
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
 console.log(playableGames)
 
        return(
            
            <div>
                <div>Select A Game</div>
            <select>
                {playableGames.map(GameType => (
                    populateMenu(GameType)
                ))}
            </select>
            </div>
            
            
        )
    }
    
}

const populateMenu = (GameType) => {
    return(
        <option value={GameType.id}>{GameType.gameName} - {GameType.subGenre}</option>
       
    )
}

const GET_GAMES = gql`
query getGames{
  allGameTypes{
    id,
    gameName,
    subGenre
  }
}
`



export default graphql(GET_GAMES, {name:'getGames'}) (CreateGame_Select)