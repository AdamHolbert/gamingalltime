import React from 'react';
import { Link } from 'react-router-dom';

class UnknownPage extends React.Component {
    
    render(){
        return(
            <div>
                Page Not found
                <br />
                Looks like you've followed a broken link or entered a URL that doesn't exist on this site.
                <br/>
                <Link to="/">Follow me home!</Link>
            </div>
        )
    }
    
}

export default UnknownPage