import React, { Component } from 'react'
import { graphql, gql } from 'react-apollo'

class DataScrapeExample extends Component {

    _subscribeToNewUsers = () => {
        this.props.allUserQuery.subscribeToMore({
            document: gql`
                subscription {
                    User(filter: {
                        mutation_in: [CREATED]
                    }) {
                    node {
                        id
                        name
                        email
                        password
                    }
                }
            }`,
            updateQuery: (previous, { subscriptionData }) => {
                console.log("addedSomething");
//                const newAllUsers = [
//                    subscriptionData.data.User.node,
//                    ...previous.allUsers
//                ]
//                const result = {
//                    ...previous,
//                    allUsers: newAllUsers
//                }
                return subscriptionData
            }
        })
    }
    
    componentDidMount() {
        this._subscribeToNewUsers()
    }
    
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
        <div key={user.id}>
            Name: {user.name} <br/>
        </div>
    )
}
//            Email: {user.email} <br/>
//            Password: {user.password}

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