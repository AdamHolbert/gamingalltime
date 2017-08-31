import React from 'react';
import { GC_USER_ID } from '../constants';
import LoggedIn from './LoggedIn';
import LoggedOut from './LoggedOut';
import AllScores from './AllScores'
class HomePage extends React.Component {
    
    render(){
        const userId = localStorage.getItem(GC_USER_ID)
        return(
            <div>
                <div className="homeHeader"><h1>Welcome to the home page!</h1></div>
                {userId ?
                    <div> 
                        <h2>Welcome User!</h2>
                        <LoggedIn />
                        <h1>All Scores For Every Game Type </h1>
                        <AllScores/>
                    </div>
                        :
                    <div>
                    <div>
                        <h2>Don't Have An Account? Well Create One Today!! </h2>
                        <h3>All Registered Users</h3>
                        <LoggedOut/>
                        <div className="allScores">
                            <h1><u>All Scores For Every Game Type</u> </h1>
                        </div>
                        <AllScores/>
                    </div>
                       
                    </div>
                }
            </div>

        )
    }
}

export default HomePage