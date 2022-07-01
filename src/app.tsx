import React from 'react';
import './app.scss';
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/home";
import FontResponsive from "./components/font-responsive/font-responsive";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./theme/theme";
import Variant from "./components/variant/variant";
import Layout from "./components/layout/layout";

function App() {
    return (
        <div className="app">
            <ThemeProvider theme={defaultTheme}>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="font-responsive" element={<FontResponsive/>}/>
                    <Route path="variant" element={<Variant/>}/>
                    <Route path="layout" element={<Layout/>}/>
                </Routes>
            </ThemeProvider>
        </div>
    );
}

export default App;
