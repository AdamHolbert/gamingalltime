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
                        <PeopleInfo/>
                    </div>
                        :
                    <div>
                    
                        You are currently not logged in. Please log in to gain all the functions this website has to offer.
                    </div>
                }
            </div>
        )
    }
}

export default HomePage