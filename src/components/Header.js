import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import { GC_USER_ID, GC_AUTH_TOKEN } from '../constants'

class Header extends Component {

    render() {
        const userId = localStorage.getItem(GC_USER_ID)
        return (
            <div>
                <div>
                    <div>Welcome to Gaming All Time, A place to store all the records!</div>
                    <Link to='/' className='ml1 no-underline black'>new</Link>
                    {
                        userId &&
                        <div>
                            <Link to='/create'>submit</Link>
                        </div>
                    }
                </div>
                <div>
                {
                    //Turnery if userID logout, else login.
                    userId ?
                    // This is a function, please don't be scared by it. I wish I knew how
                    // to move it out and make it class level rather then inline.
                    <div onClick={() => {
                        localStorage.removeItem(GC_USER_ID)
                        localStorage.removeItem(GC_AUTH_TOKEN)
                        this.props.history.push(`/`)
                    }}>logout</div>
                    :
                    <Link to='/login' className='ml1 no-underline black'>login</Link>
            }
            </div>
        </div>
        )
    }

}

export default withRouter(Header)