import React from 'react';
import { GC_USER_ID, GC_AUTH_TOKEN } from '../constants'

class HomePage extends React.Component {
    
    render(){
        const userId = localStorage.getItem(GC_USER_ID)
        return(
            <div>
                <div>Welcome to the home page!</div>
                {userId ?
                    <div> 
                        You are at the user logged in page, congrats!
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