import React, { useEffect, useState } from 'react'
import { sakuraAxios } from '../api/CardApi';
import { BASE } from '../environments/environments';
import { Link } from 'react-router-dom';

export const Content = () => {
  const [ cards, setCard ] = useState([]);

  useEffect(() => {
    getCards();
  }, []);

  const getCards = async () => {
    try {
      const response = await sakuraAxios.get( BASE );
      setCard( response.data );
    } catch ( error ) {
      console.log( error );
    }
  }

  return (
    <div className='d-flex background-content justify-content-center'>    
      {
        cards.data && cards.data
          .filter( card => card.hasOwnProperty( 'clowCard' ) && card.clowCard !== "" )
          .map( filteredCard => (
          <div key={ filteredCard.kanji } className="card-deck-content">
          <div className="card">
            <img className="card-img-top" src={ filteredCard.clowCard } alt='card'/>
            <div className="card-body">
              <h5 className="card-title"> Card Number : { filteredCard.cardNumber }</h5>
              <p className="card-text"> Spanish Name : { filteredCard.spanishName }</p>
            </div>
            <div className="card-footer">
               <Link to={{pathname:"/Card/" + filteredCard.cardNumber,state:{stateParam: true}}} ><button className='primary-btn'>More info</button></Link> 
            </div>
          </div>
          </div>
        ))
      }
    </div>
  )
}