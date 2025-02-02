import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter as Router } from 'react-router-dom';
import Header from "./components/layout/Header.tsx";
import Footer from "./components/layout/Footer.tsx";
import Background from "./components/layout/Background.tsx";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Router>
            <Header />
            <Background />
            <App />
            <Footer />
        </Router>
    </React.StrictMode>
);