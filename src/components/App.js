import React, { Component } from 'react';
import CreateLink from "./CreateLink"
import Header from './Header';
import LoginPage from './LoginPage';
import ProfilePage from './ProfilePage';
import HomePage from './HomePage';
import AboutUsPage from './AboutUsPage';
import UnknownPage from './UnknownPage';
import DataScrapeExample from './DataScrapeExample';
import { Switch, Route } from 'react-router-dom'

class App extends Component {
    render() {
      return (
            <div>
                <Header />
                <div>
                    <Switch>
                        <Route exact path='/profile' component={ProfilePage}/>
                        <Route exact path='/login' component={LoginPage}/>
                        <Route exact path='/create' component={CreateLink}/>
                        <Route exact path='/aboutUs' component={AboutUsPage}/>
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