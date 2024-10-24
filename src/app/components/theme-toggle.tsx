"use client"
// components/ThemeToggle.js

import { useEffect, useState } from 'react';
import { BsMoonFill } from 'react-icons/bs';  
import { BsFillLightbulbFill } from 'react-icons/bs';

const ThemeToggle = () => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const currentTheme = localStorage.getItem('theme') || 'light';
        setTheme(currentTheme);
        document.documentElement.setAttribute('data-theme', currentTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    };

    return (
        <button onClick={toggleTheme} style={{ display: 'flex', alignItems: 'center', background:'gold', border:'100px' }}>
            {theme === 'light' ? <BsMoonFill size={40} color='black'/> : <BsFillLightbulbFill size={40} color='white' />} {/* Show moon icon for light, sun for dark */}
            <span style={{ marginLeft: '8px' }}>
                {theme === 'light' ? 'Dark' : 'Light'} 
            </span>
        </button>
    );
};

export default ThemeToggle;



