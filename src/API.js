export const catalogURl = 'https://flowers-api-fc5b2.firebaseio.com/catalog/-M6Q-5_FQYCJ6JaUjATi.json';

export const fetcher = url =>
  fetch(url)
    .then(response => response.json())
    .then(data => ({ ...data, status: 1 }))
    .catch((error) => ({ error, status: 0 }));
