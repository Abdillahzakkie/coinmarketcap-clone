import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { CoinGeckoProvider } from "./components/Context";
import {BrowserRouter as Router} from "react-router-dom";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <CoinGeckoProvider>
        <App />
      </CoinGeckoProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
