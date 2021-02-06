import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { StrictMode } from 'react';
import { StoreProvider } from './store/Store';
import "./index.css";

ReactDOM.render(
  <StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </StrictMode>,
  document.getElementById('root')
);