import React, { Component } from 'react';
import CreateLink from "./CreateLink"
import Header from './Header';
import Login from './Login';
import Profile from './Profile';
import CreateGame_Create from './CreateGame_Create';
import CreateGame_Select from './CreateGame_Select';
import CreateGame from './CreateGame';
import AboutUs from './AboutUs';
import { Switch, Route } from 'react-router-dom'

class App extends Component {
    render() {
      return (
            <div>
                <Header />
                <div>
                    <Switch>
                        <Route exact path='/AboutUs' component={AboutUs}/>
                        <Route exact path='/login' component={Login}/>
                        <Route exact path='/profile' component={Profile}/>
                        <Route exact path='/create' component={CreateLink}/>
                        <Route exact path='/CreateGame' component={CreateGame}/>
                        <Route exact path='/CreateGame_Create' component={CreateGame_Create}/>
                        <Route exact path='/CreateGame_Select' component={CreateGame_Select}/>
                    </Switch>
                </div>
            </div>
        )
    }
}

export default App;