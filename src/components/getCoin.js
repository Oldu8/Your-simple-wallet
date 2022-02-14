async function getCoins(id = "bitcoin") {
  let response = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);
  const data = await response.json();
  return data;
}

export default getCoins;
