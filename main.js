async function populate() {
  const requestURL = data.json;
  const request = new Request(requestURL);

  const response = await fetch(request);
  const superHeroes = await response.json();
  populateHeader(superHeroes);
  populateHeroes(superHeroes);
}
