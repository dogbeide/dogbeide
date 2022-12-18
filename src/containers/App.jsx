import React, { Component } from 'react';

import Header from '../components/Header';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Social from '../components/Social';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Social />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    )
  }
}

export default App;
