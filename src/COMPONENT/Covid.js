import { useEffect , useState } from "react"
import React  from 'react'
import './Style.css'
const Covid = () =>  {
        const [data, setData] = useState([]);
        const getCovidData = async () =>{
            try{
            const res = await fetch ('https://data.covid19india.org/data.json');
            const newData = await res.json();
            console.log(newData.statewise[0]);
            setData(newData.statewise[0]);
        } 

        catch(err){
            console.log(err);

        }
    }
    useEffect (() => {
        getCovidData()
    } ,[]);
    return (
      <div >
      <h2>&#128308;Live</h2> 
      <h1>Covid 19 Corona Virus Tracker</h1>
      <div className="card-container">
        <div className="card">
            <h2>India</h2>
            <p>Our Country</p>
        </div>
        <div className="card" id="one">
            <h2>{data.recovered}</h2>
            <p>Total Recovered</p>
        </div>
        <div className="card" id="two">
            <h2>{data.confirmed}</h2>
            <p>Total Confirmed</p>
        </div>
        <div className="card" id="three">
            <h2>{data.deaths}</h2>
            <p>Total Deaths</p>
        </div>
        <div className="card" id="four">
            <h2>{data.active}</h2>
            <p>Total Active</p>
        </div>
        <div className="card" id="five">
            <h2>{data.lastupdatedtime}</h2>
            <p>Last Update</p>
        </div>
    </div>
    </div>
      
    
  )
}

export default Covid;


