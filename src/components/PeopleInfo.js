import React from 'react';
import { Link } from 'react-router-dom'
import People from './People'

class PeopleInfo extends React.Component{
    render() {
    const people = [{
      id: '1',
      name: 'Adam Holbert',    
      description: 'The Coolest GraphQL Backend 😎',
      
    }, {
      id: '2',
      name: 'Adam Holbert',
      description: 'The Best GraphQL Client',
      
    }]
         return(
       <div>
          {people.map(link => (
          <People key={link.id} link={link}/>
           ))}
        </div>
        
        )
    }
   
}
//alum

export default PeopleInfo