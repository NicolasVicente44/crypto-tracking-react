import React from 'react'
import CoinList from '../Components/CoinList'


const Home = ({coins}) => {
  return (
    <div>
        <CoinList coins={coins}/>
    </div>
  )
}

export default Home