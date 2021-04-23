const shibaBaseURL = 'https://pure-hollows-05817.herokuapp.com/http://shibe.online/api/shibes';
const catBaseUrl = 'https://pure-hollows-05817.herokuapp.com/http://shibe.online/api/cats';

export const getGameImages = (number) => {
  const numberOfCats = number * 2;
  const apiData = [fetch(`${shibaBaseURL}?count=${number}&urls=true&httpsUrls=true`), fetch(`${catBaseUrl}?count=${numberOfCats}&urls=true&httpsUrls=true`)];

  return Promise.all(apiData)
  .then(responses => Promise.all(responses.map(response => response.json())))
  }
