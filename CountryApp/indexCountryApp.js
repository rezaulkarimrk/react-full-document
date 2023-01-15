import React, {useState, useEffect} from 'react'

import Countrys from './Countrys'
import './CSS/index.css'
import './CSS/index.css'
import Search from './Search';
import './CSS/App.css';

const URL= "https://restcountries.com/v3.1/all";
const IndexCountryApp = () => {
    const [IsLoading, setIsloading]=useState(true);
    const [error, setError]=useState(null);
    const [Countries, setCountries]=useState([]);
    const [filterCountry, setFiltercountry]=useState(Countries);

    const fetchData= async (URL)=>{
        setIsloading(true);
        try{
            const response=await fetch(URL);
            const data = await response.json();
            const fiilter= data.filter((filtered)=> filtered.name.common!=='Israel');
            setCountries(fiilter);
            setFiltercountry(fiilter);
            setIsloading(false)
            setError(null);
        }catch(err){
            setIsloading(false); 
            setError(err); 
        }
         
    }

    useEffect(()=>{
        fetchData(URL);
    }, []);

    const handleRemoveCountry=(nname)=>{
      const fiilter= filterCountry.filter((country)=> country.name.common!==nname)
      setFiltercountry(fiilter);
    }
    const handleSearch=(searchValue)=>{
      const value = searchValue.toLowerCase();
      const newCountries= Countries.filter((Country)=>{
        const countryName= Country.name.common.toLowerCase();
        return countryName.startsWith(value);
      })
      setFiltercountry(newCountries);
    }

  return (
    <>
      <h1>Country App</h1>
      < Search onSearch={handleSearch}/>
      {IsLoading && <h2>Loading: </h2>}
      {error && <h2>{error}</h2>}
      {Countries && <Countrys Countryis={filterCountry} onRemoveCountry={handleRemoveCountry} />}
      
    </>
  )
}

export default IndexCountryApp;
