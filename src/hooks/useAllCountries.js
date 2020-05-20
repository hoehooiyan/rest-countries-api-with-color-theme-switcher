import { useState, useEffect } from 'react'
import api from '../api'

const useAllCountries = () => {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    api('./all')
      .then((response) => {
        const { data } = response
        setCountries(data)
      })
      .catch((error) => console.error(error))
  }, [])

  return countries
}

export default useAllCountries
