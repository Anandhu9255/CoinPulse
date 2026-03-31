import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import TopCoinsList from "./components/TopCoinsList";
import SearchResult from "./components/SearchResult";

function App() {
  const [coins, setCoins] = useState([]);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

useEffect(() => {
  async function fetchCoins() {
    setLoading(true);
    try {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1",
      );
      const data = await response.json();
      setCoins(data);
    } catch (err) {
      alert("Failed to fetch coins");
    }
    setLoading(false);
  }
  fetchCoins();
}, []);


async function handleSearch(coinName) {
  if(!coinName.trim()) return
  setLoading(true);
  try {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${coinName}`,
    );
    const data = await response.json();
    if(!data[0]) {
      alert("Coin not found");
      setLoading(false);
      return;
    }
    setResult(data[0]);
  } catch (err) {
    alert("Coin Not Found");
  }
  setLoading(false);
}

return (
  <>
    <div className="card">
  <div className="card2">
    <SearchBar onSearch = {handleSearch}/>
    <TopCoinsList coins = {coins}/>
    <SearchResult result = {result}/>
  </div>
</div>
  </>
);
}

export default App;
