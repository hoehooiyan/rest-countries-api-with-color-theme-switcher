import axios from 'axios'

const url = 'https://restcountries.eu/rest/v2'
const config = {
  baseURL: url,
  method: 'get',
}

export default axios.create(config)
