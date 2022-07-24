import React, { useEffect, useState } from 'react'
import { sakuraAxios } from '../api/character';
import { BASE } from '../environments/environments';

// Aplicar clean code

export const Content = () => {
  const [cards, setCard] = useState([]);


  useEffect(() => {
    getCharacter();
  }, []);


  const getCharacter = async () => {
    try {
      const response = await sakuraAxios.get( BASE );
      setCard( response.data );
    } catch (error) {
      console.log(error);
    }
  }

  console.log(cards.data);
  return (
    <div className='d-flex w-100 background-content'>    
      {
        cards.data && cards.data
          .filter( card => card.hasOwnProperty('clowCard' ) && card.clowCard !== "")
          .map(filteredCard => (
          <div className="card-deck">
          <div className="card">
            <img className="card-img-top" src={ filteredCard.clowCard } alt='card'/>
            <div className="card-body">
              <h5 className="card-title"> Card Number : { filteredCard.cardNumber }</h5>
              <p className="card-text"> Spanish Name : { filteredCard.spanishName }</p>
            </div>
            <div className="card-footer">
              <button> More Info </button>
            </div>
          </div>
          </div>
        ))
      }
    </div>
  )
}