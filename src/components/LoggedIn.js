import React from 'react';
import { graphql, gql } from 'react-apollo'
import { GC_USER_ID } from '../constants'



class LoggedIn extends React.Component{
    render() {
        console.log(this.props.query.User)
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



export default graphql(BASIC_USER_QUERY, {name: 'query', options: {variables: {id: localStorage.getItem(GC_USER_ID)} }})(LoggedIn);