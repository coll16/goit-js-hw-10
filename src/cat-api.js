
axios.defaults.headers.common['x-api-key'] =
  'live_rAxT4m1NK5M5hJf0tGR6EG4OAg4tkJezRNXbqesyQ66dicdbaRn9QfE2BfftRI0N';



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