import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Member from './components/member/member';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App title="disable" disabled={true}/>
    <Member name="Member" enthusiasmLevel={10}/>
  </React.StrictMode>
);

reportWebVitals();
