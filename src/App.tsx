import React from 'react';
import { Header } from './Components/Header/Header';
import About from './pages/about/about';
import './styles/tailwind.css';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
    </div>
  );
}

export default App;
