import Find from './Find';
import Countries from './Countries';
import { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {

  const [countries, setCountries] = useState([]);
  const [find, setFind] = useState('');

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data);
      });
  }, []);

  const handleFindChange = (event) => {
    setFind(event.target.value);
  }

  const CountriesToShow = find.length === 0
    ? countries : countries.filter(country => country.name.common.includes(find));

  return (
    <div className="App">
      <Find find={find} findChange={handleFindChange} />
      <div>
        <Countries countries={CountriesToShow} />
      </div>
    </div>
  );
}

export default App;
