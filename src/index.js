
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';  
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals'; 
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Tangerine:300,400,500,700', 'Open Sans'] // Khai báo font từ Google Fonts
  },
  active: function() {
    // Hành động khi tất cả các font đã được nạp thành công
  },
  inactive: function() {
    // Hành động nếu không có font nào được nạp thành công
  }
}); 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
