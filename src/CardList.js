import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
  return (

    <div class = "scrollmenu">
      {

        robots.map((user, i) => {
          return (
            <Card
              key={i}
              id={robots[i].id}
              name={robots[i].name}
              link={robots[i].link}
              image={robots[i].image}
              artist={robots[i].artist}
              />
          );
        })
      }
    </div>
  );
}

export default CardList;