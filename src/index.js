import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { TrackProvider } from './providers/TrackProvider';
import "./style/common.css"


ReactDOM.render(
  <React.StrictMode>
    <TrackProvider>
      <App />
    </TrackProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


