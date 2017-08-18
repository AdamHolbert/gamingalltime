import React from 'react';
import { Link } from 'react-router-dom'

class AccessRestriction extends React.Component {
    
    render(){
        return(
            <p>
                Sorry but you have to be logged in to view the content on this page.
                <br/>
                <Link to='/'>Back to safty!</Link>
            </p>
        )
    }
    
}

export default AccessRestriction