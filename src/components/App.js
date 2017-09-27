import React, { Component } from 'react';
import CreateLink from "./CreateLink"

import Header from './Header';
import CreateGame_Create from './CreateGame_Create';
import CreateGame_Select from './CreateGame_Select';
import CreateGame from './CreateGame';
import LoginPage from './LoginPage';
import ProfilePage from './ProfilePage';
import HomePage from './HomePage';
import UnknownPage from './UnknownPage';
import DataScrapeExample from './DataScrapeExample';

import { Switch, Route } from 'react-router-dom'
import { GC_USER_ID } from '../constants'

class App extends Component {
    render() {
        const userId = localStorage.getItem(GC_USER_ID);

        if(!userId){
            return (
                <div>
                    <Header userId={userId}/>
                    <Switch>
                        <Route path='/' component={LoginPage}/>
                    </Switch>
                </div>
            )
        }

        return (
            <div>
                <Header userId={userId}/>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route path='/' component={UnknownPage}/>
                </Switch>
            </div>
        )
    }
}

export default App;