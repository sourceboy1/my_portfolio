import React from 'react';
import Navbar from './components/Navbar';  // Ensure you have this component
import Home from './components/Home';  // Import the Home component
import './App.css';  // Add your custom styles

function App() {
    return (
        <>
            <Navbar />
            <Home />  {/* Displaying the Home component */}
        </>
    );
}

export default App;
