import React from 'react';
import Card from './Card';

const CardList3 = ({ pop }) => {
  return (

    <div class = "scrollmenu">
      {
        
        pop.map((user, i) => {
          return (
            <Card
              key={i}
              id={pop[i].id}
              name={pop[i].name}
              link={pop[i].link}
              image={pop[i].image}
              />
          );
        })
      }
    </div>
  );
}

export default CardList3;