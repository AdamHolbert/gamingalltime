import React from 'react';
import { graphql, gql, compose } from 'react-apollo'
import { GC_USER_ID } from '../constants'



class LoggedIn extends React.Component{
    render() {
        if(this.props.query && this.props.query.loading )
        {
            return <div>Loading...</div>
        }
        
        if(this.props.query && this.props.query.error)
        {
            return <div>Error...</div>
        }
        
        return(
            processUser(this.props.query.User)
        )
    }
}


const processUser = (user) => {
    if(user != null) {
        return (
            <p>
                Name: {user.name} <br/>
                Email: {user.email} <br/>

            </p>
        )
    }
    return <div>User Not Found</div>
}

const BASIC_USER_QUERY = gql`
query query($id: ID!){
    User(id: $id){
      id
      name
      email
    }
}`

const USER_GROUPS_QUERY = gql`
query allUserGroups($id: ID!){
   User(id: $id){
     groupIn{
       name
      }
   }
}`





export default compose(
    graphql(BASIC_USER_QUERY, {name: 'query', options: {variables: {id: localStorage.getItem(GC_USER_ID)} }}),
    graphql(USER_GROUPS_QUERY, {name: 'groupNames', options: {variables: {id: localStorage.getItem(GC_USER_ID)} }})
    )(LoggedIn);