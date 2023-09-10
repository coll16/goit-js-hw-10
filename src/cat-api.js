import axios from 'axios';
axios.defaults.headers.common['x-api-key'] =
  'live_x16uO5Gc5ISgkkThOEsPlhClfVFPhrITxjMEACxKordQyQAOOlToqjWuTZx1fN6s';
axios.defaults.baseURL = 'https://api.thecatapi.com/v1/';


export function fetchBreeds(endPoint) {
  return axios.get(endPoint).then(data => {
    return data.data;
  });
}

export function fetchCatByBreed(endPoint, breedId) {
  const catByBreed = endPoint + '?breed_ids=' + breedId;
  return axios.get(catByBreed).then(resp => {
    return resp.data;
  });
}