import CoinCard from "./CoinCard";

function SearchResult(props) {
  
  if(!props.result) return null
  return (
    <>
      {props.error ? (
        props.error
      ) : (
        <CoinCard
          coin={props.result.id}
          price={props.result.current_price}
          marketCap={props.result.market_cap}
        />
      )}
    </>
  );
}

export default SearchResult;
