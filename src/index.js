import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'
import App from './App';
import './style/index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    {/* App组件就是我们项目里面的外壳 */}
    <App />
    </BrowserRouter>
  </React.StrictMode>
);
