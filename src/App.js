import React from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import Home from "./components/Pages";
import { Footer } from "./components/Footer";
import { ScrollTop } from "./components/ScrollTop";
import { handleEffect } from "./components/Helper/handleEffect";

export function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
      <ScrollTop />
      <Footer />
    </div>
  );
}
document.addEventListener('scroll', handleEffect);
