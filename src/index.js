import React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter,Routes,Route, } from "react-router-dom";
import App from './App';
import Ranks from './components/Ranks';
import About from './pages/about';


// ========================================
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement)
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} >
                <Route path="ranks" element={<Ranks />} />
                <Route path="about" element={<About />} />
            </Route>
        </Routes>
    </BrowserRouter>
    );

