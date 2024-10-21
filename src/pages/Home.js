import React from 'react'
import Card from '../components/Card'
import Slider from '../components/Slider'
import DataFetch from '../hooks/DataFetch'
import Effect from '../hooks/Effect'
import IncrementDecrement from '../hooks/IncrementDecrement'

const Home = () => {
  return (
<>
<Slider/>
<Card/>
<IncrementDecrement/>
<Effect/>
<DataFetch/>
</>
    )
}

export default Home