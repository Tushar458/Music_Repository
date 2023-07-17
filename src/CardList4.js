import React from 'react';
import Card from './Card';

const CardList4 = ({ EDM }) => {
  return (

    <div class = "scrollmenu">
      {

        EDM.map((user, i) => {
          return (
            <Card
              key={i}
              id={EDM[i].id}
              name={EDM[i].name}
              link={EDM[i].link}
              image={EDM[i].image}
              />
          );
        })
      }
    </div>
  );
}

export default CardList4;