import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { PCA } from 'ml-pca'
import Chart from "react-apexcharts";

import Plot from 'react-plotly.js';


class App extends Component {

  constructor(props) {
    super(props);

    var data = [
      [12.2435, 10.6488, 176.9],
      [8.2265, 10.0584, 173.9],
      [8.1981, 10.6596, 174.6],
      [8.1947, 10.9476, 178.9],
      [10.2546, 10.2564, 179.1],
      [12.257, 10.2852, 181.3],
      [12.2484, 10.3248, 148.2],
      [12.2556, 11.034, 183.3],
      [12.2571, 11.268, 185.1],
      [10.2059, 8.5572, 174.7],
      [8.1835, 11.3436, 179.7],
      [8.1651, 11.4192, 181.2],
      [5.1445, 11.3256, 178.2],
      [12.229, 11.1852, 184],
      [8.0723, 11.0448, 183.3],
      [21.6939, 9.9504, 182.3],
      [8.1795, 11.2356, 182.1],
      [12.6393, 10.8324, 185.6],
      [8.1848, 11.448, 184.2],
      [12.1808, 10.9368, 181.3],
      [12.2217, 10.8036, 183.2],
      [5.075, 10.9404, 178.8],
      [5.2604, 10.6524, 175.6],
      [7.682, 9.5544, 185.9],
      [5.4513, 11.1312, 168.3],
      [12.2101, 10.7748, 184.4],
      [8.1974, 11.0232, 178],
      [5.5602, 10.0476, 169],
      [16.2291, 10.2672, 186.3],
      [7.7902, 10.7964, 176.5],
      [12.1867, 10.6884, 184.2],
      [8.1251, 10.7496, 183.8],
      [8.0791, 9.684, 183],
      [7.2365, 10.9692, 185.1],
      [12.2039, 10.602, 187],
      [8.1177, 11.3652, 185.8],
      [6.1704, 11.6928, 176.1],
      [6.1361, 11.9844, 179.3],
      [6.625, 11.61, 177.9],
      [5.4154, 10.8, 173.1],
      [8.0757, 10.2852, 183.6],
      [5.626, 11.232, 173.5],
      [5.003, 11.9268, 177.3],
      [10.0103, 11.7756, 178.8],
      [5.1688, 10.656, 173.4],
      [8.4559, 11.1636, 178.7],
      [5.2923, 10.8432, 170.4],
      [5.3711, 10.0152, 168.2],
      [5.0731, 11.0628, 175],
      [8.166, 10.7892, 175.6],
      [7.928, 10.962, 181.2],
      [8.1483, 11.1024, 183.2],
      [7.3167, 10.9332, 184.8],
      [9.6831, 7.1532, 175.4],
      [20.1749, 10.314, 184.4],
      [12.2112, 10.6992, 157.7],
      [16.2745, 10.6344, 185.1],
      [16.2298, 10.4508, 185.5],
      [8.1762, 10.6848, 183.1],
      [12.8049, 10.5984, 188.1],
      [8.752, 10.692, 187.4],
      [9.934, 10.7892, 184.1],
      [13.2349, 10.9116, 182],
      [10.0068, 10.8108, 182.4],
      [8.7611, 11.0808, 182],
      [12.9136, 11.1348, 183.4],
      [9.0046, 10.8288, 182.7],
      [8.6308, 10.5732, 184.7],
      [12.2747, 10.9476, 181.6],
      [8.1951, 10.8468, 184.3],
      [12.2014, 10.584, 185.3],
      [8.1701, 10.4076, 184.9],
      [8.1789, 10.9296, 182.4],
      [12.2111, 10.6164, 184.2],
      [12.2432, 10.6776, 179.8],
      [10.0406, 10.35, 178.5],
      [10.3197, 10.0836, 171.8],
      [10.019, 10.8324, 183],
      [10.3256, 10.5732, 185.6],
      [10.9323, 10.8828, 183.9],
      [9.7218, 10.1088, 189.8],
      [5.122, 11.1492, 180.6],
      [10.3033, 10.134, 173.5],
      [20.6483, 9.7524, 177.4],
      [10.2883, 10.6056, 182],
      [16.3214, 9.7272, 181.9],
      [10.3444, 10.2564, 184.9],
      [16.1414, 9.8712, 186.4],
      [10.3101, 10.4616, 186.5],
      [10.2984, 10.6488, 173.8],
      [11.4614, 10.5732, 182.1]


    ];

    var x = []
    var y = []
    var z = []

    data.forEach(function (workout) {
      x.push(workout[0])
      y.push(workout[1])
      z.push(workout[2])
    })

    console.log(data)

    const pca = new PCA(data, { scale: true, ignoreZeroVariance: true });

    var dataset = pca.predict(data, { nComponents: 3 }).data


    console.log(dataset);

    this.state = {
      series: [{
        name: "SAMPLE A",
        data: dataset
      }],
      options: {
        xaxis: {
          tickAmount: 10,
          labels: {
            formatter: function (val) {
              return parseFloat(val).toFixed(1)
            }
          }
        },
        yaxis: {
          tickAmount: 7
        },
        tooltip: {
          x: {
            show: true,
            formatter: function (a, b) {
              var obj = data[b.dataPointIndex]
              return "Dis: " + obj[0] + ", Pac: " + obj[1] + ", HR: " + obj[2]
            },
          },
        }
      },
      x: x,
      y: y,
      z: z
    };

  };


  render() {



    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <Plot
          data={[
            {
              x: this.state.x,
              y: this.state.y,
              z: this.state.z,
              type: 'scatter3d',
              mode: 'markers'
            }
          ]}
          layout={
            {
              width: 1000,
              height: 1000,
              title: 'A Fancy Plot',
              scene: {
                xaxis: { title: 'Distance' },
                yaxis: { title: 'Pace' },
                zaxis: { title: 'Heartrate' },
              }
            }
          }
        />
      </div>
    );
  }

}

export default App;
