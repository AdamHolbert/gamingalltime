import React, { Component } from 'react'
import { graphql, gql } from 'react-apollo'

class DataScrapeExample extends Component {

    render() {

        // 1
        if (this.props.allUserQuery && this.props.allUserQuery.loading) {
            return <div>Loading</div>
        }
        
        // 2
        if (this.props.allUserQuery && this.props.allUserQuery.error) {
            return <div>Error</div>
        }
        
        // 3
        const linksToRender = this.props.allUserQuery.allUsers    
        return (
            <div>
                {linksToRender.map(user => (
                    processUser(user)
                ))}
            </div>
        )
    }

}

const processUser = (user) => {
    return(
        <p>
            Name: {user.name} <br/>
            Email: {user.email} <br/>
            Password: {user.password}
        </p>
    )
}

const ALL_USER_QUERY = gql`
query allUserQuery{
    allUsers{
        id
        name
        email
        password
    }
}`

export default graphql(ALL_USER_QUERY, {name: 'allUserQuery'}) (DataScrapeExample)