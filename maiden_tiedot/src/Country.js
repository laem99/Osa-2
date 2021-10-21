const Country = ({ country }) => {
    return (
        <div>
            {/* maan yleistiedot */}
            <h1>{country.name.common}</h1>
            {country.capital.map(capital => <p key={capital}>Capital: {capital}</p>)}
            <p>Population: {country.population}</p>
            <h2>Languages</h2>
            <ul>
                {Object.values(country.languages).map(language => <li key={language}>{language}</li>)}
            </ul>
            <img alt={country.name.common} id={country.name.common} src={country.flags.png} />
        </div>
    )
}

export default Country;