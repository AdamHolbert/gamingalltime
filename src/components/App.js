import React, { Component } from 'react';
import CreateLink from "./CreateLink"
import Header from './Header';
import Login from './Login';
import Profile from './Profile';
import Header from './Header';
import CreateGame_Create from './CreateGame_Create';
import CreateGame_Select from './CreateGame_Select';
import CreateGame from './CreateGame';
import AboutUs from './AboutUs';
import LoginPage from './LoginPage';
import ProfilePage from './ProfilePage';
import HomePage from './HomePage';
import AboutUsPage from './AboutUsPage';
import UnknownPage from './UnknownPage';
import DataScrapeExample from './DataScrapeExample';
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
                        <Route exact path='/CreateGame' component={CreateGame}/>
                        <Route exact path='/CreateGame_Create' component={CreateGame_Create}/>
                        <Route exact path='/CreateGame_Select' component={CreateGame_Select}/>
                        <Route exact path='/profile' component={ProfilePage}/>
                        <Route exact path='/login' component={LoginPage}/>
                        <Route exact path='/create' component={CreateLink}/>
                        <Route exact path='/DataScrapeExample' component={DataScrapeExample}/>
                        <Route exact path='/' component={HomePage}/>
                        <Route path='/' component={UnknownPage}/>
                    </Switch>
                </div>
            </div>
        )
    }
}

export default App;