import React, { useState } from 'react'
// import { data } from './api/data'
import './index.css'

const CrptoTable = ({data}) => {
  let [val,setVal]=useState("")
  console.log(val)
  let sorted_data;
  if(val=="asc")
  {
    sorted_data=[...data].sort((a,b)=>a.price - b.price)
  }
  else if(val=="dsc")
  {
    sorted_data=[...data].sort((a,b)=>b.price - a.price)
  }
  else{
    sorted_data=data
  }
    function getColor(value){
        console.log(value)
        if(value<0)
        {
            return "text-danger"
        }
        else{
            return "text-success"
        }
    }
  return (
    <div className="table-responsive">
    <h1 className='fw-bold text-center text-info mb-3'>Real-Time Crypto Price Tracker</h1>
  <table className="table table-striped table-hover align-middle text-nowrap">
    <thead className="table-dark">
      <tr>
        <th>#</th>
        <th>Logo</th>
        <th>Name</th>
        <th>Symbol</th>
        <th>Price</th>
        <th>1h %</th>
        <th>24h %</th>
        <th>7d %</th>
        <th>Market Cap <i class="bi bi-info-circle-fill"></i></th>
        <th>24h Volume <i class="bi bi-info-circle-fill"></i></th>
        <th>Circulating Supply <i class="bi bi-info-circle-fill"></i></th>
        {/* <th>Max Supply</th> */}
        <th>7D Chart</th>
      </tr>
    </thead>
    <tbody>
      {sorted_data.map((asset, index) => (
        <tr key={asset.id} >
          <td style={{textAlign:"left"}}>{index + 1}</td>
          <td style={{textAlign:"left"}}>
            <img src={asset.logo} alt={asset.symbol} width={30} height={30} className='rounded-circle' />
          </td>
          <td style={{textAlign:"left"}}>{asset.name}</td>
          <td style={{textAlign:"left"}}>{asset.symbol}</td>
          <td>${asset.price.toFixed(2)}</td>
          <td className={getColor(asset.change1h)}>{asset.change1h>0 ?<i class="bi bi-caret-up-fill"></i>:<i class="bi bi-caret-down-fill"></i>} {asset.change1h}%</td>
          <td className={getColor(asset.change24h)}>{asset.change24h>0 ?<i class="bi bi-caret-up-fill"></i>:<i class="bi bi-caret-down-fill"></i>}{asset.change24h}%</td>
          <td className={getColor(asset.change7d)}>{asset.change7d>0 ?<i class="bi bi-caret-up-fill"></i>:<i class="bi bi-caret-down-fill"></i>}{asset.change7d}%</td>
          <td >${asset.marketCap.toLocaleString()} </td>
          <td>${asset.volume24h.toLocaleString()} <p className='text-secondary' style={{fontSize:"12px"}}>{(asset.volume24h/100000).toFixed(2)}M {asset.symbol}</p></td>
          <td>{asset.supply.toLocaleString()} {asset.symbol}</td>
          {/* <td>{asset.maxSupply ? asset.maxSupply.toLocaleString() : '∞'}</td> */}
          <td>
            <img src={asset.chart} alt={`${asset.symbol} chart`} width={100}  />
          </td>
        </tr>
      ))}
    </tbody>
  </table>
  <div className='text-center'>
    <button className='btn btn-primary' onClick={()=>setVal("asc")}>Ascending</button>
    <button className='btn btn-warning mx-2' onClick={()=>setVal("")}>Reset</button>
    <button className='btn btn-secondary' onClick={()=>setVal("dsc")}>Descending</button>
  </div>
</div>
  )
}

export default CrptoTable
