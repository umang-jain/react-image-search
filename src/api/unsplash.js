import axios from 'axios';

export default axios.create({
  baseURL : 'https://api.unsplash.com',
  headers:{
    Authorization:'Client-ID 73b1b54bcf1091aedd28414be0d10c7a94b806aed6d864b78429453d9d451ee8'
  }
})
