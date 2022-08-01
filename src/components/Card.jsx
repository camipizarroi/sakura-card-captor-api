import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { sakuraAxios } from '../api/CardApi';
import { BASE } from '../environments/environments';

export const Card = () => {

  const [ cards, setClowCard ] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    getClowCard();
  }, []);


  const getClowCard = async () => {
    try {
      const response = await sakuraAxios.get( BASE );
      setClowCard( response.data );
    } catch ( error ) {
      console.log( error );
    }
  }

return (
  <div className='d-flex w-100 background-card justify-content-center'>    
    {
      cards.data && cards.data
        .filter( card => card.cardNumber == id)
        .map( filteredCard => (
        <div key={ filteredCard.kanji } className="card-deck">
          <div className="card">
            <img className="card-img-top" src={ filteredCard.clowCard } alt='card'/>
          </div>
          <div className="container-detail d-flex flex-column" >
              <h5 className="card-title-detail"> Appeard Anime : Chapter { filteredCard.appeardAnime }</h5> 
              <h5 className="card-title-detail"> Card Number : { filteredCard.cardNumber }</h5>
              <h5 className="card-title-detail"> English Name : { filteredCard.englishName }</h5>
              <h5 className="card-title-detail"> Spanish Name : { filteredCard.spanishName }</h5>
              <h5 className="card-title-detail"> Kanji : { filteredCard.kanji } </h5>
              <h5 className="card-title-detail"> Romaji : { filteredCard.Rōmaji }</h5>
              <h5 className="card-title-detail"> Meaning : { filteredCard.meaning }</h5>
              <Link className='setLink' to={"sakura-card-captor-api"}><button className='primary-btn-detail'>Volver</button></Link>
          </div>
        </div>
      ))
    }    
  </div>
  )
}