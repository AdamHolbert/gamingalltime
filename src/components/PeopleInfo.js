import React from 'react';
import { Link } from 'react-router-dom'
import { graphql, gql } from 'react-apollo'
import { GC_USER_ID, GC_AUTH_TOKEN } from '../constants'

class PeopleInfo extends React.Component{
    render() {
        const userId = localStorage.getItem(GC_USER_ID)
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
            
        </p>
    )
}

const ALL_USER_QUERY = gql`
query allUserQuery($USERID : String){
    allUsers(id: $USERID){
    name
    email
  }
}`



//alum, 

export default graphql(ALL_USER_QUERY, {name: 'allUserQuery'}, {options: { variables: { USERID: localStorage.getItem(GC_USER_ID) } }}) (PeopleInfo)