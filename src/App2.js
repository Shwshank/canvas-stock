/*eslint-disable*/
import React, { useRef } from "react";
import { render } from "react-dom";
import CanvasJSReact from "./lib/canvasjs.stock.react";
import bitcoinData from "./lib/bitcoin-data.json";

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSStockChart = CanvasJSReact.CanvasJSStockChart;
var stockData = [];
for (var i = 0; i < bitcoinData.length; i++) {
stockData.push({
  x: new Date(bitcoinData[i].date),
  y: [
    Number(bitcoinData[i].open),
    Number(bitcoinData[i].high),
    Number(bitcoinData[i].low),
    Number(bitcoinData[i].close)
  ]
});
}

function App2 () {
  console.log(123);
  const stockChartRef = useRef(null);

  const setMinimum=(e)=>{
      e.preventDefault()
    // this.stockChart.navigator.slider.set("minimum", new Date("2018-06-01"));
    console.log(stockChartRef);
  }

  const renderStockChart=()=>{
    const options = {
      animationEnabled: true,
      exportEnabled: true,
      theme: "light2",
      title: {
          text: "Bitcoin Price"
      },
      charts: [{
          data: [{
            type: "candlestick",
            dataPoints: stockData
          }]
      }],
      navigator: {
        slider: {
          minimum: new Date("2018-05-01"),
          maximum: new Date("2018-09-01")
        }
      }
    };


  return (
    <div>
      <CanvasJSStockChart ref={stockChartRef} options={options} />
      <button onClick={setMinimum}>
        Set Slider Minimum
      </button>
    </div>
  );
}

return (
  <div className="de-chart-container multichart">{renderStockChart()}</div>
);

}


export default App2;
