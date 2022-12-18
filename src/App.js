import './App.css';
import React from 'react'
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Feature from './components/Feature';

function App() {
  return (
    <div className="App text-white overflow-hidden">
        <Header/>
        <Hero/>
        <Experience/>
        <Feature/>
    </div>
  )
}
export default App;
