import React from 'react'
import {  } from 'react-router-dom'

const Coin = ({name, symbol, imgSrc, price}) => {
    //const params = useParams()

  return (
    <div className='coin'>
      <img src={imgSrc} alt={name}/>
        <h3> {symbol} </h3>
        <p>{name}</p>
        <p>${price}</p>
    </div>
  )
}

export default Coin