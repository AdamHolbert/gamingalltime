import React, { Component } from 'react';
import CreateLink from "./CreateLink"

import Header from './Header';
import CreateGame_Create from './CreateGame_Create';
import CreateGame_Select from './CreateGame_Select';
import CreateGame from './CreateGame';

import LoginPage from './LoginPage';
import ProfilePage from './ProfilePage';
import HomePage from './HomePage';
import AboutUsPage from './AboutUsPage';
import UnknownPage from './UnknownPage';
import DataScrapeExample from './DataScrapeExample';
import AccessRestriction from './AccessRestrictionPage';

import { Switch, Route } from 'react-router-dom'
import { GC_USER_ID, GC_AUTH_TOKEN } from '../constants'

class App extends Component {
    render() {
        const userId = localStorage.getItem(GC_USER_ID)
        return (
            <div>
                <Header />
                <div>
                    <Switch>
                        {userId ? <Route exact path='/CreateGame' component={CreateGame}/>
                            : <Route exact path='/CreateGame' component={AccessRestriction}/>}
                        {userId ? <Route exact path='/CreateGame_Create' component={CreateGame_Create}/>
                            : <Route exact path='/CreateGame_Create' component={AccessRestriction}/>}
                        {userId ? <Route exact path='/CreateGame_Select' component={CreateGame_Select}/>
                            : <Route exact path='/CreateGame_Select' component={AccessRestriction}/>}
                        {userId ? <Route exact path='/profile' component={ProfilePage}/>
                            : <Route exact path='/profile' component={AccessRestriction}/>}
                        {userId ? <Route exact path='/create' component={CreateLink}/>
                            : <Route exact path='/create' component={AccessRestriction}/>}
                        {userId ? <Route exact path='/DataScrapeExample' component={DataScrapeExample}/>
                            : <Route exact path='/DataScrapeExample' component={AccessRestriction}/>}
                        <Route exact path='/AboutUs' component={AboutUsPage}/>
                        <Route exact path='/login' component={LoginPage}/>
                        <Route exact path='/' component={HomePage}/>
                        <Route path='/' component={UnknownPage}/>
                    </Switch>
                </div>
            </div>
        )
    }
}

export default App;