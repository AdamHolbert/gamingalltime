import React from 'react';
import { Link } from 'react-router-dom'
import People from './People'

class PeopleInfo extends React.Component{
    render() {
    const people = [{
      id: '1',
      name: 'Adam Holbert',    
      email : 'coolDude@chilltime.com '
      
    }, {
     id: '2',
      name: 'Christian Moore',
      email: 'CMoo@gmail.com'
      
    }, {
      id: '3',
      name: 'Dylan Shoupe',
      email: 'The bestest create game page and some routing ☃ ☃ ☃'
      
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