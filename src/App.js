import React from 'react';
import './App.css';
import { Switch , Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header-component';
import SignINAndSignOut from './pages/sign-in-and-sign-out/sign-in-and-sign-out.component';

function App() {
  return (

    <div>
      <Header />
        <Switch>
          <Route exact  path='/' component = { HomePage   } />
          <Route  path='/shop' component = { ShopPage } />
          <Route  path='/signin' component = { SignINAndSignOut } />
        </Switch>
    </div>
  );
}

export default App;
