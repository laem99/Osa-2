import { useState } from "react";
import Country from "./Country";

const Countries = ({ countries }) => {

    const [showCountry, setShowCountry] = useState(false);
    const [countryInfo, setCountryInfo] = useState();

    const showCountryInfo = ({ country }) => {
        setShowCountry(true);
        setCountryInfo(country);
    }

    return (
        <div>
            {
                (countries.length > 10)
                    ? <p>Too many matches, specify another filter</p>
                    : (countries.length === 1) ? countries.map(country => <Country key={country.name.common} country={country} />)
                        : (countries.length <= 10 && countries.length !== 0)
                            ? countries.map(country => {
                                return <div key={country.name.common}>{country.name.common}<button onClick={() => showCountryInfo({ country })}>Show</button></div>
                            })
                            : null
            }
            { showCountry ? <Country country={countryInfo} /> : null}
        </div>
    )
}

export default Countries;