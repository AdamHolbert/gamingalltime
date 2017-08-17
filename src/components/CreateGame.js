import React from 'react'
import { GC_USER_ID, GC_AUTH_TOKEN } from '../constants'
import { gql, graphql, compose } from 'react-apollo'
import { Link } from 'react-router-dom'

class CreateGame extends React.Component {
   render(){
        return(
            <div>
                <br></br>
                <br></br>
                <p>Creating a new game will add it to your groups list of avaliable games to play.</p>
                <button>Create New Game</button>
                <br></br>
                <br></br>
                <br></br>
                <button>Start New Game</button>
            </div>
        )
    }
}


export default CreateGame