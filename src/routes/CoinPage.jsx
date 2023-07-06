import React, { useEffect, useState } from 'react'
import axios from 'axios'

const CoinPage = () => {
const [coin, setCoin] = useState({})

const url =
`https://api.coingecko.com/api/v3/coins/${params.coinId}?localization=false&sparkline=true`;

useEffect(() => {
  axios.get(url).then((response) => {
    setCoin(response.data)
   // console.log(response.data)
  })
}, [url])

  return (
    <div>
      <div>
        <img src={coin.image?.large} alt="/" />
        <div>
          <p>{coin?.name} price</p>
          <p>({coin.symbol?.toUpperCase()}/ USD)</p>
        </div>
      </div>
    </div>
  )
}

export default CoinPage