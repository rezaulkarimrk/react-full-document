import React from 'react';
import {v4 as uuidv4} from 'uuid';

import CountrySingle from './Country'
import style from './CSS/Countries.module.css'



const Countrys=(props)=>{
  return (
    <section className={style.countries}>
      {props.Countryis.map((Country) =>{
        let countrynew={ Country, id: uuidv4()}
        // if (countrynew.name.common ==='Israel'){
        //   return;
        // }
        return <CountrySingle { ...countrynew} key={countrynew.id} onRemoveCountry={props.onRemoveCountry} />
      })}
    </section>
  )
}

export default Countrys;
