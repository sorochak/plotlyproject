import React from 'react';
import Plot from 'react-plotly.js';
import './App.css';

function App() {
  return (
    <div>
    <div className="App">
      <header className="App-header">
        <p>
          Learn Plotly
        </p>
      </header>
    </div>
    <div>
    <Plot
        data={[
          {
            x: [1, 2, 3],
            y: [2, 6, 3],
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'red'},
          },
          {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
        ]}
        layout={{width: 320, height: 240, title: 'A Fancy Plot'}}
      />
    </div>
    </div>
  );
}

export default App;
