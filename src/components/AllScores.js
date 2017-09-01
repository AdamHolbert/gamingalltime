import React from 'react';
import { graphql, gql, } from 'react-apollo'

class AllScores extends React.Component{
    render(){
        
        if(this.props.getGameTypeScores && this.props.getGameTypeScores.loading )
        {
            return <div>Loading...</div>
        }
        
        if(this.props.getGameTypeScores && this.props.getGameTypeScores.error)
        {

            return <div>Error...</div>
        }
        
        const games = this.props.getGameTypeScores.allGameTypes;
        return(
            <div className="scores">
                {games.map(game => (
                    processScore(game)
                ))}
            </div>
        )
    }
}
const processScore = (game) => {
    if(game != null) {
        const scores =  game.scores;
        return (
            <div key={game.id} className="score">
                <p key={game.id}>
                    Name: {game.gameName}<br/>
                    Scores: {processScores(scores)}
                </p>
            </div>

        )
    }
    return <div>Game Not Found</div>
}


const processScores = (scores) => {
    var temp = ""
    if(scores != null){
        scores.map(score => (
            temp = temp > score.points ? temp : score.points
        ))
        return (
            temp.length == 0 ? "N/A" : temp
        )
    }
    return <div>Scores Not Found</div>
}

const ALL_GAME_TYPE_SCORES = gql`
query getGameTypeScores{
    allGameTypes{
        id
        gameName
        scores{
          id 
          points
        } 
    }   
}`

export default graphql(ALL_GAME_TYPE_SCORES, {name: 'getGameTypeScores'}) (AllScores);