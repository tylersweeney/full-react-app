import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import NavBar from './components/layout/Navbar'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
