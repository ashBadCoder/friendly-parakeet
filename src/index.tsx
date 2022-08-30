import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './root/App';
import reportWebVitals from './reportWebVitals';
import 'devextreme/dist/css/dx.light.css';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();
