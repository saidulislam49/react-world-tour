import { useState } from 'react';
import './Country.css';
const Country = ({country}) => {
    const [visited, setVisited] = useState(false);
    const handleVisited = () =>{
        setVisited(!visited);
    }
    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3 style={{ color: visited ? 'green' :'black' }}>Name : {country?.name?.common}</h3>
            <img src={country?.flags?.png} alt="" />
            <p>Population : {country.population }</p>
            <p>Area : {country.area }</p>
            <p>Code : {country.cca3 }</p>
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Visit now'}</button>
            <p>{visited && 'I have visited this country.'}</p>
        </div>
    );
};

export default Country; 