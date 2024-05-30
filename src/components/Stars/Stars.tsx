import React from 'react';
import Star from '../Star/Star';

export default function Stars(prors: number) {
  const { count }: number = prors;
  type Count = {
    id: string,
  };

  const countArr: array = [];

  if ((count >= 1) && (count <= 5)) {

    for (let i = 1; i <= count; i = i + 1) {
      let countObj: Count = {
        id: crypto.randomUUID()
      };
      countArr.push(countObj);
    }

    return (
      <ul className = "card-body-stars">
          {countArr.map(star => {
            return (
              <Star star = {star}/>
            )
          })}
      </ul>

    )
  }
}
