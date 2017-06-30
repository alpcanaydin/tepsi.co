import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './shared/Header';
import Footer from './shared/Footer';
import Content from './shared/Content';

import Home from '../routes/Home';
import Start from '../routes/Start';

import './App.css';

const App = () => (
  <div className="App">
    <Header />
    <Content>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/basla" component={Start} />
      </Switch>
    </Content>
    <Footer />
  </div>
);

export default App;
