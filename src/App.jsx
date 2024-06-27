import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Products from './components/Products';
import { themeContext } from './contexts/theme';
import { counterContext } from './contexts/counter';
import { Outlet } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProductCard from './components/Productcard';

function App() {
    const [Theme, setTheme] = useState("Light");
    const [countValue, setCountValue] = useState(0);

    useEffect(() => {
        document.body.className = Theme;
    }, [Theme]);

    const toggleTheme = () => {
        setTheme(Theme === "Light" ? "Dark" : "Light");
        
    };

    return (
        <>
            <themeContext.Provider value={{ Theme, toggleTheme }}>
                <counterContext.Provider value={{ countValue, setCountValue }}>
                    <Header />
                    <Outlet/>
                    <ToastContainer/>
                </counterContext.Provider>
            </themeContext.Provider>
        </>
    );
}

export default App;
