import React from 'react';
import { graphql, gql, } from 'react-apollo'

class AllScores extends React.Component{
    render(){
        console.log(this.props.getGameTypeScores)
        if(this.props.getGameTypeScores && this.props.getGameTypeScores.loading )
        {
            return <div>Loading...</div>
        }
        if(this.props.getGameTypeScores && this.props.getGameTypeScores.error)
        {

            return <div>Error...</div>
        }
        const scores = this.props.getGameTypeScores.allGameTypes;
        return(
            <div>
                {scores.map(e => (
                    processScore(e)
                ))}
            </div>
        )
    }
}
const processScore = (score) => {

    if(score != null) {
        const scores =  score.scores;
        return (

            <p key={score.id}>
                Name:{score.gameName}<br/>
                 {processScores(scores)}
            </p>
        )
    }
    return <div>Scores Not Found</div>
}


const processScores = (scores) => {
    var temp = ""
    if(scores != null){
        scores.map(score => (
            temp += score.points + " "
        ))
        return (
            <div>
                Scores: {temp}
            </div>
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