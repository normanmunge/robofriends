import React from 'react';
import Card from './Card';


const CardList = ({robots}) => {
    const cardComponent = robots.map((user,i) => {
        //always remember to add a key prop in a loop to minimize dom changes
        return (
        <Card 
            key={robots[i].id} 
            id={robots[i].id} 
            name={robots[i].name} 
            email={robots[i].email}
        />
        );
    })
    return (
        <div>
            {cardComponent}
        </div>
    );
}

export default CardList;

//key prop should have sthn that doesn't change. eg index could change if array items get moved. So a better key would be sthn unique like id