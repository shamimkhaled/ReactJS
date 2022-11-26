import React, { useEffect, useState } from 'react'
import Coin from './Product'
import axios from 'axios'
import Loader from './Loader'

const Home = () => {
  //const arr = [1, 2, 3, 4]
  const [coins, setCoins] = useState([])
  const [loading, setLoading] = useState([])

  //const [temp, setTemp] = useState(0)

  /*useEffect(()=> {
        console.log("Mounted");
        return () => {
          console.log("Unmounting")
        }
  }, []);*/

  useEffect(() => {
    const fetchAllCoins = async() => {
       try {
        const {data} = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&per_page=100");
        console.log(data);
        setCoins(data);
        setLoading(false);
       } catch (error) {
        //setLoading(false);
        alert('Not Working')

       }
    }
  
    fetchAllCoins();
    
  }, [])
  //<button onClick={()=> setTemp(temp+1)} >Press</button>

  return (
    <div className='home'>
      { loading? (<Loader />) :
        (
            
          coins.map((i) => (
            <Coin name={i.name} symbol={i.symbol} key={i.id} imgSrc={i.image} price={i.current_price
            } />

            
         ))
        )
      
      }
      

    </div>
  )
}

export default Home