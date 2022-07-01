import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MoralisProvider } from "react-moralis";



ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider appId="L0XnKqzWZdN6DDEJUo4DhBkvhso4hWA1VCmknU5O" serverUrl="https://4bxia2ccvmp3.usemoralis.com:2053/server">
          <App />
    </MoralisProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
