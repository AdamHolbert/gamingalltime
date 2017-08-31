import React from 'react';
import { Link } from 'react-router-dom'
import { graphql, gql } from 'react-apollo'

class PeopleInfo extends React.Component{
    render() {
        const userId = this.props.id
          // 1
        if (this.props.allUserQuery && this.props.allUserQuery.loading) {
            return <div>Loading</div>
        }
        
        // 2
        if (this.props.allUserQuery && this.props.allUserQuery.error) {
            alert(this.props.allUserQuery.error)
            return <div>Error</div>
        }
        

        
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
        <div>
        <p>
            Name: {user.name} <br/>
            Email: {user.email} <br/>
            
        </p>
        </div>
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

export default graphql(ALL_USER_QUERY, {name: 'allUserQuery'}) (PeopleInfo)