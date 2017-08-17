import React, { Component } from 'react';
import CreateLink from "./CreateLink"
import Header from './Header';
import Login from './Login';
import Profile from './Profile';
import { Switch, Route } from 'react-router-dom'

class App extends Component {
    render() {
      return (
            <div>
                <Header />
                <div>
                    <Switch>
                        <Route exact path='/profile' component={Profile}/>
                        <Route exact path='/login' component={Login}/>
                        <Route exact path='/create' component={CreateLink}/>
                    </Switch>
                </div>
            </div>
        )
    }
}

export default App;