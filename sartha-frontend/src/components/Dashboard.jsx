import React, { useEffect, useState } from "react";
import './dashboard.css'
import axios from "axios";

const data = [
    {
      Rank: "1",
      Name: "Selling with re entr	",
      CalmarRatio: "3.96",
      OverallProfit: "381845",
      AvgDailyProfit: "319.54",
      Win: "0.65",
      Price: "-",
      Action: "View"
  
  
    },
    {
      Rank: "2",
      Name: "strategy_name		",
      CalmarRatio: "3.62	",
      OverallProfit: "268872.5	",
      AvgDailyProfit: "216.31	",
      Win: "0.64	",
      Price: "500",
      Action: "Buy"
    },
    {
      Rank: "3",
      Name: "Based on premium and	",
      CalmarRatio: "3.42	",
      OverallProfit: "255425",
      AvgDailyProfit: "208.51	",
      Win: "0.64",
      Price: "-",
      Action: "View"
    },
    {
      Rank: "4",
      Name: "strategy_name		",
      CalmarRatio: "3.22",
      OverallProfit: "370845",
      AvgDailyProfit: "303.47",
      Win: "0.65",
      Price: "-",
      Action: "View"
    },
    {
      Rank: "5",
      Name: "strategy_name		",
      CalmarRatio: "3.22",
      OverallProfit: "370845",
      AvgDailyProfit: "303.47",
      Win: "0.65",
      Price: "-",
      Action: "View"
    },
    {
      Rank: "6",
      Name: "Based on premium wit	",
      CalmarRatio: "3.01",
      OverallProfit: "135980",
      AvgDailyProfit: "185.77",
      Win: "0.49	",
      Price: "-",
      Action: "View"
    },
    {
      Rank: "7",
      Name: "strategy_name		",
      CalmarRatio: "2.76	",
      OverallProfit: "267867.5	",
      AvgDailyProfit: "218.49	",
      Win: "0.6",
      Price: "-",
      Action: "View"
    },
    {
      Rank: "8",
      Name: "Wait and trade_Save		",
      CalmarRatio: "2.62",
      OverallProfit: "178252.5	",
      AvgDailyProfit: "161.9",
      Win: "0.63	",
      Price: "-",
      Action: "View"
    },
    {
      Rank: "9",
      Name: "iron condor		",
      CalmarRatio: "2.44	",
      OverallProfit: "176420",
      AvgDailyProfit: "137.51	",
      Win: "0.65",
      Price: "-",
      Action: "View"
    },
    {
      Rank: "10",
      Name: "strategy_name			",
      CalmarRatio: "2.04	",
      OverallProfit: "244555		",
      AvgDailyProfit: "198.66		",
      Win: "0.62",
      Price: "-",
      Action: "View"
    }
  
  ]


  export const Dashboard = () => {

  //all database data fetching start............
    const [dbData, setDbData] = useState([]); // all db user data is in dbData ..>>> 
    useEffect(()=>{
        const fetchData = async () =>{
            try {
                const response = await axios.get('http://localhost:5000/alldata');
                console.log(response.data);
                const allData = response.data;
                console.log(allData ,"all data....>>>>>")
                setDbData(allData)
            } catch (error) {
                console.error('There was an error!', error);
            }
        }
        fetchData();
    },[])
  //all database data fetching end............


    return ( 
      <div >
  
        <table >
  
  
          <thead >
            <tr >
              <th >Rank</th>
              <th >Name</th>
              <th >Clamer Ratio</th>
              <th >Overall Profit</th>
              <th >Avg. Daily Profit</th>
              <th >Win % (Day)</th>
              <th >Price (Rs)</th>
              <th >Action</th>
            </tr>
          </thead>
          <tbody >
            {data.map((item, ind) => {
              return (
                <tr key={ind} >
                  <td >{item.Rank}</td>
                  <td>{item.Name}</td>
                  <td >{item.CalmarRatio}</td>
                  <td >{item.OverallProfit}</td>
                  <td>{item.AvgDailyProfit}</td>
                  <td >{item.Win}</td>
                  <td >{item.Price}</td>
                  <td> <button className="btnn">{item.Action}</button></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default Dashboard;