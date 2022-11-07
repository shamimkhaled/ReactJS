import React from 'react'
import { useParams } from 'react-router-dom'

const Product = () => {
    const params = useParams()

  return (
    <div>
        <h1> #{params.id} </h1>
    </div>
  )
}

export default Product