import React from 'react';
import './app.scss';
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/home";
import About from "./components/about/about";
import { ThemeProvider } from "styled-components";
import theme from "./theme/theme";

function App() {
    return (
        <div className="app">
            <ThemeProvider theme={theme}>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="about" element={<About/>}/>
                </Routes>
            </ThemeProvider>
        </div>
    );
}

export default App;
