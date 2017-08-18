import React from 'react';
import { Link } from 'react-router-dom'
import { graphql, gql } from 'react-apollo'

class PeopleInfo extends React.Component{
    
_executeSearch = async () => {
    const { USERID } = this.state
    const result = await this.props.client.query({
        query: ALL_USER_QUERY,
        variables: { USERID }
    })
    const links = result.data.allLinks
    this.setState({ links })
    return (<div/>)
}
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

{/*
            {this._executeSearch(userId)}
                {linksToRender.map(user => (
                processUser(user)
                ))}*/}


const processUser = (user) => {
    return(
        <p>
            Name: {user.name} <br/>
            Email: {user.email} <br/>
            
        </p>
    )
}

{/*const ALL_USER_QUERY = gql`
query allUserQuery($USERID : ID){
    allUsers(filter: {id: $USERID}){
    name
    email
  }
}`
, {options: { variables: { USERID: this.props.id } }}
*/}

const ALL_USER_QUERY = gql`
query allUserQuery{
    allUsers{
        id
        name
        email
        password
    }
}`

//alum, 

export default graphql(ALL_USER_QUERY, {name: 'allUserQuery'}) (PeopleInfo)