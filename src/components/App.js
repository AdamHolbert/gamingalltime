import React, { Component } from 'react';
import CreateLink from "./CreateLink"
import Header from './Header';
import LinkList from './LinkList';
import Login from './Login';
import Profile from './Profile';
import { Switch, Route } from 'react-router-dom'

class App extends Component {
    render() {
      return (
            <div className='center w85'>
                <Header />
                <div className='ph3 pv1 background-gray'>
                    <Switch>
                        <Route exact path='/profile' component={Profile}/>
                        <Route exact path='/login' component={Login}/>
                        <Route exact path='/create' component={CreateLink}/>
                        <Route exact path='/' component={LinkList}/>
                    </Switch>
                </div>
            </div>
        )
    }
}

export default App;