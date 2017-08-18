import React from 'react';
import { Link } from 'react-router-dom'

class CreateGame_Create extends React.Component {
    constructor(props) {
        super(props);
        this.state = {Name: '', Type: 'Boardgame', Score: 'Points'};
   
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleType = this.handleType.bind(this);
        this.handleScore = this.handleScore.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleTextChange(event) {
        this.setState({Name: event.target.value});
    }
    
    handleType(event) {
        this.setState({Type: event.target.value});
    }
    
    handleScore(event) {
        this.setState({Score: event.target.value});
    }

    handleSubmit(event) {
        alert('Game: ' + this.state.Name + '\nType: ' + this.state.Type + '\nScore Type: ' + this.state.Score);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <br/>
            <label>
                Name:
                <input type="text" required value={this.state.Name} onChange={this.handleTextChange} />
             </label>
            <br/><br/>

            <label>
                Type Of Game:
                <select value={this.state.Type} onChange={this.handleType}>
                <option value="CardGame">Card Game</option>
                <option value="Boardgame">Boardgame</option>
                <option value="RPG">RPG</option>
                </select>
            </label><br/><br/>
            <label>
                Type Of Scoring:
                <select value={this.state.Score} onChange={this.handleScore}>
                <option value="Money">Money</option>
                <option value="Points">Points</option>
                <option value="Rounds">Rounds</option>
                </select>
            </label><br/>
            <br/>
            <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default CreateGame_Create