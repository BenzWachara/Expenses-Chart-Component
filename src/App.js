import './App.css';
import Logo from './images/logo.svg'
import dataCharts from './data.json'
import React from 'react'

function App() {

  const newData = dataCharts.map((newDatas)=>newDatas.amount)
  const dataDay = dataCharts.map((newDatas)=>newDatas.day)
  const maxAmount = Math.max(...newData)
  const lenghtData = newData.length;
  

const graphData = [];
for (var i = 0; i < lenghtData; i++) {
  if(newData[i]===maxAmount){
    graphData.push(
      <div className="class-chart" id={i} key={i}>
      <div className="graph max-amount" style={{height:`${newData[i]}%`}}><p className="tooltip">${newData[i]}</p></div>
      <p className="text-day">{dataDay[i]}</p>
    </div>
      );
  }
  else{
    graphData.push(
      <div className="class-chart" id={i} key={i}>
      <div className="graph" style={{height:`${newData[i]}%`}}><p className="tooltip">${newData[i]}</p></div>
      <p className="text-day">{dataDay[i]}</p>
    </div>
      );
  }
}
  
  return (
    <div className="App">
      <div className="head-expenses">
        <div className="head-text">
          <p>My balance</p>
          <h2>$921.48</h2>
        </div>
        <div className="head-logo">
          <img src={Logo} alt="logo expenses"/>
        </div>
      </div>

      <div className="body-expenses">
        <h2>Spending - Last 7 days</h2>
        <div className="day-chart">
        {graphData}
        </div>
        
        <div className="total-month">
          <div className="this-month">
            <p>Total this month</p>
            <h2>$478.33</h2>
          </div>
          <div className="last-month">
            <h2>+2.4%</h2>
            <p>from last month</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;