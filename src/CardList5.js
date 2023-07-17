import React from 'react';
import Card from './Card';

const CardList5 = ({ rock }) => {
  return (

    <div class = "scrollmenu">
      {

        rock.map((user, i) => {
          return (
            <Card
              key={i}
              id={rock[i].id}
              name={rock[i].name}
              link={rock[i].link}
              image={rock[i].image}
              />
          );
        })
      }
    </div>
  );
}

export default CardList5;