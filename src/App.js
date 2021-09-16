import cities from 'cities-list'
import { useState } from 'react'
import { DebounceInput } from 'react-debounce-input'

const citiesArray = Object.keys(cities)

const App = () => {
  const [filteredCities, setFilteredCities] = useState([])

  const doCityFilter = query => {
    if (!query) return setFilteredCities([])

    setFilteredCities(citiesArray.filter(
      city => city.toLowerCase().includes(query.toLowerCase())
    ))
  }

  return (
    <div className="container">
      <h1 className="mt-5">Find your favourite cities</h1>

      <form className="mt-3 mb-3">
        <DebounceInput
          className="px-2"
          placeholder="search here..."
          minLength={1}
          debounceTimeout={500}
          onChange={event => (doCityFilter(event.target.value))}
        />
      </form>

      <div>
        {filteredCities?.map((city, index) => (
          <p key={index}>{city}</p>
        ))}
      </div>
    </div>
  )
}

export default App
