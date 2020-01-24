import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID c4c9558912005ea5c499e4977336349152a6a20edbbbf6fd6c6418c22a1fd76c'
      
  }
});