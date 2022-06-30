import React from 'react';
import './app.scss';
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/home";
import FontResponsive from "./components/about/font-responsive";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./theme/theme";

function App() {
    return (
        <div className="app">
            <ThemeProvider theme={defaultTheme}>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="font-responsive" element={<FontResponsive/>}/>
                </Routes>
            </ThemeProvider>
        </div>
    );
}

export default App;
