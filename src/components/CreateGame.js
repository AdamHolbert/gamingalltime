import React from 'react'
import { Link } from 'react-router-dom'

class CreateGame extends React.Component {

   render(){
        return(
            <div>
                <br/>
                <br/>
                <p>Creating a new game will add it to your groups list of avaliable games to play.</p>
                <button><Link className="linkButton" to='/CreateGame_Create'>Create New Game</Link></button>
                <br/>
                <br/>
                <br/>
                <p>Select a game from your avaliable list of games</p>
                <button><Link className="linkButton" to='/CreateGame_Select'>Start New Game</Link></button>
            </div>
        )
    }
}


export default CreateGame