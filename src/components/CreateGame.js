import React from 'react'

class CreateGame extends React.Component {

createNewGameClick() {
        window.location ='/CreateGame_Create'
    }
playNewGameClick() {
        window.location ='/CreateGame_Select'
    }
   render(){
        return(
            <div>
                <br></br>
                <br></br>
                <p>Creating a new game will add it to your groups list of avaliable games to play.</p>
                <button onClick={this.createNewGameClick}>Create New Game</button>
                <br></br>
                <br></br>
                <br></br>
                <p>Select a game from your avaliable list of games</p>
                <button onClick={this.playNewGameClick}>Start New Game</button>
            </div>
        )
    }
}


export default CreateGame