import React, { useState, createContext } from 'react';
import Header from './Header';
import Speakers from './Speakers';

export const ThemeContext = createContext();

const App = () => {
    const [theme, setTheme] = useState('light');

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <div className={theme === 'light' ? 'container-fluid light' : 'container-fluid dark'}>
                <Header />
                <Speakers />
            </div>
        </ThemeContext.Provider>
    );
}

export default App;
