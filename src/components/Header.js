import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { GC_USER_ID, GC_AUTH_TOKEN } from '../constants'

class Header extends Component {

    render() {
        return (
            <header>
                <b className="headText">
                    The&nbsp;<div className="headTextHighlight">D&D</div>&nbsp;Tracker
                </b>
                {this.props.userId &&

                    <button className="headLogout" onClick={() => {
                        localStorage.removeItem(GC_USER_ID);
                        localStorage.removeItem(GC_AUTH_TOKEN);
                        this.props.history.push(`/`)
                    }}>
                        Logout
                    </button>
                }
            </header>
        )
    }

}
export default withRouter(Header)