import React from 'react';
import BannerImage from './components/BannerImage';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BannerImage/>
        <div>
          <h1>Welcome to My Photojournal</h1>
          <h3>Christian Marquay</h3>
        </div>
      </header>
    </div>
  );
}

export default App;
