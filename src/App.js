import cities from 'cities-list'
import { useState } from 'react'
import { debounce } from 'lodash'
import { DebounceInput } from 'react-debounce-input'

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
  // }, 500)


  // let filterTimeout
  // const doCityFilter = query => {
  //   if (query) {
  //     clearTimeout(filterTimeout)
  //
  //     filterTimeout = setTimeout(() => {
  //       setFilteredCities(citiesArray.filter(
  //         city => city.toLowerCase().includes(query.toLowerCase())
  //       ))
  //     }, 500)
  //
  //   } else {
  //     setFilteredCities([])
  //   }
  // }

  const doCityFilter = query => {
    console.log('====>', query)
    if (query) {
      setFilteredCities(citiesArray.filter(
        city => city.toLowerCase().includes(query.toLowerCase())
      ))
    } else {
      setFilteredCities([])
    }
  }

  return (
    <div className="container">
      <h1>Find your favourite cities</h1>

      <form className="mt-3 mb-5">
        <DebounceInput
          className="px-2"
          placeholder="search here..."
          minLength={1}
          debounceTimeout={500}
          onChange={event => (doCityFilter(event.target.value))}
        />

        {/*<input*/}
        {/*  type="text"*/}
        {/*  className="px-2"*/}
        {/*  placeholder="search here..."*/}
        {/*  onChange={event => (doCityFilter(event.target.value))}*/}
        {/*/>*/}
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
