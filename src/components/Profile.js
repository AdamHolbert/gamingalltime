import React from 'react';
import { Link } from 'react-router-dom'


class Profile extends React.Component {
    
    render(){
        return(
            <div>
                <div>Profile</div>
                <Link to='/create' className='ml1 no-underline black'>lok</Link>
            </div>
        )
    }
    
}

export default Profile