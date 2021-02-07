import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { StrictMode } from 'react';
import { StoreProvider } from './store/Store';
import "./index.css";
import { RouteComponentProps, Router } from '@reach/router';
import HomePage from './components/HomPage/HomePage';
import Favourites from './components/FavouritesPage/Favourites';

const RouterPage = (props: { pageComponent: JSX.Element } & RouteComponentProps) => props.pageComponent

ReactDOM.render(
  <StrictMode>
    <StoreProvider>
      <Router>
        <App path='/'>
          <RouterPage pageComponent={<HomePage />} path='/' />
          <RouterPage pageComponent={<Favourites />} path='/favourites' />
        </App>
      </Router>
    </StoreProvider>
  </StrictMode>,
  document.getElementById('root')
);