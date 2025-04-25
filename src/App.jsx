import React from 'react'
import CrptoTable from './CrptoTable'
import { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { updateasset } from './store/reducer'

const App = () => {
  let data=useSelector(state=>state.crypto)
  // console.log(data)
  let dispatch=useDispatch()

  useEffect(()=>{

      const interval= setInterval(()=>{
        const index=Math.floor(Math.random()*data.length)
        // console.log(index)
        const asset = data[index];
        
        const priceChange = (Math.random() - 0.5) * 1000;
      const updatedAsset = {
        ...asset,
        price: asset.price + priceChange,
        change1h: (Math.random() * 10 - 5).toFixed(2),
        change24h: (Math.random() * 10 - 5).toFixed(2),
        volume24h: asset.volume24h + Math.floor((Math.random() - 0.5) * 1000000)
      };
      dispatch(updateasset(updatedAsset))
      },1500)
      return () => clearInterval(interval);
  },[dispatch,data])
  return (
   
    <div>
      <CrptoTable data={data}/>
    </div>
  
  )
}

export default App
