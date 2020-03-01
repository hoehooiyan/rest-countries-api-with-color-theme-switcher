import axios from 'axios'

const url = 'https://restcountries.eu/'
const config = {
  baseURL: url,
  method: 'get'
}

export default axios.create(config)
