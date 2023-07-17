import React from 'react';
import Card from './Card';

const CardList2 = ({ rap }) => {
  return (

    <div class = "scrollmenu">
      {

        rap.map((user, i) => {
          return (
            <Card
              key={i}
              id={rap[i].id}
              name={rap[i].name}
              artist={rap[i].artist}
              link={rap[i].link}
              image={rap[i].image}
              />
          );
        })
      }
    </div>
  );
}

export default CardList2;