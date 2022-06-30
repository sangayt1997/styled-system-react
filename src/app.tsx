import React from 'react';
import './app.scss';
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/home";
import About from "./components/about/about";

function App() {
    return (
        <div className="app">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="about" element={<About/>}/>
            </Routes>
        </div>
    );
}

export default App;
