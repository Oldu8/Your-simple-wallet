async function getCoins(id = "bitcoin") {
  try {
    let response = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);
    // const data = await response.json();
    return response;
  } catch (e) {
    console.log(e);
  }
}

export default getCoins;
