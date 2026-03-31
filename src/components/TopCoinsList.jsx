import CoinCard from "./CoinCard";

function TopCoinsList(props) {
  return (
    <>
      <div  className="coins-list">
        <h1 className="top-coin-head">Top 5 Coins</h1>
        {props.coins.map((coin) => (
          <CoinCard
            key={coin.id}
            coin={coin.id}
            price={coin.current_price}
            marketCap={coin.market_cap}
          />
        ))}
      </div>
    </>
  );
}

export default TopCoinsList;
