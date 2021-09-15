import cities from 'cities-list'
import { useState } from 'react'
import { debounce } from 'lodash'

const citiesArray = Object.keys(cities)

const App = () => {
  const [filteredCities, setFilteredCities] = useState([])

  // const doCityFilter = debounce(query => {
  //   console.log('====>', 'hey')
  //   if (query) {
  //     setFilteredCities(citiesArray.filter(
  //       city => city.toLowerCase().includes(query.toLowerCase())
  //     ))
  //   } else {
  //     setFilteredCities([])
  //   }
  // })

  let filterTimeout
  const doCityFilter = query => {
    if (query) {
      // clearTimeout(filterTimeout)

      filterTimeout = setTimeout(() => {
        console.log('====>', 'hey')
        setFilteredCities(citiesArray.filter(
          city => city.toLowerCase().includes(query.toLowerCase())
        ))
      }, 500)

    } else {
      setFilteredCities([])
    }
  }

  return (
    <div className="container">
      <h1>Find your favourite cities</h1>

      <form className="mt-3 mb-5">
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
