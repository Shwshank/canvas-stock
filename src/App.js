/*eslint-disable*/
import React, { Component } from "react";
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

class App extends Component {
  constructor(props) {
    super(props);
    this.setMinimum = this.setMinimum.bind(this);
  }

  setMinimum() {
    this.stockChart.navigator.slider.set("minimum", new Date("2018-06-01"));
  }

  render() {
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
      <CanvasJSStockChart
        options={options}
        onRef={ref => this.stockChart = ref}
      />
      <button onClick={this.setMinimum}>
        Set Slider Minimum
      </button>
      <div>
        <h4 style = {{textAlign: "center"}}>Checkout <a href="https://canvasjs.com/javascript-stockcharts/">CanvasJS StockChart Gallery</a> for more examples</h4>
      </div>
    </div>
  );
}

}


export default App;
