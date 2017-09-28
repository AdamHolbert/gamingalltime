import React from 'react';
import { GC_USER_ID } from '../constants';
import LoggedIn from './LoggedIn';
import LoggedOut from './LoggedOut';
import AllScores from './AllScores'
class HomePage extends React.Component {
    
    render(){
        return(
            <div className="">
                <div className="addContainer">

                </div>
                <div className="dataContainer">
                    <div className="groupSection">

                    </div>
                    <div className="friendSection">

                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage