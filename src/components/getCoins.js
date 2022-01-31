async function getCoins() {
  let response = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1"
  );
  const data = await response.json();
  return data;
}

export default getCoins;
