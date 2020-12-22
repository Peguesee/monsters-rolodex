import React from 'react';
import './card.styles.css';

export const Card = (props) => (

  < div className="card-container" >
    {/*console.log('id:' + props.monster.id)*/}
    <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set6`}></img>
    <h1>{props.monster.name} </h1>
    <p>{props.monster.email}</p>
  </div >

)

//export default Card;