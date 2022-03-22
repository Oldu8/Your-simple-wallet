async function getListOfCoins(page = 1) {
  let response = await fetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${page}`
  );
  const data = await response.json();
  return data;
}

export default getListOfCoins;
