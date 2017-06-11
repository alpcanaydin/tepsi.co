import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import Content from './Content';

import Home from '../routes/Home';
import Start from '../routes/Start';

const App = () => (
  <div>
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
