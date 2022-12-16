import React, { Component } from 'react';

import Header from '../components/Header';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    )
  }
}

export default App;
