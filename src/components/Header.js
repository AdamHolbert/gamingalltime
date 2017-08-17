import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import { GC_USER_ID, GC_AUTH_TOKEN } from '../constants'

class Header extends Component {

    render() {
        const userId = localStorage.getItem(GC_USER_ID)
        return (
            <header>
                <div className="headTitle">
                    <div className="headTitleText">Welcome to Gaming All Time, A place to store all the records!</div>
                    {
                        //Turnery if userID logout, else login.
                        userId ?
                        // This is a function, please don't be scared by it. I wish I knew how
                        // to move it out and make it class level rather then inline.
                        <div className="headLogout" onClick={() => {
                            localStorage.removeItem(GC_USER_ID)
                            localStorage.removeItem(GC_AUTH_TOKEN)
                            this.props.history.push(`/`)
                        }}>logout</div>
                        :
                        <Link className="headLogin" to='/login'>login</Link>
                    }
                </div>
                <div className="headNavBar">
                    <Link to='/' className="navLink">Home</Link>
                    <Link to='/AboutUs' className="navLink">About Us</Link>
                    {userId && <Link to='/DataScrapeExample' className="navLink">Data Scrape Example</Link>}
                    {userId && <Link to='/create' className="navLink">submit</Link>}
                    {userId && <Link to='/profile' className="navLink">profile</Link>}
                    <Link to='/CreateGame' className="navLink">CreateGame</Link>
                    <Link to='/CreateGame_Create' className="navLink">CreateGame_Create</Link>
                    <Link to='/CreateGame_Select' className="navLink">CreateGame_Select</Link>
                    <Link to='/AboutUs' className="navLink">About Us</Link>
                </div>
            </header>
        )
    }

}

export default withRouter(Header)