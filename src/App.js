import cities from 'cities-list'
import { useState } from 'react'

const citiesArray = Object.keys(cities)

const App = () => {
  const [filteredCities, setFilteredCities] = useState([])

  let filterTimeout
  const doCityFilter = query => {
    clearTimeout(filterTimeout)
    if (!query) return setFilteredCities([])

    filterTimeout = setTimeout(() => {
      console.log('====>', query)
      setFilteredCities(citiesArray.filter(
        city => city.toLowerCase().includes(query.toLowerCase())
      ))
    }, 500)

    return filterTimeout
  }

  return (
    <div className="container">
      <h1 className="mt-5">Find your favourite cities</h1>

      <form className="mt-3 mb-3">
        <input
          type="text"
          className="px-2"
          placeholder="search here..."
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
