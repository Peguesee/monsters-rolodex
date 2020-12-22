import React from 'react';

import { Card } from '../card/card.component.js';

import './card-list.styles.css';

export const CardList = props => {
  //console.log(props);
  return (
    <div className='card-list'>
      {
        props.monsters.map(m => (
          <Card key={m.id} monster={m} />
        ))
      }
    </div>
  )
};