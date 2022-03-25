async function getCoins(id = "bitcoin") {
  let response = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);
  return response;
}

export default getCoins;
