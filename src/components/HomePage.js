import React from 'react';
import { GC_USER_ID, GC_AUTH_TOKEN } from '../constants'
import PeopleInfo from './PeopleInfo';
class HomePage extends React.Component {
    
    render(){
        const userId = localStorage.getItem(GC_USER_ID)
        return(
            <div>
                <div><h1>Welcome to the home page!</h1></div>
                {userId ?
                    <div> 
                        <h2>Welcome User!</h2>
                        <h3>All Registered Users</h3>
                        <PeopleInfo/>
                    </div>
                        :
                    <div>
                    <div>
                        <h2>Don't Have An Account? Well Create One Today!! </h2>
                        <h3>All Registered Users</h3>
                        <PeopleInfo/>
                    </div>
                       
                    </div>
                }
            </div>
        )
    }
}

export default HomePage