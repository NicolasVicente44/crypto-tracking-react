import React from 'react'
import CoinList from '../Components/CoinList'
import Trending from '../Components/Trending'


const Home = ({coins}) => {
  return (
    <div>
        <CoinList coins={coins}/>
        <Trending/>
    </div>
  )
}

export default Home