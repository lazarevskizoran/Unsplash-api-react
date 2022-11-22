import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID t0XBlLM27AobJSb8xgLVx1_cPvyHIqmWwDyuAIQ9_dQ',
  },
});
