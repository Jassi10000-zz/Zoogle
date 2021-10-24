import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Routes from './components/Routes';
import Footer from './components/Footer';

function App() {

  const [darktheme, setDarkTheme] = useState(false);
  return (
    <div className={darktheme ? 'dark' : ''}>
      <div className="bg-red-100 dark:bg-black-400 dark:text-red-100 min-h-screen">
        <Navbar />
        <Routes />
        <Footer />
      </div>
    </div>
  );
}

export default App;
