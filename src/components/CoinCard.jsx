function CoinCard(props) {
  return (
    <div className="coin-row">
        <p>{props.coin}</p>
        <p>Price: {props.price}</p>
        <p>Market Cap: {props.marketCap}</p>
      </div>
  )
}

export default CoinCard;