import React from 'react';
import { graphql, gql } from 'react-apollo'

class LoggedOut extends React.Component{
    render() {
          // 1
        if (this.props.allUserQuery && this.props.allUserQuery.loading) {
            return <div>Loading</div>
        }
        
        // 2
        if (this.props.allUserQuery && this.props.allUserQuery.error) {
            return <div>Error</div>
        }
        
        
        const linksToRender = this.props.allUserQuery.allUsers    
        return (
            <div>
                {linksToRender.map(user => (
                    processUsers(user)
                ))}
            </div>
        )
    }
   
}


const processUsers = (user) => {
    return(
        <p>
            Name: {user.name} <br/>
            Email: {user.email} <br/>
            
        </p>
    )
}

const ALL_USER_QUERY = gql`
query allUserQuery{
    allUsers{
    name
    email
  }
}`



//alum

export default graphql(ALL_USER_QUERY, {name: 'allUserQuery'}) (LoggedOut)