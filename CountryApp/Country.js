import React from 'react';

import style from'./CSS/country.module.css'

const Country=(props)=> {
    // const {Country}=props;
    const handleRemoveCountry=(name)=>{
      props.onRemoveCountry(name);
    }
    const {name, flags, capital, population, area}= props.Country;
  return (
    <article className={style.country}>
      <div>
        <img src={flags.png} alt={name.common} className={style.flag}/>
        <h3>Name : {name.common}</h3>
        <h3>capital : {capital}</h3>
        <h3>population : {population}</h3>
        <h3>Area : {area}</h3>
        <button className={style.bbtn} onClick={(()=>{
          handleRemoveCountry(name.common)
        })}>Remove Country</button>
      </div>
    </article>
  )
}

export default Country;
