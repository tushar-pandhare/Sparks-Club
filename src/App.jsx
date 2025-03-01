import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from "./components/Navbar";
import Home from './components/Home';
import './App.css'

function App() {
  return (
    <div>
      <Navbar />
      <main className="bg-gray-900 min-h-screen"></main>
      <Home />
    </div>

  );
}

export default App
